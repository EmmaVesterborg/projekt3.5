import { OpenBookIcon, BookmarkIcon } from './BookstoreIcons';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  variant?: 'default' | 'transparent';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const primaryColor = '#3A5A4A';
  const secondaryColor = '#C4A47C';

  const isTransparent = variant === 'transparent';

  return (
    <header 
      className={`sticky top-0 z-50 transition-all ${
        isTransparent 
          ? 'bg-transparent border-b border-white/20' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded flex items-center justify-center transition-all hover:scale-105"
              style={{ backgroundColor: primaryColor }}
            >
              <OpenBookIcon size={24} color="white" />
            </div>
            <div>
              <h1 
                className="text-xl leading-tight"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: isTransparent ? 'white' : primaryColor
                }}
              >
                Vesterborg Boghandel
              </h1>
              <p 
                className="text-xs"
                style={{ 
                  color: isTransparent ? 'rgba(255,255,255,0.8)' : '#6B6B6B'
                }}
              >
                Siden 1952
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#boger" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : '#2B2B2B'
              }}
            >
              Bøger
            </a>
            <a 
              href="#forfattere" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : '#2B2B2B'
              }}
            >
              Forfattere
            </a>
            <a 
              href="#cafe" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : '#2B2B2B'
              }}
            >
              Café
            </a>
            <a 
              href="#events" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : '#2B2B2B'
              }}
            >
              Events
            </a>
            <a 
              href="#om" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : '#2B2B2B'
              }}
            >
              Om os
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Søg"
            >
              <Search 
                size={20} 
                color={isTransparent ? 'white' : primaryColor} 
              />
            </button>

            {/* Bookmark */}
            <button
              className="hidden md:flex p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Bogmærker"
            >
              <BookmarkIcon 
                size={20} 
                color={isTransparent ? 'white' : primaryColor} 
              />
            </button>

            {/* Shopping Bag */}
            <button
              className="relative p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Indkøbskurv"
            >
              <ShoppingBag 
                size={20} 
                color={isTransparent ? 'white' : primaryColor} 
              />
              <span 
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                style={{ 
                  backgroundColor: secondaryColor,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600
                }}
              >
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X size={24} color={isTransparent ? 'white' : primaryColor} />
              ) : (
                <Menu size={24} color={isTransparent ? 'white' : primaryColor} />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-6 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Søg efter bøger, forfattere..."
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  backgroundColor: 'white',
                  borderColor: isTransparent ? 'rgba(255,255,255,0.3)' : '#E5E7EB',
                  color: primaryColor
                }}
                autoFocus
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Search size={20} color="#6B6B6B" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t animate-fadeIn"
          style={{ 
            borderColor: isTransparent ? 'rgba(255,255,255,0.2)' : '#E5E7EB',
            backgroundColor: isTransparent ? 'rgba(58, 90, 74, 0.95)' : 'white'
          }}
        >
          <nav className="px-6 py-6 space-y-4">
            <a 
              href="#boger" 
              className="block text-base py-2 hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor
              }}
            >
              Bøger
            </a>
            <a 
              href="#forfattere" 
              className="block text-base py-2 hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor
              }}
            >
              Forfattere
            </a>
            <a 
              href="#cafe" 
              className="block text-base py-2 hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor
              }}
            >
              Café
            </a>
            <a 
              href="#events" 
              className="block text-base py-2 hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor
              }}
            >
              Events
            </a>
            <a 
              href="#om" 
              className="block text-base py-2 hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor
              }}
            >
              Om os
            </a>
            
            {/* Mobile Only - Bookmarks Link */}
            <a 
              href="#bogmaerker" 
              className="block text-base py-2 pt-4 border-t hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: isTransparent ? 'white' : primaryColor,
                borderColor: isTransparent ? 'rgba(255,255,255,0.2)' : '#E5E7EB'
              }}
            >
              Mine bogmærker
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// Header Demo Component
export function HeaderDemo() {
  const primaryColor = '#3A5A4A';
  
  return (
    <div className="space-y-12">
      {/* Default Header */}
      <div>
        <h3 
          className="mb-4 text-xl"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 600,
            color: primaryColor
          }}
        >
          Standard Header
        </h3>
        <div className="bg-[#F5F3F0] rounded-lg overflow-hidden">
          <Header variant="default" />
          <div className="p-12 text-center">
            <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
              Standard header med hvid baggrund til almindelige sider
            </p>
          </div>
        </div>
      </div>

      {/* Transparent Header */}
      <div>
        <h3 
          className="mb-4 text-xl"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 600,
            color: primaryColor
          }}
        >
          Transparent Header
        </h3>
        <div 
          className="rounded-lg overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #3A5A4A 0%, #2d4539 100%)'
          }}
        >
          <Header variant="transparent" />
          <div className="p-12 text-center">
            <p className="text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Transparent header til hero-sektioner med mørk baggrund
            </p>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h3 
          className="mb-6 text-xl"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 600,
            color: primaryColor
          }}
        >
          Header Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 
              className="text-sm mb-2"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                color: '#C4A47C'
              }}
            >
              Funktionalitet
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Sticky position med smooth scroll</li>
              <li>• Responsiv navigation med mobile menu</li>
              <li>• Søgefunktion med toggle animation</li>
              <li>• Indkøbskurv med badge counter</li>
              <li>• Bogmærke funktion</li>
            </ul>
          </div>
          <div>
            <h4 
              className="text-sm mb-2"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                color: '#C4A47C'
              }}
            >
              Design
            </h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Minimalistisk nordisk æstetik</li>
              <li>• To varianter: default og transparent</li>
              <li>• Hover states på alle interaktive elementer</li>
              <li>• Konsistent typografi og farvepalette</li>
              <li>• Mobile-first responsive design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-[#F5F3F0] px-6 py-3 border-b border-gray-200">
          <h3 
            className="text-sm"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              color: primaryColor
            }}
          >
            Brug i React
          </h3>
        </div>
        <pre className="p-6 overflow-x-auto text-sm bg-gray-900 text-gray-100">
{`import { Header } from './components/Header';

// Standard hvid header
<Header variant="default" />

// Transparent header til hero sektioner
<Header variant="transparent" />`}
        </pre>
      </div>
    </div>
  );
}
