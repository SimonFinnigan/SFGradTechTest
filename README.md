# GradTechTest

## Two objects

To solve this test I initially had to declare two objects, one for the medal table (which would initially be empty) and another which would help decide which points each country was awarded.

## Loop within a loop

I had to use two loops; one loop to go through the 'medals' array and another which would loop within the first array. This enabled me to split each country in the array between the placing number and the country name.

## First and second position

Once both the number and country was split I was able to access them using bracket notation.

## Global function

A global function has been created to check if the country exists on the medal table.

## Build data structure

First and second positions are injected into the medal table object which is then returned as the desired data structure.

### Dependencies

Please type `'npm i'` into the terminal to install jest and `'npm t'` to test the function.
