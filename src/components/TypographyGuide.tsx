export function TypographyGuide() {
  return (
    <div className="space-y-12">
      {/* Font Recommendation */}
      <section>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="mb-6">Anbefalet Font-kombination</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Heading Font */}
            <div className="border-l-4 border-[#3A5A4A] pl-6">
              <h3 className="mb-2 text-[#3A5A4A]">Overskrifter</h3>
              <p className="text-4xl mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
                Inter
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Moderne geometrisk sans-serif designet specifikt til skærme. 
                Ekstremt læsbar med klare former og nordisk æstetik.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500">Vægte:</span> 400, 500, 600</p>
                <p><span className="text-gray-500">Stil:</span> Geometrisk, moderne, neutral</p>
                <p><span className="text-gray-500">Perfekt til:</span> Overskrifter, navigation, knapper</p>
              </div>
            </div>

            {/* Body Font */}
            <div className="border-l-4 border-[#C4A47C] pl-6">
              <h3 className="mb-2 text-[#3A5A4A]">Brødtekst</h3>
              <p className="text-4xl mb-2" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                Georgia
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Klassisk serif-font designet til skærmlæsning. Giver varme, 
                troværdighed og er perfekt til længere tekstpassager.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500">Vægte:</span> 400, 700</p>
                <p><span className="text-gray-500">Stil:</span> Klassisk, læsbar, varm</p>
                <p><span className="text-gray-500">Perfekt til:</span> Bogbeskrivelser, artikler, citater</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F3F0] p-6 rounded-lg">
            <h4 className="mb-3 text-[#3A5A4A]">Hvorfor passer de sammen?</h4>
            <ul className="space-y-2 text-[#2B2B2B]">
              <li className="flex gap-2">
                <span className="text-[#3A5A4A]">✓</span>
                <span><strong>Kontrast:</strong> Sans-serif overskrifter skaber klarhed, serif brødtekst tilføjer varme og læsbarhed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#3A5A4A]">✓</span>
                <span><strong>Nordisk æstetik:</strong> Inter's geometriske former matcher skandinavisk minimalisme</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#3A5A4A]">✓</span>
                <span><strong>Boghandel-identitet:</strong> Georgia's klassiske serif fremkalder litteratur og tradition</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#3A5A4A]">✓</span>
                <span><strong>Skærm-optimeret:</strong> Begge fonts er specielt designet til digital læsning</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#3A5A4A]">✓</span>
                <span><strong>Performance:</strong> System fonts betyder hurtigere load-tid og ingen ekstra downloads</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Typography Hierarchy */}
      <section>
        <h2 className="mb-6">Typografisk Hierarki</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-8">
          {/* H1 */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">H1</span>
              <h1 style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#3A5A4A',
                letterSpacing: '-0.02em'
              }}>
                Velkommen til Vesterborg Boghandel
              </h1>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Inter • 40px / 2.5rem • 600 • -0.02em • line-height: 1.2
            </div>
          </div>

          {/* H2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">H2</span>
              <h2 style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '2rem',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#3A5A4A',
                letterSpacing: '-0.01em'
              }}>
                Månedens anbefalinger
              </h2>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Inter • 32px / 2rem • 600 • -0.01em • line-height: 1.3
            </div>
          </div>

          {/* H3 */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">H3</span>
              <h3 style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 500,
                lineHeight: 1.4,
                color: '#3A5A4A',
                letterSpacing: '0'
              }}>
                Ny skønlitteratur
              </h3>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Inter • 24px / 1.5rem • 500 • 0 • line-height: 1.4
            </div>
          </div>

          {/* H4 */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">H4</span>
              <h4 style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.4,
                color: '#2B2B2B',
                letterSpacing: '0'
              }}>
                Forfatter spotlight
              </h4>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Inter • 20px / 1.25rem • 500 • 0 • line-height: 1.4
            </div>
          </div>

          {/* Body */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">Body</span>
              <p style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#2B2B2B',
                letterSpacing: '0'
              }}>
                I hjertet af Vesterborg finder du en boghandel, der har tjent lokalsamfundet siden 1952. 
                Her handler det ikke kun om bøger – det handler om oplevelser, samtaler og kærlighed til litteratur. 
                Vores omhyggeligt kuraterede udvalg spænder fra klassisk skandinavisk litteratur til moderne bestsellers.
              </p>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Georgia • 16px / 1rem • 400 • 0 • line-height: 1.7
            </div>
          </div>

          {/* Small / Caption */}
          <div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-sm text-gray-500 w-16">Small</span>
              <p style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#6B6B6B',
                letterSpacing: '0'
              }}>
                Metadata, billedtekster og mindre information
              </p>
            </div>
            <div className="ml-20 text-sm text-gray-500 font-mono">
              Inter • 14px / 0.875rem • 400 • 0 • line-height: 1.5
            </div>
          </div>
        </div>
      </section>

      {/* CSS Implementation */}
      <section>
        <h2 className="mb-6">CSS Font Stacks</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4">Tilføj til /styles/globals.css</h3>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
{`:root {
  /* Font Families */
  --font-heading: Inter, -apple-system, BlinkMacSystemFont, 
                  "Segoe UI", Roboto, sans-serif;
  --font-body: Georgia, "Times New Roman", serif;
  --font-ui: Inter, -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, sans-serif;

  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 2rem;        /* 32px */
  --text-4xl: 2.5rem;      /* 40px */
  --text-5xl: 3rem;        /* 48px */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.3;
  --leading-normal: 1.4;
  --leading-relaxed: 1.6;
  --leading-loose: 1.7;

  /* Letter Spacing */
  --tracking-tighter: -0.02em;
  --tracking-tight: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.01em;
}

/* Typography Styles */
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tighter);
  color: var(--vb-primary, #3A5A4A);
}

h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--vb-primary, #3A5A4A);
}

h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
  color: var(--vb-primary, #3A5A4A);
}

h4 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--vb-charcoal, #2B2B2B);
}

p, body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-loose);
  color: var(--vb-charcoal, #2B2B2B);
}

small, .text-small {
  font-family: var(--font-ui);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--vb-stone, #6B6B6B);
}

button, .button {
  font-family: var(--font-ui);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-normal);
}`}
          </pre>
        </div>
      </section>

      {/* Alternative Combination */}
      <section>
        <h2 className="mb-6">Alternative Font-kombinationer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-[#3A5A4A]">Option 1: System Fonts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Overskrifter:</p>
                <p className="text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: 600 }}>
                  San Francisco / Segoe UI
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Brødtekst:</p>
                <p className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  Georgia
                </p>
              </div>
              <p className="text-sm text-gray-600">
                100% system fonts - ingen downloads, øjeblikkelig visning
              </p>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-[#3A5A4A]">Option 2: Google Fonts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Overskrifter:</p>
                <p className="text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Inter
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Brødtekst:</p>
                <p className="text-lg" style={{ fontFamily: 'Merriweather, serif' }}>
                  Merriweather
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Premium serif til brødtekst - ekstra læsbar og elegant
              </p>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-[#3A5A4A]">Option 3: Monokrom Sans</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Overskrifter:</p>
                <p className="text-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Inter
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Brødtekst:</p>
                <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  Inter (lighter weight)
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Ultra-minimalistisk - én font-familie, forskellige vægte
              </p>
            </div>
          </div>

          {/* Option 4 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4 text-[#3A5A4A]">Option 4: Klassisk</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Overskrifter:</p>
                <p className="text-2xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 700 }}>
                  Georgia Bold
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Brødtekst:</p>
                <p className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  Georgia Regular
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Traditionel boghandel-æstetik - tidløs og litterær
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Fonts Import */}
      <section>
        <h2 className="mb-6">Google Fonts Integration (valgfrit)</h2>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="mb-4 text-gray-600">
            Hvis du vil bruge Google Fonts i stedet for system fonts, tilføj dette i <code className="px-2 py-1 bg-gray-100 rounded text-sm">{'<head>'}</code>:
          </p>
          
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm mb-4">
{`<!-- Inter + Merriweather -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">`}
          </pre>

          <p className="text-sm text-gray-600">
            Derefter opdater CSS variabler til at bruge disse fonts først i stack&apos;en.
          </p>
        </div>
      </section>
    </div>
  );
}
