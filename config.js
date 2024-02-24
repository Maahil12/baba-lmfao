module.exports = {
  TOKEN:
    "MTIxMDg0MzkwMDIyMzI5MTM5Mg.G4tlbT.1qT_Tk99pzSCRzorDZX_WRByOYqYyPC31eGtWc",
  ownerID: ["909109396431335506", "1182617336646225931"],
  botInvite: "",
  supportServer: "",
  mongodbURL:
    "mongodb+srv://manta:maahil@manta.zoveixa.mongodb.net/arox12?retryWrites=true&w=majority",
  status: "Arox",
  commandsDir: "./commands",
  language: "en",
  embedColor: "00fbff",
  errorLog: "",

  sponsor: {
    status: true,
    url: "",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: [
      "back",
      "channel",
      "clear",
      "dj",
      "filter",
      "loop",
      "nowplaying",
      "pause",
      "playnormal",
      "playlist",
      "queue",
      "resume",
      "save",
      "play",
      "skip",
      "stop",
      "time",
      "volume",
    ],
    vote_url: "",
  },

  shardManager: {
    shardStatus: true,
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
        "shuffle",
      ],
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },
    },

    maxVol: 150,
  },
};
