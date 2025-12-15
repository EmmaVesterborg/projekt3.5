interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// Ikon 1: Åben Bog - Symboliserer læsning og fordybelse
export function OpenBookIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6.5C10.5 5 8.5 4 6 4C4.5 4 3 4.5 2 5.5V18.5C3 17.5 4.5 17 6 17C8.5 17 10.5 18 12 19.5" />
      <path d="M12 6.5C13.5 5 15.5 4 18 4C19.5 4 21 4.5 22 5.5V18.5C21 17.5 19.5 17 18 17C15.5 17 13.5 18 12 19.5" />
      <path d="M12 6.5V19.5" />
    </svg>
  );
}

// Ikon 2: Bogmærke - Repræsenterer kurering og favoritter
export function BookmarkIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V21L12 17L4 21V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3Z" />
    </svg>
  );
}

// Ikon 3: Kaffekopp - Symboliserer hygge og læseoplevelse
export function CoffeeIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" />
      <path d="M2 8H18V17C18 17.7956 17.6839 18.5587 17.1213 19.1213C16.5587 19.6839 15.7956 20 15 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V8Z" />
      <path d="M6 3V5" />
      <path d="M10 3V5" />
      <path d="M14 3V5" />
    </svg>
  );
}

// Ekstra ikoner (bonus)

// Ikon 4: Bog Stack - Repræsenterer udvalg og kollektion
export function BookStackIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
      <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" />
      <path d="M8 7H16" />
      <path d="M8 11H16" />
    </svg>
  );
}

// Ikon 5: Læsebriller - Symboliserer viden og fordybelse
export function GlassesIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M10 15H14" />
      <path d="M2.5 13L2 9" />
      <path d="M22 9L21.5 13" />
    </svg>
  );
}

// Ikon 6: Pen/Fjer - Symboliserer forfatterskab og kreativitet
export function QuillIcon({ size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2C17 2 13 4 10 7C10 7 9 8 9 9L3 15L5 17L7 19L13 13C14 13 15 12 15 12C18 9 20 5 20 1" />
      <path d="M14.5 7.5L16.5 9.5" />
      <path d="M3 22C3 22 7 22 9 20" />
    </svg>
  );
}

// Demonstrationskomponent
export function IconShowcase() {
  const primaryColor = '#3A5A4A';
  const secondaryColor = '#C4A47C';
  const terracottaColor = '#A66B56';

  return (
    <div className="space-y-8">
      {/* Main 3 Icons */}
      <section>
        <h3 className="mb-6 text-xl" style={{ color: primaryColor }}>
          Primære Ikoner
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <OpenBookIcon size={80} color={primaryColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Åben Bog
            </h4>
            <p className="text-center text-sm text-gray-600">
              Symboliserer læsning, fordybelse og litteratur
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <BookmarkIcon size={80} color={secondaryColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Bogmærke
            </h4>
            <p className="text-center text-sm text-gray-600">
              Repræsenterer kurering, favoritter og anbefalinger
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <CoffeeIcon size={80} color={terracottaColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Kaffe
            </h4>
            <p className="text-center text-sm text-gray-600">
              Symboliserer hygge, ro og læseoplevelse
            </p>
          </div>
        </div>
      </section>

      {/* Bonus Icons */}
      <section>
        <h3 className="mb-6 text-xl" style={{ color: primaryColor }}>
          Supplerende Ikoner
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <BookStackIcon size={80} color={primaryColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Bog Stack
            </h4>
            <p className="text-center text-sm text-gray-600">
              Udvalg og bogkollektion
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <GlassesIcon size={80} color={secondaryColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Læsebriller
            </h4>
            <p className="text-center text-sm text-gray-600">
              Viden og fordybelse
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-center h-32 mb-4">
              <QuillIcon size={80} color={terracottaColor} strokeWidth={1.5} />
            </div>
            <h4 className="text-center mb-2" style={{ color: primaryColor }}>
              Fjerpen
            </h4>
            <p className="text-center text-sm text-gray-600">
              Forfatterskab og kreativitet
            </p>
          </div>
        </div>
      </section>

      {/* Size Variations */}
      <section>
        <h3 className="mb-6 text-xl" style={{ color: primaryColor }}>
          Størrelser
        </h3>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={16} color={primaryColor} />
              <span className="text-xs text-gray-500">16px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={24} color={primaryColor} />
              <span className="text-xs text-gray-500">24px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={32} color={primaryColor} />
              <span className="text-xs text-gray-500">32px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={48} color={primaryColor} />
              <span className="text-xs text-gray-500">48px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={64} color={primaryColor} />
              <span className="text-xs text-gray-500">64px</span>
            </div>
          </div>
        </div>
      </section>

      {/* Color Variations */}
      <section>
        <h3 className="mb-6 text-xl" style={{ color: primaryColor }}>
          Farve-variationer
        </h3>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <OpenBookIcon size={48} color={primaryColor} />
              <span className="text-xs text-gray-500">Skovgrøn</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookmarkIcon size={48} color={secondaryColor} />
              <span className="text-xs text-gray-500">Sandsten</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CoffeeIcon size={48} color={terracottaColor} />
              <span className="text-xs text-gray-500">Terracotta</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookStackIcon size={48} color="#6B8E9E" />
              <span className="text-xs text-gray-500">Støvet blå</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GlassesIcon size={48} color="#2B2B2B" />
              <span className="text-xs text-gray-500">Kul</span>
            </div>
          </div>
        </div>
      </section>

      {/* On Different Backgrounds */}
      <section>
        <h3 className="mb-6 text-xl" style={{ color: primaryColor }}>
          På Forskellige Baggrunde
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center">
            <div className="flex gap-4">
              <OpenBookIcon size={40} color={primaryColor} />
              <BookmarkIcon size={40} color={secondaryColor} />
              <CoffeeIcon size={40} color={terracottaColor} />
            </div>
          </div>

          <div className="rounded-lg p-8 flex items-center justify-center" style={{ backgroundColor: '#F5F3F0' }}>
            <div className="flex gap-4">
              <OpenBookIcon size={40} color={primaryColor} />
              <BookmarkIcon size={40} color={secondaryColor} />
              <CoffeeIcon size={40} color={terracottaColor} />
            </div>
          </div>

          <div className="rounded-lg p-8 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
            <div className="flex gap-4">
              <OpenBookIcon size={40} color="white" />
              <BookmarkIcon size={40} color="white" />
              <CoffeeIcon size={40} color="white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
