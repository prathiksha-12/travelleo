import { useEffect, useRef, useState } from "react";
function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! 👋 I'm your Travelleo AI assistant. How can I help you plan your trip?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);

  async function handleAsk() {
    if (!question.trim() || loading) {
      return;
    }

    const userQuestion = question.trim();

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        type: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          type: "ai",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("AI error:", error);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          type: "ai",
          text: "Sorry, I couldn't connect to the AI right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSuggestion(text) {
    setQuestion(text);
  }

  function clearChat() {
    setMessages([
      {
        type: "ai",
        text: "Hi! 👋 I'm your Travelleo AI assistant. How can I help you plan your trip?",
      },
    ]);
  }

  return (
    <>
      {isOpen && (
        <div className="ai-popup">
          <div className="ai-popup-header">
            <div>
              <h3>✨ Travelleo AI</h3>
              <span>Your travel assistant</span>
            </div>

            <div className="ai-popup-actions">
              <button onClick={clearChat}>Clear</button>

              <button onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
          </div>

          <div className="ai-popup-messages">
            {messages.map((message, index) => (
              <div
                className={`ai-message ${message.type}`}
                key={index}
              >
                {message.type === "ai" && (
                  <div className="ai-avatar">✨</div>
                )}

                <div className="ai-bubble">
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-message ai">
                <div className="ai-avatar">✨</div>

                <div className="ai-bubble ai-thinking">
                  Travelleo AI is thinking...
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />

          <div className="ai-suggestions">
            <button
  className="itinerary-suggestion"
  onClick={() =>
    handleSuggestion("Generate a 3 day itinerary for Paris")
  }
>
  ✨ Generate Itinerary
</button>
            <button
              onClick={() =>
                handleSuggestion(
                  "What are the best places to visit in Paris?"
                )
              }
            >
              🗼 Paris
            </button>

            <button
              onClick={() =>
                handleSuggestion("Plan a 3 day trip to Bali")
              }
            >
              🌴 Bali
            </button>

            <button
              onClick={() =>
                handleSuggestion(
                  "What is the best time to visit Japan?"
                )
              }
            >
              🇯🇵 Japan
            </button>
          </div>

          <div className="ai-input-area">
            <input
              type="text"
              placeholder="Ask about your trip..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAsk();
                }
              }}
            />

            <button
              onClick={handleAsk}
              disabled={loading}
            >
              {loading ? "..." : "➤"}
            </button>
          </div>
        </div>
      )}

      <button
        className={`ai-floating-button ${
          isOpen ? "open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Travelleo AI assistant"
      >
        {isOpen ? "✈️" : "🗺️"}
      </button>
    </>
  );
}

export default AIAssistant;