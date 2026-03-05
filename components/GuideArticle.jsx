import Image from "next/image";
import Link from "next/link";

export default function GuideArticle({ guide, relatedGuides = [] }) {
  return (
    <article className="guide-shell">
      <header className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Transmission Care Guide</p>
          <h1>{guide.h1}</h1>
          <p className="intro">{guide.intro}</p>
          <div className="meta-row">
            <span>{guide.readingTime}</span>
            <span>Updated {guide.lastUpdated}</span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image
            src={guide.heroImage}
            alt={guide.heroAlt}
            width={1200}
            height={800}
            priority
            className="hero-image"
          />
        </div>
      </header>

      <section className="content-card">
        <h2>Step-by-Step Process</h2>
        <ol className="step-list">
          {guide.steps.map((step) => (
            <li key={step.id} className="step-item" id={`step-${step.id}`}>
              <div className="step-index">{step.id}</div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={1100}
                  height={720}
                  className="step-image"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-card">
        <h2>FAQ</h2>
        <div className="faq-list">
          {guide.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="content-card">
          <h2>Related Long-Tail Guides</h2>
          <div className="related-grid">
            {relatedGuides.map((item) => (
              <Link key={item.slug} href={item.path} className="related-card">
                <h3>{item.h1}</h3>
                <p>{item.metaDescription}</p>
                <span>Read guide</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
