export type TypeStatus = 'completed' | 'pending' | 'in proccess'

export interface TodoDto {
    title: string;
    description: string;
    status: TypeStatus,
}

export interface IUpdateAndDestroyTodoParams {
    id: string;
}