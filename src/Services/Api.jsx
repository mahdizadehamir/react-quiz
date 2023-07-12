import axios from "axios";

const fetchApi = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export {fetchApi}
