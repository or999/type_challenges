/**从联合类型T中排除U的类型成员，来构造一个新的类型*/
// 对于使用extends关键字的条件类型（即上面的三元表达式类型），
// 如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。
// 分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，
// 得到最终的判断结果
type MyExclude<T, U> = T extends U ? never : T
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
export default MyExclude;
