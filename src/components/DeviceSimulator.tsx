import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Volume2, QrCode, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type LEDState = 'off' | 'on' | 'blink-slow' | 'blink-fast';
type Color = 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'cyan' | 'orange' | 'roseate' | 'off';

interface SequenceStep {
  duration: number;
  statusLed: Color;
  nwLed: LEDState;
  pwrLed: LEDState;
  announcement?: string;
  description: string;
}

const SEQUENCE: SequenceStep[] = [
  { duration: 1500, statusLed: 'roseate', nwLed: 'off', pwrLed: 'on', description: 'Booting: Device boot started' },
  { duration: 1500, statusLed: 'red', nwLed: 'off', pwrLed: 'on', description: 'Booting: SIM check initiated' },
  { duration: 2000, statusLed: 'red', nwLed: 'blink-slow', pwrLed: 'on', description: 'Booting: Searching for network...' },
  { duration: 1500, statusLed: 'purple', nwLed: 'blink-slow', pwrLed: 'on', description: 'Booting: Onboarding/Registration initiated' },
  { duration: 1500, statusLed: 'cyan', nwLed: 'blink-slow', pwrLed: 'on', description: 'Booting: FOTA check & download' },
  { duration: 2000, statusLed: 'cyan', nwLed: 'blink-fast', pwrLed: 'on', description: 'Booting: Downloading/uploading data' },
  { duration: 1500, statusLed: 'orange', nwLed: 'blink-fast', pwrLed: 'on', description: 'Booting: Installing firmware (Writing to UFS)' },
  
  { duration: 2500, statusLed: 'orange', nwLed: 'blink-fast', pwrLed: 'on', announcement: "Sim Inserted", description: 'Audio: Sim Inserted' },
  { duration: 2500, statusLed: 'cyan', nwLed: 'blink-fast', pwrLed: 'on', announcement: "Network Connected", description: 'Audio: Network Connected' },
  
  { duration: 2000, statusLed: 'cyan', nwLed: 'blink-fast', pwrLed: 'on', description: 'Connecting to DMS...' },
  { duration: 3000, statusLed: 'roseate', nwLed: 'blink-fast', pwrLed: 'on', announcement: "Device Online", description: 'Connected to DMS. Audio: Device Online' },
  
  { duration: 2000, statusLed: 'roseate', nwLed: 'blink-fast', pwrLed: 'on', description: 'VG Registration & Security Handshake' },
  { duration: 3000, statusLed: 'roseate', nwLed: 'blink-fast', pwrLed: 'on', announcement: "Device Online", description: 'Connected to VG Server. Audio: Device Online' },
  { duration: 2000, statusLed: 'roseate', nwLed: 'blink-fast', pwrLed: 'on', description: 'Config API Check' },
  { duration: 0, statusLed: 'blue', nwLed: 'blink-fast', pwrLed: 'on', announcement: "Device is ready for Payments", description: 'Connected to MQTT. Ready!' },
];

const getColorHex = (color: Color) => {
  switch (color) {
    case 'red': return '#ef4444';
    case 'green': return '#22c55e';
    case 'blue': return '#3b82f6';
    case 'purple': return '#a855f7';
    case 'cyan': return '#06b6d4';
    case 'orange': return '#f97316';
    case 'roseate': return '#ffdae0';
    case 'off': return '#374151';
    default: return '#374151';
  }
};

export function DeviceSimulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentStep = stepIndex >= 0 && stepIndex < SEQUENCE.length ? SEQUENCE[stepIndex] : null;

  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId: NodeJS.Timeout;

    if (stepIndex < SEQUENCE.length - 1) {
      if (stepIndex === -1) {
        setStepIndex(0);
      } else {
        const step = SEQUENCE[stepIndex];
        if (step.announcement) {
          setAnnouncement(step.announcement);
        } else if (announcement && !step.announcement) {
          setAnnouncement(null);
        }
        
        timeoutId = setTimeout(() => {
          setStepIndex(s => s + 1);
        }, step.duration);
      }
    } else if (stepIndex === SEQUENCE.length - 1) {
        const step = SEQUENCE[stepIndex];
        if (step.announcement) setAnnouncement(step.announcement);
    }

    return () => clearTimeout(timeoutId);
  }, [isPlaying, stepIndex]);

  const handlePlay = () => {
    setIsPlaying(true);
    setStepIndex(-1);
    setAnnouncement(null);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setStepIndex(-1);
    setAnnouncement(null);
  };

  const getLedClass = (type: 'nw' | 'pwr') => {
    if (!currentStep) return 'bg-gray-300 dark:bg-gray-700 shadow-inner';
    const state = type === 'nw' ? currentStep.nwLed : currentStep.pwrLed;
    
    if (state === 'off') return 'bg-gray-300 dark:bg-gray-700 shadow-inner';
    if (state === 'on') {
      return type === 'nw' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    }
    if (state === 'blink-slow') {
      return type === 'nw' ? 'bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    }
    if (state === 'blink-fast') {
      return type === 'nw' ? 'bg-green-500 animate-[pulse_0.25s_ease-in-out_infinite] shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-500 animate-[pulse_0.25s_ease-in-out_infinite] shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    }
  };

  return (
    <div className="bg-brand-panel border border-brand-border rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-12 items-center justify-center my-10 overflow-hidden">
      
      {/* Device Visual */}
      <div className="relative isolate px-4">
        {/* Device back colored body shadow mimic */}
        <div className="absolute inset-0 bg-[#0F8A43] rounded-[2.5rem] transform translate-y-6 shadow-2xl -z-10" />
        
        <div className="w-[300px] h-[320px] bg-white rounded-[2rem] shadow-inner p-6 flex flex-col items-center relative border border-gray-100 overflow-hidden">
          
          {/* Top LEDs and labels */}
          <div className="w-full flex justify-between px-4 mt-2">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-gray-500">Status RGB</span>
              <div 
                className="w-4 h-4 rounded-full transition-colors duration-300 border border-gray-200"
                style={{ 
                  backgroundColor: currentStep ? getColorHex(currentStep.statusLed) : getColorHex('off'),
                  boxShadow: currentStep && currentStep.statusLed !== 'off' 
                    ? `0 0 12px ${getColorHex(currentStep.statusLed)}` 
                    : 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-gray-500">NW</span>
              <div className={cn("w-4 h-4 rounded-full transition-colors duration-300 border border-gray-200", getLedClass('nw'))} />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-gray-500">PWR</span>
              <div className={cn("w-4 h-4 rounded-full transition-colors duration-300 border border-gray-200", getLedClass('pwr'))} />
            </div>
          </div>

          <div className="text-gray-800 font-bold text-xl mt-6 mb-3 tracking-wider">
             VG-PAY
          </div>

          {/* QR Code Area */}
          <div className="bg-white border-[3px] border-[#E85D22] rounded-xl p-2 w-[140px] h-[140px] flex items-center justify-center relative shadow-sm">
             <QrCode className="w-full h-full text-gray-800" strokeWidth={1} />
          </div>
          
          <div className="mt-4 flex gap-4 items-center opacity-60">
             <span className="text-[10px] font-extrabold text-gray-800 tracking-widest">BHIM</span>
             <span className="text-[10px] font-extrabold text-gray-800 tracking-widest">UPI</span>
          </div>
          
        </div>

        {/* Audio Announcement Toast */}
        <AnimatePresence>
          {announcement && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 z-20 border border-gray-800"
            >
              <Volume2 className="w-5 h-5 text-green-400 animate-pulse" />
              <span className="font-semibold text-sm tracking-wide">{announcement}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls & Status Log */}
      <div className="flex-1 max-w-md w-full flex flex-col gap-6 relative z-10">
        <div>
          <h3 className="text-3xl font-serif italic text-brand-text mb-3">Power Up Sequence</h3>
          <p className="text-brand-text-muted text-sm mb-6 leading-relaxed">Experience the boot-up sequence of the VG-Pay Smart Soundbox with realistic LED indicators and simulated audio announcements.</p>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePlay}
              disabled={isPlaying && stepIndex < SEQUENCE.length - 1}
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-accent/20"
            >
              <Play className="w-5 h-5" />
              {stepIndex === SEQUENCE.length - 1 ? 'Replay' : 'Power On'}
            </button>
            <button 
              onClick={handleReset}
              disabled={!isPlaying}
              className="flex items-center gap-2 bg-brand-panel border border-brand-border hover:bg-brand-text/5 text-brand-text px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-brand-panel border border-brand-border hover:bg-brand-text/5 text-brand-text px-4 py-3 rounded-lg font-medium transition-colors shadow-sm ml-auto"
              title="View Phase Details"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-brand-panel rounded-lg border border-brand-border p-4 h-56 overflow-y-auto relative shadow-inner">
          {!isPlaying ? (
            <div className="h-full flex items-center justify-center text-brand-text-muted text-sm italic">
              Click Start to view sequence steps
            </div>
          ) : (
            <div className="space-y-3 pb-8">
              {SEQUENCE.map((step, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "text-sm transition-all duration-500 flex items-start gap-3",
                    idx === stepIndex ? "text-brand-text font-medium opacity-100 translate-x-2" : 
                    idx < stepIndex ? "text-brand-text-dim opacity-60" : "opacity-0 hidden"
                  )}
                >
                  <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0", idx === stepIndex ? "bg-brand-accent animate-pulse" : "bg-transparent")} />
                  <span className="leading-relaxed">{step.description}</span>
                </div>
              ))}
            </div>
          )}
          {/* Gradient mask for smooth scrolling effect if list gets long */}
          <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-brand-panel to-transparent pointer-events-none" />
        </div>
      </div>

      {/* State Table Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-brand-panel border border-brand-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden relative z-50"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-border bg-brand-sidebar">
                <h3 className="text-xl font-serif italic text-brand-text">Boot Phase Matrix</h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-2 text-brand-text-muted hover:text-brand-text hover:bg-brand-text/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-x-auto overflow-y-auto p-0">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="text-xs uppercase bg-brand-sidebar text-brand-text-muted sticky top-0 shadow-sm z-10">
                    <tr>
                      <th className="px-5 py-4 font-semibold whitespace-nowrap">Phase Description</th>
                      <th className="px-5 py-4 font-semibold whitespace-nowrap">Status LED</th>
                      <th className="px-5 py-4 font-semibold whitespace-nowrap">NW LED</th>
                      <th className="px-5 py-4 font-semibold whitespace-nowrap">PWR LED</th>
                      <th className="px-5 py-4 font-semibold whitespace-nowrap">State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {SEQUENCE.map((step, idx) => {
                      let state: 'Pending' | 'Active' | 'Completed' = 'Pending';
                      if (isPlaying) {
                        if (idx < stepIndex) state = 'Completed';
                        else if (idx === stepIndex) state = (idx === SEQUENCE.length - 1) ? 'Completed' : 'Active';
                        else if (stepIndex === SEQUENCE.length - 1 && idx === stepIndex) state = 'Completed';
                      }
                      
                      return (
                        <tr 
                          key={idx} 
                          className={cn(
                            "transition-colors",
                            state === 'Active' ? "bg-brand-accent/5" : "hover:bg-brand-text/5"
                          )}
                        >
                          <td className="px-5 py-3 font-medium text-brand-text min-w-[250px]">{step.description}</td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                               <div className="w-3 h-3 rounded-full border border-black/10 dark:border-white/10" style={{ backgroundColor: getColorHex(step.statusLed) }} />
                               <span className="capitalize text-brand-text-muted">{step.statusLed}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3 capitalize text-brand-text-muted">{step.nwLed.replace('-', ' ')}</td>
                          <td className="px-5 py-3 capitalize text-brand-text-muted">{step.pwrLed.replace('-', ' ')}</td>
                          <td className="px-5 py-3">
                            <span className={cn(
                              "px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase inline-block",
                              state === 'Completed' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                              state === 'Active' ? "bg-brand-accent/20 text-brand-accent-text" :
                              "bg-brand-text/5 text-brand-text-dim"
                            )}>
                              {state}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            {/* Click outside backdrop */}
            <div 
              className="absolute inset-0 z-40" 
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
