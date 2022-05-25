import {Response} from "express";
import {errorHandler, successHandler} from "../utils";
import {UserModel} from "../models";

export const getUserByEmail = async (req: any, res: Response): Promise<void | Response> => {
    const { email } = req.params;

    try {
        const user = await UserModel.find({ email });

        if (!user.length) {
            return errorHandler(res, 404, 'User not found');
        }

        return successHandler(res, 200, user);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
};