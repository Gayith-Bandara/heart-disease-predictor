import { parseRequest } from "../services/AppService.js";
import { mlService } from "../services/MLService.js";

export const predict = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userData, formattedHealthData } = await parseRequest(req.body);
    const prediction = await mlService.predict(formattedHealthData);
    console.log(prediction);
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    next(error);
  }
};

export const test = async (req, res, next) => {
    try{
    res.status(200).json({ message: "Hello World" });
    }catch(error) {
        next(error);
    }
}
