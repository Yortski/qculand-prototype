import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheck, FaUser, FaTasks, FaAward, FaHome } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";
import { FaTabletScreenButton } from "react-icons/fa6";

export default function Tablet() {
  const { player, inventory, quests } = useStore();
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState("home"); 
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Player Profile</h3>
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                {player.name?.charAt(0) || "P"}
              </div>
            </div>
            
            <section className="bg-black/20 rounded-lg p-4">
              <p className="font-semibold text-white mb-3 text-lg border-b border-white/30 pb-2">Player Info</p>
              <div className="space-y-2 text-white/90">
                <p>Name: <span className="font-medium">{player.name || "Unknown"}</span></p>
                <p>Level: <span className="font-medium">{player.level || 1}</span></p>
              </div>
            </section>
          </div>
        );

      case "inventory":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Inventory</h3>
            <div className="grid grid-cols-3 gap-3">
              {inventory.length ? (
                inventory.map((item, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-3 text-center border border-white/20">
                    <div className="w-12 h-12 bg-blue-400 rounded-lg mx-auto mb-2 flex items-center justify-center text-white">
                      {item.id?.charAt(0) || "I"}
                    </div>
                    <p className="text-white text-sm truncate">{item.id || `Item ${idx + 1}`}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-8 text-white/70">
                  Your inventory is empty
                </div>
              )}
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quests</h3>
            <div className="space-y-3">
              {quests.length ? (
                quests.map((quest, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{quest.id || `Quest ${idx + 1}`}</h4>
                      <FaCheck className="text-green-400" />
                    </div>
                    <p className="text-white/70 text-sm">
                      {quest.description || "Complete this quest to earn rewards."}
                    </p>
                    <div className="mt-2 bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${quest.progress || 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-white/70">
                  No active quests
                </div>
              )}
            </div>
          </div>
        );

      case "badges":
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Badges</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-500/20 rounded-lg p-4 text-center border border-yellow-500/30">
                <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <p className="text-white font-semibold">First Steps</p>
                <p className="text-white/70 text-xs">Complete your first quest</p>
              </div>
              <div className="bg-gray-500/20 rounded-lg p-4 text-center border border-gray-500/30 opacity-50">
                <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <p className="text-white/70 font-semibold">Badge 1</p>
                <p className="text-white/50 text-xs">Test Badge</p>
              </div>
              <div className="bg-gray-500/20 rounded-lg p-4 text-center border border-gray-500/30 opacity-50">
                <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <p className="text-white/70 font-semibold">Badge 2</p>
                <p className="text-white/50 text-xs">Test Badge</p>
              </div>
              <div className="bg-gray-500/20 rounded-lg p-4 text-center border border-gray-500/30 opacity-50">
                <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <p className="text-white/70 font-semibold">Badge 3</p>
                <p className="text-white/50 text-xs">Test Badge</p>
              </div>
              <div className="bg-gray-500/20 rounded-lg p-4 text-center border border-gray-500/30 opacity-50">
                <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <p className="text-white/70 font-semibold">Badge 4</p>
                <p className="text-white/50 text-xs">Test Badge</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "inventory", label: "Inventory", icon: MdBackpack },
    { id: "progress", label: "Quests", icon: FaTasks },
    { id: "badges", label: "Badges", icon: FaAward },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-linear-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all"
      >
        {open ? <FaTimes size={24} /> : <FaTabletScreenButton size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 160, damping: 15 }}
            className="absolute bottom-20 right-0 w-96 h-[600px] bg-linear-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl border-5 border-[#1e1e1e] overflow-hidden"
          >
            <div className="relative w-full h-full bg-linear-to-b from-amber-600/50 to-amber-900/50">
              
              <div className="bg-[#1e1e1e] px-4 py-2 flex justify-between items-center text-white font-bold text-sm">
                <span>Bee OS</span>
                <div className="flex items-center gap-4">
                  <span>{formatTime(currentTime)}</span>
                </div>
              </div>

              <div className="h-[calc(100%-120px)] p-6 overflow-y-auto">
                {renderContent()}
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#1e1e1e]">
                <div className="grid grid-cols-4 gap-1 p-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentView(item.id)}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                          currentView === item.id
                            ? "bg-white/20 text-white"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="text-xs mt-1">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}