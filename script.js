const projects = {
  triply: {
    id: "triply",
    category: "AI Recommendation",
    title: "TRIPLY (Trip Playlist)",
    summary:
      "실시간 미디어 트렌드와 지역 축제를 반영하는 AI 기반 초개인화 여행 큐레이션 플랫폼입니다.",
    description: [
      {
        title: "개발 배경",
        text: "기존 플랫폼의 인기도 중심 랭킹으로 인한 정보 편향성과 수동 일정 수립 시 발생하는 높은 계획 피로감을 해결하고자 시작되었습니다.",
      },
      {
        title: "핵심 가치",
        text: "자연어 처리(LLM)를 통한 사용자 의도 파악과 자체 제안 유전 알고리즘을 결합하여, 단순 거리 최소화를 넘어 사용자 만족도를 극대화하는 동적 경로를 자동 생성합니다.",
      },
      {
        title: "설문 및 검증",
        text: "112명의 사용자 요구사항 설문조사 및 기존 Dijkstra 알고리즘 대비 알고리즘 만족도 분석을 진행했습니다.",
      },
    ],
    stack: [
      {
        category: "Frontend",
        tools: "Next.js (App Router), React, TypeScript, Tailwind CSS, Zustand, Kakao Maps SDK",
      },
      {
        category: "Backend",
        tools: "Node.js, FastAPI (Python), JWT Authentication, bcrypt",
      },
      {
        category: "AI & Algorithm",
        tools: "Gemini-Flash (LLM), MFS-GA (Media-Festival Synergy Genetic Algorithm)",
      },
      {
        category: "Database & Infra",
        tools: "Supabase (PostgreSQL), Vercel, Render, Google Cloud Run",
      },
    ],
    posterLabel: "TRIPLY 경진대회 포스터",
    assetTitle: "포스터",
    posterImage: "assets/triply-poster.jpg",
    features: [
      {
        title: "① 초개인화 AI 플레이리스터",
        items: [
          "사용자의 자연어 요청을 Gemini-Flash로 분석하여 실시간 맞춤형 코스를 설계했습니다.",
          "마이페이지 내 개인 취향 태그(힐링, 맛집 등)를 가치 함수 가중치(w1, w2)에 연동한 맞춤형 추천을 구현했습니다.",
        ],
      },
      {
        title: "② MFS-GA 최적화 엔진",
        items: [
          "미디어 트렌드 점수(Mi)와 월별 축제 데이터(Fi)를 동적으로 통합하는 가치 중심 유전 알고리즘을 설계 및 구현했습니다.",
          "이동 거리 비용 계산 및 선택 압력 스케일링 인수를 적용한 최적 적합도 함수를 도출했습니다.",
        ],
      },
      {
        title: "③ 인터랙티브 경로 시각화",
        items: [
          "Kakao Maps API를 연동하여 최적화된 동선을 번호 마커와 폴리라인으로 화면에 직관적으로 렌더링했습니다.",
          "프론트엔드 내 Promise.all 비동기 병렬 페칭 적용으로 LCP(Largest Contentful Paint) 성능을 최적화했습니다.",
        ],
      },
      {
        title: "④ 실시간 미디어 속 여행지 및 이달의 축제 탐색",
        items: [
          "홈 화면에서 '지금 뜨는 미디어 속 여행지'를 통해 드라마, 예능, 영화 촬영지 카테고리별 데이터를 실시간으로 탐색할 수 있도록 구현했습니다.",
          "공공 API 기반의 '이달의 축제' 탭에서 월별 드롭다운 필터링을 제공하고, 선택된 축제 정보가 MFS-GA 알고리즘의 축제 점수(Fi)에 즉각 반영되도록 구성했습니다.",
        ],
      },
      {
        title: "⑤ 마이 플레이리스트 및 저장소 관리",
        items: [
          "AI 챗봇 및 추천 엔진을 통해 생성된 최적화 코스를 사용자가 '나의 여행 페이지' 또는 '마이페이지'에서 '저장한 플리'와 '찜한 장소' 형태로 영구 보관하고 관리할 수 있도록 구현했습니다.",
        ],
      },
    ],
    role: [
      {
        title: "Project Leader & Full-Stack Architect",
        items: [
          "프론트엔드(Vercel), 백엔드(Render), AI 엔진(Cloud Run)으로 구성된 마이크로서비스 아키텍처(MSA)를 설계하고 API 연동을 주도했습니다.",
          "GitHub Organization을 운영하며 PR 기반 코드 리뷰와 Branch Protection Rule을 설정해 팀원 간 코드 정합성을 유지했습니다.",
          "학회 발표 및 경진대회 일정에 맞추어 UI 고도화, 알고리즘 검증, 포스터 제작 등의 마일스톤을 관리했습니다.",
        ],
      },
    ],
    resources: [
      { label: "TRIPLY 논문 PDF", href: "assets/triply-paper.pdf" },
      {
        label: "TRIPLY Notion",
        href: "https://app.notion.com/p/TRIPLY-336d5cf7188d80cfb506da383952cd62?source=copy_link",
      },
      { label: "GitHub Organization", href: "https://github.com/basic-capstone3team" },
    ],
  },
  "health-mate": {
    id: "health-mate",
    category: "AI Recommendation",
    title: "HealthMate",
    summary:
      "AI 기반 개인 건강 상태 및 성향 맞춤 건강관리 서비스입니다. MBTI·DISC 성향 정보와 건강 데이터를 바탕으로 사용자에게 운동·식단 코칭을 제공하는 개인화 헬스케어 플랫폼입니다.",
    description: [
      {
        title: "개발 배경",
        text: "Health 및 피트니스 앱은 사용자의 약 70%가 설치 후 100일 이내 이탈하는 리텐션 문제를 가지고 있습니다. 기존 서비스는 활동량, 수면, 혈당 등 신체 데이터 중심의 개인화에 집중되어 있어 사용자의 성향과 동기 요인을 충분히 반영하지 못한다는 한계가 있습니다.",
      },
      {
        title: "핵심 가치",
        text: "헬스메이트는 MBTI와 DISC를 활용한 통합 성향 프로파일링을 통해 사용자의 운동 선호, 스트레스 반응, 지속 가능성을 반영한 맞춤형 건강 코칭을 제공합니다. 단순한 건강 정보 제공을 넘어, 대화가 누적될수록 AI 코칭이 정교해지는 적응형 개인화를 목표로 합니다.",
      },
      {
        title: "설문 및 검증",
        text: "ACSM·KDRI 기준을 바탕으로 정상 시나리오와 위험 시나리오를 포함한 총 50개 시나리오를 평가했으며, 정상 시나리오 통과와 위험 시나리오 거부 모두 100%의 결과를 보였습니다. 또한 성격 차별화와 영구 기억 정확도 평가에서 각각 0.90의 결과를 확인했습니다.",
      },
    ],
    stack: [
      {
        category: "Frontend",
        tools: "Next.js, React, TypeScript, Tailwind CSS, Vercel",
      },
      {
        category: "Backend",
        tools: "Node.js, Supabase, Oracle Cloud",
      },
      {
        category: "AI & Algorithm",
        tools: "FastAPI, Google Gemini 2.5 Flash, LangGraph, Pinecone, RAG",
      },
      {
        category: "Architecture",
        tools: "Multi-Agent System, Long-term Memory Pipeline, LLM-as-Judge",
      },
    ],
    posterLabel: "HealthMate 포스터",
    assetTitle: "포스터",
    posterImage: "assets/healthmate-poster.jpeg",
    features: [
      {
        title: "① 성향 기반 온보딩 및 프로파일링",
        items: [
          "사용자의 MBTI와 DISC 성향 정보를 건강 코칭에 활용할 수 있도록 온보딩 흐름을 구성했습니다.",
          "MBTI는 진단 도구가 아닌 사용자 성향 라벨로 활용하고, DISC와 신체 정보를 함께 반영해 개인화 추천의 기반 데이터를 구성했습니다.",
        ],
      },
      {
        title: "② AI 건강 코칭 인터페이스",
        items: [
          "사용자가 자연어로 운동·식단 관련 질문을 입력하면 AI가 의도를 분석하고 적절한 도메인으로 라우팅하는 구조를 기반으로 화면 흐름을 설계했습니다.",
          "프론트엔드에서는 AI 채팅 인터페이스를 중심으로 사용자가 코칭 결과를 직관적으로 확인할 수 있도록 구현했습니다.",
        ],
      },
      {
        title: "③ SSE 스트리밍 기반 채팅 UX",
        items: [
          "다단계 LLM 호출로 인한 응답 지연을 줄이기 위해 AI 채팅 화면에 SSE 스트리밍 방식을 적용했습니다.",
          "사용자가 응답을 기다리는 동안 결과가 순차적으로 표시되도록 구성하여 실제 챗봇 사용 경험을 개선했습니다.",
        ],
      },
      {
        title: "④ 건강관리 위젯 및 플랜 화면",
        items: [
          "프론트엔드는 AI 채팅, 건강관리 위젯, 플랜 화면의 세 가지 주요 인터페이스로 구성했습니다.",
          "사용자가 추천받은 운동·식단 계획과 건강관리 정보를 한눈에 확인할 수 있도록 화면 구조를 설계하고 구현했습니다.",
        ],
      },
      {
        title: "⑤ 개인화 기억 기반 추천 흐름",
        items: [
          "사용자의 부상, 알레르기, 체중, 운동 선호, 기저질환 등의 정보가 누적될 수 있는 영구 기억 파이프라인과 연동되는 사용자 흐름을 구성했습니다.",
          "대화 이력이 누적될수록 더 정교한 추천을 제공할 수 있도록 RAG 기반 개인화 구조를 서비스 화면에 반영했습니다.",
        ],
      },
    ],
    role: [
      {
        title: "Frontend Developer",
        items: [
          "Next.js 기반으로 AI 채팅, 건강관리 위젯, 플랜 화면 등 주요 사용자 인터페이스를 구현했습니다.",
          "사용자의 MBTI·DISC 성향 입력부터 AI 추천 결과 확인까지 이어지는 서비스 흐름을 프론트엔드 화면으로 구성했습니다.",
          "AI 서버와의 연동을 고려하여 채팅 응답, 추천 플랜, 사용자 건강 정보가 자연스럽게 표시되도록 UI 구조를 설계했습니다.",
          "SSE 스트리밍 방식을 적용해 AI 응답이 순차적으로 출력되는 채팅 경험을 구현하고, 다단계 LLM 호출로 인한 체감 대기 시간을 줄였습니다.",
          "학회 발표 및 포스터 제출 일정에 맞춰 서비스 화면 완성도 개선, UI 정리, 시연 흐름 점검을 담당했습니다.",
        ],
      },
    ],
    resources: [
      { label: "HealthMate 논문 PDF", href: "assets/healthmate-paper.pdf" },
      { label: "GitHub Repository", href: "https://github.com/WinLike-dev/capstone_2team" },
      { label: "Slack 협업", href: "#" },
    ],
  },
  "eco-guide": {
    id: "eco-guide",
    category: "Smart Guide",
    title: "에코분리 EcoBunri",
    summary:
      "게이미피케이션 요소를 도입한 사용자 참여형 스마트 분리배출 웹 서비스입니다. 사용자가 헷갈리는 폐기물의 올바른 배출 방법을 빠르게 검색하고, 환경 기여도를 확인하며 지속적으로 분리배출 습관을 형성할 수 있도록 설계했습니다.",
    description: [
      {
        title: "개발 배경",
        text: "코로나19 이후 배달 문화와 온라인 소비가 확산되면서 일회용 용기와 포장재 사용량이 증가했고, 가정 내 분리배출 폐기물도 함께 늘어났습니다. 하지만 지자체별 기준 차이와 정보 분산 문제로 인해 사용자가 올바른 분리배출 정보를 쉽게 확인하기 어렵다는 한계가 있습니다.",
      },
      {
        title: "핵심 가치",
        text: "에코분리는 사용자가 폐기물 종류에 따라 올바른 분리배출 방법을 직관적으로 확인할 수 있도록 만든 웹 기반 분리수거 가이드 시스템입니다. 단순 정보 제공에 그치지 않고 경험치, 레벨, 뱃지, 데일리 미션 등 게이미피케이션 요소를 통해 사용자의 지속적인 참여를 유도합니다.",
      },
      {
        title: "설계 방향",
        text: "브라우저 환경에서 모든 기능이 동작하도록 설계했으며, 별도의 데이터베이스 없이 LocalStorage를 활용해 사용자의 레벨, 경험치, 뱃지, 활동 데이터를 저장하도록 구성했습니다. 이를 통해 페이지 새로고침이나 재방문 시에도 사용자의 활동 기록이 유지되도록 구현했습니다.",
      },
    ],
    stack: [
      {
        category: "Frontend",
        tools: "HTML5, CSS3, JavaScript, jQuery",
      },
      {
        category: "Library",
        tools: "Font Awesome, Animate.css, Google Fonts",
      },
      {
        category: "Data Management",
        tools: "data.js, JSON Object, LocalStorage",
      },
      {
        category: "UI / UX",
        tools: "CSS Grid, Modal Layer, Hover Interaction, Range Slider",
      },
    ],
    posterLabel: "에코분리 웹 이미지",
    assetTitle: "웹 이미지",
    posterImage: "assets/ecobunri-web.png",
    features: [
      {
        title: "① 실시간 분리배출 검색 기능",
        items: [
          "사용자가 폐기물 이름을 입력하면 관련 분리배출 정보를 빠르게 확인할 수 있도록 검색 중심의 메인 화면을 설계했습니다.",
          "‘페트병’, ‘영수증’ 등 자주 검색되는 품목을 Quick Tag 형태로 제공해 검색 단계를 줄이고 접근성을 높였습니다.",
        ],
      },
      {
        title: "② 게이미피케이션 대시보드",
        items: [
          "사용자의 분리배출 활동 데이터를 기반으로 경험치, 레벨, 뱃지, 연속 활동 일수를 시각화했습니다.",
          "‘새싹’부터 ‘에코 마스터’까지 총 10단계의 레벨 로드맵을 제공하여 사용자가 자신의 환경 보호 활동 성장을 직관적으로 확인할 수 있도록 구성했습니다.",
        ],
      },
      {
        title: "③ 환경 기여도 계산기",
        items: [
          "사용자가 배출한 쓰레기 정보를 입력하면 분리수거 현황과 환경 기여도를 실시간으로 산출하는 기능을 설계했습니다.",
          "HTML5 range slider와 JavaScript 실시간 동기화를 활용해 입력 과정을 간단하게 만들고, 결과에 따라 A~F 등급을 부여하여 성취감을 높였습니다.",
        ],
      },
      {
        title: "④ 헷갈리는 쓰레기 TOP 10",
        items: [
          "사용자가 자주 실수하는 폐기물 10가지를 카드형 UI로 정리했습니다.",
          "각 카드에 혼동률, 흔히 하는 착각, 올바른 배출법을 함께 배치해 정보 전달력을 높였고, CSS Grid와 Hover 효과를 적용해 인터랙티브한 화면을 구현했습니다.",
        ],
      },
      {
        title: "⑤ 활동 기록 저장 및 사용자 맞춤 관리",
        items: [
          "LocalStorage를 활용해 사용자의 경험치, 레벨, 뱃지, 활동 이력을 브라우저에 저장했습니다.",
          "별도 로그인이나 데이터베이스 없이도 재방문 시 활동 기록이 유지되도록 구성해 간단하지만 지속 가능한 사용자 경험을 설계했습니다.",
        ],
      },
    ],
    role: [
      {
        title: "Project Leader & Web Planner",
        items: [
          "팀장으로서 프로젝트 주제 선정, 기능 기획, 화면 구성, 개발 방향 설정을 주도했습니다.",
          "팀원들과 함께 웹 서비스의 전체 구조를 설계하고, 검색 기능·게이미피케이션 대시보드·환경 기여도 계산기·TOP 10 카드 UI 등 핵심 기능을 분담하여 개발했습니다.",
          "HTML/CSS/JavaScript 기반의 프론트엔드 구현 방향을 정리하고, 사용자 흐름이 자연스럽게 이어지도록 UI/UX 설계를 조율했습니다.",
          "data.js와 LocalStorage를 활용한 데이터 관리 방식을 설계하여 별도 서버 없이도 사용자 활동 기록이 유지되는 구조를 구성했습니다.",
          "연구 배경, 시스템 설계, 주요 기능 구현, 결론을 중심으로 논문 전체 흐름을 정리하고 작성했습니다.",
        ],
      },
    ],
    resources: [
      { label: "에코분리 논문 PDF", href: "assets/ecobunri-paper.pdf" },
      { label: "시연 영상", href: "https://youtu.be/av8xW2AmP8k" },
      { label: "GitHub Repository", href: "https://github.com/wldn051063-eng/webprogram" },
    ],
  },
  "grammar-quiz": {
    id: "grammar-quiz",
    category: "Learning Quiz",
    title: "영문법 Quiz",
    summary:
      "영어문법 수업 발표를 위해 제작한 HTML 기반 인터랙티브 문법 퀴즈 콘텐츠입니다. 교재 Unit 11–12의 핵심 문법인 How long, for, since, When vs How long 개념을 정리하고, 교재 예문 90개를 활용해 난이도별 퀴즈로 확장했습니다.",
    description: [
      {
        title: "제작 배경",
        text: "영어문법1 수업 발표를 준비하면서 교재 내용을 단순히 설명하는 방식보다, 직접 문제를 풀며 문법 차이를 체감할 수 있는 발표 자료를 만들고자 했습니다. 특히 시험 직전에도 휴대폰으로 간단히 퀴즈를 풀며 교재 예문을 반복 학습할 수 있도록 웹 기반 콘텐츠로 제작했습니다.",
      },
      {
        title: "핵심 가치",
        text: "이 프로젝트는 웹 개발 기술을 영어문법 수업에 접목한 예시입니다. 정적인 발표 자료에 그치지 않고, HTML/CSS/JavaScript를 활용해 문법 설명, 예문 학습, 난이도별 퀴즈, 점수 확인까지 한 화면에서 경험할 수 있도록 구성했습니다.",
      },
      {
        title: "학습 주제",
        text: "Unit 11–12의 핵심 문법인 현재완료 지속, for/since, When과 How long의 차이를 중심으로 구성했습니다. 발표 자료에는 문법 요약, 예문 비교, 핵심 규칙 정리, 퀴즈 게임, 검증 과정, 예상 문제를 포함했습니다.",
      },
    ],
    stack: [
      {
        category: "Frontend",
        tools: "HTML5, CSS3, JavaScript",
      },
      {
        category: "Deployment",
        tools: "GitHub Pages",
      },
      {
        category: "Learning Content",
        tools: "Textbook Examples, Grammar Summary, Quiz Questions",
      },
      {
        category: "AI Tools",
        tools: "ChatGPT, Gemini Canvas, Antigravity",
      },
    ],
    posterLabel: "Grammar Quiz Game 화면",
    assetTitle: "이미지",
    posterImage: "assets/grammar-quiz.jpeg",
    features: [
      {
        title: "① HTML 기반 발표 자료 제작",
        items: [
          "영어문법1 발표를 위해 웹 브라우저에서 실행되는 HTML 발표 자료를 제작했습니다.",
          "Unit 11–12의 문법 개념을 목차, 핵심 개념, 예문, 비교표, 결론 순서로 정리해 발표 흐름에 맞게 구성했습니다.",
        ],
      },
      {
        title: "② 교재 예문 기반 퀴즈 구성",
        items: [
          "교재 기반 예문 90개를 활용해 문법 퀴즈 콘텐츠를 제작했습니다.",
          "단순 암기가 아니라 문장 속에서 for, since, How long, When의 쓰임을 구분할 수 있도록 문제를 구성했습니다.",
        ],
      },
      {
        title: "③ 난이도별 Grammar Quiz",
        items: [
          "하, 중, 상 3단계 난이도로 퀴즈를 구성했습니다.",
          "하 단계는 객관식, 중 단계는 빈칸 채우기, 상 단계는 영작 서술형으로 구성해 학습 수준에 따라 점진적으로 문법을 연습할 수 있도록 했습니다.",
        ],
      },
      {
        title: "④ 랜덤 출제 및 점수 출력",
        items: [
          "리롤 버튼을 통해 랜덤으로 10문제가 출제되도록 구현했습니다.",
          "퀴즈 제출 후 점수와 등급이 출력되도록 구성해 학습자가 자신의 이해도를 즉시 확인할 수 있도록 했습니다.",
        ],
      },
      {
        title: "⑤ AI 활용 및 검증 과정 정리",
        items: [
          "ChatGPT, Gemini Canvas, Antigravity를 활용해 문법 정리, HTML 구조 설계, 퀴즈 기능 구현을 보조했습니다.",
          "AI가 생성한 문장과 문제를 그대로 사용하지 않고, 교재 내용과 일치하는지, 문법 오류가 없는지, 정답이 명확한지 직접 검토했습니다.",
        ],
      },
    ],
    role: [
      {
        title: "Individual Project / Web-based Presentation",
        items: [
          "영어문법1 수업 발표를 위해 개인 프로젝트로 HTML 기반 발표 자료와 퀴즈 웹페이지를 제작했습니다.",
          "교재 Unit 11–12 내용을 분석하고, 현재완료 지속, for/since, When과 How long의 차이를 발표용 흐름에 맞게 정리했습니다.",
          "교재 예문 90개를 기반으로 난이도별 퀴즈를 구성하고, 랜덤 출제와 점수 확인 기능을 구현했습니다.",
          "웹 개발 기술을 영어문법 학습에 접목하여 정적인 발표 자료를 상호작용형 학습 콘텐츠로 확장했습니다.",
          "AI 도구를 활용해 개발 속도를 높였지만, 문법 정확성과 문제 품질은 교재 기준으로 직접 검증했습니다.",
        ],
      },
    ],
    resources: [
      { label: "Grammar Quiz 바로가기", href: "https://2yuhann.github.io/-1_Unit11-12/" },
    ],
  },
};

const buttons = document.querySelectorAll(".project-button");
const category = document.querySelector("#project-category");
const title = document.querySelector("#project-title");
const summary = document.querySelector("#project-summary");
const description = document.querySelector("#project-description");
const stack = document.querySelector("#project-stack");
const assetTitle = document.querySelector("#project-asset-title");
const poster = document.querySelector("#project-poster");
const features = document.querySelector("#project-features");
const role = document.querySelector("#project-role");
const resources = document.querySelector("#project-resources");

function renderDescription(content) {
  if (Array.isArray(content)) {
    description.innerHTML = content
      .map(
        (item) => `
          <div class="text-block">
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        `,
      )
      .join("");
    return;
  }

  description.textContent = content;
}

function renderGroupedList(target, groups) {
  target.innerHTML = "";

  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "info-group";

    const heading = document.createElement("h4");
    heading.textContent = group.title;
    section.appendChild(heading);

    const list = document.createElement("ul");
    group.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    section.appendChild(list);
    target.appendChild(section);
  });
}

function renderProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  category.textContent = project.category;
  title.textContent = project.title;
  summary.textContent = project.summary;
  renderDescription(project.description);
  assetTitle.textContent = project.assetTitle || "포스터";

  stack.innerHTML = "";
  project.stack.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "string") {
      li.textContent = item;
    } else {
      const strong = document.createElement("strong");
      const span = document.createElement("span");
      strong.textContent = item.category;
      span.textContent = item.tools;
      li.append(strong, span);
    }
    stack.appendChild(li);
  });

  if (project.posterImage) {
    poster.innerHTML = `
      <figure class="poster-figure">
        <img src="${project.posterImage}" alt="${project.posterLabel}" />
        <figcaption>${project.posterLabel}</figcaption>
      </figure>
    `;
  } else {
    poster.innerHTML = `
      <div>
        <span>${project.posterLabel}</span>
        <p>assets 폴더에 포스터를 넣고 이 영역을 이미지 또는 PDF 링크로 교체하세요.</p>
      </div>
    `;
  }

  renderGroupedList(features, project.features);
  renderGroupedList(role, project.role);

  resources.innerHTML = "";
  project.resources.forEach((resource) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = resource.href;
    link.textContent = resource.label;
    li.appendChild(link);
    resources.appendChild(li);
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.project === projectId);
  });

  document.querySelector(".project-detail").id = project.id;
}

function getProjectFromHash() {
  const hash = window.location.hash.replace("#", "");
  return projects[hash] ? hash : "triply";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectId = button.dataset.project;
    renderProject(projectId);
    history.pushState(null, "", `#${projectId}`);
    document.querySelector(".project-detail").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("hashchange", () => {
  renderProject(getProjectFromHash());
});

renderProject(getProjectFromHash());
