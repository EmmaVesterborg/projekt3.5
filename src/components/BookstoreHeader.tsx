import { OpenBookIcon, BookmarkIcon } from './BookstoreIcons';
import { BookstoreLogo } from './BookstoreLogo';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function BookstoreHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [cartItems] = useState(3);

  const primaryColor = '#3A5A4A';
  const secondaryColor = '#C4A47C';

  const categories = [
    'Skønlitteratur',
    'Faglitteratur', 
    'Børnebøger',
    'Krimier & Thriller',
    'Fantasy & Sci-fi',
    'Biografier',
    'Poesi',
    'Rejsebøger'
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#3A5A4A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Boghandelvej 42, 4873 Vesterborg
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Phone size={14} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  +45 54 77 12 34
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <Clock size={14} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Man-Fre: 10-18 · Lør: 10-15
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/events" 
                className="hover:text-[#C4A47C] transition-colors"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Events
              </Link>
              <a 
                href="#" 
                className="hover:text-[#C4A47C] transition-colors"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Gavekort
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Navigation Row */}
          <div className="flex items-center justify-between h-20">
            {/* Logo & Branding */}
            <Link to="/" className="group transition-all hover:scale-105">
              <BookstoreLogo variant="color" size="medium" showText={true} />
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Søg efter bøger, forfattere eller ISBN..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    borderColor: '#E5E7EB',
                    color: primaryColor
                  }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Søg"
                >
                  <Search size={20} color={primaryColor} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Søg"
              >
                <Search size={20} color={primaryColor} />
              </button>

              {/* User Account */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <User size={20} color={primaryColor} />
                  <span 
                    className="text-sm hidden xl:inline"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                      color: primaryColor
                    }}
                  >
                    Log ind
                  </span>
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <a 
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: primaryColor
                      }}
                    >
                      Min konto
                    </a>
                    <a 
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: primaryColor
                      }}
                    >
                      Ordrehistorik
                    </a>
                    <a 
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: primaryColor
                      }}
                    >
                      Mine bogmærker
                    </a>
                    <div className="border-t border-gray-200 my-2"></div>
                    <a 
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: primaryColor
                      }}
                    >
                      Log ud
                    </a>
                  </div>
                )}
              </div>

              {/* Wishlist/Bookmarks */}
              <button
                className="hidden md:flex p-2 rounded-md hover:bg-gray-100 transition-colors relative"
                aria-label="Bogmærker"
              >
                <BookmarkIcon size={20} color={primaryColor} />
                <span 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                  style={{ 
                    backgroundColor: secondaryColor,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600
                  }}
                >
                  5
                </span>
              </button>

              {/* Shopping Cart */}
              <button
                className="relative p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
                aria-label="Indkøbskurv"
              >
                <ShoppingBag size={20} color={primaryColor} />
                {cartItems > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                    style={{ 
                      backgroundColor: '#A66B56',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {cartItems}
                  </span>
                )}
                <span 
                  className="text-sm hidden xl:inline"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    color: primaryColor
                  }}
                >
                  {cartItems > 0 ? `${cartItems} varer` : 'Kurv'}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors ml-2"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} color={primaryColor} />
                ) : (
                  <Menu size={24} color={primaryColor} />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden lg:block border-t border-gray-200">
            <nav className="flex items-center gap-8 py-4">
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    color: primaryColor
                  }}
                >
                  Alle kategorier
                  <ChevronDown size={16} />
                </button>

                {/* Categories Dropdown */}
                {showCategories && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 grid grid-cols-1 gap-1">
                    {categories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          color: primaryColor
                        }}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/boger"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Bestsellere
              </Link>
              <a 
                href="#"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Nyheder
              </a>
              <a 
                href="#"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Tilbud
              </a>
              <a 
                href="#"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Danske forfattere
              </a>
              <Link 
                to="/cafe"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Bogcafé
              </Link>
              <Link 
                to="/om-os"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Om os
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            {/* Mobile Search */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Søg efter bøger..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: primaryColor
                  }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search size={20} color="#6B6B6B" />
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="px-6 py-4 space-y-4">
              <div>
                <button
                  className="w-full text-left text-base py-2 flex items-center justify-between"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    color: primaryColor
                  }}
                >
                  Kategorier
                  <ChevronDown size={20} />
                </button>
              </div>
              
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Bestsellere
              </a>
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Nyheder
              </a>
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Tilbud
              </a>
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Danske forfattere
              </a>
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Bogcafé
              </a>
              <a 
                href="#"
                className="block text-base py-2"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  color: primaryColor
                }}
              >
                Om os
              </a>

              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a 
                  href="#"
                  className="block text-base py-2"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    color: primaryColor
                  }}
                >
                  Log ind
                </a>
                <a 
                  href="#"
                  className="block text-base py-2"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    color: primaryColor
                  }}
                >
                  Mine bogmærker (5)
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}