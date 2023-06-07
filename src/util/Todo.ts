
import { IImportance } from "./Importance";
import { ICategory } from "./Category";




export interface ITodoDate{
    date: Date;
    allDay: boolean;
    time?: string;
}

export interface ITodo{
    name: string;
    description?: string;
    category: ICategory;
    date: ITodoDate;
    importance: IImportance;
}


export class Todo implements ITodo{
    name: string;
    description: string;
    category: ICategory;
    date: ITodoDate;
    importance: IImportance;
    constructor(name: string, description: string, category: ICategory, date: ITodoDate, importance: IImportance) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.date = date;
        this.importance = importance;
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