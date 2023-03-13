import Player from '@vimeo/player';
// Додай до проекту бібліотеку lodash.throttle 
var throttle = require('lodash.throttle');

// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Нехай ключем для сховища буде рядок "videoplayer-current-time".
const CURRENT_TIME = "videoplayer-current-time";

// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. 
const handlePlayTime = function (e) {
    localStorage.setItem(CURRENT_TIME, e.seconds)
};

// і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(handlePlayTime, 1000));

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
player.setCurrentTime(localStorage.getItem(CURRENT_TIME));