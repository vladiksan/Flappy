var Rec = function () {

	this.update = function () {

		drawBG();
		drawGR();

	var back = game.newTextObject({
		text : 'back',
		positionC : p(width/2, 400),
		font : 'myFont',
		size : 25,	
		color : '#254364'
	});

	var save = game.newTextObject({
		text : 'save',
		positionC : p(width/2, 375),
		font : 'myFont',
		size : 25,	
		color : '#254364'
	});

	var title = game.newTextObject({
		text : 'Records',
		positionC : p(width/2, 100),
		font : 'myFont',
		size : 25,	
		color : 'white'
	});

	var yourec = game.newTextObject({
		text : 'You record: '+ score,
		positionC : p(width/2, 50),
		font : 'myFont',
		size : 25,	
		color : 'white'
	});

	var load = game.newTextObject({
		text : 'load',
		positionC : p(width/2, 350),
		font : 'myFont',
		size : 25,	
		color : '#254364'
	});

	yourec.draw();
	title.draw();
	back.draw();
	save.draw();

	if (mouse.isPeekObject('LEFT', back)) {
			game.setLoop('menu');
			helth = 3;
	}

	if (mouse.isPeekObject('LEFT', save)) {
			storageGet();
	};
	
	};
};