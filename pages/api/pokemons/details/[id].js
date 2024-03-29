import getConfig from 'next/config';

export default async function handler(req, res) {
   const { publicRuntimeConfig: { API, baseURL_image } } = getConfig();
   try {
      const id = `${req.path?.id ? req.path?.id : 1}`;
      const urlApi = `${API.pokeapi}/${id}`;

      const response = await fetch(urlApi, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      const result = await response.json();

      result.image = `${baseURL_image}${id}.png`;

      res.status(200).json(result)
   } catch (err) {
      console.log(err)
   }
}