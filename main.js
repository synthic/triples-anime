import anime from 'https://cdn.skypack.dev/animejs@3.2.1';
import Letterize from 'https://cdn.skypack.dev/letterizejs@2.0.1';

const letters = new Letterize({
    targets: '.row'
});

for (let i = 0; i < 7; i++) {
    anime({
        targets: letters.list[i],
        keyframes: [
            {scale: 1.5, duration: 300},
            {scale: 1, delay: 900, duration: 300},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 600},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 300},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 600},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 300},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 600},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 300},
            {scale: 1.5, delay: 300, duration: 150},
            {scale: 1, delay: 900, duration: 600}
        ],
        delay: anime.stagger(120),
        loop: true,
        easing: 'linear'
    });
}
