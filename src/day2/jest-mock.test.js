// in case of an ES module situation, monkey patching wont work so what we do is use jest.mock
jest.mock('../utils/shuffle', (songs)=>{
    return {
        shufflePlay: jest.fn(() => songs[0])
    }
})
test('song to be played : in the end',()=>{
    // we use spyon insted of storing the original function to clear at the end.
    const mocked = jest.spyOn(shuffle,'shufflePlay'); 
    // mocking the implementation using the mocked function.
    mocked.mockImplementation();
    assert.strictEqual('In the End', player(1));
    // cleanup
    shuffle.shufflePlay.mockReset()
})