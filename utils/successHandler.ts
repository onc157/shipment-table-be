import { Response } from 'express';
import { OrderDocumentInterface } from '../models';
import { AtmDocumentInterface } from '../models/AtmModel';

type DocumentTime =
    | OrderDocumentInterface
    | OrderDocumentInterface[]
    | AtmDocumentInterface | {}
    | AtmDocumentInterface[]

export const successHandler = (res: Response, code: number, document: DocumentTime): Response =>
    res.status(code).json({
        success: true,
        payload: document,
    });