export interface Todo {
    id: number;
    description: string;
    isDone: boolean;
    targetDate: Date;
    ownedUser: string;
}