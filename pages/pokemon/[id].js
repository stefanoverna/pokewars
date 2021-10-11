import Link from 'next/link';
import * as api from 'lib/api';
import Pokemon from 'components/Pokemon';

function PokemonDetail({ pokemon }) {
  return (
    <div className="container">
      <Link href="/">
        <a>back</a>
      </Link>
      {pokemon && <Pokemon {...pokemon} />}
    </div>
  );
}
export async function getStaticPaths() {
  const pokemons = await api.getPokemonList();
  // Get the paths we want to pre-render based on posts
  const paths = pokemons.map(({ id }) => ({
    params: { id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const pokemon = await api.getPokemonById(id);
  return {
    props: {
      pokemon,
    },
    revalidate: 10,
  };
}

export default PokemonDetail;
