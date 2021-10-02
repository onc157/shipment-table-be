import { Router } from 'express';
import { getAtmData } from '../controllers';

const atmRouter = Router();

atmRouter.get('/', getAtmData);

// atmRouter.post('/', createAtmData);

export default atmRouter;