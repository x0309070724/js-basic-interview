// 自由变量 --内存会被释放
let a = 1;
function fn1() {
  let b = 2;
  function fn2() {
    let c = 3;
    function fn3() {
      let d = 4;
      return d + c + b + a;
    }
    fn3();
  }
  fn2();
}

fn1();

// 函数作为返回值 --内存不会被释放（a = 100）
function create() {
  let a = 100;
  return function () {
    a++;
    console.log(a);
  };
}

const fn = create();
const a = 200;
fn(); // 101
fn(); // 102

// 函数作为参数被传递 --内存不会被释放（a = 100）
// function print(fn) {
//     const a = 200
//     fn()
// }
// const a = 100
// function fn() {
//     console.log(a)
// }
// print(fn) // 100

// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！
// this指向的值，是在函数执行的时候确定的，不是在定义的时候
