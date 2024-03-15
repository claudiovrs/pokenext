import getConfig from 'next/config';

export default async function handler(req, res) {
   const { publicRuntimeConfig: { API, baseURL_image } } = getConfig();

   const query = `${req.query?.limit ? `?limit=${req.query.limit}` : ''}`;
      const api = `${API.pokeapi}${query}`;
  
      const response = await fetch(api, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      const result = await response.json();
      
      // add pokemon index
      result.results.forEach((item, index) => {
         const id = index + 1;
         item.id = id;
         item.image = `${baseURL_image}${id}.png`;
      });
      
      res.status(200).json(result);
}