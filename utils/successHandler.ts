import { Response } from 'express';
import { OrderDocumentInterface } from '../models';

type DocumentTime =
    | OrderDocumentInterface
    | OrderDocumentInterface[]

export const successHandler = (res: Response, code: number, document: DocumentTime): Response =>
    res.status(code).json({
        success: true,
        payload: document,
    });