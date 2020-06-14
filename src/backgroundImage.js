/* eslint-disable no-undef */

export default class BackgroundImage {
  constructor(url) {
    this.sprite1 = BackgroundImage.createImageSprite(url, () => {
      this.sprite1.position.x = this.sprite1.image.width / 2; // 0%
      this.sprite1.position.y = windowHeight - this.sprite1.image.height / 2;
    });
    this.sprite2 = BackgroundImage.createImageSprite(url, () => {
      this.sprite2.position.x =
        this.sprite2.image.width / 2 + this.sprite2.image.width; // 100%
      this.sprite2.position.y = windowHeight - this.sprite2.image.height / 2;
    });
    const drawSprite1 = this.sprite1.draw;
    this.sprite1.draw = () => {
      this.update();
      drawSprite1();
    };
  }

  setSpeed(speed) {
    this.sprite1.setSpeed(speed);
    this.sprite2.setSpeed(speed);
  }

  update() {
    if (BackgroundImage.isLeftOfScreen(this.sprite1)) {
      this.sprite1.position.x =
        this.sprite2.getBoundingBox().right() + this.sprite1.image.width / 2;
    } else if (BackgroundImage.isLeftOfScreen(this.sprite2)) {
      this.sprite2.position.x =
        this.sprite1.getBoundingBox().right() + this.sprite2.image.width / 2;
    }
  }

  static createImageSprite(url, callback) {
    const sprite = createSprite(0, 0);
    const image = loadImage(url, callback);
    sprite.addImage(image);
    sprite.image = image;
    return sprite;
  }

  static isLeftOfScreen(sprite) {
    const boundingBox = sprite.getBoundingBox();
    return boundingBox.right() < 0;
  }
}
