import { BookstoreHeader } from '../components/BookstoreHeader';
import { 
  OpenBookIcon, 
  BookmarkIcon, 
  CoffeeIcon, 
  BookStackIcon,
  GlassesIcon,
  QuillIcon
} from '../components/BookstoreIcons';
import { CTAButton, ProductCard } from '../components/UIComponents';
import { ArrowRight, Star, TrendingUp, Calendar, Users, Heart } from 'lucide-react';
import { Link } from 'react-router';

export default function HomePage() {
  const primaryColor = '#3A5A4A';
  const secondaryColor = '#C4A47C';
  const terracottaColor = '#A66B56';

  // Mock data for books
  const featuredBooks = [
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      title: 'Stilhedens Sprog',
      author: 'Erik Hansen',
      price: '249 kr',
      description: 'En poetisk meditation over naturens skønhed og menneskets søgen efter mening i en støjende verden.',
      badge: 'Nyhed',
      rating: 4.8
    },
    {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      title: 'Nordisk Noir',
      author: 'Anna Bergström',
      price: '299 kr',
      description: 'En gripende thriller der udforsker de mørke hjørner af det skandinaviske samfund.',
      badge: 'Bestseller',
      rating: 4.9
    },
    {
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
      title: 'Københavnske Fortællinger',
      author: 'Marie Andersen',
      price: '199 kr',
      description: 'Sammenvævede historier fra byens gader, fortalt med varme og humor.',
      rating: 4.7
    },
    {
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
      title: 'Drømme i Morgenlys',
      author: 'Lars Pedersen',
      price: '279 kr',
      description: 'En dybtfølende roman om kærlighed, tab og håb i det moderne Danmark.',
      rating: 4.6
    }
  ];

  const categories = [
    { name: 'Skønlitteratur', icon: <OpenBookIcon size={32} color={primaryColor} />, count: 1247 },
    { name: 'Faglitteratur', icon: <GlassesIcon size={32} color={primaryColor} />, count: 856 },
    { name: 'Børnebøger', icon: <BookStackIcon size={32} color={secondaryColor} />, count: 623 },
    { name: 'Krimier', icon: <QuillIcon size={32} color={terracottaColor} />, count: 445 },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />

      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3A5A4A 0%, #2d4539 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 sm:mb-6">
                <TrendingUp size={16} />
                <span 
                  className="text-xs sm:text-sm"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
                >
                  Over 3.500 bøger på lager
                </span>
              </div>
              
              <h1 
                className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                Oplev litteraturens magi
              </h1>
              
              <p 
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#E5D5C3'
                }}
              >
                Siden 1952 har vi kureret det fineste udvalg af nordisk og international 
                litteratur. Hver bog er omhyggeligt udvalgt for at inspirere, udfordre og berige dit liv.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <CTAButton 
                  variant="secondary"
                  icon={<OpenBookIcon size={20} color="white" />}
                >
                  Udforsk bøger
                </CTAButton>
                <Link to="/cafe">
                  <button 
                    className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#3A5A4A] transition-all flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
                  >
                    <CoffeeIcon size={20} color="currentColor" />
                    Besøg vores café
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20">
                <div>
                  <div 
                    className="text-2xl sm:text-3xl mb-1"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}
                  >
                    72+
                  </div>
                  <div 
                    className="text-xs sm:text-sm"
                    style={{ color: '#E5D5C3', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Års erfaring
                  </div>
                </div>
                <div>
                  <div 
                    className="text-2xl sm:text-3xl mb-1"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}
                  >
                    3.500+
                  </div>
                  <div 
                    className="text-xs sm:text-sm"
                    style={{ color: '#E5D5C3', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Bøger på lager
                  </div>
                </div>
                <div>
                  <div 
                    className="text-2xl sm:text-3xl mb-1"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}
                  >
                    15K+
                  </div>
                  <div 
                    className="text-xs sm:text-sm"
                    style={{ color: '#E5D5C3', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Glade kunder
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Book */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A47C]/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
                      alt="Featured book"
                      className="w-full sm:w-48 h-64 object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex-1 w-full">
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs text-white mb-3"
                        style={{ 
                          backgroundColor: terracottaColor,
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontWeight: 500
                        }}
                      >
                        Ugens bog
                      </div>
                      <h3 
                        className="text-xl sm:text-2xl mb-2"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontWeight: 600,
                          color: primaryColor
                        }}
                      >
                        Stilhedens Sprog
                      </h3>
                      <p 
                        className="text-sm mb-4"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          color: '#6B6B6B'
                        }}
                      >
                        af Erik Hansen
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            fill={star <= 4 ? secondaryColor : 'none'}
                            color={secondaryColor}
                          />
                        ))}
                        <span 
                          className="ml-2 text-xs sm:text-sm"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#6B6B6B'
                          }}
                        >
                          4.8 (127 anmeldelser)
                        </span>
                      </div>
                      <p 
                        className="text-sm mb-6"
                        style={{ 
                          fontFamily: 'Georgia, serif',
                          color: '#2B2B2B',
                          lineHeight: 1.6
                        }}
                      >
                        En poetisk meditation over naturens skønhed og menneskets 
                        søgen efter mening i en støjende verden.
                      </p>
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-xl sm:text-2xl"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 600,
                            color: primaryColor
                          }}
                        >
                          249 kr
                        </span>
                        <CTAButton variant="primary" size="small">
                          Læg i kurv
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl mb-3"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                color: primaryColor
              }}
            >
              Udforsk vores kategorier
            </h2>
            <p 
              className="text-base sm:text-lg"
              style={{ 
                fontFamily: 'Georgia, serif',
                color: '#6B6B6B'
              }}
            >
              Find din næste yndlingsbog blandt vores nøje udvalgte sortiment
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="group bg-[#F5F3F0] rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(58, 90, 74, 0.1)' }}
                  >
                    {category.icon}
                  </div>
                </div>
                <h3 
                  className="text-base sm:text-lg mb-2"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    color: primaryColor
                  }}
                >
                  {category.name}
                </h3>
                <p 
                  className="text-xs sm:text-sm"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#6B6B6B'
                  }}
                >
                  {category.count} bøger
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/boger"
              className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: primaryColor
              }}
            >
              Se alle kategorier
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-12 sm:py-16 bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 
                className="text-2xl sm:text-3xl mb-3"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: primaryColor
                }}
              >
                Vores aktuelle anbefalinger
              </h2>
              <p 
                className="text-base sm:text-lg"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#6B6B6B'
                }}
              >
                Håndplukket af vores erfarne boghandlere
              </p>
            </div>
            <Link
              to="/boger"
              className="flex items-center gap-2 hover:gap-3 transition-all"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: primaryColor
              }}
            >
              Se alle
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredBooks.map((book, index) => (
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl mb-3"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                color: primaryColor
              }}
            >
              Hvorfor handle hos os?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(58, 90, 74, 0.1)' }}
                >
                  <BookStackIcon size={32} color={primaryColor} />
                </div>
              </div>
              <h3 
                className="text-lg sm:text-xl mb-3"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: primaryColor
                }}
              >
                Kurateret udvalg
              </h3>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#6B6B6B'
                }}
              >
                Hver bog er nøje udvalgt af vores passionerede boghandlere med 
                årtiers erfaring inden for litteratur
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(196, 164, 124, 0.1)' }}
                >
                  <Users size={32} color={secondaryColor} />
                </div>
              </div>
              <h3 
                className="text-lg sm:text-xl mb-3"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: primaryColor
                }}
              >
                Personlig rådgivning
              </h3>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#6B6B6B'
                }}
              >
                Få skræddersyede anbefalinger baseret på dine interesser. 
                Vi kender vores bøger og elsker at dele dem
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(166, 107, 86, 0.1)' }}
                >
                  <CoffeeIcon size={32} color={terracottaColor} />
                </div>
              </div>
              <h3 
                className="text-lg sm:text-xl mb-3"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: primaryColor
                }}
              >
                Hyggeligt bogcafé
              </h3>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#6B6B6B'
                }}
              >
                Tag en pause i vores hyggelige café. Nyd en kop kaffe mens 
                du bladrer i din nye bog
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        className="py-12 sm:py-16 md:py-20"
        style={{
          background: 'linear-gradient(135deg, #C4A47C 0%, #b59469 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <BookmarkIcon size={40} color="white" />
          </div>
          <h2 
            className="text-2xl sm:text-3xl mb-4"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600
            }}
          >
            Bliv en del af vores læseklub
          </h2>
          <p 
            className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Få eksklusive boganbefalinger, invitationer til forfattermøder 
            og særlige medlemstilbud direkte i din indbakke
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Din email adresse"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: primaryColor
                }}
              />
              <button
                className="px-6 py-3 bg-[#3A5A4A] text-white rounded-lg hover:bg-[#2d4539] transition-all whitespace-nowrap"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500
                }}
              >
                Tilmeld
              </button>
            </div>
            <p 
              className="text-xs sm:text-sm mt-4"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              Vi respekterer dit privatliv og sender kun relevant indhold
            </p>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 
                className="text-2xl sm:text-3xl mb-3"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600,
                  color: primaryColor
                }}
              >
                Kommende events
              </h2>
              <p 
                className="text-base sm:text-lg"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#6B6B6B'
                }}
              >
                Mød dine yndlingsforfattere og andre bogentusiaster
              </p>
            </div>
            <Link
              to="/events"
              className="flex items-center gap-2 hover:gap-3 transition-all"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                color: primaryColor
              }}
            >
              Se alle events
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { date: '15 DEC', title: 'Forfattermøde: Erik Hansen', time: '18:00', spots: 12 },
              { date: '20 DEC', title: 'Julens bedste bøger', time: '19:00', spots: 25 },
              { date: '5 JAN', title: 'Bogklub: Nordisk Noir', time: '17:30', spots: 8 }
            ].map((event, index) => (
              <div key={index} className="bg-[#F5F3F0] rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div 
                    className="text-center p-3 rounded-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <div 
                      className="text-xl sm:text-2xl text-white"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {event.date.split(' ')[0]}
                    </div>
                    <div 
                      className="text-xs text-white"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {event.date.split(' ')[1]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-base sm:text-lg mb-2"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: 600,
                        color: primaryColor
                      }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs sm:text-sm" style={{ color: '#6B6B6B' }}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {event.spots} pladser
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full mt-4 px-4 py-2 border-2 rounded-lg hover:bg-[#3A5A4A] hover:text-white hover:border-[#3A5A4A] transition-all"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    color: primaryColor,
                    borderColor: primaryColor
                  }}
                >
                  Tilmeld dig
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A5A4A] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <OpenBookIcon size={24} color={primaryColor} />
                </div>
                <div>
                  <div 
                    className="text-lg sm:text-xl"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Vesterborg Boghandel
                  </div>
                  <div 
                    className="text-xs"
                    style={{ color: '#E5D5C3' }}
                  >
                    Siden 1952
                  </div>
                </div>
              </div>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  color: '#E5D5C3'
                }}
              >
                Din lokale boghandel med fokus på kvalitet, service og en 
                ægte kærlighed til litteratur.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 
                className="mb-4 text-white"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600
                }}
              >
                Butik
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: '#E5D5C3' }}>
                <li>
                  <Link to="/boger" className="hover:text-white transition-colors">
                    Alle bøger
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bestsellere
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nyheder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tilbud
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gavekort
                  </a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 
                className="mb-4 text-white"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600
                }}
              >
                Information
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: '#E5D5C3' }}>
                <li>
                  <Link to="/om-os" className="hover:text-white transition-colors">
                    Om os
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/cafe" className="hover:text-white transition-colors">
                    Bogcafé
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 
                className="mb-4 text-white"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 600
                }}
              >
                Besøg os
              </h4>
              <div className="space-y-4 text-sm" style={{ color: '#E5D5C3' }}>
                <div>
                  <p className="mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Adresse
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    Boghandelvej 42<br />
                    4873 Vesterborg
                  </p>
                </div>
                <div>
                  <p className="mb-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Åbningstider
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    Man-Fre: 10:00 - 18:00<br />
                    Lørdag: 10:00 - 15:00<br />
                    Søndag: Lukket
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    +45 54 77 12 34<br />
                    info@vesterborgbog.dk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p 
                className="text-xs sm:text-sm text-center md:text-left"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#E5D5C3'
                }}
              >
                © 2024 Vesterborg Boghandel. Alle rettigheder forbeholdes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm" style={{ color: '#E5D5C3' }}>
                <a href="#" className="hover:text-white transition-colors">
                  Privatlivspolitik
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Handelsbetingelser
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
