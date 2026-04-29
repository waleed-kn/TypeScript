abstract class animal {
    abstract makesound(): void;
    move() {
        console.log("dog is moving ")
    }
}
class dogs extends animal {
    makesound(): void {
        console.log("dog is barking")
    }
}
const d = new dogs();
d.makesound();
d.move();