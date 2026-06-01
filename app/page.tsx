"use client";

import { useEffect, useState } from "react";

type EducationItem = {
  id: string;
  title: string;
  school: string;
  period: string;
  location: string;
  logo: string;
  description: string;
};

type ExperienceItem = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ProjectItem = {
  title: string;
  tools: string;
  description: string;
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const education: EducationItem[] = [
    {
      id: "ensmm",
      title: "Double diplôme en ingénierie des systèmes de production",
      school:
        "École Nationale Supérieure de Mécanique et des Microtechniques (ENSMM)",
      period: "Sep. 2024 – Présent",
      location: "Besançon, France",
      logo: "/logos/ensmm.png",
      description:
        "Ma formation à l’ENSMM en ingénierie des systèmes de production s’inscrit dans une logique d’Industrie 4.0, en réponse aux enjeux actuels de digitalisation, de performance et de flexibilité des systèmes industriels. Elle m’a permis de développer une vision globale du pilotage des systèmes de production, depuis leur modélisation et leur évaluation jusqu’à leur optimisation, leur exploitation et leur maintenance. J’y ai acquis des compétences avancées en organisation et planification de la production, modélisation des systèmes industriels, simulation, évaluation des performances, aide à la décision, optimisation, intelligence artificielle, maintenance prédictive et sûreté de fonctionnement."
    },
    {
      id: "emi",
      title: "Diplôme d’Ingénieur en Génie Mécanique",
      school: "École Mohammadia d’Ingénieurs (EMI)",
      period: "Sep. 2022 – 2024",
      location: "Rabat, Maroc",
      logo: "/logos/emi.png",
      description:
        "Ma formation à l’École Mohammadia d’Ingénieurs m’a permis d’acquérir une solide maîtrise des principes fondamentaux du génie mécanique, couvrant la conception, la production industrielle, la maintenance et la gestion de la qualité. J’y ai développé une approche globale de l’ingénierie, intégrant la modélisation et le dimensionnement des systèmes mécaniques, la gestion de projets industriels ainsi que l’optimisation des processus dans des environnements complexes. Cette formation m’a également sensibilisée aux technologies modernes de production, à l’efficacité énergétique, aux énergies renouvelables et aux enjeux du développement durable."
    },
    {
      id: "cpge",
      title: "Classe Préparatoire aux Grandes Écoles – MPSI",
      school: "CPGE",
      period: "Sep. 2020 – 2022",
      location: "Fès, Maroc",
      logo: "/logos/cpge.png",
      description:
        "Ma formation en classe préparatoire scientifique, filière MPSI, m’a permis d’acquérir une solide base théorique ainsi qu’une grande rigueur intellectuelle. Elle m’a formée à la résolution de problèmes complexes, à l’analyse approfondie de systèmes scientifiques et au développement d’une forte capacité de travail dans un environnement exigeant. Cette expérience a renforcé mon esprit critique, mon autonomie et ma persévérance, tout en développant des compétences essentielles en mathématiques, en physique et en modélisation."
    },
    {
      id: "bac",
      title: "Baccalauréat Scientifique – Mathématiques & Sciences de l’Ingénieur",
      school: "Lycée",
      period: "Sep. 2018 – 2020",
      location: "Fès, Maroc",
      logo: "/logos/bac.png",
      description:
        "Mon baccalauréat scientifique, avec une spécialisation en mathématiques et sciences de l’ingénieur, m’a permis d’acquérir des bases solides en raisonnement scientifique, en modélisation et en analyse de systèmes techniques. Cette formation m’a initiée aux concepts fondamentaux de l’ingénierie, tout en développant ma logique, ma capacité d’abstraction et mon intérêt pour les problématiques techniques et industrielles."
    }
  ];

  const experiences: ExperienceItem[] = [
    {
  company: "Aperam",
  logo: "/logos/aperam.png",
  role: "Chef de projet Transformation Digitale",
  period: "Septembre 2025 – Présent",
  location: "Amilly, France",
  points: [
    "Pilotage d’une démarche de Business Process Re-engineering (BPR) visant la transformation et la digitalisation du processus de collecte des données de production dans une logique Industrie 4.0 et Excellence Opérationnelle.",

    "Réalisation de Gemba Walk, cartographie des flux par Value Stream Mapping (VSM), analyses Ishikawa et SWOT afin d’identifier les dysfonctionnements, les activités sans valeur ajoutée et les opportunités de transformation digitale.",

    "Définition des objectifs SMART, re-conception du processus cible et développement d’une solution digitale complète basée sur Google Apps Script, JavaScript, Google Sheets et Looker Studio.",

    "Conception d’une interface opérateur digitalisée intégrant des mécanismes Poka-Yoke, l’automatisation du calcul des KPI industriels (TRS, Disponibilité, Performance, Qualité, MTBF, MTTR), la génération de dashboards temps réel et l’analyse automatique des pertes de performance via des Pareto dynamiques.",

    "Déploiement de la solution selon une approche Agile, conduite du changement, formation des utilisateurs et intégration continue des retours terrain afin d’assurer une adoption progressive et durable.",

    "Résultats : suppression du processus papier, fiabilisation des données de production, automatisation du reporting industriel, ROI supérieur à 124 % dans le cadre d’un déploiement à l’échelle de l’atelier.",

    "Au-delà des gains directement mesurables, la solution permet d’exploiter la donnée comme levier de décision, de déclencher des chantiers d’amélioration continue (SMED, optimisation des arrêts, amélioration du TRS) et de renforcer la synergie entre digitalisation et excellence opérationnelle afin d’accélérer durablement la performance industrielle."
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

  const skills: SkillGroup[] = [
    {
      title: "Lean & amélioration continue",
      items: ["DMAIC", "VSM", "SMED", "SIPOC", "5M", "CTQ", "PDCA", "Kaizen", "5S", "AMDEC", "A3", "KANBAN", " 5 Pourquoi", "QQOQCP"]
    },
    {
      title: "ERP & outils data",
      items: ["SAP", "Sage", "Excel",  "Tableaux croisés dynamiques", "Looker Studio", "Power BI", "PowerPoint", "Word"]
    },
    {
      title: "CAO & simulation",
      items: ["CREO", "CATIA V5", "ANSYS", "CES", "Robot Structural Analysis", "Witness"]
    },
    {
      title: "Programmation",
      items: ["Java", "Python", "MATLAB", "C", "CSS", "SQL", "HTML", "APS Script", "LaTeX"]
    },
    {
      title: "Qualités",
      items: ["Polyvalente", "Autonome", "Curieuse", "Esprit d’équipe", "Sens du terrain", "Résolution de problèmes", "Adaptation"]
    }
  ];

  const projects: ProjectItem[] = [
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
  },
{
  title: "Industrialisation d’un raccord en laiton – optimisation du processus de fabrication",
  tools: "CATIA, méthodes de fabrication",
  description:
    "Développement d’un processus de fabrication industriel pour un raccord en laiton , en intégrant les contraintes de moulage, d’usinage, de tolérances et de qualité. Le projet portait sur l’analyse des contraintes de fabrication, la structuration des phases d’usinage, l’optimisation des choix machines et la vérification de faisabilité à l’aide d’outils méthodologiques ."
},
  {
    title: "MEGA Hackathon - Orange Maroc",
    tools: "Innovation, conception produit, développement durable",
    description:
      "Conception d’ECOGOAL, une poubelle intelligente alimentée par énergie solaire, capable de trier les déchets déposés par l’utilisateur. Le système intègre une logique de récompense basée sur des points cumulés, permettant d’encourager les comportements écoresponsables à travers des gains et avantages."
  }
];

  return (
    <main style={pageStyle}>
      <nav style={navStyle}>
        <div style={navInner(isMobile)}>
          <div style={brandStyle}>Khawla Chakir</div>
          <div style={navLinksStyle(isMobile)}>
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
          ...heroSection(isMobile),
          ...getRevealStyle(visibleSections.includes("hero"))
        }}
      >
        <div style={heroContentWrap(isMobile)}>
          <div style={heroBadge}>Ingénieure en excellence opérationnelle · digitalisation · production</div>
          <h1 style={heroTitle}>
                     </h1>
          <p style={heroParagraph}>
            Double diplômée en Génie Mécanique et Systèmes de Production, je construis un profil polyvalent à l’intersection de la performance industrielle, de la gestion de projet, de l’analyse des données et de la transformation digitale.
          </p>
          <div style={heroStatsGrid(isMobile)}>
  <StatCard value="2" label="diplômes d’ingénierie" />
<StatCard value="4" label="expériences en multinationales" />
<StatCard value="+10" label="projets industriels & académiques" />
</div>

<div style={buttonRow(isMobile)}>
  <a href="#contact" style={primaryButton}>Me contacter</a>
  <a href="#experience" style={secondaryButton}>Découvrir mon parcours</a>
</div>
        </div>

        <div style={heroVisualWrap(isMobile)}>
          <div style={photoGlow} />
          <div style={photoCard(isMobile)}>
            <img
              src="/khawla-photo.png"
              alt="Portrait de Khawla Chakir"
              style={photoStyle(isMobile)}
            />
          </div>
        </div>
      </section>

      <Section id="about" title="À propos" visible={visibleSections.includes("about")}>
        <div style={twoCols(isMobile)}>
          <Card>
  <p style={quoteStyle}>
    « Le plaisir dans le travail met la perfection dans l’œuvre. » — Aristote
  </p>

  <p style={paragraph}>
    Animée par une forte curiosité et une envie constante d’apprendre, je m’investis pleinement dans chaque projet pour comprendre, structurer et améliorer les systèmes qui m’entourent. Cette démarche m’amène naturellement à explorer des problématiques variées et à développer une vision globale des environnements industriels.
  </p>

  <p style={paragraph}>
    Je suis aujourd’hui une ingénieure polyvalente, capable d’évoluer aussi bien sur des enjeux techniques, organisationnels que stratégiques. Mon parcours m’a permis d’appréhender les systèmes de production dans leur ensemble, depuis l’analyse des flux jusqu’à la conduite du changement, en passant par la standardisation, la digitalisation et le pilotage de la performance.
  </p>

<p style={paragraphNoMargin}>
    J’apprécie particulièrement les missions qui demandent rigueur, sens du terrain, capacité d’adaptation et esprit d’initiative. Cette polyvalence me permet de contribuer efficacement à des projets d’amélioration continue, d’industrialisation et de transformation opérationnelle, avec une approche structurée, analytique et orientée résultats.
  </p>

</Card>

          <Card>
            <div style={infoGrid}>
              <InfoItem label="Adresse" value="32 rue Jean Jaurès, 45200 Montargis, France" />
              <InfoItem label="Téléphone" value="+33 6 12 37 77 62" />
              <InfoItem label="Email" value="khawla.chakir@ens2m.org" />
              <InfoItem label="Permis" value="B" />
              <InfoItem label="Langues" value="Français (Bilingue), Anglais (B2), Arabe (Langue maternelle)" />
            </div>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Formation" visible={visibleSections.includes("education")}>
        <div style={educationLayout}>
          {education.map((item, index) => (
            <div key={item.id} style={educationRow(isMobile)}>
              <div style={timelineCol}>
                <div style={timelineDot} />
                {index !== education.length - 1 && <div style={timelineLine} />}
              </div>

              <div style={educationCardWrap}>
                <Card>
                  <div style={educationHeader}>
                    <div style={educationIdentity(isMobile)}>
                      <img src={item.logo} alt={item.school} style={logoStyle} />
                      <div>
                        <div style={smallGreen}>{item.period}</div>
                        <h3 style={educationTitle}>{item.title}</h3>
                        <div style={cardTextStrong}>{item.school}</div>
                        <div style={mutedText}>{item.location}</div>
                      </div>
                    </div>
                  </div>
                  <p style={educationParagraph}>{item.description}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Expériences" visible={visibleSections.includes("experience")}>
        <div style={gridStyle(isMobile)}>
          {experiences.map((exp) => (
            <Card key={exp.company}>
              <div style={experienceTop}>
                <img src={exp.logo} alt={exp.company} style={logoStyle} />
                <div>
                  <h3 style={cardTitle}>{exp.company}</h3>
                  <div style={cardTextStrong}>{exp.role}</div>
                </div>
              </div>

              <div style={smallGreen}>{exp.period}</div>
              <div style={{ ...mutedText, marginBottom: "14px" }}>{exp.location}</div>

              <ul style={listStyle}>
                {exp.points.map((point, index) => (
                  <li key={index} style={listItemStyle}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Compétences" visible={visibleSections.includes("skills")}>
        <div style={gridStyle(isMobile)}>
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
        <div style={gridStyle(isMobile)}>
          {projects.map((project) => (
            <Card key={project.title}>
              <div style={smallBadge}>{project.tools}</div>
              <h3 style={cardTitle}>{project.title}</h3>
              <p style={paragraphNoMargin}>{project.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="extra" title="Parascolaire" visible={visibleSections.includes("extra")}>
  <div style={twoCols(isMobile)}>
    <Card>
      <div style={extraImageWrap}>
        <img
          src="/logos/aero.png"
          alt="Club EMIAerospace"
          style={extraImageStyle}
        />
      </div>
      <h3 style={cardTitle}>Club EMIAerospace</h3>
      <p style={extraRoleStyle}>Chef de cellule média</p>
      <p style={paragraphNoMargin}>
  Responsable des réseaux sociaux et de la médiatisation du club, avec prise en charge de la communication avec les médias et de l’organisation d’événements. Cette expérience m’a permis de renforcer mes compétences en communication stratégique, gestion d’image, création de contenu et coordination.
</p>
    </Card>

    <Card>
      <div style={extraImageWrap}>
        <img
          src="/logos/emiinnov.png"
          alt="Club EMInnove"
          style={extraImageStyle}
        />
      </div>
      <h3 style={cardTitle}>Club EMInnove</h3>
      <p style={extraRoleStyle}>Chef de projet</p>
      <p style={paragraphNoMargin}>
  Implication dans l’organisation et le pilotage d’initiatives étudiantes autour de l’innovation automobile, une expérience qui m’a permis de développer mes compétences en gestion d’équipe, communication, coordination de projet et résolution de problèmes.
</p>
    </Card>
  </div>
</Section>

      <Section id="contact" title="Contact" visible={visibleSections.includes("contact")}>
        <Card>
          <p style={contactLead}>
            Je suis ouverte aux opportunités en amélioration continue, excellence opérationnelle, industrialisation, transformation digitale et gestion de projet.
          </p>
          <div style={buttonRow(isMobile)}>
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
      <div style={sectionTitleWrap}>
        <div style={sectionMiniLine} />
        <h2 style={sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div style={cardStyle}>{children}</div>;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={statCardStyle}>
      <div style={statValueStyle}>{value}</div>
      <div style={statLabelStyle}>{label}</div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={infoItemStyle}>
      <div style={infoLabelStyle}>{label}</div>
      <div style={infoValueStyle}>{value}</div>
    </div>
  );
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
    "radial-gradient(circle at top left, rgba(34,197,94,0.10), transparent 28%), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 45%, #f8fafc 100%)",
  color: "#0f172a",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  scrollBehavior: "smooth" as const
};

const navStyle = {
  position: "sticky" as const,
  top: 0,
  zIndex: 1000,
  background: "rgba(255,255,255,0.82)",
  borderBottom: "1px solid rgba(226,232,240,0.9)",
  backdropFilter: "blur(14px)"
};

const navInner = (isMobile: boolean) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: isMobile ? "14px 16px" : "16px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap" as const,
  gap: isMobile ? "10px" : "12px"
});

const brandStyle = {
  fontWeight: 800,
  color: "#166534",
  fontSize: "20px",
  letterSpacing: "-0.3px"
};
const quoteStyle = {
  fontStyle: "italic",
  fontWeight: 700,
  fontSize: "17px",
  color: "#166534",
  marginBottom: "18px",
  lineHeight: 1.6,
  textAlign: "center" as const
};

const navLinksStyle = (isMobile: boolean) => ({
  display: "flex",
  gap: isMobile ? "10px" : "16px",
  flexWrap: "wrap" as const,
  fontSize: isMobile ? "13px" : "14px",
  justifyContent: isMobile ? "center" : "flex-start",
  width: isMobile ? "100%" : "auto"
});

const navLink = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: 600
};

const heroSection = (isMobile: boolean) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: isMobile ? "12px 16px 8px" : "8px 24px 0px",
  minHeight: isMobile ? "auto" : "calc(100vh - 78px)",
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
  gap: isMobile ? "16px" : "18px",
  alignItems: "center"
});
const heroBadge = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "#ecfdf5",
  color: "#166534",
  fontSize: "13px",
  fontWeight: 900,
  border: "1px solid #bbf7d0",
  marginBottom: "18px"
};

const heroContentWrap = (isMobile: boolean) => ({
  textAlign: isMobile ? ("center" as const) : ("left" as const),
  display: "flex",
  flexDirection: "column" as const,
  alignItems: isMobile ? ("center" as const) : ("flex-start" as const)
});

const heroTitle = {
  fontSize: "clamp(28px, 3.8vw, 48px)",
  lineHeight: 1.02,
  margin: "0 0 10px",
  fontWeight: 800,
  letterSpacing: "-1px",
  maxWidth: "680px"
};

const heroParagraph = {
  fontSize: "15px",
  lineHeight: 1.6,
  color: "#475569",
  marginBottom: "12px",
  maxWidth: "600px"
};

const heroStatsGrid = (isMobile: boolean) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(3, minmax(120px, 150px))",
  gap: isMobile ? "10px" : "14px",
  marginBottom: "16px",
  width: "100%",
  maxWidth: isMobile ? "100%" : "470px"
});
const statCardStyle = {
  background: "rgba(255,255,255,0.82)",
  border: "1px solid rgba(226,232,240,0.95)",
  borderRadius: "18px",
  padding: "14px 12px",
  boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
  textAlign: "center" as const
};
const statValueStyle = {
  fontSize: "24px",
  fontWeight: 800,
  color: "#166534",
  marginBottom: "4px",
  lineHeight: 1
};
const statLabelStyle = {
  color: "#475569",
  lineHeight: 1.3,
  fontSize: "12px",
  fontWeight: 600
};
const heroVisualWrap = (isMobile: boolean) => ({
  position: "relative" as const,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "auto"
});

const photoGlow = {
  position: "absolute" as const,
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0.04) 45%, transparent 72%)",
  filter: "blur(12px)"
};

const photoCard = (isMobile: boolean) => ({
  position: "relative" as const,
  background: "rgba(255,255,255,0.65)",
  padding: isMobile ? "12px" : "14px",
  borderRadius: isMobile ? "24px" : "28px",
  border: "1px solid rgba(226,232,240,0.95)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 24px 70px rgba(15,23,42,0.12)"
});

const photoStyle = (isMobile: boolean) => ({
  width: "100%",
  maxWidth: isMobile ? "300px" : "420px", // ⬅️ PLUS GRAND
  maxHeight: isMobile ? "none" : "65vh",  // ⬅️ prend plus de hauteur écran
  borderRadius: "24px",
  display: "block",
  objectFit: "cover" as const,
  background: "#ffffff",
  margin: "0 auto"
});const buttonRow = (isMobile: boolean) => ({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap" as const,
  marginTop: "6px",
  justifyContent: isMobile ? ("center" as const) : ("flex-start" as const)
});

const primaryButton = {
  background: "linear-gradient(135deg, #16a34a, #22c55e)",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
  boxShadow: "0 12px 28px rgba(34,197,94,0.22)"
};

const secondaryButton = {
  background: "rgba(255,255,255,0.9)",
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
  padding: "30px 24px"
};

const sectionTitleWrap = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "22px"
};

const sectionMiniLine = {
  width: "48px",
  height: "4px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #16a34a, #4ade80)"
};

const sectionTitle = {
  fontSize: "clamp(28px, 4vw, 40px)",
  margin: 0,
  color: "#0f172a",
  letterSpacing: "-0.7px"
};

const cardStyle = {
  background: "rgba(255,255,255,0.84)",
  border: "1px solid rgba(226,232,240,0.96)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 14px 34px rgba(15,23,42,0.06)",
  backdropFilter: "blur(8px)"
};

const extraImageWrap = {
  width: "100%",
  marginBottom: "18px",
  borderRadius: "18px",
  overflow: "hidden" as const,
  border: "1px solid rgba(226,232,240,0.95)",
  background: "#f8fafc"
};

const extraImageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover" as const,
  display: "block"
};

const extraRoleStyle = {
  color: "#166534",
  fontWeight: 700,
  margin: "0 0 12px",
  fontSize: "15px"
};

const gridStyle = (isMobile: boolean) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "22px"
});

const twoCols = (isMobile: boolean) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "22px"
});

const paragraph = {
  color: "#475569",
  lineHeight: 1.85,
  margin: "0 0 16px"
};

const paragraphNoMargin = {
  color: "#475569",
  lineHeight: 1.85,
  margin: 0
};

const cardTitle = {
  margin: "0 0 10px",
  fontSize: "22px",
  color: "#0f172a"
};

const educationTitle = {
  margin: "0 0 6px",
  fontSize: "22px",
  color: "#0f172a",
  lineHeight: 1.35
};

const cardTextStrong = {
  color: "#334155",
  lineHeight: 1.7,
  fontWeight: 700
};

const mutedText = {
  color: "#64748b"
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

const listItemStyle = {
  marginBottom: "10px"
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
  width: "56px",
  height: "56px",
  objectFit: "contain" as const,
  background: "#fff",
  borderRadius: "14px",
  padding: "6px",
  border: "1px solid #e2e8f0",
  flexShrink: 0
};

const infoGrid = {
  display: "grid",
  gap: "14px"
};

const infoItemStyle = {
  paddingBottom: "12px",
  borderBottom: "1px solid #e2e8f0"
};

const infoLabelStyle = {
  color: "#166534",
  fontSize: "13px",
  fontWeight: 700,
  marginBottom: "6px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px"
};

const infoValueStyle = {
  color: "#334155",
  lineHeight: 1.7
};

const educationLayout = {
  display: "grid",
  gap: "18px"
};

const educationRow = (isMobile: boolean) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "30px 1fr",
  gap: isMobile ? "12px" : "18px",
  alignItems: "stretch"
});

const timelineCol = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center"
};

const timelineDot = {
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #16a34a, #4ade80)",
  marginTop: "22px",
  boxShadow: "0 0 0 6px rgba(34,197,94,0.12)"
};

const timelineLine = {
  width: "2px",
  flex: 1,
  background: "linear-gradient(180deg, rgba(34,197,94,0.45), rgba(148,163,184,0.18))",
  marginTop: "10px"
};

const educationCardWrap = {
  minWidth: 0
};

const educationHeader = {
  marginBottom: "14px"
};

const educationIdentity = (isMobile: boolean) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
  flexDirection: isMobile ? ("column" as const) : ("row" as const)
});

const educationParagraph = {
  color: "#475569",
  lineHeight: 1.86,
  margin: 0,
  fontSize: "15.5px"
};

const experienceTop = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "16px"
};

const contactLead = {
  color: "#475569",
  lineHeight: 1.85,
  margin: "0 0 18px",
  fontSize: "18px"
};
