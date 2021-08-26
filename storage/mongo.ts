import { MongoClient } from 'mongodb';
import {OrderType} from "../types/order";

const url = `mongodb+srv://onc157:987lkj654@clustertableshipment.mpapu.mongodb.net/?retryWrites=true&w=majority`;

const dbName = 'shipmentTable';
const collectionName = 'orders';

let mongoInstance;

const getMongoInstance = async () => {
    const client = await MongoClient.connect(url);

    return client.db('shipmentTable');
};

const listAll = async () => {
    const db = await getMongoInstance();

    const collection = await db.collection(collectionName);

    return collection.find({});
};

const getById = async (id: string) => {

};

const create = async (order: OrderType) => {

};

const update = async (order: OrderType) => {

};

const remove = async (id: string) => {

};

export {
    listAll,
    getById,
    create,
    update,
    remove
}