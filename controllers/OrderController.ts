import { Request, Response } from 'express';
import { OrderModel, OrderInterface } from "../models";
import {errorHandler, successHandler} from '../utils';


export const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
    try {
        const orders = await OrderModel.find({ });

        return successHandler(res, 200, orders);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const getOrderById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        const order = await OrderModel.find({ _id: id });

        if (!order.length) {
            return errorHandler(res, 404, 'Order not found');
        }

        return successHandler(res, 200, order);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const createOrder = async (req: Request, res: Response): Promise<Response> => {
    const orderData = req.body;

    try {
        const orderDoc = await OrderModel.create(orderData);

        await orderDoc.save();

        successHandler(res, 201, orderDoc);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const updateOrder = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const orderData = req.body;

    try {
        const order = await OrderModel.findOneAndUpdate(
            { _id: id },
            orderData ,
            { new: true, useFindAndModify: false }
        );

        console.log(order)

        if (!order) {
            return errorHandler(res, 404, 'Order not found');
        }

        successHandler(res, 200, order);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}

export const deleteOrder = async (req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;

    try {
        const order = await OrderModel.findOneAndDelete(
            { _id: id }
        );

        if (!order) {
            return errorHandler(res, 404, 'Order not found');
        }

        successHandler(res, 200, order);
    } catch (e: unknown) {
        if (!(e instanceof Error)) throw e;

        return errorHandler(res, 500, e.message);
    }
}