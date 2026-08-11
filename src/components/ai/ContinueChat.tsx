import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, Send, Square, RotateCcw, Copy, Check, Paperclip,
  FileCode, BookOpen, Terminal, ChevronDown, Cpu, Zap, Info, ShieldAlert
} from 'lucide-react';
import { useContinueChat } from '../../hooks/useContinueChat';
import { AVAILABLE_MODELS, ContextItem } from '../../types/chat';

interface ContinueChatProps {
  className?: string;
  embedded?: boolean;
}

export const ContinueChat: React.FC<ContinueChatProps> = ({ className = '', embedded = false }) => {
  const {
    messages,
    selectedModel,
    setSelectedModel,
    activeContext,
    addContextItem,
    removeContextItem,
    sendMessage,
    stopGeneration,
    clearChat,
  } = useContinueChat();

  const [input, setInput] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [showContextPicker, setShowContextPicker] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Active status check across messages
  const activeMessage = messages[messages.length - 1];
  const isGenerating = activeMessage?.status === 'thinking' || activeMessage?.status === 'streaming';

  // Auto-scroll logic
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeMessage?.content, activeMessage?.thinkingStep]);

  const handleSend = () => {
    if (!input.trim() || isGenerating) return;
    sendMessage(input);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 180)}px`;
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleQuickPrompt = (promptText: string) => {
    setInput(promptText);
    textareaRef.current?.focus();
  };

  const SAMPLE_CONTEXT_OPTIONS: ContextItem[] = [
    { id: 'ctx-user-schema', name: 'UserSchema.ts', type: 'file', path: 'src/schemas/UserSchema.ts' },
    { id: 'ctx-oauth-pkce', name: 'OAuth2_PKCE.ts', type: 'code', path: 'src/auth/pkce.ts' },
    { id: 'ctx-hmax-docs', name: 'HMAX Security Spec', type: 'doc', path: 'https://zenuxs.in/hmax' },
    { id: 'ctx-mongoo-api', name: 'easy-mongoo ODM', type: 'schema', path: 'npm:easy-mongoo' },
  ];

  return (
    <div
      className={`flex flex-col bg-void border border-border rounded-2xl shadow-2xl overflow-hidden font-mono ${
        embedded ? 'h-[620px]' : 'h-[82vh] max-h-[900px]'
      } ${className}`}
    >
      {/* Continue Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-carbon border-b border-border/80 text-xs">
        <div className="flex items-center space-x-3">
          {/* Logo Tag */}
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo to-ember flex items-center justify-center font-bold text-black shadow-md">
            <Sparkles className="w-4 h-4 text-black" />
          </div>

          {/* Model Selection Dropdown */}
          <div className="relative">
            <button
              onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-graphite hover:bg-iron border border-border text-white font-semibold transition-colors cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-ember" />
              <span>{AVAILABLE_MODELS.find((m) => m.id === selectedModel)?.name}</span>
              <ChevronDown className="w-3 h-3 text-steel" />
            </button>

            {modelDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-graphite border border-border shadow-2xl z-50 py-1.5 space-y-1">
                {AVAILABLE_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model.id);
                      setModelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-carbon transition-colors ${
                      selectedModel === model.id ? 'text-ember font-bold bg-carbon/60' : 'text-fog'
                    }`}
                  >
                    <div>
                      <div className="text-xs">{model.name}</div>
                      <div className="text-[10px] text-steel font-sans">{model.provider}</div>
                    </div>
                    {model.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo/20 text-indigo border border-indigo/30 font-bold">
                        {model.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2">
          <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-emerald bg-emerald/10 px-2.5 py-1 rounded-full border border-emerald/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span>Continue Engine v2.4</span>
          </span>

          <button
            onClick={clearChat}
            className="p-1.5 rounded-lg bg-graphite hover:bg-iron border border-border text-steel hover:text-white transition-colors cursor-pointer"
            title="Reset Chat Session"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-void/60 text-xs sm:text-sm">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';

          return (
            <div key={msg.id} className={`flex flex-col space-y-2 ${isUser ? 'items-end' : 'items-start'}`}>
              {/* Message Header */}
              <div className="flex items-center space-x-2 text-[11px] text-steel">
                <span className="font-bold uppercase tracking-wider text-fog">
                  {isUser ? 'You' : msg.model || 'Continue AI'}
                </span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              {/* Context Badges (User) */}
              {isUser && msg.contextItems && msg.contextItems.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-end max-w-lg">
                  {msg.contextItems.map((ctx) => (
                    <span
                      key={ctx.id}
                      className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-carbon border border-border text-indigo"
                    >
                      <FileCode className="w-3 h-3 text-indigo" />
                      <span>@{ctx.name}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Message Bubble Container */}
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-4 sm:p-5 border leading-relaxed space-y-3 ${
                  isUser
                    ? 'bg-carbon text-white border-border/80 shadow-md'
                    : 'bg-graphite/80 text-fog border-border shadow-xl'
                }`}
              >
                {/* 1. THINKING STATE — Mandatory Continuous Indicator */}
                {!isUser && msg.status === 'thinking' && (
                  <div className="space-y-3 py-1">
                    <div className="flex items-center space-x-2.5 text-indigo font-bold text-xs">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo" />
                      </span>
                      <span>Thinking…</span>
                    </div>

                    {msg.thinkingStep && (
                      <div className="flex items-center space-x-2 text-[11px] text-steel bg-void/80 px-3 py-1.5 rounded-lg border border-border/50 animate-pulse">
                        <Zap className="w-3 h-3 text-ember" />
                        <span>{msg.thinkingStep}</span>
                      </div>
                    )}

                    <div className="flex space-x-1.5 pt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo animate-bounce" />
                    </div>
                  </div>
                )}

                {/* 2. STREAMING / COMPLETED STATE — Formatted Content */}
                {(!isUser && (msg.status === 'streaming' || msg.status === 'completed')) || isUser ? (
                  <div className="whitespace-pre-wrap font-sans leading-relaxed text-sm text-ash">
                    {msg.content}
                    {msg.status === 'streaming' && (
                      <span className="inline-block w-2 h-4 ml-1 bg-ember animate-pulse" />
                    )}
                  </div>
                ) : null}

                {/* 3. ERROR STATE */}
                {msg.status === 'error' && (
                  <div className="flex items-center space-x-2 text-rose-400 font-sans text-xs bg-rose-950/40 p-3 rounded-lg border border-rose-800/40">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{msg.error || 'Failed to complete generation.'}</span>
                  </div>
                )}

                {/* Assistant Footer Actions & Tokens */}
                {!isUser && msg.status === 'completed' && (
                  <div className="flex items-center justify-between pt-3 border-t border-border/50 text-[10px] text-steel font-mono">
                    {msg.tokens ? (
                      <span>
                        Tokens: {msg.tokens.prompt} prompt + {msg.tokens.completion} completion
                      </span>
                    ) : (
                      <span>Inference Complete</span>
                    )}

                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="flex items-center gap-1 text-fog hover:text-white transition-colors px-2 py-1 rounded bg-carbon border border-border/60 cursor-pointer"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald" />
                          <span className="text-emerald">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Presets */}
      <div className="px-4 py-2 bg-carbon/40 border-t border-border/40 flex items-center space-x-2 overflow-x-auto text-[11px] text-steel">
        <span className="font-bold text-fog shrink-0">Slash:</span>
        {[
          { label: '/explain', prompt: 'Explain the security implications of this PKCE OAuth flow.' },
          { label: '/refactor', prompt: 'Refactor this function to be completely pure and type-safe.' },
          { label: '/schema', prompt: 'Generate an Easy-Mongoo UserSchema with soft-delete enabled.' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => handleQuickPrompt(item.prompt)}
            className="px-2.5 py-1 rounded bg-graphite hover:bg-iron border border-border/60 text-fog hover:text-white shrink-0 transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Active Context Items Drawer */}
      {activeContext.length > 0 && (
        <div className="px-4 py-2 bg-carbon/60 border-t border-border/60 flex items-center space-x-2 overflow-x-auto text-[11px]">
          <span className="font-bold text-fog shrink-0">Context:</span>
          {activeContext.map((ctx) => (
            <span
              key={ctx.id}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-graphite border border-border text-indigo shrink-0"
            >
              <FileCode className="w-3 h-3 text-indigo" />
              <span>@{ctx.name}</span>
              <button
                onClick={() => removeContextItem(ctx.id)}
                className="text-steel hover:text-white font-bold ml-1 cursor-pointer"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Composer Input Area */}
      <div className="p-3 sm:p-4 bg-carbon border-t border-border space-y-2">
        <div className="relative flex items-end space-x-2 bg-void rounded-xl border border-border p-2 focus-within:border-ember transition-colors">
          {/* Add Context Button */}
          <div className="relative">
            <button
              onClick={() => setShowContextPicker(!showContextPicker)}
              className="p-2 rounded-lg bg-graphite hover:bg-iron text-steel hover:text-indigo border border-border/60 transition-colors cursor-pointer"
              title="Add Context (@file, @doc)"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            {/* Context Dropdown */}
            {showContextPicker && (
              <div className="absolute left-0 bottom-full mb-2 w-64 rounded-xl bg-graphite border border-border shadow-2xl z-50 py-1.5 space-y-1">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-steel">Attach Context</div>
                {SAMPLE_CONTEXT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      addContextItem(opt);
                      setShowContextPicker(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 flex items-center space-x-2 hover:bg-carbon text-fog hover:text-white transition-colors"
                  >
                    <FileCode className="w-3.5 h-3.5 text-indigo" />
                    <div>
                      <div className="text-xs font-mono">@{opt.name}</div>
                      <div className="text-[10px] text-steel font-sans">{opt.path}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Multiline Textarea Input */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask Continue AI... (Shift+Enter for newline)"
            rows={1}
            disabled={isGenerating}
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-steel text-xs sm:text-sm resize-none py-1.5 px-1 max-h-[180px] leading-relaxed"
          />

          {/* Send / Stop Action Button */}
          {isGenerating ? (
            <button
              onClick={stopGeneration}
              className="px-3.5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg transition-all flex items-center space-x-1.5 cursor-pointer animate-pulse"
              title="Stop Generation"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop</span>
            </button>
          ) : (
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`p-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center cursor-pointer ${
                input.trim()
                  ? 'bg-ember hover:bg-ember-hover text-white shadow-lg shadow-ember/30'
                  : 'bg-iron text-steel cursor-not-allowed'
              }`}
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Composer Footer Hints */}
        <div className="flex items-center justify-between text-[10px] text-steel font-sans px-1">
          <span>
            Press <kbd className="font-mono bg-graphite px-1 rounded text-fog">Enter</kbd> to send,{' '}
            <kbd className="font-mono bg-graphite px-1 rounded text-fog">Shift+Enter</kbd> for line breaks
          </span>
          <span className="font-mono text-ash">Continuous State Machine Active</span>
        </div>
      </div>
    </div>
  );
};
