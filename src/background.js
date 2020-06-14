/* eslint-disable no-undef */
import BackgroundImage from "./backgroundImage";

export default class Background {
  constructor() {
    this.layer1 = new BackgroundImage("img/backgrounds/green/1.png");
    this.layer2 = new BackgroundImage("img/backgrounds/green/2.png");
    this.layer3 = new BackgroundImage("img/backgrounds/green/3.png");
    this.layer3 = new BackgroundImage("img/backgrounds/green/3.png");
    this.layer4 = new BackgroundImage("img/backgrounds/green/4.png");
    this.layer5 = new BackgroundImage("img/backgrounds/green/5.png");
    this.layer6 = new BackgroundImage("img/backgrounds/green/6.png");
    this.floor = new BackgroundImage("img/backgrounds/green/7.png");
  }

  startMoving() {
    this.layer1.setSpeed(-0.2);
    this.layer2.setSpeed(-0.2);
    this.layer3.setSpeed(-0.2);
    this.layer3.setSpeed(-0.2);
    this.layer4.setSpeed(-0.2);
    this.layer5.setSpeed(-0.2);
    this.layer6.setSpeed(-0.2);
    this.floor.setSpeed(-0.5);
  }
}
