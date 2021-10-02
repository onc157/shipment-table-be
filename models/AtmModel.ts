import { Schema, Document, model, Model } from 'mongoose';

export interface AtmInterface {
    5000: number;
    2000: number;
    1000: number;
    500: number;
    200: number;
    100: number;
}

export interface AtmDocumentInterface extends AtmInterface, Document {};

const AtmSchema: Schema<AtmDocumentInterface> = new Schema<AtmDocumentInterface>({
    5000: {
        type: String,
        required: true
    },
    2000: {
        type: String,
        required: true
    },
    1000: {
        type: String,
        required: true
    },
    500: {
        type: String,
        required: true
    },
    200: {
        type: String,
        required: true
    },
    100: {
        type: String,
        required: true
    }
});

export const AtmModel = model<AtmDocumentInterface, Model<AtmDocumentInterface>>(
    'atm',
    AtmSchema
);