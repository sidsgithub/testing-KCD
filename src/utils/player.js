const shuffle = require('./shuffle');

const player = (shuffleplay) => 
    shuffleplay ? shuffle.shufflePlay() : 'Lofi Music' (Math.floor(Math.random()*2));

module.exports = {player};