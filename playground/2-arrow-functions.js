// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// this is only recommended for single returns 
// const square = (x) => x * x

// console.log(square(5))

// const event = {
//     name: 'event name',
//     printGuestList: function() {
//         console.log('guest list for ' + this.name)
//     }
// }

const event = {
    name: 'event name',
    guestList: ['name1', 'name2', 'name3'],
    printGuestList() {
        console.log('guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

console.log(event.printGuestList())