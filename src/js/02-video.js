import Player from '@vimeo/player';
import throttle  from "lodash.throttle";


const TIME = 'videoplayer-current-time'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle((evt) => {
    
    localStorage.setItem(TIME, `${evt.seconds}`);
    console.log(localStorage[TIME])
  }, 1000))

player.setCurrentTime(localStorage[TIME]);
