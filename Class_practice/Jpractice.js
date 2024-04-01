// const count = 12
// const heading =`This is the heading to concatenate the  string ${count}`
// document.write(heading);
// document.write("\n")
/*let arr = [1, 2, 1, 3, 1, 4, 2]

arr.forEach(element => {
    document.write(arr[element]+ " ")
});

function countOccurrences(arr) {
        let counts = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }
    for (let num in counts) {
        console.log(num + " occurs " + counts[num] + " time(s)");
    }
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 1];
docountOccurrences(numbers);
*/
// const obje = {Name: "Zahid", age: 100, gender: "Male", countrycode:"+92"};
// console.log(obje)

//const{Name, age,...rest} = obje
// const newObje = obje;
// const obje3 = {...obje}
// //newObje.age= 100;
// console.log(newObje)
// obje3.age = 200
// console.log(obje3)

// var arr1 = [1, 2,3, 4, 5]
// var arr2 = arr1;
// var arr3 = [...arr1]
// arr2[0] = 2;
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// function getData() {
//     return new Promise((resolve, reject) => {
//         // Simulating an asynchronous operation (e.g., fetching data from an API)
//         setTimeout(() => {
//             const data = [1, 2, 3, 4, 5];
//             // Simulating successful completion
//             resolve(data);
//             // Simulating failure
//             // reject(new Error('Failed to fetch data'));
//         }, 2000); // Simulating a delay of 2 seconds
//     });
// }

// //console.log(getData())
// getData().then (data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//      });

function getRandomPromise() {
    return new Promise((resolve, reject) => {
        // Simulating a delay of 5 seconds
        setTimeout(() => {
            // Randomly resolve or reject the Promise
            const randomNum = Math.random(1, 10);
            if (randomNum%2 == 0) {
                resolve(`Promise resolved successfully ${randomNum}`);
            } else {
                reject(new Error(`Promise rejected ${randomNum}`));
            }
        }, 5000); // 5 seconds delay
    });
}

// Consuming the Promise
getRandomPromise()
    .then(data => {
        console.log('Promise resolved:', data);
    })
    .catch(error => {
        console.error('Promise rejected:', error.message);
    });
