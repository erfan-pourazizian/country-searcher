import axios from "axios";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url);

  return data;
};
