/**实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。*/
// infer表示在 extends 条件语句中待推断的类型变量。
type First<T extends any[]> = T extends [infer first, ... infer last] ? first : never
// 如果T不是空数组则返回第一个值
// type First<T extends any[]> = T extends [] ? never : T[0];

// // 数组长度不为0则返回第一个值
// type First<T extends readonly any[]> = T["length"] extends 0 ? never : T[0];

// // T[number]表示的是数组中每一个值 T第一个值满足T[number] 则返回第一个值
// type First<T extends readonly any[]> = T[0] extends T[number] ? T[0] : never;
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
export default First;
