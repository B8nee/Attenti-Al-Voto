import "phaser";
import Boot from "./scenes/Boot";
import Preloader from "./scenes/Preloader";
import Intro from "./scenes/Intro";
import Hud from "./scenes/Hud";
import GameOver from "./scenes/GameOver";
import GamePlay from "./scenes/GamePlay";
import { GameData } from "./GameData";
import Comandi from "./scenes/Comandi";


window.addEventListener("load", () => {
  
  const config: any = {
    type: Phaser.WEBGL,
    backgroundColor: GameData.globals.bgColor,
    parent: "my-game",
    scale: {
      mode: Phaser.Scale.FIT,
      width: GameData.globals.gameWidth,
      height: GameData.globals.gameHeight,
    },

    scene: [
      Boot,
      Preloader,
      Intro,
      Hud,
      GamePlay,
      GameOver,
      Comandi,
    ],

    physics: {
      default: "arcade",
      arcade: {
        debug: GameData.globals.debug,
         gravity: { y: 1400 }
        
      }
      
    },
    input: {
      activePointers: 2,
      keyboard: true,
      gamepad: true,
    },
    render: {
      pixelArt: true,
      antialias: false,
    },
  };

  const game = new Phaser.Game(config);

  return;
  /*
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", {
        scope: "/",
      })
      .then(
        function (registration) {
          //console.log("ServiceWorker registration successful with scope: ",registration.scope);
        },
        function (err) {
          //console.log("ServiceWorker registration failed: ", err);
        }
      );
  }
  */
});
