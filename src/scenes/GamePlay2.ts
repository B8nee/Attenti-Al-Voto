import Studente from "../gameComponents/Studente/Studente";

export default class GamePlay2 extends Phaser.Scene {

  private _sfx: Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
  private _scuola2: Phaser.GameObjects.TileSprite;
  private _level: number = 1
  private _player:Studente;
  constructor() {
    super({ key: "GamePlay" });
  }
  
  preload() {
    this._scuola2 = this.add.tileSprite(0,0, this.game.canvas.width ,this.game.canvas.height, "scuola").setOrigin(0);
  }
  create() {
    this._level = 1;
    this._player = new Studente ({scene: this, x: 512 , y: 300,key: "studente"});
    //this._groupBomb.add(new BOMB({ scene:this,key:"BOMB",x:100,y:100}))


/*
    this._logo = this.add.image(600, 300, "logo").setOrigin(.5).setInteractive().on("pointerup", () => { 

    this.events.emit("update-score",[10])

    });

    */

    
  }


  update(time: number, delta: number) {
    this._player.update();
  }


}
