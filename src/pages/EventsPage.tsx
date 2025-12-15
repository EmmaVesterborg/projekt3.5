import { BookstoreHeader } from '../components/BookstoreHeader';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

export default function EventsPage() {
  const events = [
    { date: '15 DEC 2024', time: '18:00-20:00', title: 'Forfattermøde: Erik Hansen', description: 'Mød forfatteren bag bestselleren "Stilhedens Sprog"', spots: 12, location: 'Boghandlen' },
    { date: '20 DEC 2024', time: '19:00-21:00', title: 'Julens bedste bøger', description: 'Få inspiration til julegaverne', spots: 25, location: 'Bogcaféen' },
    { date: '5 JAN 2025', time: '17:30-19:30', title: 'Bogklub: Nordisk Noir', description: 'Diskussion af månedens bog', spots: 8, location: 'Læsehjørnet' },
    { date: '12 JAN 2025', time: '18:00-20:00', title: 'Poesiaften', description: 'Oplæsning af nordisk poesi', spots: 20, location: 'Bogcaféen' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />
      
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
            Kommende Events
          </h1>
          <p className="text-lg mb-12" style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
            Bliv en del af vores litterære fællesskab
          </p>

          <div className="grid gap-6">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 text-center p-4 rounded-lg bg-[#3A5A4A] text-white w-24">
                    <div className="text-2xl font-semibold">{event.date.split(' ')[0]}</div>
                    <div className="text-sm">{event.date.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: '#3A5A4A' }}>
                      {event.title}
                    </h3>
                    <p className="mb-4" style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}>
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.spots} ledige pladser</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-[#3A5A4A] text-white rounded-lg hover:bg-[#2d4539] transition-all">
                      Tilmeld dig
                    </button>
                  </div>
                </div>
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
