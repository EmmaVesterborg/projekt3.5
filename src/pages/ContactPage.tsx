import { BookstoreHeader } from '../components/BookstoreHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
              Kontakt Os
            </h1>
            <p className="text-lg" style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
              Vi er altid klar til at hjælpe dig
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                Kontaktinformation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
                  <MapPin size={24} color="#3A5A4A" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#3A5A4A' }}>Adresse</h3>
                    <p style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                      Boghandelvej 42<br />
                      4873 Vesterborg<br />
                      Danmark
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
                  <Phone size={24} color="#3A5A4A" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#3A5A4A' }}>Telefon</h3>
                    <p style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                      +45 54 77 12 34
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
                  <Mail size={24} color="#3A5A4A" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#3A5A4A' }}>Email</h3>
                    <p style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                      info@vesterborgbog.dk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl">
                  <Clock size={24} color="#3A5A4A" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#3A5A4A' }}>Åbningstider</h3>
                    <p style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                      Mandag - Fredag: 10:00 - 18:00<br />
                      Lørdag: 10:00 - 15:00<br />
                      Søndag: Lukket
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                Send os en besked
              </h2>
              <form className="bg-white p-8 rounded-xl space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#3A5A4A' }}>
                    Navn
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5A4A]"
                    placeholder="Dit navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#3A5A4A' }}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5A4A]"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#3A5A4A' }}>
                    Emne
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5A4A]"
                    placeholder="Hvad drejer det sig om?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#3A5A4A' }}>
                    Besked
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A5A4A]"
                    placeholder="Skriv din besked her..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-[#3A5A4A] text-white rounded-lg hover:bg-[#2d4539] transition-all"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
                >
                  Send besked
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <h2 className="text-2xl mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
              Find vej til os
            </h2>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                [Kort over Boghandelvej 42, 4873 Vesterborg]
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3A5A4A] text-white py-12 text-center">
        <p style={{ color: '#E5D5C3' }}>© 2024 Vesterborg Boghandel</p>
      </footer>
    </div>
  );
}
