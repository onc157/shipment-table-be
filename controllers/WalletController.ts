import { Request, Response } from 'express';
import { errorHandler, successHandler } from '../utils';
import { WalletModel } from '../models';

export const getWalletData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const walletData = await WalletModel.find({ });

        return successHandler(res, 200, walletData);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

// export const depositMoney = async (req: Request, res: Response): Promise<Response> => {
//     let { sum } = req.body
//
//     try {
//         const atmData = await AtmModel.find({ });
//
//         const newAtmData = atmData[0];
//
//         let atmSum = 0;
//
//         atmTemplateValue.forEach((elem) => {
//             atmSum += newAtmData[elem] * +elem
//         })
//
//         if (atmSum < sum) {
//             errorHandler(res, 500, 'The operation is not possible. There is no money in the ATM');
//         }
//
//         const atmChangeData = {};
//
//         const reduceAtmMoney = (item) => {
//             newAtmData[item] ? newAtmData[item] -= 1 : null
//         }
//
//         const changeAtmChangeData = (item) => {
//             atmChangeData[item] ? atmChangeData[item] += 1 : atmChangeData[item] = 1
//         }
//
//         atmTemplateValue.reduce((result, item) => {
//
//             if (sum >= item) {
//                 const count = Math.floor(sum / item)
//
//                 for (let i = 0; i < count; i++) {
//                     sum = sum - item
//
//                     reduceAtmMoney(item);
//                     changeAtmChangeData(item);
//                 }
//             }
//
//             return result
//         }, {})
//
//         await AtmModel.findOneAndUpdate(
//             { _id: '6158c9d6e0c0db0416baf299' },
//             newAtmData ,
//             { useFindAndModify: false }
//         );
//
//         return successHandler(res, 200, atmChangeData);
//     } catch (e: unknown) {
//         if (!(e instanceof Error)) throw e;
//
//         return errorHandler(res, 500, e.message);
//     }
// }

// export const createWalletData = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const atmData = {
//             "5000": 1,
//             "2000": 1,
//             "1000": 1,
//             "500": 1,
//             "200": 1,
//             "100": 1,
//         };
//
//         const atmDoc = await WalletModel.create(atmData);
//
//         await atmDoc.save();
//
//         successHandler(res, 200, atmDoc);
//     } catch (e: unknown) {
//         if (!(e instanceof Error)) throw e;
//
//         return errorHandler(res, 500, e.message);
//     }
// }