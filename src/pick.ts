interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
/**从类型T中选择出属性K，构造一个新的类型*/
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
const todoPreview: TodoPreview = {
    title: 'To do Preview',
    completed: true
}
export default MyPick;
