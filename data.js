/**
 * 모든 콘텐츠는 이 객체만 수정하면 됩니다.
 * 필요한 경우 항목을 추가/삭제하거나 텍스트를 바꾸세요.
 */
window.siteContent = {
    navigation: {
        logo: "JunHyun Lee",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#about" },
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
            url: "#about",
            backgroundImage: "./imgs/HMI_ok.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        
        {   
            title: "Admin",
            description: "Administrator",
            url: "#about",
            backgroundImage: "./imgs/KMPlayer_ok.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "mini_Wireshark",
            description: "Network Packet Analysis",
            url: "#about2",
            backgroundImage: "./imgs/mini_wireshark_.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "IU toon",
            description: "Singer IU Song Serving Page",
            url: "#about3",
            backgroundImage: "./imgs/iu.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        }
    ],
    abouts: [
        {
            id: "about",
            title: "Project",
            paragraphs: [
                '<span class="about-heading">전기차 충전기 통합 운영 시스템</span>',
                "충전기 사용자 화면, 운영 서버, 관리자 프로그램을 분리된 구조로 설계하여</br>충전 제어, 카드 인증, 충전 상태 모니터링, 로그 관리,</br>원격 제어를 처리하는 시스템",
                '- <a href="https://youtu.be/1vLOwdozWms" target="_blank">HMI 동영상</a>',
                '- <a href="https://youtu.be/tG-1DJW6-VA" target="_blank">Admin 동영상</a>',
                '- <a href="https://github.com/siroimono-0/EV_HMI_SV" target="_blank">Git 링크</a>',
                '- <a href="https://github.com/siroimono-0/EV_mcu" target="_blank">MCU Git 링크</a>',
                

                '<hr class="about-divider-wide">',

                "담당",
                '<span class="about-heading_2">QML 기반 전기차 충전기 HMI UI/UX 개발</span>',
                "- C++ - QML 연동 구조를 설계하고, StackView 기반의 충전 플로우 구현",
                "- USB-Serial 어댑터를 이용해 RS232/RS485 장비와 </br>　시리얼 통신을 구성하고 Modbus RTU 기반 </br>　제어 명령 송신 및 상태 데이터 수신 기능 구현",

                "- launcher 및 systemd user service 기반 실행/재시작 구조 구성",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">WebSocket 기반 실시간 통신 기능 개발</span>',
                "- HMI 인증, heartbeat, 충전 로그 전송, 회원카드 승인/종료 처리,</br>　관리자 명령 수신 기능 구현",

                "- PostgreSQL 기반으로 충전 로그, HMI 상태, 회원카드 데이터를 관리하고,</br>　DB 장애 시 SQLite에 임시 저장 후 재전송하는 복구 로직 구현",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">Qt Widgets 기반 관리자 프로그램 개발</span>',
                "- 매장 등록, HMI 등록, 로그 조회, 회원카드 조회/수정, 원격 제어 기능 구현",

                "- 광고 mp4 업로드/다운로드 및 HMI 재생 기능 구현",
            ]
        },
        {
            id: "about2",
            title: "Project",
            paragraphs: [
                '<span class="about-heading">미니 와이어 샤크</span>',
                "실시간 패킷 캡처와 pcap 파일 분석을 통해 패킷 목록,</br> 프로토콜 정보, 상세 헤더 구조, Hex Dump를 확인할 수 있는</br>네트워크 패킷 분석 애플리케이션",
                '- <a href="https://youtu.be/1sYCxgMe7ZM" target="_blank">미니 와이어 샤크 동영상</a>',
                '- <a href="https://github.com/siroimono-0/Mini_Wireshark" target="_blank">Git 링크</a>',

                '<hr class="about-divider-wide">',

                "담당",
                '<span class="about-heading_2">QML 기반 패킷 분석 UI 개발</span>',
                "- 패킷 리스트를 Source / Destination / Protocol / Length / Info 기준으로</br>　시각화하고 정렬 및 상세 조회 기능 구현",
                "- Ethernet / IPv4 / TCP / UDP / ICMP 헤더 정보를</br>　트리 구조와 Hex Dump 형태로 확인할 수 있는 상세 분석 화면 구현",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">libpcap 기반 캡처 / 분석 기능 개발</span>',
                "- TCP / UDP / ICMP 프로토콜 파싱 및 포트, 플래그, </br>　Seq / Ack, Window Size, TTL, Payload Length 정보 추출 기능 구현",
                "- BPF 필터 기반 패킷 필터링 기능 구현"

            ]
        },
        {
            id: "about3",
            title: "Project",
            paragraphs: [
                '<span class="about-heading">미니 게임</span>',
                '- <a href="https://영상URL4" target="_blank">영상 링크 4</a>',
                '- <a href="https://github.com/siroimono-0/EV_HMI_SV" target="_blank">Git 링크</a>',
            ]
        }
    ],
    tech: {
        title: "Tech",
        // title: "",
        categories: [
            {
            },
            {
            }
            
        ]
    },
    awards: {
        // title: "",
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

