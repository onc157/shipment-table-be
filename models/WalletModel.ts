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
        type: String,
    },
    2000: {
        type: String,
    },
    1000: {
        type: String,
    },
    500: {
        type: String,
    },
    200: {
        type: String,
    },
    100: {
        type: String,
    }
});

export const WalletModel = model<WalletDocumentInterface, Model<WalletDocumentInterface>>(
    'wallet',
    WalletSchema
);