// function createuser(user: { name: string; age: number }) {
//     console.log(user.name, user.age);
// }

// createuser({ name: "waleed", age: 20 });

// function createuser(user: { name: string, age: boolean }) {
//     console.log(user.name, user.age);

// }
// createuser({ name: "waleed", age: true });

function login(userlogin: { username: string, password: number }) {
    console.log(userlogin.username, userlogin.password);
}
login({ username: "waleed-kn", password: 3322 });
function course(): { name: string, subject: string } {
    return { name: "waleed", subject: "TypeScript" };
}
console.log(course());

export { };