// The first two integers are the dimensions of the game screen as x
// and y values. We are setting it to 640 pixels across, and 480 pixels
// down. Note also that the 'gameDiv' parameter matches the div element
// defined in our index.html file 
var game = new Phaser.Game(320, 480, Phaser.AUTO, 'gameDiv',null,true);

// Here we add each state. We give it a casual name that we use when
// calling it (i.e. 'boot'), and an official name that we use when 
// defining it (i.e. bootState), as you'll see in the boot.js file
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameover', gameOverState);
var winGame = false;
var tomate;
var mouseBody;
var mouseConstraint;
var nubes;
var papas;
var nubear = ['nube', 'nube2', 'nube3', 'nube4'];
var melody;
var Timer = function(delayMs, callbackFunc) {
    this.delayMs = delayMs;
    this.callbackFunc = callbackFunc;
    this.timerState = 'new';
}
Timer.prototype.start = function() {
    if( this.tmr ) return;

    var self = this;
    this.timerState = 'running';
    this.tmr = setTimeout(function() { self._handleTmr(); }, this.delayMs);
}
Timer.prototype.cancel = function() {
    if( ! this.tmr ) return;

    clearTimeout(this.tmr);
    this.tmr = null;
    this.timerState = 'canceled';
}
Timer.prototype._handleTmr = function() {
    this.tmr = null;
    this.timerState = 'completed';
    this.callbackFunc();
}
var timer = new Timer(20000, function() {
    game.state.start('gameover');
});
// After all of the states are added, we start the game by calling the
// boot state
game.state.start('boot');