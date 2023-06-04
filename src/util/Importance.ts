
export interface IImportance{
    name: string;
    value: number;
    displayName: string;
    accentColor: string;
    onHoverText: string;
}

class Importance implements IImportance{
    name: string;
    value: number;
    displayName: string;
    accentColor: string;
    onHoverText: string;
    constructor(name: string, value: number, displayName: string, accentColor: string, onHoverText: string){
        this.name = name;
        this.value = value;
        this.displayName = displayName;
        this.accentColor = accentColor;
        this.onHoverText = onHoverText;
    }
}

export const IMPORTANCE_GRADES : Importance[] = [
    new Importance("Low", 0, "Not urgent", "#0A4B0A", "Low level importance grade"),
    new Importance("Mid", 1, "Should be done", "#E6C455", "Mid level importance grade"),
    new Importance("High", 2, "Needs to be done at any cost", "#C94D4D", "High level importance grade")
];