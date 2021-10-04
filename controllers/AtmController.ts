import { Request, Response } from 'express';
import { errorHandler, successHandler } from '../utils';
import { AtmModel } from '../models';
import { atmTemplateValue, ERROR_ATM_MESSAGE } from '../utils/params';

export const getAtmData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atmData = await AtmModel.find({ });

        return successHandler(res, 200, atmData);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const getMoney = async (req: Request, res: Response): Promise<Response> => {
    const { sum } = req.body

    try {
        const data = await AtmModel.find({ });

        const atmData = data[0];

        const atmSum = atmTemplateValue.reduce((acc, item) => {
            if (sum >= item) {
                return acc + atmData[item] * +item;
            }
            return acc;
        }, 0)

        if (atmSum < sum) {
            return successHandler(res, 200, ERROR_ATM_MESSAGE);
        }

        const reduceAtmMoney = (item, count) => {
            atmData[item] ? atmData[item] -= count : null
        }

        const testChangeWalletData = atmTemplateValue.reduce((acc, item) => {
            const { total } = acc

            if (total >= item && atmData[item]) {
                const count = Math.floor(total / item)

                const countFact = count > atmData[item] ? atmData[item] : count

                reduceAtmMoney(item, countFact);

                return { ...acc, [item]: countFact, total: total - item * countFact };
            }

            return acc;
        }, {total: sum})

        await AtmModel.findOneAndUpdate(
            { _id: '6159f7066e88151080b59384' },
            atmData ,
            { useFindAndModify: false }
        );

        const { total, ...data1 } = testChangeWalletData

        return successHandler(res, 200, data1 );
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