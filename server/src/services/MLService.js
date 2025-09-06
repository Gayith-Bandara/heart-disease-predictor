import axios from "axios";

export const mlService = {

  predict: async (payload) => {
    const API = process.env.ML_API_URL;
    const { data } = await axios.post(API, payload);
    return data;
  }
  
};