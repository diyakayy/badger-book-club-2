export default function Marquee() {
  const text = 'NEW READS AHEAD';
  
  return (
    <div className="relative overflow-hidden bg-cream border-y border-charcoal/10 py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        <div className="flex items-center">
          <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-8">
            {text}
          </span>
          <svg className="w-12 h-12 md:w-16 md:h-16 mx-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        {/* Second set (for seamless loop) */}
        <div className="flex items-center">
          <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-8">
            {text}
          </span>
          <svg className="w-12 h-12 md:w-16 md:h-16 mx-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
