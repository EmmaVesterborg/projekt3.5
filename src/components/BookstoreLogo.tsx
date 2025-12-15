interface BookstoreLogoProps {
  variant?: 'color' | 'black' | 'white';
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export function BookstoreLogo({ 
  variant = 'color', 
  size = 'medium',
  showText = true 
}: BookstoreLogoProps) {
  const sizes = {
    small: { icon: 32, fontSize: 14, spacing: 8 },
    medium: { icon: 48, fontSize: 20, spacing: 12 },
    large: { icon: 64, fontSize: 28, spacing: 16 }
  };
  
  const currentSize = sizes[size];
  
  const colors = {
    color: {
      primary: '#2C5F4F',
      secondary: '#D4A574',
      text: '#1A1A1A'
    },
    black: {
      primary: '#000000',
      secondary: '#000000',
      text: '#000000'
    },
    white: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      text: '#FFFFFF'
    }
  };
  
  const currentColors = colors[variant];
  
  return (
    <div className="flex items-center" style={{ gap: `${currentSize.spacing}px` }}>
      {/* Book Symbol */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 100 100" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Open book pages */}
        <path 
          d="M50 25 L50 80 L20 75 L20 20 Z" 
          fill={currentColors.primary}
          opacity="0.9"
        />
        <path 
          d="M50 25 L50 80 L80 75 L80 20 Z" 
          fill={currentColors.secondary}
          opacity="0.9"
        />
        
        {/* Book spine/binding */}
        <rect 
          x="48" 
          y="25" 
          width="4" 
          height="55" 
          fill={currentColors.text}
        />
        
        {/* Subtle page lines on left page */}
        <line x1="25" y1="35" x2="45" y2="35" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
        <line x1="25" y1="42" x2="45" y2="42" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
        <line x1="25" y1="49" x2="45" y2="49" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
        
        {/* Subtle page lines on right page */}
        <line x1="55" y1="35" x2="75" y2="35" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
        <line x1="55" y1="42" x2="75" y2="42" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
        <line x1="55" y1="49" x2="75" y2="49" stroke={currentColors.text} strokeWidth="0.5" opacity="0.3"/>
      </svg>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col" style={{ gap: '2px' }}>
          <span 
            style={{ 
              color: currentColors.text,
              fontSize: `${currentSize.fontSize}px`,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}
          >
            VESTERBORG
          </span>
          <span 
            style={{ 
              color: currentColors.text,
              fontSize: `${currentSize.fontSize * 0.6}px`,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              lineHeight: 1.2
            }}
          >
            BOGHANDEL
          </span>
        </div>
      )}
    </div>
  );
}
