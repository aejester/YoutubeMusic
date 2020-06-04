const yt2mp3 = require("youtube-mp3-downloader");

let downloader = new yt2mp3({
    "ffmpegPath": __dirname+"/ffmpeg/",
    "outputPath":  __dirname+"./songs/",
    "youtubeVideoQuality": "highest",
    "queueParallelism": 1,
    "progressTimeout": 1000
})

downloader.download("dQw4w9WgXcQ");