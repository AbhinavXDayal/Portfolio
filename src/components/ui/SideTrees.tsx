import React from 'react';

export const SideTrees: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Left Bottom Tree */}
      <div className="absolute -bottom-2 left-0 sm:left-1 lg:left-3 w-28 sm:w-36 lg:w-44 h-auto opacity-70 sm:opacity-85 lg:opacity-95 animate-tree-left">
        <svg
          viewBox="0 0 160 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xs"
        >
          {/* Tree Trunk & Branches */}
          <path
            d="M78 300 C78 260 74 210 70 170 C66 130 76 90 80 60 C80 60 72 85 60 110 C50 130 38 155 35 175"
            stroke="#5C4736"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M72 185 C85 165 105 140 120 130 C125 125 135 120 140 115"
            stroke="#5C4736"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M68 140 C55 120 40 100 25 90"
            stroke="#5C4736"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M76 105 C90 85 108 70 125 60"
            stroke="#5C4736"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaf Canopy Clusters (Organic Sage & Forest Greens) */}
          {/* Top Canopy */}
          <circle cx="80" cy="50" r="28" fill="#587B56" opacity="0.9" />
          <circle cx="95" cy="40" r="22" fill="#759873" opacity="0.85" />
          <circle cx="68" cy="42" r="20" fill="#466444" opacity="0.9" />
          <circle cx="82" cy="30" r="18" fill="#88AB86" opacity="0.8" />

          {/* Right Upper Branch Leaves */}
          <circle cx="125" cy="65" r="20" fill="#587B56" opacity="0.9" />
          <circle cx="138" cy="60" r="16" fill="#759873" opacity="0.85" />
          <circle cx="118" cy="55" r="15" fill="#88AB86" opacity="0.8" />

          {/* Left Upper Branch Leaves */}
          <circle cx="30" cy="90" r="22" fill="#466444" opacity="0.9" />
          <circle cx="20" cy="85" r="17" fill="#6A8D68" opacity="0.85" />
          <circle cx="35" cy="78" r="16" fill="#88AB86" opacity="0.8" />

          {/* Right Mid Branch Leaves */}
          <circle cx="135" cy="120" r="24" fill="#587B56" opacity="0.9" />
          <circle cx="145" cy="112" r="18" fill="#759873" opacity="0.85" />
          <circle cx="122" cy="128" r="18" fill="#466444" opacity="0.9" />

          {/* Left Lower Branch Leaves */}
          <circle cx="40" cy="165" r="22" fill="#587B56" opacity="0.85" />
          <circle cx="28" cy="160" r="16" fill="#759873" opacity="0.8" />

          {/* Little Forest Sprouts at Base */}
          <path
            d="M65 298 Q60 285 55 282 Q65 288 72 298 M85 298 Q92 284 98 280 Q90 288 84 298"
            stroke="#587B56"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 2. Right Bottom Tree */}
      <div className="absolute -bottom-2 right-0 sm:right-1 lg:right-3 w-28 sm:w-36 lg:w-44 h-auto opacity-70 sm:opacity-85 lg:opacity-95 animate-tree-right">
        <svg
          viewBox="0 0 160 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xs scale-x-[-1]"
        >
          {/* Tree Trunk & Branches */}
          <path
            d="M82 300 C82 255 86 205 90 165 C94 125 84 88 78 58 C78 58 88 82 102 108 C112 128 122 152 125 172"
            stroke="#523F30"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M88 180 C75 160 55 135 40 125 C35 120 25 115 20 110"
            stroke="#523F30"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M92 135 C105 115 120 95 135 85"
            stroke="#523F30"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M84 100 C70 80 52 65 35 55"
            stroke="#523F30"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaf Canopy Clusters */}
          <circle cx="78" cy="48" r="28" fill="#4B6E49" opacity="0.9" />
          <circle cx="62" cy="38" r="22" fill="#6A8F68" opacity="0.85" />
          <circle cx="90" cy="40" r="20" fill="#3D5B3B" opacity="0.9" />
          <circle cx="75" cy="28" r="18" fill="#80A57E" opacity="0.8" />

          {/* Branches Leaves */}
          <circle cx="35" cy="62" r="20" fill="#4B6E49" opacity="0.9" />
          <circle cx="22" cy="56" r="16" fill="#6A8F68" opacity="0.85" />
          <circle cx="42" cy="52" r="15" fill="#80A57E" opacity="0.8" />

          <circle cx="130" cy="85" r="22" fill="#3D5B3B" opacity="0.9" />
          <circle cx="140" cy="80" r="17" fill="#6A8F68" opacity="0.85" />

          <circle cx="25" cy="115" r="24" fill="#4B6E49" opacity="0.9" />
          <circle cx="15" cy="108" r="18" fill="#6A8F68" opacity="0.85" />

          <circle cx="120" cy="160" r="22" fill="#4B6E49" opacity="0.85" />
        </svg>
      </div>

      {/* 3. Left Mid-Height Small Tree / Sapling */}
      <div className="absolute top-[40%] -left-2 sm:left-1 w-16 sm:w-20 lg:w-24 h-auto opacity-45 sm:opacity-65 lg:opacity-75 animate-tree-left">
        <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M50 160 Q50 110 46 80 Q42 50 50 25" stroke="#5C4736" strokeWidth="4" strokeLinecap="round" />
          <path d="M48 90 Q30 75 18 65" stroke="#5C4736" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M49 60 Q65 48 78 40" stroke="#5C4736" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaves */}
          <circle cx="50" cy="22" r="18" fill="#587B56" opacity="0.9" />
          <circle cx="56" cy="15" r="13" fill="#759873" opacity="0.85" />
          <circle cx="18" cy="65" r="14" fill="#466444" opacity="0.9" />
          <circle cx="78" cy="40" r="15" fill="#6A8D68" opacity="0.85" />
        </svg>
      </div>

      {/* 4. Right Mid-Height Small Tree / Sapling */}
      <div className="absolute top-[62%] -right-2 sm:right-1 w-16 sm:w-20 lg:w-24 h-auto opacity-45 sm:opacity-65 lg:opacity-75 animate-tree-right">
        <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto scale-x-[-1]">
          <path d="M50 160 Q50 110 46 80 Q42 50 50 25" stroke="#523F30" strokeWidth="4" strokeLinecap="round" />
          <path d="M48 90 Q30 75 18 65" stroke="#523F30" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M49 60 Q65 48 78 40" stroke="#523F30" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaves */}
          <circle cx="50" cy="22" r="18" fill="#4B6E49" opacity="0.9" />
          <circle cx="44" cy="15" r="13" fill="#6A8F68" opacity="0.85" />
          <circle cx="18" cy="65" r="14" fill="#3D5B3B" opacity="0.9" />
          <circle cx="78" cy="40" r="15" fill="#80A57E" opacity="0.85" />
        </svg>
      </div>
    </div>
  );
};
