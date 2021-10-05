const Character = (props) => {
  const { id, name, ...details } = props;
  const empty = Object.keys(details).length === 0;
  const { birth_year, height, mass, eye_color, hair_color } = details;
  return (
    <div>
      <h3>{name}</h3>
      <div>ID: {id}</div>
      {!empty && (
        <>
          <div>birth_year: {birth_year}</div>
          <div>height {height}</div>
          <div>mass {mass}</div>
          <div>eye_color: {eye_color}</div>
          <div>hair_color: {hair_color}</div>
        </>
      )}
    </div>
  );
};

export default Character;
