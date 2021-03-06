
// Here we use the 'official name' (bootState) when defining the state
var bootState = {

    // The create function is a standard Phaser function, and is
    // automatically called
    preload: function () {
        game.load.image("loading", "assets/loading.png");

        if (game.device.android && game.device.chrome && game.device.chromeVersion >= 55) {
            game.game.sound.touchLocked = true;
            game.input.touch.addTouchLockCallback(function () {
                if (this.noAudio || !this.touchLocked || this._unlockSource !== null) {
                    return true;
                }
                if (this.usingWebAudio) {
                    // Create empty buffer and play it
                    // The SoundManager.update loop captures the state of it and then resets touchLocked to false

                    var buffer = this.context.createBuffer(1, 1, 22050);
                    this._unlockSource = this.context.createBufferSource();
                    this._unlockSource.buffer = buffer;
                    this._unlockSource.connect(this.context.destination);

                    if (this._unlockSource.start === undefined) {
                        this._unlockSource.noteOn(0);
                    }
                    else {
                        this._unlockSource.start(0);
                    }

                    //Hello Chrome 55!
                    if (this._unlockSource.context.state === 'suspended') {
                        this._unlockSource.context.resume();
                    }
                }

                //  We can remove the event because we've done what we needed (started the unlock sound playing)
                return true;

            }, game.sound, true);
        }

    },
    create: function () {

        // Calling the load state
        game.state.start('load');
    }
};
