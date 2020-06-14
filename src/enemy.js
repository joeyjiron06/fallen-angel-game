/* eslint-disable no-undef */

export default class Enemy {
  constructor() {
    this.sprite = createSprite(windowWidth, windowHeight - 170);
    this.sprite.debug = true;
    this.sprite.scale = 0.2;
    this.sprite.addAnimation(
      "running",
      "img/golems/brownie/Running/Golem_Running_000.png",
      "img/golems/brownie/Running/Golem_Running_011.png"
    );
    this.sprite.mirrorX(-1);
  }

  run() {
    this.sprite.changeAnimation("running");
    this.sprite.setSpeed(-0.75);
  }

  update() {}
  addTo(group) {
    group.add(this.sprite);
  }
}
