const modulA = require('./zad2.js');

function funkcjaB() {
    console.log('Funkcja z modułu B');
    modulA.funkcjaA();
}

module.exports = {
    funkcjaB: funkcjaB
};