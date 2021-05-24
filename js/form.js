class Form {
    constructor() {
        this.title = createElement('h2');
        this.input = createInput("enter your name pwease: ");
        this.button = createButton("play");
        //createElement creates heading
        this.greeting = createElement('h3');
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {
        this.title.html('CAR RACING');
        this.title.position(displayWidth/2 + 375,0);


        this.input.position(displayWidth/2 + 375,displayHeight/2 - 40);
        this.button.position(displayWidth/2 + 480,displayHeight/2 + 40);

        //4 + 50

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hewo " + player.name);
            this.greeting.position(displayWidth/2 + 420,displayHeight/2 - 80);

        })

    }
}