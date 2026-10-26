import React, { useEffect, useState } from 'react';

const features = [
  { id:'01', icon:'⌂', title:'Merchant Shop Profile', tag:'REQ-MVP-01', text:'A clear onboarding foundation for the shop, merchant details and everyday business context.' },
  { id:'02', icon:'▦', title:'Kirana Product Catalog', tag:'REQ-MVP-02', text:'Maintain product names, pricing and stock-related details in a local-first catalog.' },
  { id:'03', icon:'⇄', title:'Immutable Stock Ledger', tag:'REQ-MVP-03', text:'Traceable stock movements designed to preserve history instead of silently overwriting it.' },
  { id:'04', icon:'⌁', title:'Low-Stock Alerts', tag:'REQ-MVP-04', text:'Make products that need replenishment easier to spot with clear monitoring and notifications.' },
  { id:'05', icon:'₹', title:'Customer Khata', tag:'REQ-MVP-05', text:'A dependable core ledger for customer credit and udhar balances.' },
  { id:'06', icon:'▥', title:'Daily Dashboard', tag:'REQ-MVP-06', text:'A quick daily snapshot of useful merchant and shop operating metrics.' }
];
const tech = [
  ['Kotlin','Native Android language'],['Jetpack Compose','Declarative UI'],['Material 3','Consistent design system'],
  ['MVVM + Clean Architecture','Separation of concerns'],['Room / SQLite','Local persistence'],['Coroutines + Flow','Asynchronous data streams']
];
const phases = [
  ['00','Governance & project foundation','Rules, identity, master index and scope baseline'],
  ['01','Product definition & UX foundation','Requirements, navigation and interaction decisions'],
  ['02','Retail MVP core','Shop profile, catalog, stock ledger, low-stock, Khata and dashboard'],
  ['03–23','Future phases','Only delivered when the Master Roadmap authorizes the scope']
];
function Mark(){return <span className="mark"><span>DS</span></span>}
function SectionHead({eyebrow,title,desc}){return <div className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{desc}</p></div>}
export default function App(){
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState('overview');
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>{setScrolled(window.scrollY>20);const ids=['overview','features','architecture','roadmap','governance'];let current='overview';for(const id of ids){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<180)current=id;}setActive(current)};window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[]);
  const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className={scrolled?'topbar scrolled':'topbar'}><a className="brand" href="#overview" onClick={e=>{e.preventDefault();go('overview')}}><Mark/><span><b>DukaanSaathi <i>AiGen</i></b><small>PRODUCT INTRODUCTION</small></span></a>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?'✕':'☰'}</button>
      <nav className={menu?'nav-links open':'nav-links'}>{[['overview','Overview'],['features','MVP Features'],['architecture','Architecture'],['roadmap','Roadmap'],['governance','Governance']].map(([id,label])=><button key={id} className={active===id?'nav-active':''} onClick={()=>go(id)}>{label}</button>)}</nav>
      <a className="nav-cta" href="https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction" target="_blank" rel="noreferrer">View Repository <span>↗</span></a>
    </header>
    <main>
      <section id="overview" className="hero section-wrap">
        <div className="hero-copy"><div className="status-pill"><span className="pulse"/> PRODUCT VISION · INDIA RETAIL</div>
          <h1>Har Dukaan Ka<br/><span>Digital Saathi.</span></h1>
          <p className="hero-lead">A thoughtful, offline-first Android business companion built around the real daily needs of Indian retailers. Less friction for shopkeepers. More clarity for business.</p>
          <div className="hero-actions"><button className="btn-primary" onClick={()=>go('features')}>Explore the product <span>↓</span></button><a className="btn-secondary" href="https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction" target="_blank" rel="noreferrer">Source repository ↗</a></div>
          <div className="hero-meta"><div><b>06</b><span>Core MVP requirements</span></div><div><b>Offline-first</b><span>Local data philosophy</span></div><div><b>Phase 00–23</b><span>Governed roadmap</span></div></div>
        </div>
        <div className="hero-visual"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="visual-glow"/>
          <div className="app-window"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>SHOP OVERVIEW</span><span className="live-chip">LOCAL</span></div>
            <div className="mock-welcome"><div><small>GOOD MORNING 👋</small><h3>Apni Dukaan</h3><p>Your business, at a glance.</p></div><div className="shop-icon">⌂</div></div>
            <div className="metric-grid"><div className="metric-card"><span>Products</span><b>Catalog</b><small>Organised locally</small></div><div className="metric-card mint"><span>Stock health</span><b>Monitor</b><small>Low-stock awareness</small></div></div>
            <div className="ledger-card"><div className="ledger-heading"><span>Recent activity</span><span>Designed for clarity</span></div><div className="ledger-row"><span className="ledger-icon">▦</span><span><b>Product catalog</b><small>Local-first records</small></span><em>Ready to manage</em></div><div className="ledger-row"><span className="ledger-icon lime">⇄</span><span><b>Stock movement</b><small>Traceable ledger</small></span><em>History-first</em></div><div className="ledger-row"><span className="ledger-icon gold">₹</span><span><b>Customer Khata</b><small>Credit ledger core</small></span><em>Clear balances</em></div></div>
            <div className="window-bottom"><span><i/> Local workflow concept</span><span>DUKAANSAATHI AIGEN</span></div>
          </div><div className="float-card float-top"><span className="float-icon">✳</span><span><b>Made for real shops</b><small>Kirana · Retail · General stores</small></span></div><div className="float-card float-bottom"><span className="float-icon green">⌁</span><span><b>Offline-first by design</b><small>No fake cloud-sync claims</small></span></div>
        </div>
        <div className="hero-scroll" onClick={()=>go('features')}><span/> SCROLL TO EXPLORE</div>
      </section>
      <section className="trust-strip"><span>BUILT AROUND</span><b>Indian retail realities</b><i/><b>Local-first data</b><i/><b>Clear scope</b><i/><b>Merchant-friendly UX</b></section>
      <section id="features" className="section-wrap section-block"><SectionHead eyebrow="THE MVP · PHASE 02" title="Six essentials. One dependable foundation." desc="The first milestone stays intentionally focused on the workflows that matter to a shop's daily operations."/><div className="feature-grid">{features.map(f=><article className="feature-card" key={f.id}><div className="feature-top"><span className="feature-icon">{f.icon}</span><span className="feature-id">{f.id} / 06</span></div><span className="feature-tag">{f.tag}</span><h3>{f.title}</h3><p>{f.text}</p><div className="card-foot"><span>PHASE 02 MVP</span><span>↗</span></div></article>)}</div></section>
      <section id="architecture" className="architecture-section"><div className="section-wrap architecture-layout"><div><SectionHead eyebrow="ENGINEERING FOUNDATION" title="Native Android. Local-first by default." desc="The product baseline favours maintainable architecture, reliable local persistence and predictable money handling. Technology choices remain governed by the project roadmap."/><div className="architecture-points"><div><span>01</span><p><b>Offline-first operations</b><small>Room / SQLite is the local persistence baseline. Do not claim remote sync is active unless it is implemented and verified.</small></p></div><div><span>02</span><p><b>Traceable data integrity</b><small>Stock movements should be recorded as ledger events. Money values use Long paise or an approved Money abstraction.</small></p></div><div><span>03</span><p><b>Maintainable boundaries</b><small>MVVM, Clean Architecture and Repository Pattern keep UI, business rules and data access separated.</small></p></div></div></div><div className="tech-panel"><div className="tech-panel-head"><span className="panel-orb">⌘</span><div><b>Technology baseline</b><small>APP ENGINEERING STACK</small></div><span className="panel-check">✓</span></div>{tech.map((t,i)=><div className="tech-row" key={t[0]}><span className="tech-num">0{i+1}</span><span className="tech-logo">{['K','◈','M','⌘','▤','↯'][i]}</span><span><b>{t[0]}</b><small>{t[1]}</small></span><span className="tech-check">✓</span></div>)}<div className="tech-note">BASELINE ONLY <span>Verify versions against the active project.</span></div></div></div></section>
      <section id="roadmap" className="section-wrap section-block roadmap-block"><SectionHead eyebrow="DELIVERY WITH DISCIPLINE" title="A roadmap that protects the product." desc="Phase order, scope boundaries and implementation evidence matter more than a long list of unchecked features."/><div className="roadmap-list">{phases.map((p,i)=><article className={'phase-card '+(i===2?'phase-current':'')} key={p[0]}><div className="phase-num">{p[0]}</div><div className="phase-content"><h3>{p[1]}</h3><p>{p[2]}</p></div><span className="phase-status">{i===2?'MVP SCOPE':i===3?'CONTROLLED':'FOUNDATION'}</span></article>)}</div><div className="scope-note"><span>!</span><p><b>Scope guardrail</b><br/>Barcode / ML Kit / CameraX, full POS checkout, online payments / UPI, SMS / WhatsApp APIs, Firebase cloud sync, Bluetooth printing, subscriptions, AI Copilot, backend API / PostgreSQL, iOS and Play Store release work are outside the Phase 02 MVP unless the governing roadmap explicitly authorizes them.</p></div></section>
      <section id="governance" className="governance-section"><div className="section-wrap governance-layout"><div><span className="eyebrow">OWNERSHIP & GOVERNANCE</span><h2>Built with intent.<br/><span>Governed with care.</span></h2><p className="governance-copy">DukaanSaathi AiGen is developed and maintained by Dipak Choudhary, powered by KAIxGenShopLabs. The Master Index and Phase 00–23 roadmap remain the source of truth for scope and delivery.</p><div className="owner-row"><div className="owner-avatar">DC</div><div><b>Dipak Choudhary</b><small>Developer / Maintainer</small></div><div className="owner-divider"/><div><b>KAIxGenShopLabs</b><small>Powered by</small></div></div></div><div className="governance-card"><div className="gov-top"><span>PROJECT PRINCIPLES</span><span className="shield">⬡</span></div>{['Atomic execution: one task at a time','Strict scope lock: no unapproved scope creep','No fake backend or sync status','No secrets committed to source control','Evidence before claiming completion'].map((x,i)=><div className="gov-item" key={x}><span>✓</span>{x}</div>)}<a href="https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction" target="_blank" rel="noreferrer" className="repo-button">Open introduction repository <span>↗</span></a></div></div></section>
      <section className="closing-cta section-wrap"><div className="closing-mark"><Mark/></div><span className="eyebrow">THE DIGITAL SAATHI FOR EVERY SHOP</span><h2>Small shop. Big possibilities.</h2><p>A clearer, more dependable digital foundation for everyday retail in India.</p><a className="btn-primary" href="https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction" target="_blank" rel="noreferrer">Explore the source <span>↗</span></a></section>
    </main>
    <footer className="footer"><a className="brand" href="#overview" onClick={e=>{e.preventDefault();go('overview')}}><Mark/><span><b>DukaanSaathi <i>AiGen</i></b><small>HAR DUKAAN KA DIGITAL SAATHI</small></span></a><p>© 2026 Dipak Choudhary · All rights reserved.</p><span>POWERED BY <b>KAIxGenShopLabs</b></span></footer>
  </div>
}