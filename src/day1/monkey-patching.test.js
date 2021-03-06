/*
Monkey patching is a technique to add, modify, or suppress the default behavior of a piece of code
at runtime without changing its original source code.

Here, we intend to overwrite the function using monkey patching to mock it to  our requirements
**/

const { player } = require('../utils/player');
const shuffle = require('../utils/shuffle');
const songs = require('../utils/songs');
const assert = require('assert')

const originalShufflePlay = shuffle.shufflePlay; // storing the original method to clear afterwards
shuffle.shufflePlay = () => songs[0]; // monkey patching shufflePlay function  to always  return 'In the  End'

test('song to be played : in the end',()=>{
    assert.strictEqual('In the End', player(1));
})

shufflePlay = originalShufflePlay;