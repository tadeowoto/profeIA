export const AssignaturesList = () => {
  return (
    <article>
      <ul>
        <li onClick={() => setSelectedAsignature({ name: "Matemáticas" })}>
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
          onClick={() => setSelectedAsignature({ name: "Ciencias Sociales" })}
        >
          Ciencias Sociales
        </li>
        <li onClick={() => setSelectedAsignature({ name: "Computación" })}>
          Computación
        </li>
        <li onClick={() => setSelectedAsignature({ name: "Astronomía" })}>
          Astronomía
        </li>
      </ul>
    </article>
  );
};
