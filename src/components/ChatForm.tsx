import { useState } from "react";
import { sendPromptToGemini } from "../services/sendPrompt.ts";
import type { Chat, Asignature } from "../types/chatTypes.ts";

export const ChatForm = () => {
  /* Este estado es para los mensajes del chat */
  const [message, setMessage] = useState<Chat>({
    messages: [],
    asignature: null,
  });
  /* Este estado es para saber si se está cargando */
  const [isLoading, setIsLoading] = useState(false);
  /* Este estado es para saber la asignatura seleccionada */
  const [selectedAsignature, setSelectedAsignature] =
    useState<Asignature | null>(null);

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
