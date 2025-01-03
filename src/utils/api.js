import axios from "axios";

const API_URL = "http://localhost:5554";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/
export const fetchPokemons = async (search = "", type = "all") => {
  try {
    const response = await axios.get(
      API_URL + "/pokemons?search=" + search + "&?type=" + type
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* INSTRUCTION: Create a function to fetch types from the API. */

export const fetchTypes = async () => {
  try {
    const response = await axios.get(API_URL + "/types");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
