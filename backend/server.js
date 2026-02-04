const app = require("./app");
const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
dotenv.config({ path: "./.env" });

const server = http.createServer(app);
const PORT = process.env.PORT || 8501;

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
