var gameOverState = {

    create: function() {
        gameover = game.add.sound('gameoverS');	
        gameover.play();
        timer.cancel();
        var sprite = game.add.tileSprite(0, -50, 320, 1278, 'gameover');
        sprite.alpha = 0;
        game.add.tween(sprite).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true);

    },
    
    // The restart function calls the menu state    
    restart: function () {
        game.state.start('menu');    
    }, 	
}
