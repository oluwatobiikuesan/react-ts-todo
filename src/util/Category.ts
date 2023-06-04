export interface ICategory{
    value: string
    label: string
}

export class Category implements ICategory{
    value: string;
    label: string;
    constructor(value: string, label: string){
        this.value = value;
        this.label = label;
    }
}

export const NO_CAT = new Category("unknown", "No category");

export const DEFAULT_CATEGORIES : ICategory[] = [
    NO_CAT,
    new Category("garden", "Garden"),
    new Category("house", "House"),
    new Category("school", "School"),
    new Category("work", "Workplace")
];