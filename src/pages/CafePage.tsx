import { BookstoreHeader } from '../components/BookstoreHeader';
import { CoffeeIcon } from '../components/BookstoreIcons';
import { Coffee, Cake, Book } from 'lucide-react';

export default function CafePage() {
  const menu = [
    { name: 'Espresso', price: '28 kr', category: 'Kaffe' },
    { name: 'Cappuccino', price: '38 kr', category: 'Kaffe' },
    { name: 'Latte', price: '42 kr', category: 'Kaffe' },
    { name: 'Kanelsnegl', price: '32 kr', category: 'Kage' },
    { name: 'Chokoladebrownie', price: '38 kr', category: 'Kage' },
    { name: 'Friskbagt croissant', price: '28 kr', category: 'Kage' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />

      {/* Hero */}
      <section 
        className="py-20 sm:py-32 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #3A5A4A 0%, #2d4539 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-6">
            <CoffeeIcon size={64} color="white" />
          </div>
          <h1 className="text-4xl sm:text-5xl mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>
            Vesterborg Bogcafé
          </h1>
          <p className="text-xl" style={{ fontFamily: 'Georgia, serif', color: '#E5D5C3' }}>
            Nyd en kop kaffe mens du fordyber dig i din nye bog. Velkommen til vores hyggelige bogcafé.
          </p>
        </div>
      </section>

      {/* About Cafe */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
            Et rum for fordybelse
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
            Vores bogcafé er det perfekte sted at slappe af med en god bog. Vi serverer håndlavet kaffe, 
            hjemmebag og søde sager i rolige omgivelser. Tag plads i en af vores lænestole, find en god bog 
            fra hylden, og lad verden udenfor forsvinde for en stund.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl mb-12 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
            Menu
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Coffee size={24} color="#3A5A4A" />
                <h3 className="text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                  Kaffe
                </h3>
              </div>
              {menu.filter(item => item.category === 'Kaffe').map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span style={{ fontFamily: 'Georgia, serif' }}>{item.name}</span>
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cake size={24} color="#C4A47C" />
                <h3 className="text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                  Kage & Snacks
                </h3>
              </div>
              {menu.filter(item => item.category === 'Kage').map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span style={{ fontFamily: 'Georgia, serif' }}>{item.name}</span>
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
            Åbningstider
          </h2>
          <div className="bg-[#F5F3F0] rounded-xl p-8 space-y-4">
            {[
              { day: 'Mandag - Fredag', hours: '10:00 - 18:00' },
              { day: 'Lørdag', hours: '10:00 - 15:00' },
              { day: 'Søndag', hours: 'Lukket' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>{item.day}</span>
                <span style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#3A5A4A] text-white py-12 text-center">
        <p style={{ color: '#E5D5C3' }}>© 2024 Vesterborg Boghandel</p>
      </footer>
    </div>
  );
}
