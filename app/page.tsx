"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Khawla Chakir | Ingénieure en amélioration continue";

    const ids = [
      "hero",
      "about",
      "experience",
      "skills",
      "projects",
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

  return (
    <main className="page">
      {/* HERO */}
      <section id="hero" className={`hero ${visibleSections.includes("hero") ? "show" : ""}`}>
        <div>
          <h1>
            Ingénieure en amélioration continue & digitalisation industrielle
          </h1>

          <p>
            J’aide les industriels à optimiser leurs processus, structurer leurs données
            et piloter leur performance grâce au Lean et à la digitalisation.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn-primary">Me contacter</a>
            <a href="#projects" className="btn-secondary">Voir mes projets</a>
          </div>
        </div>

        <img src="/khawla-photo.png" className="photo" />
      </section>

      {/* ABOUT */}
      <section id="about" className={visibleSections.includes("about") ? "show" : ""}>
        <h2>À propos</h2>
        <p>
          Ingénieure spécialisée en amélioration continue, industrialisation et transformation digitale.
          Expérience chez Aperam, SLB, Renault et OCP sur des projets de performance industrielle.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className={visibleSections.includes("experience") ? "show" : ""}>
        <h2>Expériences</h2>

        <div className="card">
          <h3>Aperam</h3>
          <p>Digitalisation de 6 machines + dashboard KPI</p>
        </div>

        <div className="card">
          <h3>SLB</h3>
          <p>Projet Lean + chantier Kaizen avec 13 techniciens</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={visibleSections.includes("skills") ? "show" : ""}>
        <h2>Compétences</h2>
        <div className="tags">
          <span>DMAIC</span>
          <span>VSM</span>
          <span>SMED</span>
          <span>SAP</span>
          <span>Excel</span>
          <span>Python</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={visibleSections.includes("projects") ? "show" : ""}>
        <h2>Projets</h2>

        <div className="card">
          <h3>Simulation ligne de production</h3>
          <p>Identification des goulots d’étranglement</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={visibleSections.includes("contact") ? "show" : ""}>
        <h2>Contact</h2>
        <a href="mailto:khawla.chakir@ens2m.org" className="btn-primary">
          Envoyer un email
        </a>
      </section>

      {/* STYLE */}
      <style jsx>{`
        .page {
          font-family: Arial;
          padding: 20px;
        }

        section {
          margin: 80px 0;
          opacity: 0;
          transform: translateY(40px);
          transition: 0.6s;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .hero h1 {
          font-size: 40px;
        }

        .photo {
          width: 100%;
          border-radius: 20px;
        }

        .buttons {
          margin-top: 20px;
        }

        .btn-primary {
          background: green;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          margin-right: 10px;
        }

        .btn-secondary {
          border: 1px solid black;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
        }

        .card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .tags span {
          background: #eee;
          padding: 8px 12px;
          border-radius: 20px;
          margin: 5px;
          display: inline-block;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 28px;
          }

          section {
            margin: 50px 0;
          }
        }
      `}</style>
    </main>
  );
}