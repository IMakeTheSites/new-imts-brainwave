import { useEffect, useRef, useState } from "react";
import IMTSlogoBW from "../assets/IMTSlogoBW.png";

const SUGGESTIONS = [
  "What's Mark's experience?",
  "Does Mark know .NET and SQL?",
  "What services does Mark offer?",
  "How can I contact Mark?",
];

const GREETING = {
  role: "assistant",
  content: "Hi! I'm Mark's assistant. Ask me anything about his experience, skills, or services.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    const next = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Don't send the canned greeting; the server has its own instructions
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json().catch(() => ({}));
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.reply || data.error || "Something went wrong. Please try again.",
          error: !data.reply,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "I couldn't connect. Please try again.", error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-4">
      {open && (
        <div
          role="dialog"
          aria-label="Ask about Mark"
          className="w-[calc(100vw-2.5rem)] max-w-[24rem] h-[min(34rem,calc(100vh-8rem))] p-0.25 rounded-[1.5rem] bg-conic-gradient shadow-2xl"
        >
          <div className="flex flex-col h-full bg-n-8 rounded-[1.4375rem] overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-n-6">
              <img src={IMTSlogoBW} width={32} height={32} alt="" className="rounded" />
              <div className="flex-1">
                <p className="font-semibold text-sm">Ask about Mark</p>
                <p className="text-xs text-n-4">AI assistant · answers may be imperfect</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 flex items-center justify-center rounded-full text-n-3 transition-colors hover:bg-n-7 hover:text-n-1"
              >
                ✕
              </button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-6 whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-color-1 text-n-1 rounded-br-md"
                        : m.error
                        ? "bg-n-7 text-color-3 rounded-bl-md"
                        : "bg-n-7 text-n-2 rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-n-7 rounded-2xl rounded-bl-md flex gap-1" aria-label="Thinking">
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-n-3 animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => ask(s)}
                      className="px-3 py-1.5 text-xs text-n-2 border border-n-6 rounded-full transition-colors hover:border-color-1 hover:text-n-1"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 p-3 border-t border-n-6">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="Ask a question..."
                aria-label="Your question"
                className="flex-1 h-11 px-4 bg-n-7 border border-n-6 rounded-full text-sm text-n-1 placeholder:text-n-4 outline-none focus:border-color-1"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-n-1 text-n-8 font-bold transition-opacity disabled:opacity-40"
              >
                ↑
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat about Mark" : "Chat with an AI assistant about Mark"}
        aria-expanded={open}
        className="group relative w-14 h-14 p-0.5 rounded-2xl bg-conic-gradient shadow-lg transition-transform hover:-translate-y-1"
      >
        <span className="flex items-center justify-center w-full h-full bg-n-8 rounded-[0.875rem]">
          <img src={IMTSlogoBW} width={34} height={34} alt="" />
        </span>
        {!open && (
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 text-xs bg-n-7 border border-n-6 rounded-lg opacity-0 transition-opacity group-hover:opacity-100">
            Ask about Mark
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
