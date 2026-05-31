import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, FileText, Presentation, BookOpen, Code2, HeartPulse, Plane, Recycle, GraduationCap, X, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "triply",
    title: "TRIPLY",
    subtitle: "AI 기반 여행 추천 서비스",
    icon: Plane,
    period: "2026.04 - 2026.05",
    summary:
      "실시간 미디어 트렌드와 지역 축제 데이터를 활용해 사용자 맞춤형 여행지를 추천하고, 유전 알고리즘 기반으로 이동 경로를 최적화하는 여행 플랫폼입니다.",
    role: ["서비스 기획", "UI/UX 구성", "논문 작성", "추천 구조 설계", "발표·포스터 제작"],
    stack: ["HTML", "CSS", "JavaScript", "LLM", "Kakao Map API", "Genetic Algorithm", "Supabase"],
    points: [
      "챗봇 인터페이스를 통해 사용자의 여행 성향과 조건을 수집",
      "실시간 트렌드·축제 데이터를 활용하여 숨은 명소 추천",
      "유전 알고리즘을 활용해 사용자의 선호도와 이동 효율을 고려한 경로 생성",
      "학회 논문 및 포스터 제작을 통해 프로젝트 결과를 문서화"
    ],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "논문", href: "#", icon: FileText },
      { label: "포스터", href: "#", icon: Presentation },
      { label: "Notion", href: "#", icon: BookOpen }
    ]
  },
  {
    id: "healthmate",
    title: "HealthMate",
    subtitle: "개인맞춤 건강관리 앱",
    icon: HeartPulse,
    period: "2026.03 - 2026.06",
    summary:
      "사용자의 건강 상태와 성향 정보를 바탕으로 AI 챗봇, 운동 추천, 건강 플래너 기능을 제공하는 개인 맞춤형 건강관리 서비스입니다.",
    role: ["Frontend", "화면 설계", "팀 협업", "포스터 제작", "발표 자료 구성"],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Python", "GitHub", "Slack"],
    points: [
      "사용자 건강 정보와 성향 기반 맞춤형 추천 기능 기획",
      "AI 챗봇, 운동 추천, 건강 플래너 화면 구성",
      "GitHub와 Slack을 활용하여 팀원 간 개발 진행 상황 공유",
      "서비스 구조와 주요 기능을 포스터 및 발표자료로 시각화"
    ],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "포스터", href: "#", icon: Presentation },
      { label: "Notion", href: "#", icon: BookOpen }
    ]
  },
  {
    id: "eco",
    title: "Eco Sort",
    subtitle: "분리수거 정보 웹사이트",
    icon: Recycle,
    period: "2026.04 - 2026.05",
    summary:
      "사용자가 헷갈리는 분리수거 품목을 검색하고 올바른 배출 방법을 확인할 수 있도록 제작한 환경 문제 해결형 웹사이트입니다.",
    role: ["기획", "Frontend", "UI 구성", "논문 작성", "서비스 설명 자료 제작"],
    stack: ["HTML", "CSS", "JavaScript", "LocalStorage", "GitHub Pages"],
    points: [
      "자주 헷갈리는 분리수거 품목을 카드형 UI로 정리",
      "검색 기능을 통해 사용자가 빠르게 배출 방법을 확인할 수 있도록 구성",
      "LocalStorage를 활용해 사용자 활동 정보를 브라우저에 저장",
      "환경 보호 실천을 유도하는 게이미피케이션 요소 기획"
    ],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "배포 링크", href: "#", icon: ExternalLink },
      { label: "논문", href: "#", icon: FileText }
    ]
  },
  {
    id: "grammar",
    title: "English Grammar Quiz",
    subtitle: "영어문법 학습 웹페이지",
    icon: GraduationCap,
    period: "2026.03 - 2026.04",
    summary:
      "영어문법 Unit 11-12 내용을 기반으로 난이도별 문제를 제공하고, 사용자가 반복 학습할 수 있도록 제작한 웹 기반 퀴즈 페이지입니다.",
    role: ["Frontend", "문제 데이터 구성", "GitHub Pages 배포", "발표 자료 제작"],
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    points: [
      "Easy, Medium, Hard 난이도별 문제 구성",
      "문제 랜덤 출제 기능을 통해 반복 학습 가능하도록 제작",
      "학습 내용과 개발 과정을 발표 자료로 정리",
      "GitHub Pages를 활용하여 실제 접속 가능한 웹페이지로 배포"
    ],
    links: [
      { label: "GitHub", href: "#", icon: Github },
      { label: "배포 링크", href: "https://2yuhann.github.io/-1_Unit11-12/", icon: ExternalLink }
    ]
  }
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "GitHub", "Java", "C", "Python"];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Icon className="h-7 w-7 text-slate-800" />
            </div>
            <div>
              <p className="text-sm text-slate-500">{project.period}</p>
              <h2 className="text-3xl font-bold text-slate-950">{project.title}</h2>
              <p className="mt-1 text-slate-600">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="닫기"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-slate-200 p-5">
            <h3 className="mb-3 text-lg font-bold text-slate-900">프로젝트 소개</h3>
            <p className="leading-7 text-slate-700">{project.summary}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5">
            <h3 className="mb-3 text-lg font-bold text-slate-900">담당 역할</h3>
            <div className="flex flex-wrap gap-2">
              {project.role.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5 md:col-span-2">
            <h3 className="mb-3 text-lg font-bold text-slate-900">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-xl bg-slate-950 px-3 py-1.5 text-sm font-medium text-white">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5 md:col-span-2">
            <h3 className="mb-3 text-lg font-bold text-slate-900">주요 구현 및 경험</h3>
            <ul className="space-y-3">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-700">
                  <ChevronRight className="mt-0.5 h-5 w-5 flex-none text-slate-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5 md:col-span-2">
            <h3 className="mb-3 text-lg font-bold text-slate-900">관련 자료</h3>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-slate-400"># 표시된 링크는 실제 URL로 교체하면 됩니다.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-950">
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
        <nav className="mb-16 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">Yuhan Portfolio</div>
          <div className="flex items-center gap-3">
            <a href="mailto:dbgks0602@gmail.com" className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-950 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-950 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white">
              Frontend · Web · AI Service
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              안녕하세요,
              <br />
              이유한입니다.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              컴퓨터공학을 주전공으로 공부하며 사용자 경험과 문제 해결에 관심을 가지고 웹 서비스를 개발하고 있습니다. 프로젝트를 통해 기획, 구현, 협업, 문서화 과정을 경험하며 꾸준히 성장하고 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                프로젝트 보기
              </a>
              <a href="mailto:dbgks0602@gmail.com" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">About Me</h2>
                <p className="text-sm text-slate-500">Computer Engineering Student</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-700">
              <p>
                영어영문학에서 컴퓨터공학으로 전과하며 개발 분야에 도전했고, 현재는 컴퓨터공학전공을 주전공으로 학습하고 있습니다.
              </p>
              <p>
                팀 프로젝트에서 웹 개발, 서비스 기획, 논문 작성, 포스터 제작 등 다양한 역할을 맡으며 실무에 가까운 협업 경험을 쌓았습니다.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Projects</p>
          <h2 className="text-4xl font-black tracking-tight">대표 프로젝트</h2>
          <p className="mt-3 text-slate-600">카드를 클릭하면 프로젝트 상세 내용과 관련 자료를 확인할 수 있습니다.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">{project.period}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-1 font-medium text-slate-500">{project.subtitle}</p>
                <p className="mt-4 line-clamp-3 leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((stack) => (
                    <span key={stack} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 font-bold text-slate-900">
                  자세히 보기 <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 이유한. All rights reserved.</p>
          <p>GitHub · Vercel · Portfolio</p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
