import { BookstoreHeader } from '../components/BookstoreHeader';
import { OpenBookIcon, BookStackIcon, CoffeeIcon } from '../components/BookstoreIcons';
import { Users, Heart, Award, Clock } from 'lucide-react';
import { Link } from 'react-router';

export default function AboutPage() {
  const primaryColor = '#3A5A4A';

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <BookstoreHeader />

      {/* Hero */}
      <section 
        className="relative py-16 sm:py-24 text-white"
        style={{ background: 'linear-gradient(135deg, #3A5A4A 0%, #2d4539 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 
            className="text-3xl sm:text-5xl mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}
          >
            Vores Historie
          </h1>
          <p 
            className="text-lg sm:text-xl"
            style={{ fontFamily: 'Georgia, serif', color: '#E5D5C3' }}
          >
            Siden 1952 har Vesterborg Boghandel været hjemsted for litteraturelskere 
            i hele Danmark. Vores passion for bøger og læseoplevelser driver os hver dag.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose max-w-none">
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'Georgia, serif', color: '#2B2B2B' }}
            >
              Alt begyndte i 1952, da grundlæggeren Henrik Vestergaard åbnede en lille boghandel 
              i hjertet af Vesterborg. Med en passion for nordisk litteratur og en drøm om at skabe 
              et rum, hvor mennesker kunne mødes omkring deres kærlighed til bøger, lagde han fundamentet 
              for det, der i dag er blevet en institution i det danske bogmiljø.
            </p>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'Georgia, serif', color: '#2B2B2B' }}
            >
              Gennem årene har vi udviklet os fra en mindre lokal boghandel til en moderne 
              destination, der kombinerer traditionel boghandelskultur med moderne faciliteter. 
              I 2010 tilføjede vi vores hyggelige bogcafé, som hurtigt blev et yndet mødested 
              for byens beboere og besøgende.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ fontFamily: 'Georgia, serif', color: '#2B2B2B' }}
            >
              I dag drives boghandlen af tredje generation af familien Vestergaard, og vi er 
              stadig lige så passionerede omkring litteratur og personlig kundeservice, som vi 
              var for 72 år siden. Vi er stolte over at være en del af lokalsamfundet og fortsætter 
              med at skabe magiske litterære oplevelser for alle vores kunder.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 
            className="text-3xl text-center mb-12"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: primaryColor }}
          >
            Vores Værdier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart size={32} />, title: 'Passion', text: 'Vi elsker bøger og deler gerne vores begejstring med dig' },
              { icon: <Users size={32} />, title: 'Fællesskab', text: 'Vi skaber rum for møder og samtaler om litteratur' },
              { icon: <Award size={32} />, title: 'Kvalitet', text: 'Vi kurerer nøje og vælger kun de bedste titler' },
              { icon: <Clock size={32} />, title: 'Tradition', text: '72 års erfaring og engagement i bogbranchen' }
            ].map((value, i) => (
              <div key={i} className="text-center bg-white rounded-xl p-8">
                <div className="flex justify-center mb-4 text-[#3A5A4A]">
                  {value.icon}
                </div>
                <h3 
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: primaryColor }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Georgia, serif', color: '#6B6B6B' }}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #C4A47C 0%, #b59469 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 
            className="text-3xl mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}
          >
            Besøg os i dag
          </h2>
          <p 
            className="text-lg mb-8"
            style={{ fontFamily: 'Georgia, serif', color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Kom forbi og oplev vores passion for litteratur. Vi glæder os til at møde dig!
          </p>
          <Link to="/kontakt">
            <button
              className="px-8 py-4 bg-white text-[#3A5A4A] rounded-lg hover:bg-gray-100 transition-all"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
            >
              Find vej til os
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A5A4A] text-white py-12 text-center">
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#E5D5C3' }}>
          © 2024 Vesterborg Boghandel
        </p>
      </footer>
    </div>
  );
}
