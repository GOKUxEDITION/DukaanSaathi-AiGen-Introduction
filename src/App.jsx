import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Github, Instagram,
  Mail, MessageCircle, Send, Code2, Smartphone, BrainCircuit,
  Database, Cpu, Menu, X, Sparkles, ExternalLink,
} from 'lucide-react';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const decor = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const services = [
  { number: '01', title: 'Android app development', description: 'Building Android application experiences with Kotlin, native Android foundations and modern UI patterns.' },
  { number: '02', title: 'Web development', description: 'Creating responsive web interfaces and product experiences with modern frontend tools.' },
  { number: '03', title: 'AI app integration', description: 'Exploring practical AI features, LLM-powered workflows, chat interfaces and automation integrations.' },
  { number: '04', title: 'UI / UX implementation', description: 'Turning product ideas and visual references into clear, usable screens with thoughtful interaction details.' },
  { number: '05', title: 'App architecture & debugging', description: 'Working through app structure, local data design, integration issues, testing and release-readiness improvements.' },
];

const skillGroups = [
  { title: 'Android development', icon: Smartphone, tags: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'XML', 'Material 3', 'MVVM', 'Room / SQLite', 'Coroutines & Flow', 'Gradle'] },
  { title: 'Web & backend', icon: Code2, tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Git & GitHub'] },
  { title: 'AI & data tools', icon: BrainCircuit, tags: ['AI / LLM integration', 'Gemini API', 'OpenAI API', 'Chatbots', 'Speech workflows', 'Supabase', 'Firebase', 'PostgreSQL'] },
];

const projects = [
  {
    number: '01', category: 'ANDROID · RETAIL TECH', name: 'DukaanSaathi AiGen',
    summary: 'An offline-first digital business companion concept for kirana and independent retailers. Focused on shop workflows, catalog, stock and customer Khata foundations.',
    status: 'IN DEVELOPMENT',
    link: 'https://github.com/GOKUxEDITION/DukaanSaathiAiGen', linkLabel: 'GitHub Repository',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_2026087a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_202608b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_2026028d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02', category: 'ANDROID · AI ASSISTANT', name: 'AI Phone Assistant',
    summary: 'An Android assistant project exploring phone-focused helper workflows, app interactions and practical AI-powered experiences.',
    status: 'PROTOTYPE / DEVELOPMENT',
    link: 'https://github.com/GOKUxEDITION/AI-Phone-Assistant-', linkLabel: 'GitHub Repository',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_2026036d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03', category: 'SECURITY · RESEARCH', name: 'Laptop & Android Phone Security',
    summary: 'A personal learning track around device safety, system configuration, privacy awareness and practical security checks.',
    status: 'CONCEPT / LEARNING TRACK',
    link: null, linkLabel: null,
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_202604bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_202609846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

function FadeIn({ children, delay = 0, y = 30, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >{children}</motion.div>
  );
}

function ContactButton({ children = 'Contact Me', href = '#contact' }) {
  return <a className="contact-button" href={href}>{children}<ArrowUpRight size={18} strokeWidth={1.8} /></a>;
}

function Magnet({ children }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const near = Math.abs(dx) < rect.width / 2 + 150 && Math.abs(dy) < rect.height / 2 + 150;
    setOffset(near ? { x: (dx / 3) * 0.18, y: (dy / 3) * 0.18 } : { x: 0, y: 0 });
  };
  return (
    <div ref={ref} className="magnet-wrap" onMouseMove={handleMove} onMouseLeave={() => setOffset({ x: 0, y: 0 })} onFocus={() => setOffset({ x: 0, y: 0 })}>
      <div className="magnet-inner" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`, transition: offset.x || offset.y ? 'transform .3s ease-out' : 'transform .6s ease-in-out' }}>{children}</div>
    </div>
  );
}

function MarqueeRow({ images, reverse = false }) {
  const track = useRef(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ['-5%', '-28%'] : ['-28%', '-5%']);
  const repeated = [...images, ...images, ...images];
  return (
    <div className="marquee-clip" ref={track}>
      <motion.div className="marquee-track" style={{ x }}>
        {repeated.map((src, i) => <div className="marquee-image" key={`${src}-${i}`}><img src={src} alt="Selected digital design and web experience preview" loading="lazy" /></div>)}
      </motion.div>
    </div>
  );
}

function RevealChar({ char, index, total, progress }) {
  const start = index / total;
  const end = Math.min(1, start + Math.max(0.025, 2 / total));
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span className="reveal-char" style={{ opacity }}>{char === ' ' ? '\u00a0' : char}</motion.span>;
}

function AnimatedText({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = Array.from(text);
  return <p ref={ref} className="animated-paragraph">{chars.map((char, i) => <RevealChar key={`${i}-${char}`} char={char} index={i} total={chars.length} progress={scrollYProgress} />)}</p>;
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 1 - (projects.length - 1 - index) * 0.03]);
  return (
    <div className="project-card-stage" ref={ref} style={{ top: `${index * 28}px` }}>
      <motion.article className="project-card" style={{ scale }}>
        <div className="project-card-top">
          <div className="project-meta"><span className="project-number">{project.number}</span><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div></div>
          {project.link ? <a className="live-project-button" href={project.link} target="_blank" rel="noreferrer">GitHub Repository <ExternalLink size={15} /></a> : <span className="project-status">{project.status}</span>}
        </div>
        <div className="project-card-body">
          <div className="project-copy"><p>{project.summary}</p><span className="project-status">{project.status}</span><span className="project-stack">INDEPENDENT PROJECT · BUILD LOG</span></div>
          <div className="project-image-grid">
            <div className="project-image-column"><img src={project.images[0]} alt={`${project.name} design preview one`} loading="lazy"/><img src={project.images[1]} alt={`${project.name} design preview two`} loading="lazy"/></div>
            <img className="project-image-tall" src={project.images[2]} alt={`${project.name} design preview three`} loading="lazy"/>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [{ label: 'About', href: '#about' }, { label: 'Services', href: '#services' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }];
  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className="portfolio-root">
      <section className="hero-section" id="home">
        <FadeIn className="navbar" delay={0} y={-20}>
          <a className="brand-mark" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>G<span>.</span>C<span className="brand-orbit">✳</span></a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map((item) => <a href={item.href} key={item.label} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}>{item.label}</a>)}
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
        </FadeIn>
        <div className="hero-heading-wrap"><FadeIn delay={0.15} y={40}><h1 className="hero-heading">Hi, I'm Goku<br className="hero-break"/> Choudhary<span className="hero-period">.</span></h1></FadeIn></div>
        <div className="hero-portrait-glow" />
        <FadeIn className="hero-portrait" delay={0.6} y={30}><Magnet><img src="./goku-choudhary.webp" alt="Portrait of Goku Choudhary" fetchPriority="high"/><span className="portrait-caption">DIPAK CHOUDHARY · DEVELOPER</span></Magnet></FadeIn>
        <div className="hero-bottom">
          <FadeIn delay={0.35} y={20} className="hero-intro"><span className="eyebrow">ANDROID · WEB · AI</span><p>Building Android apps & AI-powered digital experiences.</p><span className="hero-location">INDEPENDENT DEVELOPER · INDIA</span></FadeIn>
          <FadeIn delay={0.5} y={20}><ContactButton /></FadeIn>
        </div>
        <span className="hero-side-note">SCROLL TO EXPLORE <ArrowDownRight size={15}/></span>
      </section>

      <section className="marquee-section" aria-label="Digital design inspiration gallery">
        <div className="marquee-label"><span>IDEAS IN MOTION</span><span>DESIGN · CODE · EXPERIENCE</span></div>
        <MarqueeRow images={marqueeImages.slice(0, 11)} />
        <MarqueeRow images={marqueeImages.slice(11)} reverse />
      </section>

      <section className="about-section" id="about">
        <img className="decor decor-moon" src={decor.moon} alt="" aria-hidden="true" loading="lazy"/>
        <img className="decor decor-object" src={decor.object} alt="" aria-hidden="true" loading="lazy"/>
        <img className="decor decor-lego" src={decor.lego} alt="" aria-hidden="true" loading="lazy"/>
        <img className="decor decor-group" src={decor.group} alt="" aria-hidden="true" loading="lazy"/>
        <FadeIn className="about-content"><span className="eyebrow">A LITTLE ABOUT ME</span><h2 className="hero-heading section-title">About me<span className="hero-period">.</span></h2><AnimatedText text="I'm Goku Choudhary, also known as Dipak Choudhary. I work on Android and web applications, and explore how AI can make everyday digital tools more useful. I enjoy learning by building, solving practical problems and turning product ideas into working experiences. Still growing, still shipping, one step at a time."/><ContactButton /></FadeIn>
        <div className="about-facts"><div><span>01</span><b>1–2 years</b><small>Experience stated</small></div><div><span>02</span><b>10th · 12th · ITI</b><small>Education</small></div><div><span>03</span><b>Android + Web + AI</b><small>Current focus</small></div></div>
      </section>

      <section className="services-section" id="services">
        <FadeIn><span className="eyebrow dark-eyebrow">WHAT I WORK ON</span><h2 className="services-title">Services<span>.</span></h2></FadeIn>
        <div className="services-list">{services.map((service, i) => <FadeIn className="service-row" key={service.number} delay={i * 0.1} y={25}><span className="service-number">{service.number}</span><div className="service-info"><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={27} strokeWidth={1.2}/></FadeIn>)}</div>
        <p className="services-note">These describe my current development focus and learning areas, not a claim of a formal agency or certified service offering.</p>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-heading"><FadeIn><span className="eyebrow">TOOLS I WORK WITH & EXPLORE</span><h2 className="hero-heading section-title">My toolkit<span className="hero-period">.</span></h2><p className="skills-intro">A snapshot of technologies I use, practise or am actively exploring. Skill depth varies by tool and project.</p></FadeIn><div className="skill-orbit"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-core"><Cpu size={44}/></div><span className="orbit-chip chip-one"><Code2 size={17}/></span><span className="orbit-chip chip-two"><Database size={17}/></span><span className="orbit-chip chip-three"><Sparkles size={17}/></span></div></div>
        <div className="skill-groups">{skillGroups.map((group, i) => { const Icon = group.icon; return <FadeIn className="skill-group" key={group.title} delay={i * 0.12}><div className="skill-group-heading"><span><Icon size={20}/></span><h3>{group.title}</h3></div><div className="skill-tags">{group.tags.map(tag => <span key={tag}>{tag}</span>)}</div></FadeIn>; })}</div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-heading"><FadeIn><span className="eyebrow">SELECTED BUILDS & LEARNING TRACKS</span><h2 className="hero-heading section-title">Project<span className="hero-period">s.</span></h2><p className="projects-intro">A few things I am building, exploring or learning through. Their current status is shown on each card.</p></FadeIn></div>
        <div className="projects-stack">{projects.map((project, i) => <ProjectCard project={project} index={i} key={project.number}/>)}</div>
        <p className="project-disclaimer">Visual previews are placeholders retained from the supplied design reference. They are not verified product screenshots; real project captures can replace them as each case study is documented.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner"><FadeIn><span className="eyebrow">HAVE AN IDEA?</span><h2 className="hero-heading contact-title">Let's build<br/>something useful<span className="hero-period">.</span></h2><p className="contact-lead">For collaboration, project discussions or a simple developer conversation, reach out through any of these channels.</p><ContactButton href="mailto:gokuxedition@gmail.com">Start a conversation</ContactButton></FadeIn>
          <div className="contact-links"><a href="mailto:gokuxedition@gmail.com"><span><Mail size={20}/></span><div><small>EMAIL</small><b>gokuxedition@gmail.com</b></div><ArrowUpRight size={19}/></a><a href="https://wa.me/917363044825" target="_blank" rel="noreferrer"><span><MessageCircle size={20}/></span><div><small>WHATSAPP</small><b>+91 73630 44825</b></div><ArrowUpRight size={19}/></a><a href="https://github.com/GOKUxEDITION" target="_blank" rel="noreferrer"><span><Github size={20}/></span><div><small>GITHUB</small><b>github.com/GOKUxEDITION</b></div><ArrowUpRight size={19}/></a><a href="https://t.me/GokuChoudharyLabs" target="_blank" rel="noreferrer"><span><Send size={20}/></span><div><small>TELEGRAM</small><b>@GokuChoudharyLabs</b></div><ArrowUpRight size={19}/></a><a href="https://www.instagram.com/gokuxedition?gwpx=MTh1cHE1NzJxc2NrbA==" target="_blank" rel="noreferrer"><span><Instagram size={20}/></span><div><small>INSTAGRAM</small><b>@gokuxedition</b></div><ArrowUpRight size={19}/></a><a href="https://t.me/KAIxGenShopLabs" target="_blank" rel="noreferrer"><span><MessageCircle size={20}/></span><div><small>TELEGRAM CHANNEL</small><b>KAIxGenShopLabs</b></div><ArrowUpRight size={19}/></a></div>
        </div>
      </section>

      <footer className="site-footer"><a className="footer-mark" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>G<span>.</span>C</a><p>Designed with intent. Built while learning.</p><span>© {new Date().getFullYear()} DIPAK CHOUDHARY</span><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>BACK TO TOP ↑</a></footer>
    </main>
  );
}