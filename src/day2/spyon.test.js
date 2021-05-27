const { player } = require('../utils/player');
const shuffle = require('../utils/shuffle');
const songs = require('../utils/songs');
const assert = require('assert')

// using spyOn is still a form of monkey-patching
test('song to be played : in the end',()=>{
    // we use spyon insted of storing the original function to clear at the end.
    const mocked = jest.spyOn(shuffle,'shufflePlay'); 
    // mocking the implementation using the mocked function.
    mocked.mockImplementation(() => songs[0]);
    assert.strictEqual('In the End', player(1));
    // cleanup
    mocked.mockRestore();
})


