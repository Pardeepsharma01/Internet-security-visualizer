"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      {/* Navbar (fixed top) */}
      <div className="shrink-0">
        <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />
          {children}
        </main>

      </div>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { Navbar } from "./Navbar";
// import { Sidebar } from "./Sidebar";

// export function ClientShell({ children }: { children: React.ReactNode }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />
//       <div className="flex flex-1 overflow-hidden relative">
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//         <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />
//           {children}
//         </main>
//       </div>
//     </>
//   );
// }
