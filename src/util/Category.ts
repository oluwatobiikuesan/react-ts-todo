export interface ICategory{
    value: string
    label: string
}

class Category implements ICategory{
    value: string;
    label: string;
    constructor(value: string, label: string){
        this.value = value;
        this.label = label;
    }
}


export const DEFAULT_CATEGORIES : Category[] = [
    new Category("unknown", "No category"),
    new Category("garden", "Garden"),
    new Category("house", "House"),
    new Category("school", "School"),
    new Category("work", "Workplace")
];