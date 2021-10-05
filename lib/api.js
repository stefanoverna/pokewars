export const getPokemonList = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  const data = await response.json();
  const pokemons =
    data?.results.map((p) => {
      const { name, url } = p;
      const id = url.split('/').filter(Boolean).slice(-1).toString();
      return { name, id };
    }) ?? [];
  // console.log(pokemons);
  return pokemons;
};

export const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};

export const getSWPeople = async () => {
  const response = await fetch(`https://swapi.dev/api/people`);
  const data = await response.json();
  const people =
    data?.results.map((p) => {
      const { name, url } = p;
      const id = url.split('/').filter(Boolean).slice(-1).toString();
      return { name, id };
    }) ?? [];
  console.log(people);
  return people;
};

export const getSWCharacter = async () => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return response.json();
};
