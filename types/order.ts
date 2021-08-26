export type ShopType = {
    name: String;
    orderNumber: String;
}

export type OrderType = {
    id: string;
    customer: string;
    item: string;
    status: string;
    orderDate: string | null;
    shipmentDate: string | null;
    shop: ShopType | null;
    weight: string | null;
    tracking: string | null;
    isArchive: Boolean;
}