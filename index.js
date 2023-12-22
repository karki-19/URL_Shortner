import app from "./app.js";
import { connectDB } from "./utils/database.js";
const port = 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to server : 4000");
    });
  })
  .catch((err) => {
    console.log("Error while executing function", err);
  });
