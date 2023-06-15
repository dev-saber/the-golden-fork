import axios from "axios";

const reserve = async (data) => {
  const response = await axios.post("http://localhost:8000/api/store", data);
  return response.data.message;
};

export { reserve };
