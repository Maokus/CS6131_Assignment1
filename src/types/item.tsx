export default interface Item {
    name: string;
    id: string;
    status: string;
    remark: string;
    totalQuantity: number;
    remainingQuantity: number;
    possesor?: string | null; // Will be null if more than 1 item
    timeOfAquisition?: Date | null;
}