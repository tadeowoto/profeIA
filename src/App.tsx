import { ChatForm } from "./components/ChatForm.tsx";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-full">
        {/* navbar */}
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

        <ChatForm />
        <div className="flex flex-col gap-10">
          {message.messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <p className="p-2 rounded border">{message.content}</p>
            </div>
          ))}
          {isLoading && <p>Cargando...</p>}
        </div>
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
