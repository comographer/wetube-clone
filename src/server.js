import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Message</h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>Login Here</h1>");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
