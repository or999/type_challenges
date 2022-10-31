/**实现 TypeScript 的 ReturnType<T> 泛型*/
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer K ? K : never;
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
export default MyReturnType;
