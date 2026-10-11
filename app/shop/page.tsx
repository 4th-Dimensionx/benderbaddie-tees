import Link from 'next/link';
import products from '@/app/data/products';

export default function ShopPage() {
  return (
    <main className="shop-page-shell">
      <header className="shop-header">
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
        <div className="brand-block">
          <img src="/logo.svg" alt="BenderBaddie logo" className="brand-mark" />
          <div>
            <p className="eyebrow">BenderBaddie</p>
            <h1>Shop All Products</h1>
          </div>
        </div>
      </header>

      <section className="shop-toolbar">
        <span>All Custom Graphic Tees</span>
        <span>{products.length} items</span>
      </section>

      <section className="shop-grid">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="shop-card">
            <div className="shop-image-wrap">
              <img src={product.image} alt={product.name} />
              <span className="product-badge">{product.badge}</span>
            </div>
            <div className="shop-card-copy">
              <div className="shop-card-topline">
                <p>{product.name}</p>
                <span>${product.price}</span>
              </div>
              <small>{product.subtitle}</small>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
