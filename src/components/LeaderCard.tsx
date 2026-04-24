import React from 'react';
import { motion } from 'framer-motion';

interface LeaderCardProps {
  key?: string | number;
  name: string;
  role: string;
  image: string;
  index: number;
}

export default function LeaderCard({ name, role, image, index }: LeaderCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h4 className="text-white font-sans text-lg font-bold">{name}</h4>
        <p className="text-slate-300 text-[10px] font-bold tracking-widest uppercase mt-1">{role}</p>
      </div>
      <div className="p-4 bg-white group-hover:bg-slate-900 transition-colors duration-300">
        <h4 className="text-slate-900 group-hover:text-white font-sans text-base font-bold transition-colors">{name}</h4>
      </div>
    </motion.div>
  );
}
