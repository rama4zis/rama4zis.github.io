document.addEventListener('DOMContentLoaded', function () {

    const projects = [
        {
            title: 'Toko Jasa dan Jual Beli Kebutuhan Kantor',
            img: './assets/images/project/surabayaglory.jpg',
            description: 'Toko online yang memberikan jasa dan menjual produk-produk kebutuhan kantor.',
            tags: ['PHP', 'Laravel', 'Tailwind CSS']
        },
        {
            title: 'Arisu Chatbot',
            img: './assets/images/project/botWhatsapp.jpg',
            description: 'Bot Whatsapp yang terintegrasi dengan OpenAI GPT-3 untuk memberikan jawaban yang sesuai dengan pertanyaan yang diajukan. Selain itu juga terdapat Menu yang dapat digunakan untuk mempermudah pengguna dalam menggunakan bot.',
            tags: ['NodeJS', 'Whatsapp-Web.js', 'OpenAI GPT-3']
        },
        {
            title: 'Blue Archive API Community',
            img: './assets/images/project/blueArchiveAPI.jpg',
            description: 'API game Blue Archive yang dibuat oleh komunitas untuk mempermudah pengguna dalam mengakses data-data yang ada di dalam game.',
            tags: ['TypeScript', 'Express', 'NodeJS', 'Vercel', 'Prisma']
        },
        {
            title: 'Surabaya Bus Direction',
            img: './assets/images/project/surabayaBusDirection.jpg',
            description: 'Mencari route yang digunakan oleh bus di Surabaya dengan memanfaatkan API dari Google Maps. Untuk mendapatkan nama kecamatan, menggunakan API dari Kodepos',
            tags: ['NodeJS', 'Tailwind CSS', 'JS', 'Google Maps API', 'Kodepos API']
        },
        {
            title: 'ITATS API',
            img: './assets/images/project/ITATS-API.jpg',
            description: 'Scraping data dari website ITATS untuk mendapatkan data-data yang ada di dalam website tersebut.',
            tags: ['TypeScript', 'Express', 'Puppeteer']
        },
        {
            title: 'Muslim Board Extension',
            img: './assets/images/project/muslimBoardExtension.jpg',
            description: 'Ikut berkontribusi dalam project open source Muslim Board Extension',
            tags: ['Tailwin CSS', 'Extension', 'Javascript']
        },
    ];

    const containerEl = document.querySelector('.container');

    const createCard = (title, img, description, tags) => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card', 'bg-base-100', 'shadow-xl');

        const figureEl = document.createElement('figure');
        figureEl.classList.add('h-2/4', 'bg-slate-700');
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.alt = title;
        figureEl.appendChild(imgEl);

        const cardBodyEl = document.createElement('div');
        cardBodyEl.classList.add('card-body');

        const titleEl = document.createElement('h2');
        titleEl.classList.add('card-title');
        titleEl.innerHTML = title;
        cardBodyEl.appendChild(titleEl);

        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = description;
        cardBodyEl.appendChild(descriptionEl);

        const tagsEl = document.createElement('div');
        tagsEl.classList.add('card-actions', 'justify-end');
        tags.forEach(tag => {
            const tagEl = document.createElement('div');
            tagEl.classList.add('badge', 'badge-outline');
            tagEl.innerHTML = tag;
            tagsEl.appendChild(tagEl);
        });
        cardBodyEl.appendChild(tagsEl);

        cardEl.appendChild(figureEl);
        cardEl.appendChild(cardBodyEl);

        return cardEl;
    }

    projects.forEach(project => {
        containerEl.appendChild(createCard(project.title, project.img, project.description, project.tags));
    });

    // hidden card before animation
    const cardEl = document.querySelectorAll('.card');
    cardEl.forEach(card => {
        card.style.opacity = 0;
    });



    anime({
        targets: '.card',
        opacity: 1,
        delay: anime.stagger(1000, { start: 500 }),
        easing: 'easeOutExpo',
    });


});