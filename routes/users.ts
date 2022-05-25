import { Router } from 'express';
import passport from 'passport';
import {getUserByEmail} from "../controllers/UserController";

const userRouter = Router();

/**
 * GET USER
 */
userRouter.get('/:email', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), getUserByEmail);


export default userRouter;
