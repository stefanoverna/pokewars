const Pokemon = (props) => {
  const { id, name, ...details } = props;
  const empty = Object.keys(details).length === 0;
  const { base_experience, height, weight, abilities } = details;
  return (
    <div>
      <h3>{name}</h3>
      <div>ID: {id}</div>
      {!empty && (
        <>
          <div>BASE-EXPERIENCE: {base_experience}</div>
          <div>height {height}</div>
          <div>weight {weight}</div>
          <div>
            Abilities:
            <ul>
              {abilities?.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
