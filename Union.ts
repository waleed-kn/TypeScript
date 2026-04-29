let score: number | string = 33;
score = 231;
score = "213";
type user = {
    name: string;
    id: number
}
type admin = {
    username: string;
    id: number
}
let waleed: user | admin = { name: "Khan", id: 3231 };
waleed = { username: "Muhammad", id: 3231 }


let grades: number[] = [2];
let grades1: (number | string[]) = ["b",];
let SeatAlloment: "side" | "middle" | "window"
SeatAlloment = "side";