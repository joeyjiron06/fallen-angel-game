/* eslint-disable no-undef */

export default () => {
  const enemy = createSprite(windowWidth, windowHeight - 170);
  const draw = enemy.draw;
  enemy.debug = true;
  enemy.scale = 0.2;
  enemy.setCollider('rectangle', 0, 0, 340, 600);
  enemy.addAnimation(
    "running",
    "img/golems/brownie/Running/Golem_Running_000.png",
    "img/golems/brownie/Running/Golem_Running_011.png"
  );
  enemy.addAnimation(
    "dying",
    "img/golems/brownie/Dying/Golem_Dying_000.png",
    "img/golems/brownie/Dying/Golem_Dying_014.png"
  );
  enemy.mirrorX(-1);

  enemy.draw = () => {
    if (enemy.isDying() && enemy.isAnimationDone('dying')) {
      enemy.remove();
    }

    draw();
  };

  enemy.isAnimationDone = (label) => {
    return (
      enemy.getAnimationLabel() === label &&
      enemy.animation.getFrame() === enemy.animation.getLastFrame()
    );
  }

  enemy.animate = (label) => {
    enemy.changeAnimation(label);
    enemy.animation.changeFrame(0);
  }

  enemy.run = () => {
    enemy.animate("running");
    enemy.setSpeed(-1);
  }

  enemy.idle = () => {
    enemy.animate("idle");
    enemy.setSpeed(0);
  }

  enemy.die = () => {
    if (enemy.isDying()) {
      return;
    }

    enemy.animate("dying");
    enemy.animation.looping = false;
    enemy.setSpeed(0);
    enemy.setCollider("rectangle", 0, 0, 0, 0);
  }

  enemy.isDying = () => {
    return enemy.getAnimationLabel() === 'dying';
  };

  return enemy;
}