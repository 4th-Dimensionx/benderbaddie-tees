import Link from 'next/link';
import { notFound } from 'next/navigation';
import products, { getProductBySlug } from '@/app/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page-shell">
      <header className="product-header">
        <Link href="/shop" className="back-link">
          ← Back to shop
        </Link>
        <Link href="/" className="back-link muted">
          BenderBaddie home
        </Link>
      </header>

      <section className="product-detail-grid">
        <div className="product-gallery">
          {product.gallery.map((image) => (
            <div key={image} className="gallery-panel">
              <img src={image} alt={`${product.name} view`} />
            </div>
          ))}
        </div>

        <aside className="product-summary">
          <p className="eyebrow">{product.badge}</p>
          <h1>{product.name}</h1>
          <p className="product-subtitle">{product.subtitle}</p>
          <div className="price-row">
            <span className="product-price-large">${product.price}</span>
            <span className="stock-text">In stock</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="option-group">
            <span>Sizes</span>
            <div className="selection-row">
              {product.sizes.map((size) => (
                <button key={size} type="button" className="size-pill">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <span>Palette</span>
            <div className="selection-row palette-row">
              {product.palette.map((tone) => (
                <span key={tone} className="tone-chip">
                  {tone}
                </span>
              ))}
            </div>
          </div>

          <div className="purchase-actions">
            <button type="button" className="primary-button full-width">
              Add to cart
            </button>
            <button type="button" className="secondary-button full-width">
              Request custom version
            </button>
          </div>
        </aside>
      </section>

      <section className="product-story">
        <div className="story-copy">
          <p className="eyebrow">The story</p>
          <h2>{product.name}</h2>
          <p>{product.story}</p>
        </div>

        <div className="detail-panel">
          <p className="eyebrow">Included</p>
          <ul>
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
