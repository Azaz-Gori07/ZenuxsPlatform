export type MessageRole = 'user' | 'assistant' | 'system';

export type ResponseStatus = 'idle' | 'thinking' | 'streaming' | 'completed' | 'error';

export interface ContextItem {
  id: string;
  name: string;
  type: 'file' | 'doc' | 'code' | 'schema';
  path?: string;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  status?: ResponseStatus;
  thinkingStep?: string;
  contextItems?: ContextItem[];
  model?: string;
  tokens?: {
    prompt: number;
    completion: number;
  };
  error?: string;
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  badge?: string;
  isDefault?: boolean;
}

export const AVAILABLE_MODELS: AIModel[] = [
  { id: 'hmax-70b', name: 'Zenuxs HMAX-70B', provider: 'Zenuxs Ecosystem', badge: 'Fast & Secure', isDefault: true },
  { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', badge: 'Frontier' },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', badge: 'Multimodal' },
  { id: 'zenuxs-code-v2', name: 'Zenuxs Code v2.4', provider: 'Zenuxs Labs', badge: 'AST Optimized' },
];
