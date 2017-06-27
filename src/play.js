
var playState = {

	create: function () {

		tap = game.add.sound('tap');
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.physics.p2.gravity.y = 200;
		game.world.setBounds(0, 0, 320, 2400);
		var tomatecollision = game.physics.p2.createCollisionGroup();
		var papascollision = game.physics.p2.createCollisionGroup();
		var nubescollision = game.physics.p2.createCollisionGroup();

		game.add.tileSprite(0, 0, 320, 2400, 'background');

		// Prepare the keyboard so that the human player can move the
		// player sprite around
		tomate = game.add.sprite(150, 50, 'tomate');
		papas = game.add.sprite(100, 2300, 'papas');

		//  Create collision group for the blocks


		//  This part is vital if you want the objects with their own collision groups to still collide with the world bounds
		//  (which we do) - what this does is adjust the bounds to use its own collision group.
		game.physics.p2.updateBoundsCollisionGroup();

		//  Enable the physics bodies on all the sprites
		//Nubes
		var nubes = game.add.group();
		nubes.enableBody = true;
		nubes.physicsBodyType = Phaser.Physics.P2JS;
		var nube1 = nubes.create(50, 200, nubear[0]);
		var nube2 = nubes.create(220, 350, nubear[1]);
		var nube3 = nubes.create(160, 550, nubear[3]);
		var nube4 = nubes.create(120, 650, nubear[0]);
		var nube5 = nubes.create(270, 800, nubear[1]);
		var nube6 = nubes.create(170, 1000, nubear[0]);
		var nube7 = nubes.create(120, 1150, nubear[3]);
		var nube8 = nubes.create(200, 1300, nubear[0]);
		var nube9 = nubes.create(100, 1480, nubear[1]);
		var nube10 = nubes.create(120, 1600, nubear[0]);
		var nube11 = nubes.create(270, 1700, nubear[3]);
		var nube12 = nubes.create(80, 1800, nubear[0]);
		var nube13 = nubes.create(100, 1900, nubear[1]);

		nube1.body.setCollisionGroup(nubescollision);
		nube1.body.collides([nubescollision, tomatecollision]);
		nube1.body.static = true;

		nube2.body.setCollisionGroup(nubescollision);
		nube2.body.collides([nubescollision, tomatecollision]);
		nube2.body.static = true;

		nube3.body.setCollisionGroup(nubescollision);
		nube3.body.collides([nubescollision, tomatecollision]);
		nube3.body.static = true;

		nube4.body.setCollisionGroup(nubescollision);
		nube4.body.collides([nubescollision, tomatecollision]);
		nube4.body.static = true;

		nube5.body.setCollisionGroup(nubescollision);
		nube5.body.collides([nubescollision, tomatecollision]);
		nube5.body.static = true;

		nube6.body.setCollisionGroup(nubescollision);
		nube6.body.collides([nubescollision, tomatecollision]);
		nube6.body.static = true;

		nube7.body.setCollisionGroup(nubescollision);
		nube7.body.collides([nubescollision, tomatecollision]);
		nube7.body.static = true;

		nube8.body.setCollisionGroup(nubescollision);
		nube8.body.collides([nubescollision, tomatecollision]);
		nube8.body.static = true;

		nube9.body.setCollisionGroup(nubescollision);
		nube9.body.collides([nubescollision, tomatecollision]);
		nube9.body.static = true;

		nube10.body.setCollisionGroup(nubescollision);
		nube10.body.collides([nubescollision, tomatecollision]);
		nube10.body.static = true;

		nube11.body.setCollisionGroup(nubescollision);
		nube11.body.collides([nubescollision, tomatecollision]);
		nube11.body.static = true;

		nube12.body.setCollisionGroup(nubescollision);
		nube12.body.collides([nubescollision, tomatecollision]);
		nube12.body.static = true;

		nube13.body.setCollisionGroup(nubescollision);
		nube13.body.collides([nubescollision, tomatecollision]);
		nube13.body.static = true;				
		/*
		for (var i = 0; i < 14; i++) {
			//  This creates a new Phaser.Sprite instance within the group
			//  It will be randomly placed within the world and use the 'baddie' image to display
			var nubesprite = Math.floor((Math.random() * 3) + 1);
			yposition = yposition + 130;
			var nube = nubes.create(Math.floor((Math.random() * 200) + 1), yposition, nubear[nubesprite]);
			nube.body.setCollisionGroup(nubescollision);
			nube.body.collides([nubescollision, tomatecollision]);
			nube.body.static = true;
		}*/
		//papas
		game.physics.p2.enable(papas, false);
		papas.body.clearShapes();
		papas.body.loadPolygon('physicsData', 'papas');
		papas.body.setCollisionGroup(papascollision);
		papas.body.collides([papascollision, tomatecollision]);
		papas.body.static = true;
		papas.enableBody = true;

		//tomates
		game.camera.follow(tomate);
		game.physics.p2.enable(tomate, false);
		tomate.body.clearShapes();
		tomate.body.loadPolygon('physicsData', 'tomate');
		tomate.body.setCollisionGroup(tomatecollision);
		tomate.body.collides([tomatecollision, nubescollision]);
		tomate.body.collides(papascollision, this.Win, this);

		// create physics body for mouse which we will use for dragging clicked bodies
		mouseBody = new p2.Body();
		game.physics.p2.world.addBody(mouseBody);

		// attach pointer events
		game.input.onDown.add(this.click, this);
		game.input.onUp.add(this.release, this);

		game.input.addMoveCallback(this.move, this);


		timer.start();

	},

	update: function () {
		if(tomate.y >= 2330){
			game.state.start('gameover');	
		}
	},

	Win: function (body1, body2) {
		// We start the win state
		game.state.start('win');
		winGame = true;
	},
	click: function (pointer) {
		
		var positionworld = {
			x: pointer.worldX,
			y: pointer.worldY
		}

		var c = 0;
		if (pointer.isDown) {
			setTimeout(function () { game.physics.p2.removeConstraint(mouseConstraint); }, 80);
		}
		var bodies = game.physics.p2.hitTest(positionworld, [tomate.body]);

		// p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
		var physicsPos = [game.physics.p2.pxmi(pointer.worldX), game.physics.p2.pxmi(pointer.worldY)];

		if (bodies.length) {
			tap.play();
			var clickedBody = bodies[0];

			var localPointInBody = [0, 0];
			// this function takes physicsPos and coverts it to the body's local coordinate system

			clickedBody.toLocalFrame(localPointInBody, physicsPos);

			// use a revoluteContraint to attach mouseBody to the clicked body
			mouseConstraint = game.physics.p2.createRevoluteConstraint(mouseBody, [0, 0], clickedBody, [game.physics.p2.mpxi(localPointInBody[0]), game.physics.p2.mpxi(localPointInBody[1])]);


		}
	},
	release: function () {
		// remove constraint from object's body
		game.physics.p2.removeConstraint(mouseConstraint);
	},
	move: function (pointer) {
		// p2 uses different coordinate system, so convert the pointer position to p2's coordinate system
		mouseBody.position[0] = game.physics.p2.pxmi(pointer.worldX);
		mouseBody.position[1] = game.physics.p2.pxmi(pointer.worldY);
	},
	render: function () {

	}
}
