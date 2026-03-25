"use client";

import dynamic from 'next/dynamic';
import { Loader2, Navigation, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamically import Leaflet component with SSR disabled
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] w-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-[var(--color-neon-blue)]">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest animate-pulse">Initializing Map...</span>
      </div>
    </div>
  ),
});

interface LocationMapProps {
  lat?: number;
  lng?: number;
  city?: string;
  country?: string;
  region?: string;
  postal?: string;
  country_code?: string;
}

export function LocationMap({ lat, lng, city, country, region, postal, country_code }: LocationMapProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[var(--color-cyber-surface)] backdrop-blur-xl border border-[var(--color-cyber-border)] rounded-xl overflow-hidden group hover:border-[var(--color-neon-blue-dim)] transition-colors flex flex-col relative shadow-2xl h-full"
    >
      <div className="p-5 border-b border-[var(--color-cyber-border)] bg-[rgba(0,0,0,0.4)] relative z-10 w-full">
        <h3 className="text-sm font-mono tracking-widest text-[var(--color-neon-blue)] flex items-center gap-3">
          <span className="w-2 h-2 bg-[var(--color-neon-blue)] flex shadow-[0_0_8px_var(--color-neon-blue)] rounded-sm"></span>
          GEOLOCATION DETAILS
        </h3>
      </div>
      
      <div className="flex-1 w-full relative">
        {lat !== undefined && lng !== undefined ? (
          <div className="h-48 md:h-64 xl:h-72 w-full">
            <MapComponent lat={lat} lng={lng} city={city} country={country} />
          </div>
        ) : (
           <div className="h-48 md:h-64 xl:h-72 w-full bg-[#09090b] flex flex-col items-center justify-center font-mono">
              <span className="text-[var(--color-cyber-text-dim)] text-xs uppercase tracking-widest mb-2 border border-[var(--color-cyber-border)] px-4 py-1">SIGNAL_LOST</span>
              <span className="text-[var(--color-cyber-text-dim)] opacity-50 text-[10px]">COORDINATES UNAVAILABLE</span>
           </div>
        )}
      </div>

      <div className="p-5 bg-[rgba(0,0,0,0.3)] grid grid-cols-2 gap-4 text-xs font-mono">
        <div>
          <span className="text-[var(--color-cyber-text-dim)] block mb-1 uppercase tracking-widest text-[10px]">City</span>
          <span className="text-[var(--color-cyber-text)] flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-neon-blue)]"/> {city || "N/A"}</span>
        </div>
        <div>
          <span className="text-[var(--color-cyber-text-dim)] block mb-1 uppercase tracking-widest text-[10px]">Region / State</span>
          <span className="text-[var(--color-cyber-text)]">{region || "N/A"}</span>
        </div>
        <div>
           <span className="text-[var(--color-cyber-text-dim)] block mb-1 uppercase tracking-widest text-[10px]">Postal Code</span>
           <span className="text-[var(--color-cyber-text)]">{postal || "N/A"}</span>
        </div>
        <div>
           <span className="text-[var(--color-cyber-text-dim)] block mb-1 uppercase tracking-widest text-[10px]">Country (Code)</span>
           <span className="text-[var(--color-cyber-text)]">{country || "N/A"} {country_code ? `(${country_code})` : ""}</span>
        </div>
        <div className="col-span-2 mt-2 pt-2 border-t border-[var(--color-cyber-border)]">
           <span className="text-[var(--color-cyber-text-dim)] block mb-1 uppercase tracking-widest text-[10px]">Coordinates [ Lat, Lng ]</span>
           <span className="text-[var(--color-neon-blue)] flex items-center gap-1"><Navigation className="w-3 h-3"/> {lat !== undefined && lng !== undefined ? `[ ${lat.toFixed(4)}, ${lng.toFixed(4)} ]` : "N/A"}</span>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-neon-blue)] m-2 z-20 pointer-events-none opacity-50"></div>
    </motion.div>
  );
}
