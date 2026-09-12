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
            { label: "Study Notes", href: "#excel" },
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
            title: "DomainGuard",
            description: "DNS · WFP · TLS SNI 기반 Windows 네트워크 접근 제어",
            url: "#domainguard",
            backgroundColor: "#17212c",
            featured: true,
            extraClasses: ["project--domainguard", "active"]
        },
        {
            title: "HMI",
            description: "Human-Machine Interface",
            url: "#about",
            backgroundImage: "./imgs/HMI_ok.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        
        {   
            title: "Dicom Viewer",
            description: "Dicom Viewer",
            url: "#about4",
            backgroundImage: "./imgs/dicom.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "mini Wireshark",
            description: "Network Packet Analysis",
            url: "#about2",
            backgroundImage: "./imgs/mini_wireshark_.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        },
        {
            title: "mini_game",
            description: "Crazy Arcade Motif Arcade Game",
            url: "#about3",
            backgroundImage: "./imgs/game_ghost_transition.gif",
            backgroundColor: "#1e1e1e",
            featured: true
        }
    ],
    abouts: [
        {
            id: "domainguard",
            title: "Project",
            paragraphs: [
                '<span class="about-heading">DomainGuard</span><span class="domain-subtitle">Windows 네트워크 접근 제어 프로그램</span>',
                "도메인과 실행 파일을 기준으로 네트워크 접근을 제어하는 C++ / MFC 기반 애플리케이션입니다.</br>로컬 DNS 프록시, Windows Filtering Platform(WFP), 커널 모드 드라이버를 연결해 DNS 질의와 프로그램의 통신을 제어하고, HTTPS 연결의 서버 이름을 검사합니다.",
                '<span class="domain-tech-stack"><span>C++</span><span>MFC</span><span>WinSock2 · IOCP</span><span>WFP</span><span>WDM Driver</span><span>SQLite</span></span>',

                '<a class="domain-github" href="https://github.com/siroimono-0/DomainGuard" target="_blank" rel="noopener noreferrer">GitHub에서 코드 보기 <span aria-hidden="true">↗</span></a>',
                
                '<a class="domain-github" href="https://youtu.be/yRB-6rCGgyM" target="_blank" rel="noopener noreferrer">DomainGuard 동영상 <span aria-hidden="true">↗</span></a>',

                '<a class="domain-github" href="https://github.com/siroimono-0/Project_PDF/blob/main/DomainGuard_Portfolio.pdf" target="_blank" rel="noopener noreferrer"> PDF 보기 <span aria-hidden="true">↗</span></a>',

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">DNS 프록시와 하위 도메인 차단 정책</span>',
                "로컬 DNS 프록시에서 질의 도메인을 확인하고, 차단 대상에는 NXDOMAIN 응답을 반환하도록 구현했습니다. 상위 도메인을 등록하면 하위 도메인까지 함께 검사합니다. 예를 들어 example.com 정책 하나로 www.example.com과 api.example.com의 접근을 제어할 수 있습니다.",
                "허용된 질의는 업스트림 DNS 서버로 전달하고, Overlapped I/O와 IOCP로 응답을 수신합니다. 프록시 ID에 원본 질의 ID와 클라이언트 주소를 연결해 응답을 원래 요청자에게 전달합니다.",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">WFP 기반 프로그램별 통신 제어</span>',
                "실행 파일 경로에서 WFP Application ID를 생성하고, 송신·수신 방향과 TCP·UDP, IP, 포트 조건을 조합한 차단 규칙을 등록합니다. 사용자가 선택한 프로그램의 네트워크 연결을 Windows 네트워크 스택의 ALE 계층에서 제어합니다.",
                "DomainGuard와 루프백 연결을 제외한 프로그램의 외부 TCP/UDP 53번 포트 연결을 제한해, 다른 DNS 서버로 직접 질의하는 우회 경로를 차단했습니다.",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">커널 드라이버에서 HTTPS SNI 검사</span>',
                "WDM 기반 WFP Callout Driver를 구현해 IPv4·IPv6의 송신 TCP 443번 포트 스트림을 검사합니다. TLS ClientHello의 SNI(Server Name Indication)에서 서버 이름을 추출하고, 차단 정책에 해당하면 연결을 종료합니다.",
                "TLS 레코드를 읽는 데 필요한 데이터가 부족하면 WFP에 추가 스트림 데이터를 요청하도록 처리했습니다. HTTPS 본문을 복호화하지 않고, 연결 과정에 노출된 서버 이름을 기준으로 검사합니다.",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">MFC 정책 관리 화면과 DNS 로그</span>',
                "도메인 차단 목록, 프로그램별 WFP 규칙, DNS 로그를 관리하는 MFC 화면을 구성했습니다. DNS 요청 시각, 응답 시간, 질의 유형, 허용·차단 결과를 3초 주기로 갱신해 정책 적용 결과를 확인할 수 있습니다.",
                "도메인과 프로그램 차단 정책은 SQLite에 저장하고 다음 실행 시 다시 적용합니다. DB 작업은 전용 워커와 작업 큐에서 처리하며, 완료 메시지를 받은 Controller가 모델과 화면을 갱신합니다.",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">사용자 모드와 커널 모드 연동</span>',
                "공유 헤더에 IOCTL 코드와 요청 구조체를 정의하고, DeviceIoControl을 통해 GUI에서 변경한 도메인 정책을 드라이버로 전달합니다. 정책 관리 UI, 비동기 네트워크 처리, 커널 필터링을 하나의 애플리케이션으로 연결한 점이 이 프로젝트의 핵심입니다."
            ]
        },
            {
            id: "about4",
            title: "Project",
            paragraphs: [
                '<span class="about-heading">Dicom Viewer</span>',
                "DICOM 파일과 디렉터리를 로드하여 </br>Axial / Coronal / Sagittal 3방향 의료영상을 확인할 수 있는</br>Qt / VTK 기반 DICOM 의료영상 뷰어",
                '- <a href="https://youtu.be/FNyTcQPNEZ4" target="_blank">Dicom Viewer 동영상</a>',
                '- <a href="https://github.com/siroimono-0/DICOM_VTK" target="_blank">Git 링크</a>',
                '- <a href="https://github.com/siroimono-0/DICOM_VTK/releases/latest/download/DICOM_VTK_Installer.zip">다운로드</a>',
                // '- <a href="./downloads/DICOM_VTK_Installer.zip" download>다운로드</a>',
                

                '<hr class="about-divider-wide">',

                "담당",
                '<span class="about-heading_2">Qt Widgets 기반 DICOM Viewer UI 개발</span>',
                "- DICOM 트리, 3방향 영상 뷰어, 메타데이터 표시 영역을 분리한 화면 구성",
                "- Patient / Study / Series 구조로 DICOM 데이터를 계층화하고,</br>　선택한 시리즈와 슬라이스를 화면에 연동",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">VTK 기반 의료영상 표시 기능 개발</span>',
                "- vtkResliceImageViewer를 이용해 Axial / Coronal / Sagittal</br>　3방향 MPR 영상 뷰어 구현",
                "- 슬라이더와 마우스 휠을 이용한 슬라이스 이동 및</br>　Crosshair 위치 표시 기능 구현",


            ]
        },
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

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2">STM32 기반 충전기 제어 MCU 펌웨어 개발</span>',
                "- UART 기반 Modbus RTU 프로토콜 처리,</br>　GPIO 비상정지 입력 처리 기능 구현",
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
                '<span class="about-heading">2인용 미니 게임</span>',
                "게임 로직 프로세스와 QML 렌더링 프로세스를 분리하고,</br> POSIX IPC(shared memory, message queue, semaphore)를 활용해</br> 맵 데이터와 종료 이벤트를 동기화한</br> 크레이지 아케이드 모티브의 2인 대전 미니게임",
                '- <a href="https://youtu.be/Wt0noeUcdUI" target="_blank">2인용 미니 게임 동영상</a>', '- <a href="https://github.com/siroimono-0/mini_game" target="_blank">Git 링크</a>',

                '<hr class="about-divider-wide">',

                "담당",
                '<span class="about-heading_2"> C++ 기반 게임 로직 및 타일맵 시스템 개발 </span>',
                "- 2인 로컬 플레이 구조 구현",
                "- BFS 기반 경로 탐색을 적용해 유령이 플레이어를 추적하는 이동 로직 구현",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2"> 멀티프로세스 / 멀티스레드 기반 실행 구조 개발 </span>',
                "- fork/exec 기반으로 게임 로직과 렌더링 프로세스를 분리하고,</br>　POSIX shared memory를 이용해 맵 데이터를 공유하는 구조 설계",
                "- message queue를 이용해 게임 종료 신호와 프로세스 간 응답을 처리하고,</br>　semaphore로 공유 자원 접근을 동기화",

                '<hr class="about-divider-wide">',

                '<span class="about-heading_2"> QML 기반 맵 렌더링 개발 </span>',
                "- QAbstractListModel 기반으로 2차원 맵 데이터를 모델화하고,</br>　GridView를 이용해 타일 단위로 화면에 렌더링하는 구조 구현",

            ]
        }
    ],
    tech: {
        title: "Tech",
        // title: "",
        categories: [
            {
                label: "Language",
                items: 'C / <a href="#cpp-stl">C++</a> / C# / <a href="#qt-qml">Qt</a> / <a href="#qt-qml">QML</a>'
            },
            {
                label: "Development Environment",
                items: 'Windows / <a href="#linux-shell">Linux</a> </br> Qt Creator / Visual Studio / VScode'
            },
            {
                label: "Windows & Network Programming",
                items: '<a href="#domainguard">MFC / WinSock2 / IOCP / WFP / WDM Driver</a>'
            },
            {
                label: "Additional Skills",
                items: ' <a href="#linux-shell">Shell Script</a> / SQLITE / PostgreSQL </br> Figma / AWS / Git'
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

