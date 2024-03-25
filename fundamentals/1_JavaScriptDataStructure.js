// Dynamic and weak typing

/*
JavaScript is a dynamic language with dynamic types. Variables in JS are not directly assocated with any particular value type, and any variable can be assigned or re-assigned values of all types.

Dynamic language:- In computer science, a dynamic language is a class of high-level programming language, which at runtime execute many common programming behaviours that staic programming language perform during compilation.

Dynamic type checking:- Dynamic type checking is a process of verifying the type safety of a program at runtime.
*/

let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

// JavaScript is also a weakly types language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type error.

let foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
