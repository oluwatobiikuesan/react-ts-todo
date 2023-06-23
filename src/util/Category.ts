
import { generateKey } from "./Key";

export interface ICategory{
    id: number;
    value: string;
    label: string;
}

export class Category implements ICategory{
    id: number;
    value: string;
    label: string;
    constructor(id: number, value: string, label: string){
        this.id = id;
        this.value = value;
        this.label = label;
    }
}

export const NO_CAT = new Category(0, "unknown", "No category");

export const DEFAULT_CATEGORIES : ICategory[] = [
    NO_CAT,
    new Category(generateKey(),"garden", "Garden"),
    new Category(generateKey(),"house", "House"),
    new Category(generateKey(),"school", "School"),
    new Category(generateKey(),"work", "Workplace")
];