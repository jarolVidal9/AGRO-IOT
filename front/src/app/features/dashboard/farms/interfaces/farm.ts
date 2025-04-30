import { Sector } from "./sector";

export interface Farm {
    id: string;
    name: string;
    location: string;
    size: number;
    owner: string;
    sectors?: Sector[];
    createdAt?: Date;
    updatedAt?: Date;
}
