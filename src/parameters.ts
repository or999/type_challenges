/**实现内置的 Parameters 类型*/
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
const foo = (arg1: string, arg2: number): void => { }

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
const result: FunctionParamsType = ['1', 2];
export default MyParameters;
