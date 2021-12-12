/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数の再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //　letは再宣言不可能
// let var2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "count変数";
// console.log(val3);

// // const変数は上書き可能
// val3 = "coust変数を上書き";
// console.log(val3);

// //　constは再宣言不可能
// const var3 = "const変数を再宣言";
// console.log(val3);

// オブジェクトや配列はconstでも変更可能
// const val4 = {
//   name: "A",
//   age: 26
// };
// console.log(val4);

// val4.name = "B";
// console.log(val4);

// const val5 = ["dog", "cat"];

// val5[0] = "bard";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Atsuko";
// const age = 26;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //　テンプレート文字レスを用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数の書き方
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("Func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("Func2です"));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Atsuko",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["Atsuko", 26];
// const [name, age] = myProfile;

// const message3 = `名前は${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHallo = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

// sayHallo("Ay");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["A", "B", "C"];

// //従来の書き方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// // mapを使用した書き方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目はは${name}です。`));

// //filter
// const numArr3 = [1, 2, 3, 4, 5];
// const numArr4 = numArr3.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(numArr4);
