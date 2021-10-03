import { Request, Response } from 'express';
import { errorHandler, successHandler } from '../utils';
import { WalletModel } from '../models';
import { atmTemplateValue } from '../utils/params';

export const getWalletData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const walletData = await WalletModel.find({ });

        return successHandler(res, 200, walletData);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const depositMoney = async (req: Request, res: Response): Promise<Response> => {
    let { depositObj } = req.body

    try {
        const walletData = await WalletModel.find({ });

        const newWalletData = walletData[0];

        atmTemplateValue.forEach((elem) => {
            if (depositObj.hasOwnProperty(elem)) {
                const value = depositObj[elem];

                newWalletData[elem] ? newWalletData[elem] += value : newWalletData[elem] = value
            }
        })

        await WalletModel.findOneAndUpdate(
            { _id: '6159f7236e88151080b59385' },
            newWalletData ,
            { useFindAndModify: false }
        );

        return successHandler(res, 200, newWalletData);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const createWalletData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atmData = {
            "5000": 1,
            "2000": 1,
            "1000": 1,
            "500": 1,
            "200": 1,
            "100": 1,
        };

        const atmDoc = await WalletModel.create(atmData);

        await atmDoc.save();

        successHandler(res, 200, atmDoc);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}