import { useState } from "react";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};
type Asignature = {
  id: string;
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
  const [message, setMessage] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAsignature, setSelectedAsignature] =
    useState<Asignature | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-full">
        <h1>ProfeIA</h1>
        <form action="">
          <select name="asignature" id="asignature">
            <option value="matemáticas">Matemáticas</option>
            <option value="ciencias">Ciencias</option>
            <option value="lengua">Lengua</option>
            <option value="historia">Historia</option>
            <option value="geografía">Geografía</option>
            <option value="ciencias-sociales">Ciencias Sociales</option>
            <option value="computación">Computación</option>
            <option value="astronomía">Astronomía</option>
          </select>
          <textarea name="question" id="question"></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
