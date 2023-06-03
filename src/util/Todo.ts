
import { Importance } from "./Importance";
import { ICategory } from "./Category";




export interface TodoDate{
    date: Date;
    allDay: boolean;
    time?: string;
}

export interface Todo{
    name: string;
    description?: string;
    category: ICategory;
    date: TodoDate;
    importance: Importance;
}