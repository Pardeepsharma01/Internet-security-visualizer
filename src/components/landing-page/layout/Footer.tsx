// "use client";

// export default function Footer() {
//   return (
//     <footer className="relative border-t border-white/5 py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
//           {/* Logo + Name */}
//           <div className="flex items-center gap-3">
//             <div
//               className="w-8 h-8 rounded-lg border border-cyan-400/40 flex items-center justify-center"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #00E5FF15, #3B82F615)",
//               }}
//             >
//               <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
//                 <path
//                   d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
//                   stroke="#00E5FF"
//                   strokeWidth="1.5"
//                 />
//                 <circle
//                   cx="12"
//                   cy="12"
//                   r="2.5"
//                   stroke="#00E5FF"
//                   strokeWidth="1.5"
//                 />
//               </svg>
//             </div>

//             <div>
//               <div
//                 className="text-sm font-bold text-white"
//                 style={{ fontFamily: "'Orbitron', monospace" }}
//               >
//                 Internet Security Visualizer
//               </div>

//               <div
//                 className="text-xs text-gray-500"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 Cybersecurity dashboard powered by Shodan intelligence.
//               </div>
//             </div>
//           </div>

//           {/* Developer */}
//           <div className="text-center md:text-right">
//             <div
//               className="text-xs text-gray-500 mb-1"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Developed by
//             </div>

//             <div
//               className="text-sm font-semibold"
//               style={{
//                 color: "#00E5FF",
//                 fontFamily: "'Orbitron', monospace",
//               }}
//             >
//               Pardeep Sharma
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
//           <p
//             className="text-xs text-gray-600"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             © {new Date().getFullYear()} Internet Security Visualizer.
//             All rights reserved.
//           </p>

//           <div
//             className="flex items-center gap-1 text-xs text-gray-600"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span style={{ color: "#10B981" }}>
//               All systems operational
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div
              className="w-8 h-8 rounded-lg border border-cyan-400/40 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #00E5FF15, #3B82F615)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path
                  d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  stroke="#00E5FF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div>
              <div
                className="text-sm font-bold text-white"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Internet Security Visualizer
              </div>

              <div
                className="text-xs text-gray-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cybersecurity dashboard powered by Shodan intelligence.
              </div>
            </div>
          </div>

          {/* Developer */}
          <div className="text-center md:text-right">
            <div className="text-xs text-gray-500 mb-1">
              Developed by
            </div>
            <div
              className="text-sm font-semibold"
              style={{
                color: "#00E5FF",
                fontFamily: "'Orbitron', monospace",
              }}
            >
              Pardeep Sharma
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-4 text-center">
          
          {/* Disclaimer */}
          <p className="text-xs text-gray-500 max-w-2xl">
            This tool uses publicly available data from Shodan and is intended for
            educational and security research purposes only. Please use responsibly.
          </p>

          {/* Copyright + Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Internet Security Visualizer. All rights reserved.
            </p>

            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ color: "#10B981" }}>
                All systems operational
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}