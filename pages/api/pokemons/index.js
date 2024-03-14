import getConfig from 'next/config';

export default async function handler(req, res) {
   const { publicRuntimeConfig: { API } } = getConfig();
   
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
      
      process.env.NODE_ENV !== 'production' ? res.status(200).json(result) : res.status(200).json({})
   } catch (err) {
      console.log(err)
   }
}