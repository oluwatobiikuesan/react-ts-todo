
import { IImportance } from "./Importance";
import { ICategory } from "./Category";




export interface TodoDate{
    date: Date;
    allDay: boolean;
    time?: string;
}

export interface ITodo{
    name: string;
    description?: string;
    category: ICategory;
    date: TodoDate;
    importance: IImportance;
}


export class Todo implements ITodo{
    name: string;
    description: string;
    category: ICategory;
    date: TodoDate;
    importance: IImportance;
    constructor(name: string, description: string, category: ICategory, date: TodoDate, importance: IImportance) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.date = date;
        this.importance = importance;
    }
}