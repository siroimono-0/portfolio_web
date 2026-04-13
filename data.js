/**
 * 모든 콘텐츠는 이 객체만 수정하면 됩니다.
 * 필요한 경우 항목을 추가/삭제하거나 텍스트를 바꾸세요.
 */
window.siteContent = {
    navigation: {
        logo: "JunHyun Lee",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            // { label: "About", href: "#about" },
            { label: "Tech", href: "#Tech" },
            // { label: "Awards", href: "#awards" },
            // { label: "Blog", href: "https://blog.naver.com/jhc9639", external: true },
            { iconClass: "fab fa-github", href: "https://github.com/siroimono-0", external: true, noUnderline: true }
        ]
    },
    hero: {
        intro: {
            text: "Hi I'm",
            link: { label: "JunHyun Lee", href: "https://github.com/siroimono-0" }
        },
        subtitle: "A Growing Developer",
        achievements: [
            {
                label: "Gold 2",
                href: "https://solved.ac/profile/siroimono",
                suffix: " in BOJ"
            }
        ]
    },
    projects: [
        {
            title: "HMI",
            description: "Human-Machine Interface",
            url: "https://youtu.be/E9MqFM5MKEs",
            backgroundImage: "./imgs/HMI_ok.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "IU toon",
            description: "Singer IU Song Serving Page",
            url: "https://github.com/wnghdcjfe/IUtoon",
            backgroundImage: "./imgs/iu.gif",
            backgroundColor: "#ed1a44"
        },
        {   
            title: "Admin",
            description: "Administrator",
            url: "https://youtu.be/HruYK3AVzx4",
            backgroundImage: "./imgs/KMPlayer_ok.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "KNUE",
            description: "University community web site",
            url: "https://github.com/wnghdcjfe/wnghdcjfe.github.io/blob/master/knue.md",
            backgroundImage: "./imgs/knue.gif",
            backgroundColor: "#000000"
        }
    ],
    about: {
        title: "Projects",
        paragraphs: [
            '<span class="about-heading">전기차 충전기 통합 운영 시스템</span>',
            '- <a href="https://youtu.be/E9MqFM5MKEs" target="_blank">HMI 동영상</a>',
            '- <a href="https://youtu.be/HruYK3AVzx4" target="_blank">Admin 동영상</a>',
            '- <a href="https://github.com/siroimono-0/EV_HMI_SV" target="_blank">Git 링크</a>',

            '<hr class="about-divider">',
            '<span class="about-heading">와이어 샤크</span>',
            '- <a href="https://영상URL3" target="_blank">영상 링크 3</a>',
            '- <a href="https://github.com/siroimono-0/EV_HMI_SV" target="_blank">Git 링크</a>',

            '<hr class="about-divider">',
            '<span class="about-heading">미니 게임</span>',
            '- <a href="https://영상URL4" target="_blank">영상 링크 4</a>',
            '- <a href="https://github.com/siroimono-0/EV_HMI_SV" target="_blank">Git 링크</a>',
        ]
    },
    tech: {
        title: "Tech",
        categories: [
            {
                label: "Strong",
                items: "C++ / Qt / QML / Linux"
            },
            {
                label: "Knowledgeable",
                items: "C / Shell Script / SQLite / PostgreSQL / Git / AWS"
            }
            
        ]
    },
    awards: {
        title: "",
        items: [
            {
            },
            {
            },
            {
            },
            {
            }
        ]
    }
};

