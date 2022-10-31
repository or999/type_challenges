'use strict';

/**传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来*/
type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P;
}

// as const 被称为 const 类型断言，const 类型断言告诉编译器，要将这个表达式推断为最具体的类型，
// 如果不使用它的话，编译器会使用默认的类型推断行为，可能会把表达式推断为更通用的类型
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type Result = TupleToObject<typeof tuple>
const result: Result = {
    tesla: 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
}
export default TupleToObject;
