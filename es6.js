// var , let , const

function foo() {
    // `var` is function-scoped
    var a = 1;
  
    // `let` is block-scoped
    {
      let b = 2;
  
      // `const` is block-scoped and cannot be reassigned
      const c = 3;
  
      console.log(a, b, c); // 1 2 3
    }
  
    console.log(a, b, c); // 1 undefined undefined
  }

// ------------------------------------------------------------------------------
// Arrow Function

// const add = function (a , b){
//     return a + b
// }
// const Arrow = (a , b) => a + b  // implicit return value when code is one line

// // solve the problem of `this` keyword

// function inc(){
//     this.age = 10;
//         setInterval(function() {
//         this.age++;
//         }, 500);
// }
// var x =new inc();
// setInterval(function() {
//     // console.log(x.age)       // 10 10 10 10 10 10 ....

// },500
// );
// function inc(){
//     this.age = 10;
//         setInterval(() => {    // arrow function
//         this.age++;
//         }, 500);
// }
// var x =new inc();
// setInterval(function() {
//     // console.log(x.age)     // 11 12 13 14 15 16 ......
// },500
// )




// let test = function () {
//     return function (){             // convert this 
//         return {name: "ahmed"}
//     };
// };


let test =() =>()=> ({name: "ahmed"}); // to this
