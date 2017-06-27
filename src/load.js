var loadState = {

    // The preload function is another standard Phaser function that we
    // use to define and load our assets
    preload: function () {
        var loadingBar = game.add.sprite(game.width / 2, game.height / 2, "loading");
        loadingBar.anchor.setTo(0.5, 1);
        game.load.setPreloadSprite(loadingBar, 0);
        game.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';
        
        game.load.image('tomate', 'assets/tomate_small.png');
        game.load.image('papas', 'assets/papas.png');
        game.load.image('nube', 'assets/nube1.png');
        game.load.image('nube2', 'assets/nube2.png');
        game.load.image('nube3', 'assets/nube3.png');
        game.load.image('nube4', 'assets/nube4.png');
        game.load.image('background', 'assets/fondo.jpg');
        game.load.image('gameover', 'assets/gameOver.jpg');
        game.load.image('wingame', 'assets/winGame.jpg');
        game.load.audio('tap', ['assets/audio/tap.ogg', 'assets/audio/tap.mp3']);
        game.load.audio('gameoverS', ['assets/audio/game_over.ogg', 'assets/audio/game_over.mp3']);
        game.load.audio('winS', ['assets/audio/win.wav']);
        game.load.physics('physicsData', 'assets/fisicas.json');

    },

    create: function () {
        // Call the menu state
        
        game.state.start('play');
    }
};
