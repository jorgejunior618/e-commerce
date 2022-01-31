import express, { json, urlencoded } from 'express';
import errorHandler from './middlewares/errorHandler';
import messageRoutes from './routes/message_routes';
import sessionRoutes from './routes/session_routes';
import userRoutes from './routes/user_routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(sessionRoutes);
app.use(userRoutes);
app.use(messageRoutes);

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Aplicação executando em:");
  console.log("http://localhost:5000/");
})