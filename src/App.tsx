import { useState } from "react";

type Message = {
  content: string;
  role: "user" | "assistant";
};
type Asignature = {
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

function App() {
  /* Este estado es para los mensajes del chat */
  const [message, setMessage] = useState<Message[]>([]);
  /* Este estado es para saber si se está cargando */
  const [isLoading, setIsLoading] = useState(false);
  /* Este estado es para saber la asignatura seleccionada */
  const [selectedAsignature, setSelectedAsignature] =
    useState<Asignature | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const question = formData.get("question");
    if (!selectedAsignature || !question) return;

    setMessage([
      {
        content: question as string,
        role: "user",
      },
    ]);
    setIsLoading(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-full">
        <h1>ProfeIA</h1>
        <div className="grid grid-cols-3">
          <article>
            <ul>
              <li
                onClick={() => setSelectedAsignature({ name: "Matemáticas" })}
              >
                Matemáticas
              </li>
              <li onClick={() => setSelectedAsignature({ name: "Ciencias" })}>
                Ciencias
              </li>
              <li onClick={() => setSelectedAsignature({ name: "Lengua" })}>
                Lengua
              </li>
              <li onClick={() => setSelectedAsignature({ name: "Historia" })}>
                Historia
              </li>
              <li onClick={() => setSelectedAsignature({ name: "Geografía" })}>
                Geografía
              </li>
              <li
                onClick={() =>
                  setSelectedAsignature({ name: "Ciencias Sociales" })
                }
              >
                Ciencias Sociales
              </li>
              <li
                onClick={() => setSelectedAsignature({ name: "Computación" })}
              >
                Computación
              </li>
              <li onClick={() => setSelectedAsignature({ name: "Astronomía" })}>
                Astronomía
              </li>
            </ul>
          </article>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <textarea name="question" id="question" required></textarea>
          <button>Enviar</button>
        </form>
        <div className="flex flex-col gap-4">
          {message.map((message, index) => (
            <div
              key={index}
              className={`flex gap-2 ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              <p className="p-2 rounded border">{message.content}</p>
            </div>
          ))}
          {isLoading && <p>Cargando...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
