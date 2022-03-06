// export function fn() {
//     console.log('fn')
// }
// export const name = 'b'

function fn() {
    console.log('fn')
}
const name = 'b'

// 如果只想导出一个，则使用export default，import的时候不再使用解构赋值 
export {  // 注意这里不能有 default ！！！ 
    fn,
    name
}