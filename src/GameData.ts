export let GameData: any = {
  globals: {
    leaderboard: false,
    gameWidth: 1280,
    gameHeight: 600,
    bgColor: "#ffffff",
    debug: true,
  },

  preloader: {
    bgColor: "",
    image: "logo",
    imageX: 1280,
    imageY: 600,
    loadingText: "",
  },

  spritesheets: [
    {
      name: "studente",
      path: "assets/images/studente.png",
      width: 32,
      height: 44,
      frames: 4,
    },
    {
      name: "studenteInverso",
      path: "assets/images/studenteInverso.png",
      width: 32,
      height: 44,
      frames: 4,
    },
  ],

  images: [
    { name: "scuola", path: "assets/images/scuola.png" },
    { name: "sfondoComandi", path: "assets/images/sfondoComandi.jpg" },
    { name: "scuola3", path: "assets/images/scuola3.png" },
    { name: "comandiMovimento", path: "assets/images/comandiMovimento.png" },
    {name: "sfondoIntro", path: "assets/images/sfondoIntro.png"},
  ],
 
  sounds: [
      {
      name: "music0",
      paths: ["assets/sounds/music0.ogg", "assets/sounds/music0.m4a"],
      volume: 1,
      loop: false,
      frame: 1,
    },
  ],
  audio: [
    {
      name: "sfx",
      jsonpath: "assets/sounds/sfx.json",
      paths: ["assets/sounds/sfx.ogg", "assets/sounds/sfx.m4a"],
      instances: 10,
    },
  ],

  script: [
    {
      key: "webfont",
      path: "assets/js/webfonts.js",
    },
  ],

  bitmapfont: [
    {
      name: "arcade",
      imgpath: "assets/fonts/arcade.png",
      xmlpath: "assets/fonts/arcade.xml",
    }
  ],
};
