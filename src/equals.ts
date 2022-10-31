/**判断X,Y是否相等*/
type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Result = Equals<{ a: string }, { a: number }>
export default Equals;
