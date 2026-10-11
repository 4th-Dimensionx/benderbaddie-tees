const products = [
  {
    id: 'apoc-raw',
    name: 'APOC RAW Tee',
    subtitle: 'Limited street drop',
    price: '$120',
    badge: 'New Drop',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chrome-halo',
    name: 'Chrome Halo Tee',
    subtitle: 'Graphical layering',
    price: '$140',
    badge: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'signal-ghost',
    name: 'Signal Ghost Set',
    subtitle: 'Custom crosswear',
    price: '$180',
    badge: 'Custom',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'void-inferno',
    name: 'Void Inferno Tee',
    subtitle: 'Dark art finish',
    price: '$135',
    badge: 'Restock',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
];

const collections = [
  {
    title: 'Custom Graphic Tees',
    copy: 'Statement silhouettes with custom digital art, premium cotton, and elevated finish work.',
  },
  {
    title: 'Cross Vendor Fits',
    copy: 'Curated pairings of oversized layers, structured bottoms, and graphic accents.',
  },
  {
    title: 'Limited Drops',
    copy: 'Small-batch editions created for collectors, creators, and people who dress with intent.',
  },
];

const looks = [
  'Oversized statement fit',
  'Limited custom print tee',
  'Layered cross-vendor styling',
  'Luxury streetwear energy',
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src="/logo.svg" alt="BenderBaddie logo" className="brand-mark" />
          <div className="brand-copy">
            <span className="brand-kicker">BenderBaddie</span>
            <span className="brand-sub">Custom Graphic Tees</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#custom">Custom</a>
        </nav>

        <div className="utility-actions">
          <a href="#custom" className="link-button muted-link">
            + Build Your Fit
          </a>
          <button className="cart-pill" type="button">
            Cart (0)
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">BenderBaddie // frictionless streetwear</p>
          <h1>Custom graphic tees with a luxury edge.</h1>
          <p className="hero-text">
            Designed for the bold, the creative, and the impossible-to-ignore. BenderBaddie blends
            custom art, cross-vendor styling, and elevated essentials into a signature streetwear drop.
          </p>

          <div className="cta-row">
            <a href="#shop" className="primary-button">
              Shop Collection
            </a>
            <a href="#custom" className="secondary-button">
              Customize Yours
            </a>
          </div>

          <ul className="feature-list" aria-label="Key product benefits">
            {looks.map((look) => (
              <li key={look}>{look}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-label="Featured outfit image">
          <div className="visual-card main-card">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Model wearing custom graphic outfit"
            />
          </div>
          <div className="visual-badge">
            <span>Limited Run</span>
            <strong>Spring / Summer 2026</strong>
          </div>
        </div>
      </section>

      <section id="collections" className="collections-wrap">
        <div className="section-heading">
          <p className="eyebrow">Curated collection</p>
          <h2>Built for statement dressing.</h2>
        </div>

        <div className="collection-grid">
          {collections.map((collection) => (
            <article key={collection.title} className="collection-card">
              <span className="card-label">01</span>
              <h3>{collection.title}</h3>
              <p>{collection.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="product-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Featured edits</p>
            <h2>Shop the latest custom drops.</h2>
          </div>
          <a href="#custom" className="text-link">
            Request a custom fit →
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-badge">{product.badge}</span>
              </div>
              <div className="product-meta">
                <div>
                  <p className="product-name">{product.name}</p>
                  <p className="product-subtitle">{product.subtitle}</p>
                </div>
                <span className="product-price">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="lookbook" className="lookbook">
        <div className="lookbook-panel large-panel">
          <div className="panel-copy">
            <p className="eyebrow">Lookbook</p>
            <h2>Cross-vendor styling without compromise.</h2>
            <p>
              Explore our directional combinations of oversized graphics, tactile layers, and refined
              minimal accessories.
            </p>
          </div>
        </div>

        <div className="lookbook-stack">
          <div className="mini-panel panel-one" />
          <div className="mini-panel panel-two" />
        </div>
      </section>

      <section id="custom" className="custom-section">
        <div className="section-heading">
          <p className="eyebrow">Custom work</p>
          <h2>Bring your own graphic energy.</h2>
        </div>

        <div className="custom-grid">
          <div className="custom-copy">
            <p>
              Need a custom graphic tee, collab drop, or themed outfit direction? BenderBaddie creates
              premium pieces for personal style, events, and brand collaborations.
            </p>
            <ul>
              <li>Custom prints and artwork direction</li>
              <li>Limited piece runs and concept drops</li>
              <li>Streetwear styling for creators and brands</li>
            </ul>
          </div>

          <form className="custom-form" action="/api/custom-order" method="post">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Project brief
              <textarea name="brief" rows={5} placeholder="Tell us about your tee concept, fit, or drop." />
            </label>
            <button type="submit" className="primary-button full-width">
              Request custom order
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/logo.svg" alt="BenderBaddie logo" className="footer-mark" />
        </div>
        <div className="footer-links">
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#custom">Custom</a>
        </div>
        <p>© 2026 BenderBaddie</p>
      </footer>
    </main>
  );
}
