import { createContext, useState } from "react";
import type { Asignature, Chat } from "../types/chatTypes";

type ChatContextType = {
  message: Chat;
  setMessage: (message: Chat) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  selectedAsignature: Asignature | null;
  setSelectedAsignature: (selectedAsignature: Asignature | null) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

  return (
    <ChatContext.Provider
      value={{
        message,
        setMessage,
        isLoading,
        setIsLoading,
        selectedAsignature,
        setSelectedAsignature,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
