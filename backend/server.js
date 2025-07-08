import connectDB from "./db.js";
import app from "./auth.js";

connectDB();

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
