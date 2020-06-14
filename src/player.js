/* eslint-disable no-undef */

export default () => {
  const player = createSprite(100, windowHeight - 188);
  const drawSprite = player.draw;
  player.scale = 0.25;
  player.debug = true;
  player.setCollider('rectangle', 0, 0, 400, 600);
  player.addAnimation(
    "idle",
    "img/angel/girl/Idle/Fallen_Angels_Idle_000.png",
    "img/angel/girl/Idle/Fallen_Angels_Idle_017.png"
  );
  player.addAnimation(
    "slashing",
    "img/angel/girl/Slashing/Fallen_Angels_Slashing_000.png",
    "img/angel/girl/Slashing/Fallen_Angels_Slashing_011.png"
  );
  player.addAnimation(
    "walking",
    "img/angel/girl/Walking/Fallen_Angels_Walking_000.png",
    "img/angel/girl/Walking/Fallen_Angels_Walking_023.png"
  );
  player.addAnimation(
    "dying",
    "img/angel/girl/Dying/Fallen_Angels_Dying_000.png",
    "img/angel/girl/Dying/Fallen_Angels_Dying_014.png"
  );

  player.draw = () => {
    if (player.isAnimationDone("slashing")) {
      player.walk();
    }
    drawSprite();
  };

  player.isAnimationDone = (animationLabel) => {
    return (
      player.getAnimationLabel() === animationLabel &&
      player.animation.getLastFrame() === player.animation.getFrame()
    );
  }

  player.walk = () => {
    player.animate("walking");
    player.setCollider('rectangle', 0, 0, 400, 600);
  }

  player.attack = () => {
    player.animate("slashing");
    player.setCollider('rectangle', 0, 0, 740, 600);
  }

  player.isAttacking = () => {
    return player.getAnimationLabel() === "slashing";
  }

  player.animate = (label) => {
    if (player.getAnimationLabel() === label) {
      return;
    }

    player.changeAnimation(label);
    player.animation.changeFrame(0);
  }
  player.die = () => {
    player.animate("dying");
    player.animation.looping = false;
  }

  return player;
}