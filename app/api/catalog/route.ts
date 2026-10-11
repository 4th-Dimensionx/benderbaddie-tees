export async function GET() {
  const products = [
    {
      id: 'apoc-raw',
      name: 'APOC RAW Tee',
      price: 120,
      category: 'Custom Graphic Tees',
      badge: 'New Drop',
    },
    {
      id: 'chrome-halo',
      name: 'Chrome Halo Tee',
      price: 140,
      category: 'Cross Vendor Fits',
      badge: 'Best Seller',
    },
    {
      id: 'signal-ghost',
      name: 'Signal Ghost Set',
      price: 180,
      category: 'Limited Collection',
      badge: 'Custom',
    },
  ];

  return Response.json({ products });
}
