
var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

var player_object="";
var block_img_object="";

function player_update() {
    fabric.Image.fromURL("nttps://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
      top:player_y,
      left:player_x
        });
    canvas.add(player_object);
    }
    );
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
    block_img_object.scaleToWidth(block_image_width);
    block_img_object.scaleToHeight(block_image_height);
    block_img_object.set({
      top:player_y,
      left:player_x
        });
    canvas.add(block_img_object);
    
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    

    if (keyPressed=='70'){
   new_image("head of iron man.png");
   console.log("iron man");
    }
    
    if (keyPressed=='76'){
        new_image("pants.jpg");
        console.log("some pants");
        }
        function up() {
            if (player_y >=0) {
                player_y= player_y - block_img_height;
                console.log("block image height ="+block_image_height);
                console.log("When up arrow key is pressed X="+player_x+", Y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function down() {
            if (player_y <=500) {
                player_y= player_y + block_img_height;
                console.log("block image height ="+block_image_height);
                console.log("When down arrow key is pressed X="+player_x+", Y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function left() {
            if (player_x >=0) {
                player_x= player_x - block_img_width;
                console.log("block image width ="+block_image_width);
                console.log("When left arrow key is pressed X="+player_x+", Y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        function right() {
            if (player_x <=850) {
                player_x= player_x + block_img_width;
                console.log("block image width ="+block_image_width);
                console.log("When right arrow key is pressed X="+player_x+", Y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
    
    }
       