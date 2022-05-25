import * as passportGoogle from 'passport-google-oauth20';
import { PassportStatic } from 'passport';
import { v4 as uuid } from 'uuid';
import { UserInterface, UserModel } from '../models';

const { Strategy } = passportGoogle;

const baseUrl = process.env.BACK_BASE_URL || 'http://localhost:4000';

const options = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${baseUrl}/auth/google/callback`,
};

export const googleRouteProtector = (passport: PassportStatic) => {
    passport.use(
        new Strategy(options, async (accessToken, refreshToken, profile, done) => {
            const { email, name, picture } = profile._json;
            const hash = uuid();

            try {
                const userCandidate = await UserModel.findOne({ email });
                if (userCandidate) {
                    return done(null, userCandidate);
                }

                const userData: UserInterface = {
                    email,
                    name,
                    avatar: picture,
                };

                const user = await UserModel.create(userData);

                return done(null, await user.save());
            } catch (e: unknown) {
                if (!(e instanceof Error)) throw e;
                console.log(e);
            }
        })
    );
};