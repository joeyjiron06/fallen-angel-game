// The order here is important because we must setup the game
// before importing the p5 libary because we use global instance
// of p5 to make everything easier. Then we must import p45.play
// so that it can extend p5.
import "./styles.css";
import './setup';
import "p5";
import "./p5.play";
