import { Router } from 'express';
import {createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder} from "../controllers";

const ordersRouter = Router();

/**
 * GET ORDERS LIST
 */
ordersRouter.get('/', getAllOrders);

/**
 * GET ORDER
 */
ordersRouter.get('/:id', getOrderById);

/**
 * CREATE ORDER
 */
ordersRouter.post('/', createOrder);

/**
 * UPDATE ORDER
 */
ordersRouter.put('/:id', updateOrder);


/**
 * DELETE ORDER
 */
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
