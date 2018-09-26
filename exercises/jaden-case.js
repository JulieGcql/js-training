'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(arr){
    let word = arr.split(" ");
    for(let i=0; i < word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase();
    }
    return word.join(" ");
}

//* Begin of tests
const assert = require('assert')

jadenCase('coucou JULIE tu vas bien')
// End of tests */
