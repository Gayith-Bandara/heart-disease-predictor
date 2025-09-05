export const predict = async (req, res, next) => {
  try {
    console.log(req);
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
