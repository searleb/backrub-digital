$('.massage #hand-2')
.velocity({ // forcefeed initial position
    translateX: [ 400, 400 ],
    translateY: [ 0, 0 ],
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

// $('.massage #hand-1')
// .velocity({ // forcefeed initial position
//     translateX: [ 100, 100 ],
//     translateY: [ 0, 0 ],
// })
// .velocity({
//     rotateY: '15deg',
//     rotateX: '12deg',
//     translateX: '380px',
//     translateY: '30px'
// }, {
//     loop: true,
//     duration: 1000
// });
