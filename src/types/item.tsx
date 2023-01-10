export default interface Item {
    name: string;
    description: string;
    possesor: string | null;
    timeOfAquisition?: Date;
}