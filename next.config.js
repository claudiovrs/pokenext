module.exports = {
   reactStrictMode: true,
   serverRuntimeConfig: {
    API: {
      pokeapi: 'https://pokeapi.co/api/v2/pokemon',
    },
    baseURL_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/',
  },
   images: {
     domains: ["raw.githubusercontent.com", "pokeapi.co", "cdn.traction.one", "localhost"],
   },
 };
