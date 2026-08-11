import { useState, useRef, useCallback } from 'react';
import { ChatMessage, ResponseStatus, ContextItem, AVAILABLE_MODELS } from '../types/chat';

const MOCK_KNOWLEDGE_BASE: Record<string, { steps: string[]; text: string }> = {
  default: {
    steps: [
      'Analyzing repository context graph...',
      'Searching AST symbols across Zenuxs modules...',
      'Synthesizing response with HMAX cryptographic primitives...',
    ],
    text: `Here is the explanation for your request:

In **ZenuxsPlatform**, identity and session persistence are handled through our **OAuth 2.0 PKCE Bridge**. 

\`\`\`typescript
import { ZenuxsAuthClient } from '@zenuxs/oauth';

// Initialize device code flow
const client = new ZenuxsAuthClient({
  clientId: 'zx_app_892f0a1',
  redirectUri: 'https://zenuxs.in/callback',
  scopes: ['identity', 'mongoo:read']
});

await client.authorizePKCE();
\`\`\`

Key features of this pattern:
1. **Zero Client Secret leakage** on frontend client code.
2. **Cryptographic state protection** using SHA-256 code challenge pairs.
3. **Soft session renewal** with background refresh tokens.

Let me know if you need to generate an Easy-Mongoo schema wrapper for this!`,
  },
  explain: {
    steps: [
      'Parsing AST context tags...',
      'Reading Easy-Mongoo schema definitions...',
      'Formulating step-by-step breakdown...',
    ],
    text: `### Code Analysis & Architecture Breakdown

This code uses **Easy-Mongoo ODM** combined with **HMAX password pepper hashing**.

\`\`\`typescript
import { defineSchema, hmaxPepperHash } from 'easy-mongoo';

export const UserSchema = defineSchema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('passwordHash')) {
    this.passwordHash = await hmaxPepperHash(this.passwordHash);
  }
  next();
});
\`\`\`

**Why this matters:**
- **Automated Soft-Delete**: Soft deletes are handled silently by middleware without dropping MongoDB documents.
- **Timing-Safe Verification**: All password comparisons use constant-time byte comparisons to protect against side-channel attacks.`,
  },
  refactor: {
    steps: [
      'Inspecting code smell vector...',
      'Applying Zenuxs functional purity rules...',
      'Refactoring method signatures...',
    ],
    text: `Here is the refactored, type-safe implementation:

\`\`\`typescript
import { Result, ok, err } from '@zenuxs/core';

export async function fetchUserSession(sessionId: string): Promise<Result<Session, Error>> {
  try {
    const session = await db.sessions.findOne({ _id: sessionId, deletedAt: null });
    if (!session) return err(new Error('Session not found or expired'));
    return ok(session);
  } catch (error) {
    return err(error as Error);
  }
}
\`\`\`

**Optimizations made:**
- Replaced thrown exceptions with explicit \`Result<T, E>\` types.
- Included \`deletedAt: null\` check for Easy-Mongoo soft-delete engine.`,
  },
};

export function useContinueChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: 'Welcome to Continue AI Assistant for ZenuxsPlatform. Ask me about OAuth 2.0 PKCE, Easy-Mongoo schemas, HMAX crypto pipelines, or scaffold a fullstack project.',
      timestamp: 'Just now',
      status: 'completed',
      model: 'Zenuxs HMAX-70B',
    },
  ]);

  const [selectedModel, setSelectedModel] = useState<string>(AVAILABLE_MODELS[0].id);
  const [activeContext, setActiveContext] = useState<ContextItem[]>([
    { id: 'ctx-1', name: 'UserSchema.ts', type: 'file', path: 'src/schemas/User.ts' },
    { id: 'ctx-2', name: 'OAuth PKCE Docs', type: 'doc', path: 'https://zenuxs.in/docs' },
  ]);

  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (userText: string, customContext?: ContextItem[]) => {
      const trimmed = userText.trim();
      if (!trimmed) return;

      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const userMsgId = `user-${Date.now()}`;
      const assistantMsgId = `assistant-${Date.now()}`;

      const userMessage: ChatMessage = {
        id: userMsgId,
        role: 'user',
        content: trimmed,
        timestamp: now,
        contextItems: customContext || activeContext,
      };

      const modelInfo = AVAILABLE_MODELS.find((m) => m.id === selectedModel) || AVAILABLE_MODELS[0];

      // 1. Instantly append user message AND assistant response placeholder with status = 'thinking'
      const assistantMessagePlaceholder: ChatMessage = {
        id: assistantMsgId,
        role: 'assistant',
        content: '',
        timestamp: now,
        status: 'thinking',
        thinkingStep: 'Connecting to inference node...',
        model: modelInfo.name,
      };

      setMessages((prev) => [...prev, userMessage, assistantMessagePlaceholder]);

      // Abort controller setup for cancel
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      try {
        // Choose knowledge response matching query
        const key = trimmed.toLowerCase().includes('refactor')
          ? 'refactor'
          : trimmed.toLowerCase().includes('explain') || trimmed.toLowerCase().includes('schema')
          ? 'explain'
          : 'default';

        const kb = MOCK_KNOWLEDGE_BASE[key];

        // 2. Simulate thinking sequence (reasoning steps visible in UI)
        for (let i = 0; i < kb.steps.length; i++) {
          if (signal.aborted) return;
          const step = kb.steps[i];
          setMessages((prev) =>
            prev.map((msg) => (msg.id === assistantMsgId ? { ...msg, thinkingStep: step } : msg))
          );
          await new Promise((r) => setTimeout(r, 450));
        }

        if (signal.aborted) return;

        // 3. Transition status from 'thinking' to 'streaming'
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId ? { ...msg, status: 'streaming', thinkingStep: undefined } : msg
          )
        );

        // 4. Stream response tokens chunk by chunk
        const fullText = kb.text;
        const chunkSize = 6;
        let currentIdx = 0;

        while (currentIdx < fullText.length) {
          if (signal.aborted) return;

          currentIdx += chunkSize;
          const currentChunk = fullText.slice(0, currentIdx);

          setMessages((prev) =>
            prev.map((msg) => (msg.id === assistantMsgId ? { ...msg, content: currentChunk } : msg))
          );

          await new Promise((r) => setTimeout(r, 25));
        }

        if (signal.aborted) return;

        // 5. Stream finished -> status = 'completed'
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? {
                  ...msg,
                  status: 'completed',
                  tokens: { prompt: Math.floor(trimmed.length / 4) + 12, completion: Math.floor(fullText.length / 4) },
                }
              : msg
          )
        );
      } catch (err) {
        if (!signal.aborted) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? { ...msg, status: 'error', error: 'Inference request interrupted or failed.' }
                : msg
            )
          );
        }
      } finally {
        abortControllerRef.current = null;
      }
    },
    [activeContext, selectedModel]
  );

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;

      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.status === 'thinking' || msg.status === 'streaming') {
            return {
              ...msg,
              status: 'completed',
              content: msg.content ? msg.content + '\n\n*(Generation stopped by user)*' : '*(Generation stopped)*',
            };
          }
          return msg;
        })
      );
    }
  }, []);

  const clearChat = useCallback(() => {
    stopGeneration();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: 'New session started. Ask any question or paste a code snippet to begin.',
        timestamp: 'Just now',
        status: 'completed',
        model: AVAILABLE_MODELS.find((m) => m.id === selectedModel)?.name || 'Zenuxs HMAX-70B',
      },
    ]);
  }, [selectedModel, stopGeneration]);

  const addContextItem = useCallback((item: ContextItem) => {
    setActiveContext((prev) => (prev.some((c) => c.id === item.id) ? prev : [...prev, item]));
  }, []);

  const removeContextItem = useCallback((id: string) => {
    setActiveContext((prev) => prev.filter((c) => c.id !== id));
  }, []);

  return {
    messages,
    selectedModel,
    setSelectedModel,
    activeContext,
    addContextItem,
    removeContextItem,
    sendMessage,
    stopGeneration,
    clearChat,
  };
}
