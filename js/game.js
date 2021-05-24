class Game {
    constructor() {
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    
    //('/')- to refer to the entire database
    updateState(state){
        database.ref('/').update({
            'gameState': state
        })
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }


            form = new Form();
            form.display();

        }
        batmobile = createSprite(100,200);
        batmobile.addImage(car4);

        ferrari = createSprite(300,200);
        ferrari.addImage(car2);

        lamborghini = createSprite(500,200);
        lamborghini.addImage(car1);

        bugatti = createSprite(700,200);
        bugatti.addImage(car3);

        cars = [batmobile, ferrari, lamborghini, bugatti];
    }

    play() {
        form.hide();
        textSize(30);
        text("GAME TIME", 120, 100);
        Player.getPlayerInfo();

        if (allPlayers !== undefined) {

            background(ground);
            image(track, 0, -4*displayHeight, displayWidth, displayHeight * 5);

            //x & y positions of the cars
            var y = 0;
            var x = 220;
            //index of the array
            var index = 0;
            for (var plr in allPlayers) {
                index += 1;
                x += 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index) {
                    cars[index - 1].shapeColor = "black";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
                
            }
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 50;
            player.update();
        }

        if (player.distance >= 4350) {
            gameState = 2;
        }

        drawSprites();
    }

    end() {
        console.log("game has ended peep");
    }


    
}