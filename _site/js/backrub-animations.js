$('.massage #hand-1')
.velocity({ // forcefeed initial position
    translateX: [ 10, 10 ]
})
.velocity({
    rotateZ: '-0.6deg'
}, {
    loop: true,
    duration: 1000
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
    rotateX: '12deg',
    translateX: '610px',
    translateY: '30px',
}, {
    loop: true,
    duration: 1000
});

$('.rub-you #hand-1')
.velocity({ // forcefeed initial position
    translateX: [ 75, 75 ],
    translateY: [ 10, 10 ],
    transformOriginY: '40'
})
.velocity({
    rotateX: '-5deg',
    rotateZ: '-55deg',
    translateY: '200px',
    translateX: '240px'
}, {
    duration: 3000,
    delay: 5000,
});

$('.rub-you #hand-2')
.velocity({ // forcefeed initial position
    translateX: [ 400, 400 ],
    translateY: [ 20, 20 ],
})
.velocity({
    rotateX: '10deg',
    rotateZ: '-3deg',
    translateX: '395px',
    translateY: '10px',
}, {
    loop: true,
    duration: 250,
    delay: 100,
    easing: 'easeInOut'
});
