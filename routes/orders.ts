import { Router } from 'express';
import passport from 'passport';
import {createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder} from "../controllers";

const ordersRouter = Router();

/**
 * GET ORDERS LIST
 */
ordersRouter.get('/', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), getAllOrders);

/**
 * GET ORDER
 */
ordersRouter.get('/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), getOrderById);

/**
 * CREATE ORDER
 */
ordersRouter.post('/', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), createOrder);

/**
 * UPDATE ORDER
 */
ordersRouter.put('/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), updateOrder);


/**
 * DELETE ORDER
 */
ordersRouter.delete('/:id', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), deleteOrder);

export default ordersRouter;
