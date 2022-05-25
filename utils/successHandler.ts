import { Response } from 'express';
import {OrderDocumentInterface, UserDocumentInterface} from '../models';

type DocumentTime =
    | OrderDocumentInterface
    | OrderDocumentInterface[]
    | UserDocumentInterface[]

export const successHandler = (res: Response, code: number, document: DocumentTime): Response =>
    res.status(code).json({
        success: true,
        payload: document,
    });