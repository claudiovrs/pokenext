import getConfig from 'next/config';

export default async function handler(req, res) {
   const { serverRuntimeConfig: { API } } = getConfig();
   try {
      const query = `${req.query?.limit ? `?limit=${req.query.limit}` : ''}`;
      const urlApi = `${API.pokeapi}${query}`;

      const response = await fetch(urlApi, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      const result = await response.json()
      
      // add pokemon index
      result.results.forEach((item, index) => {
         item.id = index + 1;
      });
      
      res.status(200).json(result);
   } catch (err) {
      console.log(err)
   }
}