/**假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
 * 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。
 * 实现一个类型，可以获取这个类型*/
//简单实现：
// type MyAwaited<T> = T extends Promise<infer P> ? P : never;
// 高级实现，当返回Promise时依然能处理
type MyAwaited<T extends Promise<any>> = T extends Promise<infer K> ? K extends Promise<any> ? MyAwaited<K> : K : never;
// type ExampleType = Promise<string>;
type ExampleType = Promise<Promise<string>>;

type Result = MyAwaited<ExampleType> // string
export default MyAwaited;
