
import { useState,useEffect } from "react";
import axios from "axios";

const api_key = "6de482bc8c5768aa3648618b9c3cc98a";
const BASE_URL = "https://api.themoviedb.org/3";

const ApiHook = () => {

    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
 
    
    


      const getFeatured = async () => {
        await axios
          .get(`${BASE_URL}/movie/upcoming?api_key=${api_key}&language=en-US`)
          .then((response) => {
            setUpcoming(response.data.results);
          });
      };
    
      const getLatest = async () => {
        await axios
          .get(`${BASE_URL}/movie/popular?api_key=${api_key}&language=en-US`)
          .then((response) => {
            setLatest(response.data.results);
          });
      };


      useEffect(() => {
        getFeatured();
        getLatest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return [upcoming,latest] 
};
export{api_key,BASE_URL};
export default ApiHook;