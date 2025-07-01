import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";

const app = express();
const port: string | number = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Middleware to parse URL-encoded bodies and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is busy, trying port ${Number(port) + 1}`);
    app.listen(Number(port) + 1, () => {
      console.log(`Server is running on port ${Number(port) + 1}`);
    });
  } else {
    console.error('Server error:', err);
  }
}); 