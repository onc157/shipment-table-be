import { Router } from 'express';
import { createWalletData, depositMoney, getWalletData } from '../controllers';

const walletRouter = Router();

walletRouter.get('/', getWalletData);

// walletRouter.post('/', createWalletData);

walletRouter.put('/', depositMoney);

export default walletRouter;