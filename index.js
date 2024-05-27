/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

console.log(`using port : ${PORT}`);

app.use(express.static('site'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
