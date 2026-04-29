interface user {
    readonly dbId: number,
    gmail: string,
    googleCode?: number,
    startTrail(): string,

}
interface user {
    GitHub: string
}
interface admin extends user {
    role: "admin" | "weq" | "we"
}
const User1: admin = {
    dbId: 123, gmail: "wwda", googleCode: 123, role: "admin", GitHub: "github",
    startTrail() {
        return "waleed"
    },
}