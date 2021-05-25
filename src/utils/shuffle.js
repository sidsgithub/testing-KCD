const songs = require('./songs')
const shufflePlay = () => songs[Math.floor(Math.random()*4)];

module.exports = {shufflePlay}
