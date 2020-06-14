/* eslint-disable no-undef */
import createPlayer from "./player";
import Background from "./background";
import Controls from "./controls";
import createEnemy from "./enemy";

export default class Game {
  preload() {
    // load all assets here
  }

  setup() {
    createCanvas(windowWidth, windowHeight);


    this.background = new Background();
    this.controls = new Controls();
    this.player = createPlayer();
    this.enemies = new Group();

    this.background.startMoving();
    this.player.walk();
    this.handleEnemyCollision = this.handleEnemyCollision.bind(this);
    this.addEnemy();
  }

  draw() {
    background("black");
    // if (frameCount % 1000 === 0) {
    // this.addEnemy();
    // }
    this.player.overlap(this.enemies, this.handleEnemyCollision);

    drawSprites();
  }
  addEnemy() {
    const enemy = createEnemy();
    enemy.run();
    this.enemies.add(enemy);
  }

  handleEnemyCollision(player, enemy) {
    if (player.isAttacking()) {
      if (!enemy.isDying()) {
        enemy.die();
        this.enemies.remove(enemy);
      }
    } else {
      this.gameOver = true;
      player.die();
      enemy.idle();
      this.background.stopMoving();
    }
  }



  // .FILL OUT ANY OF THESE FUNCTIONS BELOW
  mouseMoved() { }
  mouseDragged() { }
  mousePressed() {
    if (this.gameOver) {
      return;
    }

    this.player.attack();
  }
  mouseReleased() { }
  mouseClicked() { }
  doubleClicked() { }
  mouseWheel() { }
  keyPressed() { }
  keyReleased() { }
  keyTyped() { }
  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
