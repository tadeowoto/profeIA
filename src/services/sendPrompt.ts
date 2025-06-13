export async function sendPromptToGemini(
  prompt: string,
  asignature: string
): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  prompt = `Sos una IA que responda a este prompt: ${prompt}. Responde en español y solo responde al prompt, quiero que seas detallado y claro, pensado para enseñar a los alumnos que no estan tan avanzados en el tema. Responde como un experto en el tema. ${asignature}`;
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
      apiKey,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Error al consultar la API de Gemini");
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sin respuesta";
}
