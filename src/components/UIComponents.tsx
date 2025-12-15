import { OpenBookIcon, BookmarkIcon, CoffeeIcon } from './BookstoreIcons';

// CTA Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  onClick,
  fullWidth = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200 cursor-pointer border-2";
  
  const variants = {
    primary: "bg-[#3A5A4A] border-[#3A5A4A] text-white hover:bg-[#2d4539] hover:border-[#2d4539] active:scale-95",
    secondary: "bg-[#C4A47C] border-[#C4A47C] text-white hover:bg-[#b59469] hover:border-[#b59469] active:scale-95",
    outline: "bg-transparent border-[#3A5A4A] text-[#3A5A4A] hover:bg-[#3A5A4A] hover:text-white active:scale-95",
    ghost: "bg-transparent border-transparent text-[#3A5A4A] hover:bg-[#F5F3F0] active:scale-95"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass}`}
      onClick={onClick}
      style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}

// Product Card Component
interface ProductCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  description?: string;
  badge?: string;
  onAddToCart?: () => void;
  onSave?: () => void;
}

export function ProductCard({
  image,
  title,
  author,
  price,
  description,
  badge,
  onAddToCart,
  onSave
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {badge && (
          <div 
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white"
            style={{ 
              backgroundColor: '#A66B56',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500
            }}
          >
            {badge}
          </div>
        )}
        <button
          onClick={onSave}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          aria-label="Gem til favoritter"
        >
          <BookmarkIcon size={20} color="#3A5A4A" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 
          className="mb-2 line-clamp-2"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.125rem',
            fontWeight: 500,
            color: '#3A5A4A',
            lineHeight: 1.3
          }}
        >
          {title}
        </h3>
        
        <p 
          className="mb-3 text-sm"
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#6B6B6B'
          }}
        >
          Af {author}
        </p>
        
        {description && (
          <p 
            className="mb-4 text-sm line-clamp-3 flex-grow"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#2B2B2B',
              lineHeight: 1.6
            }}
          >
            {description}
          </p>
        )}
        
        <div className="mt-auto">
          <p 
            className="mb-3"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#3A5A4A'
            }}
          >
            {price}
          </p>
          
          <CTAButton 
            variant="primary" 
            size="medium" 
            fullWidth
            onClick={onAddToCart}
          >
            Læg i kurv
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

// Compact Product Card (Smaller version)
export function CompactProductCard({
  image,
  title,
  author,
  price,
  onAddToCart
}: Omit<ProductCardProps, 'description' | 'badge' | 'onSave'>) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex gap-4 p-4">
      {/* Image */}
      <div className="relative w-24 h-32 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col justify-between min-w-0">
        <div>
          <h4 
            className="mb-1 line-clamp-2"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#3A5A4A',
              lineHeight: 1.3
            }}
          >
            {title}
          </h4>
          
          <p 
            className="mb-2 text-xs"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#6B6B6B'
            }}
          >
            {author}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <p 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#3A5A4A'
            }}
          >
            {price}
          </p>
          
          <button
            onClick={onAddToCart}
            className="px-4 py-2 rounded-md text-sm transition-all duration-200 active:scale-95"
            style={{
              backgroundColor: '#3A5A4A',
              color: 'white',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Køb
          </button>
        </div>
      </div>
    </div>
  );
}

// Demo Component
export function UIComponentsDemo() {
  return (
    <div className="space-y-12">
      {/* Buttons Section */}
      <section>
        <h2 className="mb-6" style={{ color: '#3A5A4A' }}>CTA Knapper</h2>
        
        <div className="space-y-8">
          {/* Button Variants */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Varianter</h3>
            <div className="flex flex-wrap gap-4">
              <CTAButton variant="primary">Primary Button</CTAButton>
              <CTAButton variant="secondary">Secondary Button</CTAButton>
              <CTAButton variant="outline">Outline Button</CTAButton>
              <CTAButton variant="ghost">Ghost Button</CTAButton>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Størrelser</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton variant="primary" size="small">Small</CTAButton>
              <CTAButton variant="primary" size="medium">Medium</CTAButton>
              <CTAButton variant="primary" size="large">Large</CTAButton>
            </div>
          </div>

          {/* Buttons with Icons */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Med Ikoner</h3>
            <div className="flex flex-wrap gap-4">
              <CTAButton 
                variant="primary" 
                icon={<OpenBookIcon size={20} color="white" />}
              >
                Se katalog
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                icon={<BookmarkIcon size={20} color="white" />}
              >
                Favoritter
              </CTAButton>
              <CTAButton 
                variant="outline" 
                icon={<CoffeeIcon size={20} color="#3A5A4A" />}
              >
                Besøg café
              </CTAButton>
            </div>
          </div>

          {/* Full Width */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Fuld bredde</h3>
            <CTAButton variant="primary" fullWidth>Full Width Button</CTAButton>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section>
        <h2 className="mb-6" style={{ color: '#3A5A4A' }}>Product Cards</h2>
        
        <div className="space-y-8">
          {/* Regular Cards Grid */}
          <div>
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Standard Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProductCard
                image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
                title="Stilhedens Sprog"
                author="Erik Hansen"
                price="249 kr"
                description="En poetisk meditation over naturens skønhed og menneskets søgen efter mening i en moderne verden."
                badge="Nyhed"
                onAddToCart={() => console.log('Add to cart')}
                onSave={() => console.log('Save')}
              />
              
              <ProductCard
                image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
                title="Nordisk Noir"
                author="Anna Bergström"
                price="299 kr"
                description="En gripende thriller der udforsker de mørke hjørner af det skandinaviske samfund."
                onAddToCart={() => console.log('Add to cart')}
                onSave={() => console.log('Save')}
              />
              
              <ProductCard
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
                title="Københavnske Fortællinger"
                author="Marie Andersen"
                price="199 kr"
                description="Sammenvævede historier fra byens gader, fortalt med varme og humor."
                badge="Bestseller"
                onAddToCart={() => console.log('Add to cart')}
                onSave={() => console.log('Save')}
              />
            </div>
          </div>

          {/* Compact Cards */}
          <div>
            <h3 className="mb-4 text-lg" style={{ color: '#3A5A4A' }}>Kompakt Layout</h3>
            <div className="space-y-4">
              <CompactProductCard
                image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop"
                title="Stilhedens Sprog"
                author="Erik Hansen"
                price="249 kr"
                onAddToCart={() => console.log('Add to cart')}
              />
              
              <CompactProductCard
                image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop"
                title="Nordisk Noir: Mørkets Hemmeligheder"
                author="Anna Bergström"
                price="299 kr"
                onAddToCart={() => console.log('Add to cart')}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
