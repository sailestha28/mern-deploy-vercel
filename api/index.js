import Express from "express";
import cors from "cors";

const app = Express();

app.use(cors());

app.get("/api/register/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
