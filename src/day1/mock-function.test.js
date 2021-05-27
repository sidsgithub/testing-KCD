/*
implementing a mock function.
**/

const { player } = require('../utils/player');
const shuffle = require('../utils/shuffle');
const songs = require('../utils/songs');
const assert = require('assert');
const { expect } = require('@jest/globals');

test('chekin if the mock function is called properly',()=>{
    const originalShufflePlay = shuffle.shufflePlay; 
    shuffle.shufflePlay = jest.fn(() => songs[0]); // built in junction in jest, used as a mock function
    console.log(shuffle.shufflePlay.mock);
    expect(player(1)).toBe('In the End');
    expect(player(1)).toBe('In the End');
    expect(shuffle.shufflePlay).toHaveBeenCalledTimes(2);
    expect(shuffle.shufflePlay).toHaveBeenCalledWith();
    expect(shuffle.shufflePlay).toHaveBeenNthCalledWith(1);
    expect(shuffle.shufflePlay).toHaveBeenNthCalledWith(2);

    //clean up 
    shufflePlay = originalShufflePlay;
})

