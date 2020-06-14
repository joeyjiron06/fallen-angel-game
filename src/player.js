/* eslint-disable no-undef */

export default class Player {
  constructor() {
    this.sprite = createSprite(100, windowHeight - 188);
    this.sprite.scale = 0.25;
    this.sprite.debug = true;
    this.sprite.setCollider('rectangle', 0, 0, 440,400);
    this.sprite.addAnimation(
      "idle",
      "img/angel/girl/Idle/Fallen_Angels_Idle_000.png",
      "img/angel/girl/Idle/Fallen_Angels_Idle_017.png"
    );
    this.sprite.addAnimation(
      "slashing",
      "img/angel/girl/Slashing/Fallen_Angels_Slashing_000.png",
      "img/angel/girl/Slashing/Fallen_Angels_Slashing_011.png"
    );
    this.sprite.addAnimation(
      "walking",
      "img/angel/girl/Walking/Fallen_Angels_Walking_000.png",
      "img/angel/girl/Walking/Fallen_Angels_Walking_023.png"
    );
    const drawSprite = this.sprite.draw;
    this.sprite.draw = () => {
      this.update();
      drawSprite();
    };
  }

  isAnimationDone(animationLabel) {
    return (
      this.sprite.getAnimationLabel() === animationLabel &&
      this.sprite.animation.getLastFrame() === this.sprite.animation.getFrame()
    );
  }

  update() {
    if (this.isAnimationDone("slashing")) {
      this.walk();
    }
  }

  walk() {
    this.animate("walking");
  }

  attack() {
    this.animate("slashing");
  }

  isAttacking() {
    return this.sprite.getAnimationLabel() === "slashing";
  }

  animate(label) {
    if (this.sprite.getAnimationLabel() === label) {
      return;
    }

    this.sprite.changeAnimation(label);
    this.sprite.animation.changeFrame(0);
  }
}
