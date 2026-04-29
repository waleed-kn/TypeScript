// function identityFour<T>(val: T): T {
//     return val;
// }

// interface bottle {
//     brand: string,
//     type: number
// }

// identityFour<bottle>({
//     brand: "Nestle",
//     type: 1
// });

// function myArray<T>(product: T[]): T | undefined {
//     const myIndex = 3;
//     return product[myIndex];
// }

const getMoreSearch = <T>(products: T[]): T | undefined => {
    const myIndex = 3;
    return products[myIndex];
}