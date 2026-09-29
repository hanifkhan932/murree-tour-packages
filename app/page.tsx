const packages = [
  { name: "Weekend Escape", duration: "2 days · 1 night", price: "From PKR 18,500", detail: "A relaxed short break with time for the hills, views, and a comfortable stay.", tag: "Most popular" },
  { name: "Family Getaway", duration: "3 days · 2 nights", price: "From PKR 29,500", detail: "More time to explore at an easy pace, with family-friendly planning.", tag: "For families" },
  { name: "Scenic Explorer", duration: "4 days · 3 nights", price: "From PKR 39,500", detail: "A longer mountain break with room for nearby viewpoints and unhurried days.", tag: "Take it slow" }
];

const highlights = [
  ["01", "Choose your dates", "Tell us when you want to travel and how many people are coming."],
  ["02", "Shape your trip", "We help you match your stay and itinerary to your plans."],
  ["03", "Enjoy the hills", "Arrive with the key details sorted and enjoy your time away."]
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Murree Getaways home"><span className="brand-mark">M</span><span>murree<span className="brand-light"> getaways</span></span></a>
        <nav aria-label="Main navigation"><a href="#packages">Packages</a><a href="#experience">Why travel with us</a><a href="#faq">FAQs</a></nav>
        <a className="nav-cta" href="#contact">Plan your trip <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> YOUR MOUNTAIN BREAK STARTS HERE</p>
          <h1>Find your quiet<br/>in the <em>hills.</em></h1>
          <p className="hero-copy">Thoughtfully planned Murree getaways for fresh air, slower mornings, and memories worth bringing home.</p>
          <div className="hero-actions"><a className="button button-light" href="#packages">Explore packages <span>↘</span></a><a className="text-link" href="#experience">Discover the experience</a></div>
        </div>
        <div className="hero-caption"><span>33.9070° N&nbsp; 73.3943° E</span><span>MURREE, PAKISTAN</span></div>
        <div className="hero-index">01 <span>—</span> 03</div>
      </section>

      <section className="intro section-wrap" id="experience">
        <div className="section-kicker">A LITTLE CLOSER TO NATURE</div>
        <div className="intro-grid"><h2>Less planning.<br/><em>More breathing room.</em></h2><div><p className="lead">The best trips don’t need to feel complicated.</p><p>From choosing the right length of stay to finding time for the views, we make it easier to plan a Murree escape that feels like yours.</p><a className="under-link" href="#contact">Let’s plan something good <span>↗</span></a></div></div>
      </section>

      <section className="packages section-wrap" id="packages">
        <div className="section-heading"><div><div className="section-kicker">MADE FOR YOUR KIND OF BREAK</div><h2>Choose your <em>escape.</em></h2></div><p>Simple options to get you started.<br/>Every trip can be tailored to your group.</p></div>
        <div className="package-grid">{packages.map((p, i) => <article className="package-card" key={p.name}><div className={`package-photo photo-${i+1}`}><span>{p.tag}</span></div><div className="package-body"><div className="duration">{p.duration}</div><h3>{p.name}</h3><p>{p.detail}</p><div className="package-bottom"><strong>{p.price}</strong><a href="#contact" aria-label={`Enquire about ${p.name}`}>↗</a></div></div></article>)}</div>
        <p className="fine-print">*Indicative starting prices only. Final pricing depends on travel dates, group size, accommodation, and inclusions.</p>
      </section>

      <section className="quote-band"><div className="quote-inner"><span className="quote-mark">“</span><blockquote>Take the scenic route.<br/><em>Stay a little longer.</em></blockquote><p>MAKE SPACE FOR THE MOMENTS IN BETWEEN.</p></div></section>

      <section className="process section-wrap">
        <div className="section-heading"><div><div className="section-kicker">FROM FIRST HELLO TO HILLTOP</div><h2>Your trip, <em>made easy.</em></h2></div><p>A clear, personal way to<br/>put your getaway together.</p></div>
        <div className="steps">{highlights.map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="contact" id="contact"><div className="contact-image" /><div className="contact-content"><div className="section-kicker">READY WHEN YOU ARE</div><h2>Let’s make<br/>a little <em>escape.</em></h2><p>Share a few details and we’ll help you find a Murree trip that fits.</p><a className="button button-dark" href="https://wa.me/923000000000?text=Hi%2C%20I%27m%20interested%20in%20Murree%20tour%20packages.">Enquire on WhatsApp <span>↗</span></a><small>Replace this demo number with your business WhatsApp number.</small></div></section>

      <section className="faq section-wrap" id="faq"><div className="section-kicker">GOOD TO KNOW</div><h2>A few quick <em>answers.</em></h2><div className="faq-list"><details><summary>Can packages be customized?<span>+</span></summary><p>Yes. Share your dates, group size, and preferences so the itinerary can be tailored to your trip.</p></details><details><summary>Are these prices final?<span>+</span></summary><p>No. Prices shown are illustrative starting prices. Confirm the final quote, inclusions, and availability before booking.</p></details><details><summary>What should I bring?<span>+</span></summary><p>Bring comfortable walking shoes and layers suitable for the season. Weather can change in the hills.</p></details></div></section>

      <footer><a className="brand brand-footer" href="#"><span className="brand-mark">M</span><span>murree<span className="brand-light"> getaways</span></span></a><span>MADE FOR THE MOUNTAIN MOMENTS.</span><span>© {new Date().getFullYear()} Murree Getaways</span></footer>
    </main>
  );
}
