
import { IImportance } from "./Importance";
import { ICategory } from "./Category";
import { generateKey } from "./Key";




export interface ITodoDate{
    date: Date;
    allDay: boolean;
    time?: string;
}

export interface ITodo{
    id: number;
    name: string;
    description?: string;
    category: ICategory;
    date: ITodoDate;
    importance: IImportance;
    isCompleted: boolean;
}


export class Todo implements ITodo{
    id: number;
    name: string;
    description: string;
    category: ICategory;
    date: ITodoDate;
    importance: IImportance;
    isCompleted: boolean;
    constructor(name: string, description: string, category: ICategory, date: ITodoDate, importance: IImportance, isCompleted: boolean) {
        this.id = generateKey();
        this.name = name;
        this.description = description;
        this.category = category;
        this.date = date;
        this.importance = importance;
        this.isCompleted = isCompleted;
    }
}

export class TodoDate implements ITodoDate{
    date: Date;
    allDay: boolean;
    time?: string;
    constructor(date: Date, allDay: boolean, time?: string) {
        this.date = date;
        this.allDay = allDay;
        this.time = time;
    }
}