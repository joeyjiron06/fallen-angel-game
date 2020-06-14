import Game from "./game";

const game = new Game();

/**
 * Bind all P5 functions to game
 */
window.preload = () => game.preload();
window.setup = () => game.setup();
window.draw = () => game.draw();
window.mouseMoved = () => game.mouseMoved();
window.mouseDragged = () => game.mouseDragged();
window.mousePressed = () => game.mousePressed();
window.mouseReleased = () => game.mouseReleased();
window.mouseClicked = () => game.mouseClicked();
window.doubleClicked = () => game.doubleClicked();
window.mouseWheel = () => game.mouseWheel();
window.keyPressed = () => game.keyPressed();
window.keyReleased = () => game.keyReleased();
window.keyTyped = () => game.keyTyped();
window.windowResized = () => game.windowResized();
