import React from 'react';

export const NatureForestSides: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {/* LEFT SIDE TREES */}
      <div className="absolute left-1 sm:left-3 md:left-5 xl:left-8 bottom-0 flex items-end gap-1.5 sm:gap-2.5 opacity-75 hover:opacity-100 transition-opacity">
        {/* Tree 1: Graceful Tiered Pine (Left-back, slightly smaller) */}
        <div className="animate-tree-sway-left origin-bottom">
          <svg
            width="55"
            height="130"
            viewBox="0 0 60 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 sm:w-14 h-auto drop-shadow-[0_4px_12px_rgba(8,28,19,0.7)]"
          >
            {/* Trunk */}
            <rect x="27" y="105" width="6" height="35" rx="3" fill="#2E1F16" />
            {/* Bottom tier */}
            <path
              d="M30 65 L48 110 C48 110 30 102 12 110 Z"
              fill="#133824"
            />
            {/* Middle tier */}
            <path
              d="M30 40 L45 80 C45 80 30 73 15 80 Z"
              fill="#1B4D31"
            />
            {/* Top tier */}
            <path
              d="M30 15 L41 55 C41 55 30 49 19 55 Z"
              fill="#266642"
            />
            {/* Crown tip */}
            <path
              d="M30 0 L37 25 C37 25 30 21 23 25 Z"
              fill="#348455"
            />
            {/* Highlights */}
            <circle cx="30" cy="2" r="1.5" fill="#9CE3B9" opacity="0.8" />
          </svg>
        </div>

        {/* Tree 2: Taller Evergreen Cedar (Left-front) */}
        <div className="animate-tree-sway-right origin-bottom">
          <svg
            width="75"
            height="175"
            viewBox="0 0 80 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 sm:w-18 md:w-20 h-auto drop-shadow-[0_6px_16px_rgba(8,28,19,0.8)]"
          >
            {/* Trunk */}
            <rect x="36" y="140" width="8" height="50" rx="4" fill="#38251B" />
            {/* Ground Moss Mound */}
            <ellipse cx="40" cy="188" rx="28" ry="4" fill="#143A26" />
            {/* Tier 1 (Lowest) */}
            <path
              d="M40 90 L68 150 C68 150 40 138 12 150 Z"
              fill="#113320"
            />
            {/* Tier 2 */}
            <path
              d="M40 60 L62 112 C62 112 40 102 18 112 Z"
              fill="#17442B"
            />
            {/* Tier 3 */}
            <path
              d="M40 32 L56 78 C56 78 40 70 24 78 Z"
              fill="#225C3B"
            />
            {/* Tier 4 (Top tip) */}
            <path
              d="M40 8 L49 42 C49 42 40 36 31 42 Z"
              fill="#317E51"
            />
            {/* Dew sparkle */}
            <circle cx="40" cy="8" r="1.8" fill="#B7E4C7" opacity="0.9" />
          </svg>
        </div>

        {/* Tree 3: Small Sapling Shrub */}
        <div className="hidden sm:block animate-tree-sway-left origin-bottom">
          <svg
            width="40"
            height="90"
            viewBox="0 0 45 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-11 h-auto"
          >
            <rect x="20" y="70" width="5" height="25" rx="2" fill="#2E1F16" />
            <path d="M22.5 40 L38 75 C38 75 22.5 68 7 75 Z" fill="#19472D" />
            <path d="M22.5 15 L32 48 C32 48 22.5 42 13 48 Z" fill="#287349" />
            <circle cx="22.5" cy="15" r="1.2" fill="#9CE3B9" />
          </svg>
        </div>
      </div>

      {/* RIGHT SIDE TREES */}
      <div className="absolute right-1 sm:right-3 md:right-5 xl:right-8 bottom-0 flex items-end gap-1.5 sm:gap-2.5 opacity-75 hover:opacity-100 transition-opacity">
        {/* Tree 4: Small Sapling Shrub (Right-back) */}
        <div className="hidden sm:block animate-tree-sway-right origin-bottom">
          <svg
            width="42"
            height="95"
            viewBox="0 0 45 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-11 h-auto"
          >
            <rect x="20" y="72" width="5" height="28" rx="2" fill="#2E1F16" />
            <path d="M22.5 42 L38 78 C38 78 22.5 70 7 78 Z" fill="#163F28" />
            <path d="M22.5 18 L33 50 C33 50 22.5 44 12 50 Z" fill="#236640" />
            <circle cx="22.5" cy="18" r="1.2" fill="#9CE3B9" />
          </svg>
        </div>

        {/* Tree 5: Majestic Tall Forest Evergreen (Right-front) */}
        <div className="animate-tree-sway-left origin-bottom">
          <svg
            width="80"
            height="185"
            viewBox="0 0 85 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 sm:w-18 md:w-22 h-auto drop-shadow-[0_6px_18px_rgba(8,28,19,0.8)]"
          >
            {/* Trunk */}
            <rect x="38" y="145" width="9" height="55" rx="4" fill="#38251B" />
            <ellipse cx="42" cy="198" rx="30" ry="4" fill="#143A26" />
            {/* Tier 1 */}
            <path
              d="M42 95 L72 158 C72 158 42 145 12 158 Z"
              fill="#10301E"
            />
            {/* Tier 2 */}
            <path
              d="M42 62 L66 118 C66 118 42 107 18 118 Z"
              fill="#16432A"
            />
            {/* Tier 3 */}
            <path
              d="M42 34 L58 82 C58 82 42 74 26 82 Z"
              fill="#225D3B"
            />
            {/* Tier 4 (Crown) */}
            <path
              d="M42 6 L50 44 C40 44 42 38 34 44 Z"
              fill="#328354"
            />
            <circle cx="42" cy="6" r="2" fill="#B7E4C7" opacity="0.95" />
          </svg>
        </div>

        {/* Tree 6: Medium Forest Pine */}
        <div className="animate-tree-sway-right origin-bottom">
          <svg
            width="55"
            height="135"
            viewBox="0 0 60 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 sm:w-14 h-auto drop-shadow-[0_4px_12px_rgba(8,28,19,0.7)]"
          >
            <rect x="27" y="108" width="6" height="37" rx="3" fill="#2E1F16" />
            <path d="M30 68 L50 115 C50 115 30 106 10 115 Z" fill="#133A25" />
            <path d="M30 42 L46 84 C46 84 30 76 14 84 Z" fill="#1C5033" />
            <path d="M30 16 L42 58 C42 58 30 52 18 58 Z" fill="#276944" />
            <path d="M30 2 L38 27 C38 27 30 23 22 27 Z" fill="#368C5B" />
            <circle cx="30" cy="2" r="1.5" fill="#9CE3B9" />
          </svg>
        </div>
      </div>
    </div>
  );
};
