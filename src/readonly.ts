interface Todo {
    title: string
    description: string
}
/**该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰*/
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
export default MyReadonly;
