///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalFujiAcres = 0;
let totalGalaAcres = 0
let totalPinkAcres = 0
for (let i = 0; i < fujiAcres.length; i++){
    totalFujiAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++){
    totalGalaAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++){
    totalPinkAcres += pinkAcres[i]
}

let totalAcres = 0
totalAcres = totalFujiAcres + totalGalaAcres + totalPinkAcres
console.log(`Total Acres picked throughout the week were: ${totalAcres} acres.`)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = Math.trunc(totalAcres / (fujiAcres.length+galaAcres.length+pinkAcres.length))
//searched up how to shorten decimals on google to get math function to make log look better. :P 

console.log(`The average daily acres of Apples picked were: ${averageDailyAcres} acres.`)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days++
    acresLeft -= averageDailyAcres
}
console.log(`It took ${days} days to pick the rest of the apples.`)
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiAcresCopy = fujiAcres
let galaAcresCopy = galaAcres
let pinkAcresCopy = pinkAcres


fujiAcresCopy.forEach((element, index ) =>{
    fujiAcresCopy[index] = element * 6.5
})

galaAcresCopy.forEach((element, index) =>{
    galaAcresCopy[index] = element * 6.5
})

pinkAcresCopy.forEach((element, index) =>{
    pinkAcresCopy[index] = element * 6.5
})

//used google to help me use arr.forEach statements still dont fully understand how it works but i have a vague idea

let fujiTons = fujiAcresCopy
let galaTons = galaAcresCopy
let pinkTons = pinkAcresCopy

console.log(`The daily tons of Fuji Apples picked were ${fujiTons} tons`)
console.log(`The daily tons of Gala Apples picked were ${galaTons} tons`)
console.log(`The daily tons of Pink Apples picked were ${pinkTons} tons`)
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 


let fujiTonsCopy = fujiTons;
let galaTonsCopy = galaTons;
let pinkTonsCopy = pinkTons;
//used arr.splice method to replace values in the copied arrays
for (let i = 0; i < fujiTonsCopy.length; i++){
    fujiTonsCopy.splice(i,1,fujiTonsCopy[i]*2000)
}

for (let i = 0; i < galaTonsCopy.length; i++){
    galaTonsCopy.splice(i,1,galaTonsCopy[i]*2000)
}

for (let i = 0; i < pinkTonsCopy.length; i++){
    pinkTonsCopy.splice(i,1,pinkTonsCopy[i]*2000)
}
//transfered the values from the copied arrays to the pounds arrays
let fujiPounds = fujiTonsCopy
let galaPounds = galaTonsCopy
let pinkPounds = pinkTonsCopy

console.log(`The pounds of Fuji Apples picked per day were ${fujiPounds} pounds`)
console.log(`The pounds of Gala Apples picked per day were ${galaPounds} pounds`)
console.log(`The pounds of Pink Apples picked per day were ${pinkPounds} pounds`)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//made a copy of the pounds variables so nothing gets messed up
let fujiPoundsCopy = fujiPounds
let galaPoundsCopy = galaPounds
let pinkPoundsCopy = pinkPounds
//made the profit values integers so i dont get array values
let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

for (let i = 0; i < fujiPoundsCopy.length; i++){
    fujiPoundsCopy.splice(i,1,fujiPoundsCopy[i]*fujiPrice)
    fujiProfit += fujiPoundsCopy[i]
}
for (let i = 0; i < galaPoundsCopy.length; i++){
    galaPoundsCopy.splice(i,1,galaPoundsCopy[i]*galaPrice)
    galaProfit += galaPoundsCopy[i]
}
for (i = 0; i < pinkPoundsCopy.length; i++){
    pinkPoundsCopy.splice(i,1,pinkPoundsCopy[i]*pinkPrice)
    pinkProfit += pinkPoundsCopy[i]
}
console.log(`The profit made from selling the Fuji Apples at $${fujiPrice} was $${fujiProfit}.`)
console.log(`The profit made from selling the Gala Apples at $${galaPrice} was $${galaProfit}.`)
console.log(`The profit made from selling the Pink Apples at $${pinkPrice} was $${pinkProfit}.`)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE


// took the individual profit values from the profit variables and added them all up to make the total profit
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(`The total profit made from selling all the apples from the week was $${totalProfit}`)