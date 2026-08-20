const services = [
  {
    number: "01",
    title: "Content Creation",
    text: "Scroll-stopping creative content built around your brand and audience."
  },
  {
    number: "02",
    title: "Social Media Management",
    text: "Consistent strategy, publishing and community-focused management."
  },
  {
    number: "03",
    title: "Meta Ads",
    text: "Performance-focused Facebook and Instagram advertising for growth."
  },
  {
    number: "04",
    title: "Branding & Design",
    text: "Visual identities, creative posts and brand systems that stay memorable."
  },
  {
    number: "05",
    title: "Video & Reel Editing",
    text: "Professional edits designed for attention, retention and conversion."
  },
  {
    number: "06",
    title: "Web Solutions",
    text: "Modern websites and Shopify experiences that turn attention into action."
  }
];

const process = [
  ["01", "Discover", "Understand your business, audience and goals."],
  ["02", "Strategize", "Build a practical content and growth strategy."],
  ["03", "Create", "Produce the creative assets your brand needs."],
  ["04", "Execute", "Launch, publish and manage the campaigns."],
  ["05", "Optimize", "Use performance data to improve and scale."]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Sparkdigit home">
          <img src="/sparkdigit-logo.svg" alt="Sparkdigit" />
        </a>

        <nav className="navLinks">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>

        <a className="navCta" href="#contact">Let&apos;s Grow <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow glowOne" />
        <div className="heroGlow glowTwo" />
        <div className="heroCopy">
          <p className="eyebrow">YOUR DIGITAL GROWTH PARTNER</p>
          <h1>
            We build brands.
            <br />
            <em>We drive growth.</em>
          </h1>
          <p className="heroText">
            Creative content, powerful branding and result-driven digital
            marketing for businesses ready to grow.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">Start Your Growth <span>↗</span></a>
            <a className="secondaryBtn" href="#work">View Our Work</a>
          </div>
          <div className="trustRow">
            <span>Content</span><i>•</i>
            <span>Branding</span><i>•</i>
            <span>Marketing</span><i>•</i>
            <span>Web</span>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="orb orbBack" />
          <div className="orb orbMain">
            <div className="orbInner">
              <span>SPARK</span>
              <strong>GROW</strong>
              <small>CREATE • MARKET • SCALE</small>
            </div>
          </div>
          <div className="floatCard cardA">
            <span>01</span>
            <b>Creative</b>
            <small>Content that connects</small>
          </div>
          <div className="floatCard cardB">
            <span>02</span>
            <b>Performance</b>
            <small>Marketing that moves</small>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="eyebrow">BUILT FOR BUSINESS GROWTH</p>
          <h2>More than an agency.<br /><span>A growth partner.</span></h2>
        </div>
        <p>
          Sparkdigit brings content, branding, social media, performance
          marketing and web solutions together under one roof — so your brand
          can look better, communicate better and grow with clarity.
        </p>
      </section>

      <section className="services section" id="services">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Services built around <span>growth.</span></h2>
          </div>
          <p>From the first creative idea to the final campaign result, we help you build a stronger digital presence.</p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span className="serviceNo">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Created for brands.<br /><span>Built for impact.</span></h2>
          </div>
          <p>Replace these placeholders with your strongest client projects, reels, campaigns and brand work.</p>
        </div>

        <div className="workGrid">
          <article className="workTile tileLarge"><span>JEWELLERY</span><strong>Premium Brand Content</strong></article>
          <article className="workTile tileDark"><span>FASHION</span><strong>Social Media Growth</strong></article>
          <article className="workTile tileLight"><span>TRAVEL</span><strong>Creative Campaign</strong></article>
          <article className="workTile tileAccent"><span>E-COMMERCE</span><strong>Performance Marketing</strong></article>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2>A simple process.<br /><span>Serious execution.</span></h2>
          </div>
        </div>
        <div className="processGrid">
          {process.map(([number, title, text]) => (
            <div className="processItem" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="ctaGlow" />
        <p className="eyebrow">READY TO GROW?</p>
        <h2>Let&apos;s turn your<br /><span>digital presence into growth.</span></h2>
        <p>Tell us about your business and let&apos;s build something worth remembering.</p>
        <div className="ctaActions">
          <a className="primaryBtn lightBtn" href="mailto:hello@sparkdigits.in">Start a Conversation <span>↗</span></a>
          <a className="secondaryBtn lightOutline" href="https://www.instagram.com/sparkdigit.in/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <img src="/sparkdigit-logo.svg" alt="Sparkdigit" />
          <p>Your Digital Growth Partner.</p>
        </div>
        <div className="footerLinks">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© 2026 Sparkdigit. All rights reserved.</small>
      </footer>
    </main>
  );
}
