'use client'
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';


const Searchbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<{ name: string, slug: { current: string }, images?: { asset: { _ref: string } }[] }[]>([]);
  const [filtered, setFiltered] = useState<{ name: string, slug: { current: string }, images?: { asset: { _ref: string } }[] }[]>([]);

  useEffect(() => {
    // Sanity থেকে সব প্রোডাক্ট ফেচ করুন
    const fetchProducts = async () => {
      try {
        const data: { name: string, slug: { current: string }, images?: { asset: { _ref: string } }[] }[] = await client.fetch(
          `*[_type == 'product']{name, slug, images}`
        );
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        setProducts([]);
        setFiltered([]);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFiltered(
      products.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
        <Search className='w-5 h-5 hover:text-shop_light_green transition-all duration-300' />
      </div>
      {open && (
        <div className="fixed inset-0 h-screen bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white -top-20 rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setOpen(false)}
            >×</button>
            <h2 className="text-lg font-bold mb-4">Product Searchbar</h2>
            <input
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="Search your product here..."
              value={query}
              onChange={handleSearch}
              autoFocus
            />
            <div className="bg-gray-100 rounded p-4 max-h-60 overflow-y-auto">
              <p className="mb-2 text-gray-600">
                <span className="font-semibold text-shop_dark_green">Search and explore your products from SHOPCART</span>
              </p>
              {filtered.length > 0 ? (
                filtered.slice(0, 4).map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/product/${item.slug.current}`}
                    className="flex items-center gap-2 py-1 hover:bg-gray-200 rounded px-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.images && item.images[0] ? (
                      <Image
                        src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${item.images[0].asset._ref.replace('image-', '').replace('-webp', '.webp').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded" />
                    )}
                    <span>{item.name}</span>
                  </Link>
                ))
              ) : (
                <p className="text-gray-400">কোনো প্রোডাক্ট পাওয়া যায়নি।</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;