// type user = {
//     name: string;
//     age: number;
// };
// // let user1: user = {
// //     name: "waleed khan",
// //     age: 20
// // };
// // console.log(user1);

// function printuser(user: user) {
//     console.log(user.name, user.age);
// }


// printuser({ name: "Khan", age: 20 });
type users = {
    readonly _id: number,
    name: string,
    age: number,
    isActive: boolean,
    CreaditCard?: number
}
let MyUser: users = {
    _id: 16799,
    name: "waleed",
    age: 20,
    isActive: true

}
MyUser.name = "khan"