import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';
import passport from 'passport';
import ordersRouter from './routes/orders';
import authRouter from "./routes/auth";
import {googleRouteProtector} from "./middlewares/passportGoogle";
import {jwtRouteProtector} from "./middlewares/passport";
import userRouter from "./routes/users";

const app = express();

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST } = process.env;

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/shipmentTable?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(passport.initialize());
jwtRouteProtector(passport);
googleRouteProtector(passport);

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/orders', ordersRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode: 404
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    statusCode: 404,
    message: err.message,
    stack: err.stack
  })
});

export default app;
