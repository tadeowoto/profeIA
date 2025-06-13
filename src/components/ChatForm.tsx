import { sendPromptToGemini } from "../services/sendPrompt.ts";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext.tsx";

export const ChatForm = () => {
  const context = useContext(ChatContext);
  if (!context) {
    return null;
  }

  const { message, setMessage, setIsLoading, selectedAsignature } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const question = formData.get("question");
    if (!selectedAsignature || !question) return;

    setIsLoading(true);
    const response = await sendPromptToGemini(question as string);
    if (response) {
      setMessage({
        messages: [
          ...message.messages,
          { content: question as string, role: "user" },
          { content: response, role: "assistant" },
        ],
        asignature: selectedAsignature,
      });
    }

    setIsLoading(false);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <textarea name="question" id="question" required></textarea>
      <button>Enviar</button>
    </form>
  );
};
