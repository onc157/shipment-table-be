import { Router } from 'express';
import { getMoney, getAtmData } from '../controllers';

const atmRouter = Router();

atmRouter.get('/', getAtmData);

// atmRouter.post('/', createAtmData);

atmRouter.put('/', getMoney);

export default atmRouter;