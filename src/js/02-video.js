import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_STORAGE)));

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data.seconds));
}
