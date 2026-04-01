"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "education",
      "experience",
      "skills",
      "projects",
      "extra",
      "contact"
    ];

    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) =>
                prev.includes(id) ? prev : [...prev, id]
              );
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const education = [
    {
      title: "Double diplôme en ingénierie des systèmes de production",
      school: "École Nationale Supérieure de Mécanique et des Microtechniques",
      period: "Sep. 2024 – Présent",
      location: "Besançon, France",
      logo: "/logos/ensmm.png"
    },
    {
      title: "Diplôme d’Ingénieur en Génie Mécanique",
      school: "École Mohammadia d’Ingénieurs",
      period: "Sep. 2022 – 2024",
      location: "Rabat, Maroc",
      logo: "/logos/emi.png"
    },
    {
      title: "Classe Préparatoire aux Grandes Écoles – MP",
      school: "CPGE",
      period: "Sep. 2020 – 2022",
      location: "Fès, Maroc",
      logo: "/logos/cpge.png"
    },
    {
      title: "Baccalauréat Sciences Mathématiques B",
      school: "Lycée",
      period: "Sep. 2018 – 2020",
      location: "Fès, Maroc",
      logo: "/logos/bac.png"
    }
  ];

  const experiences = [
    {
      company: "Aperam",
      logo: "/logos/aperam.png",
      role: "Apprentie Ingénieure en excellence opérationnelle / Transformation digitale",
      period: "Septembre 2025 – Présent",
      location: "Amilly, France",
      points: [
        "Transformation digitale des processus industriels grâce à la conception d’une interface opérateur pour 6 machines, permettant la digitalisation des données de production et le suivi en temps réel des KPI.",
        "Développement d’un tableau de bord managérial intégré à l’ERP Sage pour automatiser le reporting de performance.",
        "Accompagnement et formation des équipes terrain dans l’adoption de nouveaux outils digitaux et méthodes de travail."
      ]
    },
    {
      company: "SLB - Schlumberger",
      logo: "/logos/slb.png",
      role: "Chef de projet Planification et industrialisation",
      period: "Février 2025 – Août 2025",
      location: "Abbeville, France",
      points: [
        "Définition des futures instructions de travail et optimisation des processus de production.",
        "Application d’outils Lean et qualité : SAP, DMAIC, VSM, SMED, SIPOC, 5M, CTQ, PDCA et réduction des coûts.",
        "Conduite d’un chantier Kaizen / 5S avec une équipe de 13 techniciens.",
        "Collaboration avec les centres SLB internationaux et l’équipe mécanique en Inde."
      ]
    },
    {
      company: "Groupe Renault",
      logo: "/logos/renault.png",
      role: "Stagiaire Ingénieure Lean Management - amélioration continue",
      period: "Juillet 2024 – Août 2024",
      location: "Tanger, Maroc",
      points: [
        "Optimisation des flux de production et amélioration de la performance des lignes dans un contexte Industrie 4.0.",
        "Utilisation d’outils d’analyse et d’amélioration : brainstorming, AMDEC, A3, MVP.",
        "Animation de réunions, communication régulière sur l’avancement du projet et suivi des actions terrain."
      ]
    },
    {
      company: "Office Chérifien des Phosphates (OCP)",
      logo: "/logos/ocp.png",
      role: "Stagiaire Ingénieure mécanique - stage d’initiation",
      period: "Juillet 2023 – Août 2023",
      location: "Youssoufia, Maroc",
      points: [
        "Diagnostic de problématiques industrielles et analyse des processus opérationnels.",
        "Analyse des causes racines avec Pareto, 5 Pourquoi, Ishikawa et suivi des actions correctives."
      ]
    }
  ];

  const skills = [
    {
      title: "Lean & amélioration continue",
      items: ["DMAIC", "VSM", "SMED", "SIPOC", "5M", "CTQ", "PDCA", "Kaizen", "5S", "AMDEC", "A3"]
    },
    {
      title: "ERP & outils data",
      items: ["SAP", "Sage", "Excel", "Macros", "Tableaux croisés dynamiques", "Looker Studio", "PowerPoint", "Word"]
    },
    {
      title: "CAO & simulation",
      items: ["CREO", "CATIA V5", "ANSYS", "CES", "Robot Structural Analysis", "Witness"]
    },
    {
      title: "Programmation",
      items: ["Java", "Python", "MATLAB", "C", "C++", "SQL", "PHP", "APS Script", "LaTeX"]
    },
    {
      title: "Qualités",
      items: ["Polyvalente", "Autonome", "Curieuse", "Esprit d’équipe", "Sens du terrain", "Résolution de problèmes", "Adaptation"]
    }
  ];

  const projects = [
    {
      title: "Système modulable de déplacement ajustable pour tests dynamiques de plaques",
      tools: "CATIA V5, CES",
      description:
        "Conception d’un système mécanique ajustable destiné aux essais dynamiques, avec une approche orientée modélisation, faisabilité et performance."
    },
    {
      title: "Modélisation et simulation de la ligne de production de SPS",
      tools: "Witness",
      description:
        "Simulation d’une ligne de production pour analyser les flux, identifier les goulots d’étranglement et proposer des pistes d’optimisation."
    },
    {
      title: "Création d’un jeu vidéo en Java",
      tools: "Java, HTML5, CSS, PHP, SQL",
      description:
        "Développement d’un projet logiciel complet combinant logique applicative, interface et gestion des données."
    }
  ];

  return (
    <main style={pageStyle}>
      <nav style={navStyle}>
        <div style={navInner}>
          <div style={brandStyle}>Khawla Chakir</div>
          <div style={navLinksStyle}>
            <a href="#about" style={navLink}>À propos</a>
            <a href="#education" style={navLink}>Formation</a>
            <a href="#experience" style={navLink}>Expériences</a>
            <a href="#skills" style={navLink}>Compétences</a>
            <a href="#projects" style={navLink}>Projets</a>
            <a href="#extra" style={navLink}>Parascolaire</a>
            <a href="#contact" style={navLink}>Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        style={{
          ...heroSection,
          ...getRevealStyle(visibleSections.includes("hero"))
        }}
      >
        <div>
          <h1 style={heroTitle}>
            Ingénieure en excellence opérationnelle & digitalisation industrielle
          </h1>
         
          <p style={heroParagraph}>
            Double diplômée en Génie Mécanique et Systèmes de Production, je construis un profil polyvalent à l’intersection
            de la performance industrielle, de la gestion de projet, de l’analyse des données et de la transformation digitale.
            Mon objectif est d’accompagner les entreprises dans l’optimisation durable de leurs processus, avec une approche
            à la fois structurée, terrain et orientée résultats.
          </p>

          <div style={buttonRow}>
            <a href="#contact" style={primaryButton}>Me contacter</a>
            <a href="#experience" style={secondaryButton}>Découvrir mon parcours</a>
          </div>
        </div>

        <div style={photoWrap}>
          <img
            src="/khawla-photo.png"
            alt="Portrait de Khawla Chakir"
            style={photoStyle}
          />
        </div>
      </section>

      <Section id="about" title="À propos" visible={visibleSections.includes("about")}>
        <div style={twoCols}>
          <Card>
            <p style={paragraph}>
              Je suis une ingénieure polyvalente, capable d’évoluer sur des sujets techniques, organisationnels et stratégiques.
              Mon parcours m’a permis de développer une vision globale des environnements industriels, depuis l’analyse des flux
              jusqu’à la conduite du changement, en passant par la standardisation, la digitalisation et le pilotage de la performance.
            </p>
            <p style={paragraph}>
              J’apprécie particulièrement les missions qui demandent à la fois rigueur, capacité d’adaptation, sens du terrain et
              esprit d’initiative. Cette polyvalence me permet de contribuer efficacement à des projets d’amélioration continue,
              d’industrialisation et de transformation opérationnelle.
            </p>
          </Card>

          <Card>
            <div style={infoLine}><strong>Adresse :</strong> 32 rue Jean Jaurès, 45200 Montargis, France</div>
            <div style={infoLine}><strong>Téléphone :</strong> +33 6 12 37 77 62</div>
            <div style={infoLine}><strong>Email :</strong> khawla.chakir@ens2m.org</div>
            <div style={infoLine}><strong>Permis :</strong> B</div>
            <div style={infoLine}><strong>Langues :</strong> Français bilingue, Anglais B2, Arabe langue maternelle</div>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Formation" visible={visibleSections.includes("education")}>
        <div style={gridStyle}>
          {education.map((item) => (
            <Card key={item.title}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <img src={item.logo} alt={item.school} style={logoStyle} />
                <div>
                  <div style={smallGreen}>{item.period}</div>
                  <h3 style={{ ...cardTitle, marginBottom: "4px" }}>{item.title}</h3>
                </div>
              </div>
              <div style={cardText}>{item.school}</div>
              <div style={mutedText}>{item.location}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Expériences" visible={visibleSections.includes("experience")}>
        <div style={gridStyle}>
          {experiences.map((exp) => (
            <Card key={exp.company}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <img src={exp.logo} alt={exp.company} style={logoStyle} />
                <div>
                  <h3 style={{ ...cardTitle, marginBottom: "4px" }}>{exp.company}</h3>
                  <div style={cardText}>{exp.role}</div>
                </div>
              </div>

              <div style={smallGreen}>{exp.period}</div>
              <div style={{ ...mutedText, marginBottom: "14px" }}>{exp.location}</div>

              <ul style={listStyle}>
                {exp.points.map((point, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Compétences" visible={visibleSections.includes("skills")}>
        <div style={gridStyle}>
          {skills.map((skill) => (
            <Card key={skill.title}>
              <h3 style={cardTitle}>{skill.title}</h3>
              <div style={tagsWrap}>
                {skill.items.map((item) => (
                  <span key={item} style={tagStyle}>{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projets" visible={visibleSections.includes("projects")}>
        <div style={gridStyle}>
          {projects.map((project) => (
            <Card key={project.title}>
              <div style={smallBadge}>{project.tools}</div>
              <h3 style={cardTitle}>{project.title}</h3>
              <p style={paragraph}>{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="extra" title="Parascolaire" visible={visibleSections.includes("extra")}>
        <div style={twoCols}>
          <Card>
            <h3 style={cardTitle}>Club EMIAerospace</h3>
            <p style={paragraph}>Chef de cellule média</p>
          </Card>
          <Card>
            <h3 style={cardTitle}>Club EMInnove</h3>
            <p style={paragraph}>Chef de projet</p>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact" visible={visibleSections.includes("contact")}>
        <Card>
          <p style={{ ...paragraph, fontSize: "18px" }}>
            Je suis ouverte aux opportunités en amélioration continue, excellence opérationnelle, industrialisation,
            transformation digitale et gestion de projet.
          </p>
          <div style={buttonRow}>
            <a href="mailto:khawla.chakir@ens2m.org" style={primaryButton}>Envoyer un email</a>
            <a href="tel:+33612377762" style={secondaryButton}>Appeler</a>
          </div>
        </Card>
      </Section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
  visible
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  visible: boolean;
}) {
  return (
    <section id={id} style={{ ...sectionStyle, ...getRevealStyle(visible) }}>
      <h2 style={sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div style={cardStyle}>{children}</div>;
}

function getRevealStyle(visible: boolean) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(45px)",
    transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
  };
}

const pageStyle = {
  background:
    "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 35%, #f8fafc 100%)",
  color: "#0f172a",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  scrollBehavior: "smooth" as const
};

const navStyle = {
  position: "sticky" as const,
  top: 0,
  zIndex: 1000,
  background: "rgba(255,255,255,0.78)",
  borderBottom: "1px solid rgba(226,232,240,0.9)",
  backdropFilter: "blur(14px)"
};

const navInner = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "16px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap" as const,
  gap: "12px"
};

const brandStyle = {
  fontWeight: 800,
  color: "#166534",
  fontSize: "20px",
  letterSpacing: "-0.3px"
};

const navLinksStyle = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap" as const,
  fontSize: "14px"
};

const navLink = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: 500
};

const heroSection = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "14px 24px 6px",
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "18px",
  alignItems: "center"
};

const heroTitle = {
  fontSize: "clamp(28px, 4.3vw, 48px)",
  lineHeight: 1.04,
  margin: "0 0 8px",
  fontWeight: 800,
  letterSpacing: "-1px"
};

const heroSubtitle = {
  fontSize: "clamp(18px, 2vw, 26px)",
  color: "#166534",
  margin: "0 0 8px",
  fontWeight: 700
};

const heroParagraph = {
  fontSize: "15.5px",
  lineHeight: 1.62,
  color: "#475569",
  marginBottom: "12px",
  maxWidth: "620px"
};

const photoWrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const photoStyle = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: "28px",
  display: "block",
  objectFit: "cover" as const,
  background: "#ffffff",
  boxShadow: "0 24px 70px rgba(15,23,42,0.12)",
  border: "1px solid rgba(226,232,240,0.95)"
};

const buttonRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap" as const,
  marginTop: "6px"
};

const primaryButton = {
  background: "linear-gradient(135deg, #16a34a, #22c55e)",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
  boxShadow: "0 10px 24px rgba(34,197,94,0.22)"
};

const secondaryButton = {
  background: "rgba(255,255,255,0.88)",
  color: "#0f172a",
  padding: "12px 18px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
  border: "1px solid #cbd5e1"
};

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "24px 24px"
};

const sectionTitle = {
  fontSize: "clamp(28px, 4vw, 40px)",
  margin: "0 0 22px",
  color: "#0f172a",
  letterSpacing: "-0.7px"
};

const cardStyle = {
  background: "rgba(255,255,255,0.82)",
  border: "1px solid rgba(226,232,240,0.95)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
  backdropFilter: "blur(8px)"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "22px"
};

const twoCols = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "22px"
};

const paragraph = {
  color: "#475569",
  lineHeight: 1.85,
  margin: "0 0 16px"
};

const cardTitle = {
  margin: "0 0 10px",
  fontSize: "22px",
  color: "#0f172a"
};

const cardText = {
  color: "#334155",
  lineHeight: 1.7
};

const mutedText = {
  color: "#64748b"
};

const infoLine = {
  color: "#334155",
  lineHeight: 2
};

const smallGreen = {
  color: "#15803d",
  fontWeight: 700,
  fontSize: "13px",
  marginBottom: "8px"
};

const listStyle = {
  paddingLeft: "20px",
  margin: 0,
  color: "#475569",
  lineHeight: 1.8
};

const tagsWrap = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "10px"
};

const tagStyle = {
  padding: "8px 12px",
  borderRadius: "999px",
  background: "#f0fdf4",
  color: "#166534",
  fontSize: "14px",
  border: "1px solid #bbf7d0"
};

const smallBadge = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "#ecfdf5",
  color: "#166534",
  fontSize: "12px",
  fontWeight: 700,
  marginBottom: "12px"
};

const logoStyle = {
  width: "52px",
  height: "52px",
  objectFit: "contain" as const,
  background: "#fff",
  borderRadius: "12px",
  padding: "6px",
  border: "1px solid #e2e8f0"
};