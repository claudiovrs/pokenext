import { hostAPI } from '../../../config';

export default async function handler(req, res) {
   try {
      const query = `${req.query?.limit ? `?limit=${req.query.limit}` : ''}`;
      const api = `${hostAPI}/pokemons${query}`;
  
      const response = await fetch(api, {
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