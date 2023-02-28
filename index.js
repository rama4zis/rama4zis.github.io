document.addEventListener('DOMContentLoaded', function () {
    const messagesEl = document.querySelector('.messages');

    // get Current Time 
    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();

        let current = hours + (minutes * .01);
        if (current >= 5 && current < 9) return 'Good morning and have a nice day';
        if (current >= 9 && current < 15) return 'Good afternoon and have a nice day';
        if (current >= 15 && current < 19) return 'Good evening and have a nice day';
        if (current >= 19 || current < 5) return 'Good night and have a nice day';
    }

    let messages = [
        {
            message: 'Hey there 👋',
            delay: 500,
        },
        {
            message: 'I\'m Rama',
            delay: 500,
        },
        {
            message: 'I\'m web developer',
            delay: 500,
        },
        {
            message: 'This is <a href="./project.html">project</a> that I\'ve done',
            delay: 500,
        },
        {
            message:
                'You can contact me at <a href="https://www.facebook.com/rama4zis" target="_blank">Facebook</a>',
            delay: 800,
        },
        {
            message: getCurrentTime(),
            delay: 500,
        },
        {
            message: '👀 Rama.',
            delay: 100,
        }
    ];

    const createBubble = (message) => {
        const bubbleEl = document.createElement('div');
        bubbleEl.classList.add('bubble');
        const messageEl = document.createElement('span');
        messageEl.classList.add('message');
        messageEl.innerHTML = message;
        bubbleEl.appendChild(messageEl);
        return [
            messagesEl.appendChild(document.createElement('br')),
            messagesEl.appendChild(bubbleEl)
        ];
    };

    var tl = anime.timeline({
        easing: 'easeOutExpo',
    });

    for (let i = 0; i < messages.length; i++) {
        tl.add({
            targets: createBubble(messages[i].message),
            translateX: 25,
            opacity: 1,
            delay: messages[i].delay,
        });
    }



    
});