import Link from 'next/link';

import * as api from 'lib/api';
import Pokemon from 'components/Pokemon';
import Character from 'components/Character';

function Home({ pokemons, swPeople }) {
  // console.log(pokemons);
  // console.log(swPeople);
  return (
    <div className="container">
      <h1>Catched Pokemon</h1>
      {pokemons.map(({ id, name }) => {
        return (
          <div key={id}>
            <Pokemon id={id} name={name} />
            <Link href={`/pokemon/${id}`}>
              <a>Detail</a>
            </Link>
          </div>
        );
      })}
      <hr />
      <h1>Star Wars Charachters</h1>
      {swPeople.map(({ id, name }) => {
        return (
          <div key={id}>
            <Character id={id} name={name} />
            <Link href={`/character/${id}`}>
              <a>Detail</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const pokemons = await api.getPokemonList();
  const swPeople = await api.getSWPeople();
  return {
    props: {
      pokemons,
      swPeople,
    }, // will be passed to the page component as props
  };
}

export default Home;
