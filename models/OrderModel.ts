import { Schema, Document, model, Model } from 'mongoose';

export interface OrderInterface {
    customer: string;
    item: string;
    status: string;
    orderDate: string;
    shipmentDate: string | null;
    shop: ShopType | null;
    weight: string | null;
    tracking: string | null;
    isArchive: Boolean;
}

export type ShopType = {
    name: String;
    orderNumber: String;
}

export interface OrderDocumentInterface extends OrderInterface, Document {};

const OrderSchema: Schema<OrderDocumentInterface> = new Schema<OrderDocumentInterface>({
    customer: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    shipmentDate: {
        type: Date,
    },
    shop: {
        name: { type: String, },
        orderNumber: { type: String, }
    },
    weight: {
        type: String,
    },
    tracking: {
        type: String,
    },
    isArchive: {
        type: Boolean,
        default: false,
    },
});

export const OrderModel = model<OrderDocumentInterface, Model<OrderDocumentInterface>>(
    'order',
    OrderSchema
);