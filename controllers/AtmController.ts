import { Request, Response } from 'express';
import { errorHandler, successHandler } from '../utils';
import { AtmModel } from '../models/AtmModel';

export const getAtmData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atmData = await AtmModel.find({ });

        return successHandler(res, 200, atmData);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const createAtmData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atmData = {
            "5000": 4,
            "2000": 6,
            "1000": 9,
            "500": 8,
            "200": 2,
            "100": 5,
        };

        const atmDoc = await AtmModel.create(atmData);

        await atmDoc.save();

        successHandler(res, 200, atmDoc);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}