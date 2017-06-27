var winState = {

    create: function() {	
        timer.cancel();
        wingame = game.add.sound('winS');	
        wingame.play();
        var sprite = game.add.tileSprite(0, -50, 320, 1278, 'wingame');
        sprite.alpha = 0;
        game.add.tween(sprite).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true);
      
        
    },
    
    // The restart function calls the menu state    
    restart: function () {
        game.state.start('menu');    
    }, 	
}
