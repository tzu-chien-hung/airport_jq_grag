var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player = document.getElementById("player");
var player3 = document.getElementById("player3");
var player5 = document.getElementById("player5");
var player6 = document.getElementById("player6");
var player7 = document.getElementById("player7");
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '336',
    width: '600',
    videoId: 'vpAyy8YvccM',
    events: {
    //   'onReady': onPlayerReady,
    },
  });
}
function onYouTubeIframeAPIReady() {
    player3 = new YT.Player('player', {
      height: '337.5',
      width: '600',
      videoId: 'Yq6EATDaOjw',
      events: {
      //   'onReady': onPlayerReady,
      },
    });
  }
  function onYouTubeIframeAPIReady() {
    player5 = new YT.Player('player', {
      height: '337.5',
      width: '600',
      videoId: 'cqK6eip53Z8',
      events: {
      //   'onReady': onPlayerReady,
      },
    });
  }
  function onYouTubeIframeAPIReady() {
    player6 = new YT.Player('player', {
      height: '337.5',
      width: '600',
      videoId: '1jqANvV6-O4&t',
      events: {
      //   'onReady': onPlayerReady,
      },
    });
  }
  function onYouTubeIframeAPIReady() {
    player6 = new YT.Player('player', {
      height: '337.5',
      width: '600',
      videoId: 'Yq6EATDaOjw&t',
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