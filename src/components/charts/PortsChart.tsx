"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PortsChartProps {
  ports: number[];
}

export function PortsChart({ ports = [] }: PortsChartProps) {
  const portCounts: Record<string, number> = {};
  ports.forEach(p => {
    portCounts[p.toString()] = 1;
  });

  const data = {
    labels: Object.keys(portCounts),
    datasets: [
      {
        label: 'Status (1 = Open)',
        data: Object.values(portCounts),
        backgroundColor: 'rgba(0, 240, 255, 0.6)',
        borderColor: '#00f0ff',
        borderWidth: 1,
        hoverBackgroundColor: '#00f0ff',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 15, 20, 0.9)',
        titleColor: '#00f0ff',
        bodyColor: '#e2e8f0',
        borderColor: 'rgba(0, 240, 255, 0.3)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: () => 'STATUS: OPEN'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1.5,
        ticks: {
          stepSize: 1,
          color: '#94a3b8',
          font: { family: 'monospace' }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        }
      },
      x: {
        ticks: {
          color: '#f8fafc',
          font: {
            family: 'monospace'
          }
        },
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[var(--color-cyber-surface)] backdrop-blur-xl border border-[var(--color-cyber-border)] rounded-xl p-6 group hover:border-[var(--color-neon-blue-dim)] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-neon-blue)] opacity-[0.1] rounded-full blur-[40px] z-0 pointer-events-none group-hover:opacity-[0.2] transition-opacity duration-500"></div>
      
      <h3 className="text-lg font-mono tracking-widest text-[var(--color-neon-blue)] mb-5 flex items-center gap-3 relative z-10">
        <span className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-sm flex shadow-[0_0_8px_var(--color-neon-blue)]"></span>
        OPEN PORTS
        <span className="ml-auto text-xs text-[var(--color-cyber-text-dim)] bg-[rgba(0,0,0,0.5)] px-2 py-1 rounded border border-[var(--color-cyber-border)]">{ports.length} DETECTED</span>
      </h3>
      
      {ports.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-[var(--color-cyber-text-dim)] font-mono text-sm relative z-10 custom-scanlines">
          <div className="flex flex-col items-center opacity-50">
            <span className="text-2xl mb-2">∅</span>
            No open ports detected.
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {ports.map((p, i) => (
              <motion.span 
                key={p} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--color-neon-blue)', color: '#000' }}
                className="px-3 py-1 bg-[rgba(0,0,0,0.4)] border border-[rgba(0,240,255,0.3)] text-[var(--color-neon-blue)] text-xs font-mono rounded-md shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-colors cursor-default"
              >
                PORT {p}
              </motion.span>
            ))}
          </div>
          <div className="flex-1 min-h-[200px] relative z-10 w-full">
             <Bar data={data} options={options} />
          </div>
        </>
      )}
    </motion.div>
  );
}
