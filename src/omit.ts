import MyExclude from "./exclude"

/**实现omit
 * 创建一个省略K中字段的T对象*/
type MyOmit<T, K extends string | number | symbol> = {
    [P in MyExclude<keyof T, K>]: T[P]
}
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}
export default MyOmit;
