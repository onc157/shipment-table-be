import { Schema, Document, model, Model } from 'mongoose';

export interface WalletInterface {
    5000: number;
    2000: number;
    1000: number;
    500: number;
    200: number;
    100: number;
}

export interface WalletDocumentInterface extends WalletInterface, Document {}

const WalletSchema: Schema<WalletDocumentInterface> = new Schema<WalletDocumentInterface>({
    5000: {
        type: Number,
    },
    2000: {
        type: Number,
    },
    1000: {
        type: Number,
    },
    500: {
        type: Number,
    },
    200: {
        type: Number,
    },
    100: {
        type: Number,
    }
});

export const WalletModel = model<WalletDocumentInterface, Model<WalletDocumentInterface>>(
    'wallet',
    WalletSchema
);