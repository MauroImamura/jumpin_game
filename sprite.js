function Sprite(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draws = function(image_name,canvas_x, canvas_y, canvas_width, canvas_height) {
        context.drawImage(image_name, this.x, this.y, this.width, this.height, canvas_x, canvas_y, canvas_width, canvas_height);
    }
}

var background_sprite = new Sprite(0,0, 1200, 500),
ground_sprite = new Sprite(0, 0, 1200, 50),
shield_sprite = new Sprite(0,0,30,30),
bonus_sprite = new Sprite(0, 0, 30, 30);
title_sprite = new Sprite(0, 0, 1200, 100);
obstacle_sprite = new Sprite(0, 0, 40, 105);