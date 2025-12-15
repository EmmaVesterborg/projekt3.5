interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  description: string;
  usage: string;
}

export function ColorCard({ name, hex, rgb, description, usage }: ColorCardProps) {
  // Calculate if text should be light or dark based on background
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const getLuminance = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const { r, g, b } = rgb;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const luminance = getLuminance(hex);
  const textColor = luminance > 0.5 ? '#1A1A1A' : '#FFFFFF';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="h-40 flex items-center justify-center relative"
        style={{ backgroundColor: hex }}
      >
        <div className="text-center" style={{ color: textColor }}>
          <div className="text-2xl mb-1" style={{ fontWeight: 500 }}>{name}</div>
          <div className="text-sm opacity-90">{hex}</div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">RGB</p>
          <p className="text-sm font-mono">{rgb}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Beskrivelse</p>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Anvendelse</p>
          <p className="text-sm text-gray-600">{usage}</p>
        </div>
      </div>
    </div>
  );
}

interface ColorPaletteData {
  primary: { name: string; hex: string; rgb: string; description: string; usage: string };
  secondary: { name: string; hex: string; rgb: string; description: string; usage: string };
  accent: Array<{ name: string; hex: string; rgb: string; description: string; usage: string }>;
  neutral: Array<{ name: string; hex: string; rgb: string; description: string; usage: string }>;
}

export const colorPalette: ColorPaletteData = {
  primary: {
    name: "Skovgrøn",
    hex: "#3A5A4A",
    rgb: "58, 90, 74",
    description: "Rolig skovgrøn - symboliserer viden, natur og fordybelse",
    usage: "Primær brandfarve, overskrifter, knapper, links"
  },
  secondary: {
    name: "Varm Sandsten",
    hex: "#C4A47C",
    rgb: "196, 164, 124",
    description: "Varm jordfarve med guldskær - tilføjer varme og elegance",
    usage: "Accenter, ikoner, dekorative elementer, hover-states"
  },
  accent: [
    {
      name: "Dyb Terracotta",
      hex: "#A66B56",
      rgb: "166, 107, 86",
      description: "Mættet jordtone - tilføjer dybde og karakter",
      usage: "Call-to-action, fremhævninger, special offers"
    },
    {
      name: "Støvet Blå",
      hex: "#6B8E9E",
      rgb: "107, 142, 158",
      description: "Rolig nordisk blåtone - skaber balance og ro",
      usage: "Informationsbokse, citater, baggrunde"
    },
    {
      name: "Mos Grøn",
      hex: "#8B9B7E",
      rgb: "139, 155, 126",
      description: "Blød mosgrøn - naturlig og beroligende",
      usage: "Sekundære knapper, tags, kategorier"
    },
    {
      name: "Varm Beige",
      hex: "#E5D5C3",
      rgb: "229, 213, 195",
      description: "Lys naturfarve - åben og indbydende",
      usage: "Baggrunde, cards, sektioner"
    }
  ],
  neutral: [
    {
      name: "Kul",
      hex: "#2B2B2B",
      rgb: "43, 43, 43",
      description: "Dyb mørkegrå - læsbar og professionel",
      usage: "Brødtekst, primær tekst"
    },
    {
      name: "Sten",
      hex: "#6B6B6B",
      rgb: "107, 107, 107",
      description: "Medium grå - balanceret neutral",
      usage: "Sekundær tekst, hjælpetekst"
    },
    {
      name: "Lys Linned",
      hex: "#F5F3F0",
      rgb: "245, 243, 240",
      description: "Varm off-white - blød og behagelig",
      usage: "Primær baggrund, sections"
    },
    {
      name: "Ren Hvid",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      description: "Ren hvid til kontrast",
      usage: "Cards, modals, primære elementer"
    }
  ]
};
