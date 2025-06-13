import { ChatForm } from "./components/ChatForm.tsx";
import { AssignaturesList } from "./components/AssignaturesList.tsx";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-full">
        {/* navbar */}
        <h1>ProfeIA</h1>
        <div className="grid grid-cols-3">
          <AssignaturesList />
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
