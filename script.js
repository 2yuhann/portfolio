const projects = {
  triply: {
    id: "triply",
    category: "AI Recommendation",
    title: "TRIPLY",
    summary: "개인 취향과 여행 조건을 분석해 맞춤형 여행 코스를 추천하는 서비스입니다.",
    description:
      "사용자의 여행 목적, 예산, 선호 장소, 동행 유형을 기반으로 여행지를 추천하고 일정 후보를 구성하는 AI 기반 초개인화 여행 추천 시스템입니다. 여기에 문제 정의, 주요 기능, 맡은 역할, 구현 결과를 정리하면 좋습니다.",
    stack: ["Python", "React", "FastAPI", "Recommendation Model", "MySQL"],
    posterLabel: "TRIPLY Poster",
    resources: [
      { label: "논문 PDF 추가 예정", href: "#" },
      { label: "발표자료 추가 예정", href: "#" },
      { label: "GitHub 링크 추가 예정", href: "#" },
    ],
  },
  "health-mate": {
    id: "health-mate",
    category: "Healthcare Service",
    title: "Health mate",
    summary: "개인 건강 데이터를 관리하고 생활 습관 개선을 돕는 건강관리 서비스입니다.",
    description:
      "운동, 식단, 수면, 건강 지표를 기록하고 사용자 상태에 맞는 관리 가이드를 제공하는 서비스입니다. 추후 화면 이미지, 기능 흐름, 데이터 구조, 기대 효과를 이 영역에 채우면 됩니다.",
    stack: ["React", "Node.js", "Express", "Firebase", "Chart UI"],
    posterLabel: "Health mate Poster",
    resources: [
      { label: "서비스 기획서 추가 예정", href: "#" },
      { label: "포스터 PDF 추가 예정", href: "#" },
      { label: "시연 영상 링크 추가 예정", href: "#" },
    ],
  },
  "eco-guide": {
    id: "eco-guide",
    category: "Smart Guide",
    title: "에코분리",
    summary: "올바른 분리수거 방법을 안내하는 분리수거 스마트 가이드입니다.",
    description:
      "사용자가 품목을 검색하거나 촬영하면 재질, 배출 방법, 주의사항을 안내하는 스마트 분리수거 가이드입니다. 핵심 알고리즘, 분류 기준, 사용자 흐름, 사회적 가치를 정리하기 좋은 섹션입니다.",
    stack: ["HTML", "CSS", "JavaScript", "Image Classification", "Public Data"],
    posterLabel: "에코분리 Poster",
    resources: [
      { label: "프로젝트 보고서 추가 예정", href: "#" },
      { label: "분리수거 데이터 출처 추가 예정", href: "#" },
      { label: "앱 화면 캡처 추가 예정", href: "#" },
    ],
  },
  "grammar-quiz": {
    id: "grammar-quiz",
    category: "Learning Quiz",
    title: "영문법 Quiz",
    summary: "학습자가 영문법 문제를 풀며 개념을 점검할 수 있는 퀴즈 서비스입니다.",
    description:
      "문법 유형별 문제를 제공하고 정답, 해설, 점수 결과를 보여주는 학습형 퀴즈 프로젝트입니다. 문제 생성 방식, 난이도 구성, 학습 피드백 기능을 추가해 포트폴리오 완성도를 높일 수 있습니다.",
    stack: ["JavaScript", "Quiz Logic", "Local Storage", "Responsive UI"],
    posterLabel: "Grammar Quiz Poster",
    resources: [
      { label: "문제 데이터 추가 예정", href: "#" },
      { label: "학습 설계 문서 추가 예정", href: "#" },
      { label: "배포 링크 추가 예정", href: "#" },
    ],
  },
};

const buttons = document.querySelectorAll(".project-button");
const category = document.querySelector("#project-category");
const title = document.querySelector("#project-title");
const summary = document.querySelector("#project-summary");
const description = document.querySelector("#project-description");
const stack = document.querySelector("#project-stack");
const poster = document.querySelector("#project-poster");
const resources = document.querySelector("#project-resources");

function renderProject(projectId) {
  const project = projects[projectId];

  category.textContent = project.category;
  title.textContent = project.title;
  summary.textContent = project.summary;
  description.textContent = project.description;

  stack.innerHTML = "";
  project.stack.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    stack.appendChild(li);
  });

  poster.innerHTML = `
    <div>
      <span>${project.posterLabel}</span>
      <p>assets 폴더에 포스터를 넣고 이 영역을 이미지 또는 PDF 링크로 교체하세요.</p>
    </div>
  `;

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    renderProject(button.dataset.project);
    document.querySelector(".project-detail").scrollIntoView({ behavior: "smooth" });
  });
});

renderProject("triply");
