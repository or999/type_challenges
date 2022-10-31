import Equals from "./equals";
/**在类型系统里实现 JavaScript 的 Array.includes 方法，
 * 这个类型接受两个参数，返回的类型要么是 true 要么是 false*/
type Includes<M extends readonly any[], K> =
    M extends [infer First, ...infer Rest]
    ? Equals<First, K> extends true ? true : Includes<Rest, K>
    : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
export default Includes;
