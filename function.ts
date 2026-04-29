function addTwo(num: number) {
    return num + 2;
}
console.log(addTwo(5));  // 👈 add this
function person(name: string) {
    return name;
}
console.log(person("Waleed"));
function signUpUSer(name: string, email: string, password: number, ispaid: boolean) {
    return { name, email, password, ispaid };
}
console.log(signUpUSer("waleed", "waleed.se@gmail.com", 2313, true));

// const heros=["thor", "spiderman","waleed"]
const heros = [1, 2, 3, 4]
heros.map((hero) => {
    return `hero is ${hero}`

});
function error(err: string): void {
    console.log(err);

}
function handlerror(errmsg: string): never {
    throw new Error(errmsg);
}


export { };