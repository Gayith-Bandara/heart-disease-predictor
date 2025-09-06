import { parseRequest, parseResult } from "../services/AppService.js";
import { mlService } from "../services/MLService.js";

export const predict = async (req, res, next) => {
  try {
    const { userData, formattedHealthData } = parseRequest(req.body);
    const prediction = await mlService.predict(formattedHealthData);
    const result = parseResult(userData, formattedHealthData, prediction);
    res.status(200).json(result);
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
