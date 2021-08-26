import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import * as storage from '../storage/fs'

const router = Router();

// GET /order - get list = []
// GET /order/:id - get order = {}
// POST /order - create order = {}
// PUT /order/:id - update order = {}
// DELETE /order/:id - delete order = null, 204

/**
 * GET ORDERS LIST
 */
router.get('/', async (req, res, next) => {
  const list = await storage.listAll();

  res.json(list);
});

/**
 * GET ORDER
 */
router.get('/:id', async (req, res, next) => {
  const item = await storage.getById(req.params['id'])

  res
      .status(item ? 200 : 404)
      .json(item ?? {
        statusCode: 404
      });
});

/**
 * CREATE ORDER
 */
router.post('/', async (req, res, next) => {
  const id = uuid();

  const { body } = req;

  body.id = id;

  const newBody = await storage.create(body);

  res.json(newBody);
});

/**
 * UPDATE ORDER
 */
router.put('/:id', async (req, res, next) => {
  const { body } = req;

  const newBody = await storage.update({
    ...body,
    id: req.params.id
  });

  res.json(newBody);
});


/**
 * DELETE ORDER
 */
router.delete('/:id', async (req, res, next) => {
  await storage.remove(req.params['id']);

  res
      .status(204)
      .json(null);
});

export default router;
