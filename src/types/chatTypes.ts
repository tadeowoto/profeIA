export type Message = {
  content: string;
  role: "user" | "assistant";
};
export type Chat = {
  messages: Message[];
  asignature: Asignature | null;
};
export type Asignature = {
  name:
    | "Matemáticas"
    | "Ciencias"
    | "Lengua"
    | "Historia"
    | "Geografía"
    | "Ciencias Sociales"
    | "Computación"
    | "Astronomía";
};
