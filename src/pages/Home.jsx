import React, { useState, useEffect } from "react";
import { Github, Mail, ChevronDown, Code, User, FileText } from "lucide-react";

import { FaJava, FaAws, FaGitAlt } from "react-icons/fa";

import {
  SiSpring,
  SiSpringboot,
  SiNodedotjs,
  SiOracle,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNotion,
} from "react-icons/si";

export default function PortfolioHome() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const navHeight = 80; // scrollToSection이랑 동일하게
      const pos = y + navHeight + 1;

      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        if (pos >= top) current = id;
      }

      setActiveSection(current);
    };

    handleScroll(); // ✅ 처음 로딩 시도 계산
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navHeight = 80; // 네비 실제 높이에 맞춰 72~90 정도로 조절
    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };


  const projects = [
    {
      title: "Gym ERP (헬스장 관리 시스템)",
      description:
        "회원/직원/출석/스케줄 등 운영 기능을 한 곳에서 관리하는 풀스택 ERP 웹 서비스",
      image: "🏋️",
      tech: ["Spring Boot", "Oracle", "React", "AWS EC2", "Nginx"],
      links: {
        live: "https://jong9.kro.kr/",
        frontend: "https://github.com/jong9s/GymErpFront/tree/feature/sjh",
        backend: "https://github.com/jong9s/GymErp/tree/develop",
        notion:
        "https://flashy-jaborosa-90f.notion.site/ERP-2d0252a4535481759233d34f8b2bccc0?source=copy_link",
      },
      demo: "share@gmail.com / 5678",
    },
  ];

  const backendSkills = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring", icon: SiSpring, color: "#6DB33F" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Oracle DB", icon: SiOracle, color: "#F80000" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
  ];

  const frontendSkills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">
              서종훈의 포트폴리오
            </h1>
            <div className="flex gap-6">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center z-10 px-6">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-6xl mx-auto shadow-xl">
                <img src="/profile.jpg" alt="서종훈 프로필" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <h2 className="text-6xl font-bold mb-4 text-white">안녕하세요.</h2>
          <p className="text-3xl mb-4 text-gray-300">
            백엔드 개발자 서종훈입니다
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Spring Framework 기반으로 ERP 백엔드의 핵심 기능을 설계하고 구현한 경험이 있습니다.
            도메인 요구사항을 반복적으로 정리·개선하며, 협업을 통해 안정적인 가치 전달을 목표로 개발했습니다.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/jong9s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://notion.so/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all transform hover:scale-110"
            >
              <SiNotion className="text-xl" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mt-8"
            aria-label="Scroll to About"
          >
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center py-20 px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-12 text-center text-blue-400">
            About Me
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Backend */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-2xl font-bold mb-6">Backend</h4>

              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3 hover:bg-gray-900 transition-all"
                    >
                      <IconComponent
                        className="text-2xl"
                        style={{ color: skill.color }}
                      />
                      <span className="text-gray-200 text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all">
              <Code className="w-12 h-12 text-indigo-400 mb-4" />
              <h4 className="text-2xl font-bold mb-6">Frontend</h4>

              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3 hover:bg-gray-900 transition-all"
                    >
                      <IconComponent
                        className="text-2xl"
                        style={{ color: skill.color }}
                      />
                      <span className="text-gray-200 text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h3 className="text-4xl font-bold mb-4 text-center text-blue-400">
            Projects
          </h3>

          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-all shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                  {/* 왼쪽 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">{p.image}</div>
                      <h4 className="text-2xl md:text-3xl font-bold">{p.title}</h4>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {p.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs bg-blue-500/15 text-blue-200 border border-blue-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Demo */}
                    <div className="text-sm text-gray-300">
                      <span className="text-gray-400">Demo</span>{" "}
                      <span className="font-semibold">{p.demo}</span>
                    </div>
                  </div>

                  {/* 오른쪽 버튼 */}
                  <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {p.links?.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-sm"
                      >
                        Link
                      </a>
                    )}

                    {p.links?.notion && (
                      <a
                        href={p.links.notion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors font-semibold text-sm inline-flex items-center gap-2"
                      >
                        <SiNotion className="text-lg" />
                        Notion
                      </a>
                    )}

                    {p.links?.frontend && (
                      <a
                        href={p.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors font-semibold text-sm"
                      >
                        Frontend
                      </a>
                    )}

                    {p.links?.backend && (
                      <a
                        href={p.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors font-semibold text-sm"
                      >
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 아래쪽 얇은 포인트 라인 */}
              <div className="h-1 bg-gradient-to-r from-blue-500/60 to-indigo-500/60" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 px-6 bg-gray-900"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h3 className="text-4xl font-bold mb-8 text-blue-400">Contact</h3>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Github className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="font-bold mb-2">GitHub</h4>
                <a
                  href="https://github.com/jong9s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  github.com/jong9s
                </a>
              </div>

              <div className="flex flex-col items-center">
                <Mail className="w-12 h-12 text-indigo-400 mb-4" />
                <h4 className="font-bold mb-2">Email</h4>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  jonghunseo@naver.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <SiNotion className="w-12 h-12 text-gray-400 mb-4" />
                <h4 className="font-bold mb-2">Notion</h4>
                <a
                  href="https://flashy-jaborosa-90f.notion.site/1fb252a45354806a86e3c1f5f440d66a?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  My Notion Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 서종훈. All rights reserved.</p>
      </footer>
    </div>
  );
}
