/**实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读*/
type DeepReadonly<T> = {
    readonly [K in keyof T]: keyof T[K] extends never ? T[K]:DeepReadonly<T[K]>
};
type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
export default DeepReadonly;
