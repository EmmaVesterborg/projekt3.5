import { BookstoreHeader } from '../components/BookstoreHeader';
import { ProductCard } from '../components/UIComponents';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function BooksPage() {
  const primaryColor = '#3A5A4A';
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const categories = [
    'Alle',
    'Skønlitteratur',
    'Faglitteratur',
    'Børnebøger',
    'Krimier & Thriller',
    'Fantasy & Sci-fi',
    'Biografier',
    'Poesi',
    'Rejsebøger'
  ];

  const books = [
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      title: 'Stilhedens Sprog',
      author: 'Erik Hansen',
      price: '249 kr',
      description: 'En poetisk meditation over naturens skønhed.',
      badge: 'Nyhed'
    },
    {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      title: 'Nordisk Noir',
      author: 'Anna Bergström',
      price: '299 kr',
      description: 'En gripende thriller fra skandinavien.',
      badge: 'Bestseller'
    },
    {
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
      title: 'Københavnske Fortællinger',
      author: 'Marie Andersen',
      price: '199 kr',
      description: 'Historier fra byens gader.'
    },
    {
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
      title: 'Drømme i Morgenlys',
      author: 'Lars Pedersen',
      price: '279 kr',
      description: 'En roman om kærlighed og håb.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      title: 'Havets Hemmeligheder',
      author: 'Sofie Nielsen',
      price: '229 kr',
      description: 'Et eventyr ved den danske kyst.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop',
      title: 'Midvinternat',
      author: 'Jonas Sørensen',
      price: '269 kr',
      description: 'Mysterier i den nordiske vinter.',
      badge: 'Tilbud'
    },
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      title: 'Den Sidste Sommer',
      author: 'Emma Larsen',
      price: '219 kr',
      description: 'En commig-of-age historie.'
    },
    {
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop',
      title: 'Skovens Sang',
      author: 'Frederik Bach',
      price: '259 kr',
      description: 'Natur og poesi forenes.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />

      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm mb-4" style={{ color: '#6B6B6B' }}>
            <Link to="/" className="hover:text-[#3A5A4A] transition-colors">
              Hjem
            </Link>
            <span>/</span>
            <span style={{ color: primaryColor }}>Bøger</span>
          </nav>
          
          <h1 
            className="text-3xl sm:text-4xl mb-4"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              color: primaryColor
            }}
          >
            Vores Bogsortiment
          </h1>
          <p 
            className="text-base sm:text-lg max-w-3xl"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#6B6B6B'
            }}
          >
            Udforsk vores nøje udvalgte kollektion af nordisk og international litteratur. 
            Over 3.500 titler at vælge imellem.
          </p>
        </div>
      </section>

      {/* Filters & Books */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      color: primaryColor
                    }}
                  >
                    Filtrer
                  </h2>
                  <SlidersHorizontal size={20} color={primaryColor} />
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 
                    className="text-sm mb-3"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      color: '#2B2B2B'
                    }}
                  >
                    Kategorier
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-[#3A5A4A] text-white'
                            : 'hover:bg-[#F5F3F0]'
                        }`}
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '0.875rem',
                          color: selectedCategory === category ? 'white' : '#2B2B2B'
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h3 
                    className="text-sm mb-3"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      color: '#2B2B2B'
                    }}
                  >
                    Pris
                  </h3>
                  <div className="space-y-2">
                    {['Under 200 kr', '200-300 kr', 'Over 300 kr'].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span 
                          className="text-sm"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#2B2B2B'
                          }}
                        >
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format Filter */}
                <div>
                  <h3 
                    className="text-sm mb-3"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600,
                      color: '#2B2B2B'
                    }}
                  >
                    Format
                  </h3>
                  <div className="space-y-2">
                    {['Hardcover', 'Paperback', 'E-bog'].map((format) => (
                      <label key={format} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span 
                          className="text-sm"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#2B2B2B'
                          }}
                        >
                          {format}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Books Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#6B6B6B'
                  }}
                >
                  Viser {books.length} bøger
                </p>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: primaryColor
                  }}
                >
                  <option>Nyeste først</option>
                  <option>Pris: Lav til høj</option>
                  <option>Pris: Høj til lav</option>
                  <option>Titel: A-Å</option>
                </select>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {books.map((book, index) => (
                  <ProductCard
                    key={index}
                    image={book.image}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    description={book.description}
                    badge={book.badge}
                    onAddToCart={() => {}}
                    onSave={() => {}}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button 
                  className="px-4 py-2 border-2 border-[#3A5A4A] text-[#3A5A4A] rounded-lg hover:bg-[#3A5A4A] hover:text-white transition-all"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
                >
                  Forrige
                </button>
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      page === 1
                        ? 'bg-[#3A5A4A] text-white'
                        : 'border-2 border-gray-300 hover:border-[#3A5A4A]'
                    }`}
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                      color: page === 1 ? 'white' : '#2B2B2B'
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  className="px-4 py-2 border-2 border-[#3A5A4A] text-[#3A5A4A] rounded-lg hover:bg-[#3A5A4A] hover:text-white transition-all"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
                >
                  Næste
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A5A4A] text-white py-12 sm:py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#E5D5C3'
            }}
          >
            © 2024 Vesterborg Boghandel. Alle rettigheder forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  );
}
