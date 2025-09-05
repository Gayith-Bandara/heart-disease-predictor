import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
//   await connectDB(); // Connect to DB first
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
