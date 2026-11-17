import { ArrowDown, ArrowUpRight, Github, Mail, Menu, X, Code2, Database, Layers3, Terminal, Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "COSTM",
    type: "Application web · Gestion académique",
    description: "Une plateforme de gestion pour un établissement de formation : administration des étudiants, programmes, notes, présences, paiements et diplômes.",
    stack: ["React", "TypeScript", "Vite", "NestJS", "PostgreSQL", "TypeORM"],
    status: "En développement",
    featured: true
  },
  {
    number: "02",
    name: "CROCK Trading Journal",
    type: "Application desktop · Suivi de performance",
    description: "Un journal de trading local conçu pour enregistrer les transactions, suivre les résultats et analyser la discipline à partir d'une base SQLite.",
    stack: ["Python", "Tkinter", "SQLite"],
    status: "Prototype fonctionnel",
    featured: false
  },
  {
    number: "03",
    name: "CROCK Trading Simulator",
    type: "Application web · Simulation Monte Carlo",
    description: "Un simulateur interactif qui projette des scénarios de performance à partir du capital initial, du winrate, du ratio Risk/Reward, du risque par trade et des frais. Il calcule l'espérance mathématique et visualise plusieurs trajectoires de capital.",
    stack: ["HTML", "CSS", "JavaScript", "Canvas API", "Monte Carlo"],
    status: "Prototype fonctionnel",
    featured: false
  },
  {
    number: "04",
    name: "Network & Cybersecurity Lab",
    type: "Laboratoire pratique · Réseaux",
    description: "Travaux pratiques autour de la configuration réseau, de la segmentation VLAN, du routage et de l'observation du trafic avec des outils de laboratoire.",
    stack: ["GNS3", "Wireshark", "VLAN", "Networking"],
    status: "Apprentissage pratique",
    featured: false
  }
];

const skills = [
  { icon: Code2, title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Vite", "HTML", "CSS"] },
  { icon: Database, title: "Backend & données", items: ["NestJS", "Node.js", "PostgreSQL", "TypeORM", "SQLite", "API REST"] },
  { icon: Layers3, title: "Outils & méthodes", items: ["Git", "GitHub", "VS Code", "Architecture applicative", "Débogage"] },
  { icon: Terminal, title: "Réseaux & sécurité", items: ["GNS3", "Wireshark", "VLAN", "Routage", "Fondamentaux réseau"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span><span>LEMBASON<span className="brand-muted">.DEV</span></span></a>
        <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["À propos", "#about"], ["Compétences", "#skills"], ["Projets", "#projects"], ["Contact", "#contact"]].map(([label, href]) =>
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Me contacter <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> DISPONIBLE POUR OPPORTUNITÉS & COLLABORATIONS</div>
            <p className="hero-kicker">Bonjour, je suis</p>
            <h1>LEMBASON<br /><span>Sitraka Lalaina</span><i>.</i></h1>
            <h2>Développeur <span>Full Stack</span> en formation.</h2>
            <p className="hero-description">Je conçois et développe des applications web et des outils numériques. J'aime transformer des besoins concrets en solutions simples, utiles et bien structurées.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Découvrir mes projets <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Parlons de votre projet</a>
            </div>
            <div className="hero-meta"><span><b>01</b> Curiosité technique</span><span><b>02</b> Apprentissage continu</span><span><b>03</b> Sens du concret</span></div>
          </div>
          <div className="hero-visual" aria-label="Illustration abstraite de code">
            <div className="visual-glow"></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i></i><i></i><i></i></div><span>developer.ts</span><span className="code-lock">TS</span></div>
              <div className="code-content">
                <div><em>01</em><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><em>02</em>&nbsp;&nbsp; name: <span className="code-green">"Sitraka"</span>,</div>
                <div><em>03</em>&nbsp;&nbsp; role: <span className="code-green">"Full Stack"</span>,</div>
                <div><em>04</em>&nbsp;&nbsp; mindset: <span className="code-green">"Build & learn"</span>,</div>
                <div><em>05</em>&nbsp;&nbsp; focus: [</div>
                <div><em>06</em>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-green">"Web apps"</span>,</div>
                <div><em>07</em>&nbsp;&nbsp;&nbsp;&nbsp; <span className="code-green">"Problem solving"</span></div>
                <div><em>08</em>&nbsp;&nbsp; ]</div>
                <div><em>09</em>{"}"};</div>
                <div className="code-cursor"><em>10</em><span></span></div>
              </div>
              <div className="code-footer"><span><i></i> Ready to build</span><span>UTF-8&nbsp; · &nbsp;TypeScript</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React</div>
            <div className="float-chip chip-db"><Database size={15} /> PostgreSQL</div>
            <div className="float-chip chip-ts">TS&nbsp; TypeScript</div>
            <div className="visual-caption">FIG. 01 — CURIOSITY IN MOTION</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL POUR EXPLORER</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section" id="about">
          <div className="section-label"><span>01 / À PROPOS</span><span className="label-line"></span></div>
          <div className="about-grid">
            <div><p className="section-kicker">Un développeur, une envie de construire.</p><h2>Apprendre en faisant.<br /><span>Construire pour résoudre.</span></h2></div>
            <div className="about-text">
              <p>Je suis <strong>LEMBASON Sitraka Lalaina</strong>, étudiant en informatique à Madagascar et développeur en formation, orienté vers le développement d'applications web Full Stack.</p>
              <p>À travers mes projets, je travaille sur la conception d'interfaces, la logique métier, les API et la gestion des données. Je m'intéresse aussi aux réseaux et à la cybersécurité.</p>
              <p>Mon approche : comprendre le problème, avancer étape par étape, tester, corriger et améliorer.</p>
              <div className="about-note"><Sparkles size={17} /><span>Je suis motivé par les équipes qui valorisent la curiosité, la rigueur et le partage de connaissances.</span></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section" id="skills">
          <div className="section-label"><span>02 / COMPÉTENCES</span><span className="label-line"></span></div>
          <div className="section-heading"><div><p className="section-kicker">Ma boîte à outils</p><h2>Technologies & <span>pratiques.</span></h2></div><p className="heading-aside">Des bases techniques que je développe au fil de projets concrets.</p></div>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{i + 1}</span></div>
              <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="projects section-wrap section" id="projects">
          <div className="section-label"><span>03 / PROJETS SÉLECTIONNÉS</span><span className="label-line"></span></div>
          <div className="section-heading"><div><p className="section-kicker">Du concret, pas seulement des idées</p><h2>Quelques projets <span>en cours.</span></h2></div><p className="heading-aside">Chaque projet est une occasion de pratiquer, de résoudre des problèmes et de progresser.</p></div>
          <div className="project-list">
            {projects.map(project => <article className={project.featured ? "project-card project-featured" : "project-card"} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div>
              <div className="project-side"><span className="project-status"><i></i>{project.status}</span><span className="project-arrow"><ArrowUpRight size={22} /></span></div>
            </article>)}
          </div>
          <p className="project-disclaimer">Les projets sont présentés selon leur état réel d'avancement. Les liens de démonstration et dépôts GitHub seront ajoutés lorsqu'ils seront publiables.</p>
        </section>

        <section className="approach section-wrap section">
          <div className="section-label"><span>04 / MA MÉTHODE</span><span className="label-line"></span></div>
          <div className="approach-content"><div><p className="section-kicker">Une progression structurée</p><h2>Comprendre.<br /><span>Développer.</span><br />Améliorer.</h2></div>
            <div className="steps">
              {[["01", "Comprendre le besoin", "Clarifier le problème, les utilisateurs et le résultat attendu."], ["02", "Construire une solution", "Découper le travail, choisir les outils adaptés et développer progressivement."], ["03", "Tester & améliorer", "Vérifier le fonctionnement, corriger les erreurs et tenir compte des retours."]].map(([n, t, d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="contact section-wrap section" id="contact">
          <div className="contact-panel"><div className="contact-orb"></div><div className="section-label"><span>05 / CONTACT</span><span className="label-line"></span></div>
            <p className="section-kicker">Une idée, une opportunité, une collaboration ?</p>
            <h2>Construisons quelque<br /><span>chose d'utile.</span></h2>
            <p className="contact-copy">Je suis ouvert aux échanges, aux collaborations et aux opportunités qui me permettront de contribuer et de continuer à progresser.</p>
            <a className="button button-primary" href="mailto:VOTRE_EMAIL@example.com">M'écrire un message <Mail size={17} /></a>
            <div className="contact-links"><a href="https://github.com/CrockDev17" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S</span><span>LEMBASON<span className="brand-muted">.DEV</span></span></a><span>© {new Date().getFullYear()} LEMBASON Sitraka Lalaina. Tous droits réservés.</span><a href="#home">Retour en haut ↑</a></footer>
    </div>
  );
}

export default App;