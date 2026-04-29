interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}
interface story {
    createStory(): void
}
class instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) { }
}
class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: number
    ) { }
    createStory(): void {
        console.log("story was created")
    }
}