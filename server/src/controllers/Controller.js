import { parseRequest } from "../services/AppService.js";

export const predict = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userData, formattedHealthData } = await parseRequest(req.body);
    
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
