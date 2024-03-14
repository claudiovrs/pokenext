import Card from "../components/Card";

import Image from "next/image";

import styles from "../styles/Home.module.css";

import { hostAPI }  from '../config';

export async function getStaticProps() {
   const maxPokemons = 251;

   const api = `${hostAPI}/pokemons?limit=${maxPokemons}`;

   const res = await fetch(api);

   const data = await res.json();

   return {
      props: {
         pokemons: data.results,
      },
   };
}

export default function Home({ pokemons }) {
   return (
      <>
         <div className={styles.title_container}>
            <h1 className={styles.title}>
               Poke<span>Next</span>
            </h1>
            <Image
               src="/images/pokeball.png"
               width="50"
               height="50"
               alt="PokeNext"
            />
         </div>
         <div className={styles.pokemon_container}>
            {pokemons.map((pokemon) => (
               <Card key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
      </>
   );
}