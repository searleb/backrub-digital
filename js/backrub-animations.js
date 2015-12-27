$('.massage #hand-1')
.velocity({ // forcefeed initial position
    translateX: [ 10, 10 ]
})
.velocity({
    rotateZ: '-0.6deg'
}, {
    loop: true,
    duration: 1200
});

$('.massage #hand-2')
.velocity({ // forcefeed initial position
    translateX: [ 400, 400 ],
})
.velocity({
    rotateY: '15deg',
    rotateX: '12deg',
    translateX: '380px',
    translateY: '30px'
}, {
    loop: true,
    duration: 1000
});



$('.knead #hand-2')
.velocity({ // forcefeed initial position
    translateX: [ 600, 600 ],
})
.velocity({
    rotateY: '15deg',
    rotateX: '20deg',
    rotateZ: '12deg',
    translateX: '610px',
    translateY: '30px',
}, {
    delay: 100,
    loop: true,
    duration: 1000
});



$('.rub-you #hand-1')
.velocity({ // forcefeed initial position
    translateX: [ 75, 75 ],
    translateY: [ 0, 0 ],
})
.velocity({
    rotateX: '-17.5deg',
    rotateZ: '5deg',
    translateY: '80px',
    translateX: '40px'
}, {
    loop: true,
    duration: 1750,
    easing: 'easeInOut'
});

// $('.rub-you #hand-2')
// .velocity({ // forcefeed initial position
//     translateX: [ 400, 400 ],
//     translateY: [ 18, 18 ],
// });
