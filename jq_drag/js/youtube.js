var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '350',
    width: '600',
    videoId: 'vpAyy8YvccM',
    events: {
    //   'onReady': onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function stopVideo() {
//   player.stopVideo();
  player.mute();
}