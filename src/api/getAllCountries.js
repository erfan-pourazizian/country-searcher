import axios from "axios";

export const baseUrl = "https://restcountries.com/v2/all";

export const getAllCountries = async () => {
  const {data} = await axios.get(baseUrl);

  return data;
};

getAllCountries()