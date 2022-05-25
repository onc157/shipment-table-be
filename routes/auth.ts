import { Router } from 'express';
import passport from 'passport';
import {loginGoogle} from "../controllers";

const authRouter = Router();

const baseUrl = process.env.FRONT_BASE_URL || 'http://localhost:3000';

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: `${baseUrl}/login`, session: false }),
    loginGoogle
);

export default authRouter;