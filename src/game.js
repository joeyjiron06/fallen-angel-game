/* eslint-disable no-undef */
import Player from "./player";
import Background from "./background";
import Controls from "./controls";
import Enemy from "./enemy";

export default class Game {
  preload() {
    // load all assets here
  }

  setup() {
    createCanvas(windowWidth, windowHeight);

    this.background = new Background();
    this.controls = new Controls();
    this.player = new Player();
    this.enemies = new Group();

    // this.background.startMoving();
    this.playerEnemyCollision = this.playerEnemyCollision.bind(this);
    this.addEnemy();
  }

  draw() {
    clear();
    background("black");
    if (frameCount % 1000 === 0) {
      this.addEnemy();
    }
    this.player.sprite.overlap(this.enemies, this.playerEnemyCollision);

    drawSprites();
  }
  addEnemy() {
    const enemy = new Enemy();
    enemy.run();
    enemy.addTo(this.enemies);
  }

  playerEnemyCollision(playerSprite, enemy) {
    console.log("collision between enemy and player!");
  }

  // .FILL OUT ANY OF THESE FUNCTIONS BELOW
  mouseMoved() {}
  mouseDragged() {}
  mousePressed() {
    this.player.attack();
  }
  mouseReleased() {}
  mouseClicked() {}
  doubleClicked() {}
  mouseWheel() {}
  keyPressed() {}
  keyReleased() {}
  keyTyped() {}
  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
