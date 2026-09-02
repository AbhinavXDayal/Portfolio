import React from 'react';

interface ProjectMockupProps {
  type: 'mobile' | 'web';
  projectKey: 'swastrix' | 'moviewatchlist' | 'chefclaude';
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectKey, title }) => {
  if (projectKey === 'swastrix') {
    return (
      <div className="project-mockup-wrapper mobile-frame" role="img" aria-label={`${title} mobile application mockup`}>
        <svg viewBox="0 0 380 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <defs>
            <linearGradient id="phoneBg" x1="0" y1="0" x2="380" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#25221E" />
              <stop offset="100%" stopColor="#181613" />
            </linearGradient>
            <linearGradient id="cardGrad1" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#322D28" />
              <stop offset="100%" stopColor="#24211D" />
            </linearGradient>
          </defs>

          {/* Outer Phone Shell */}
          <rect x="25" y="10" width="330" height="460" rx="36" fill="url(#phoneBg)" stroke="#3D3730" strokeWidth="2" />
          <rect x="30" y="15" width="320" height="450" rx="32" stroke="rgba(200, 180, 150, 0.15)" strokeWidth="1" />

          {/* Dynamic Island */}
          <rect x="145" y="24" width="90" height="20" rx="10" fill="#13110E" stroke="#332D26" strokeWidth="1" />
          <circle cx="218" cy="34" r="3.5" fill="#201C18" />
          <circle cx="162" cy="34" r="2.5" fill="#3D5A48" />

          {/* Status Bar */}
          <text x="50" y="38" fill="#B3A898" fontSize="11" fontFamily="sans-serif" fontWeight="600">09:41</text>
          <path d="M312 32h14v7h-14zM327 34.5h2v2h-2z" fill="#B3A898" />
          <path d="M298 32l3 7h-6z" fill="#B3A898" />

          {/* App Header */}
          <text x="50" y="78" fill="#F4EFE6" fontSize="18" fontFamily="sans-serif" fontWeight="700">Swastrix Care</text>
          <text x="50" y="94" fill="#998F80" fontSize="11" fontFamily="sans-serif">Hospital & Patient Portal</text>
          <rect x="295" y="66" width="34" height="34" rx="17" fill="#322C26" stroke="rgba(200, 180, 150, 0.2)" strokeWidth="1" />
          <circle cx="312" cy="80" r="5" fill="#CBB494" />
          <path d="M304 94c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#CBB494" opacity="0.8" />

          {/* Vitals Grid */}
          <rect x="50" y="112" width="132" height="88" rx="14" fill="url(#cardGrad1)" stroke="rgba(200, 180, 150, 0.14)" strokeWidth="1" />
          <circle cx="72" cy="134" r="12" fill="rgba(203, 180, 148, 0.15)" />
          <path d="M68 134h2l2-4 3 8 2-4h2" stroke="#CBB494" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="90" y="138" fill="#998F80" fontSize="11" fontFamily="sans-serif">Heart Rate</text>
          <text x="70" y="170" fill="#F4EFE6" fontSize="18" fontFamily="sans-serif" fontWeight="700">72 <tspan fontSize="11" fill="#B3A898" fontWeight="normal">bpm</tspan></text>
          <rect x="70" y="180" width="80" height="3" rx="1.5" fill="#24211C" />
          <rect x="70" y="180" width="56" height="3" rx="1.5" fill="#CBB494" />

          <rect x="198" y="112" width="132" height="88" rx="14" fill="url(#cardGrad1)" stroke="rgba(200, 180, 150, 0.14)" strokeWidth="1" />
          <circle cx="220" cy="134" r="12" fill="rgba(82, 183, 136, 0.15)" />
          <circle cx="220" cy="134" r="4" fill="#52B788" />
          <text x="238" y="138" fill="#998F80" fontSize="11" fontFamily="sans-serif">Vitals Status</text>
          <text x="218" y="170" fill="#F4EFE6" fontSize="18" fontFamily="sans-serif" fontWeight="700">98% <tspan fontSize="11" fill="#52B788" fontWeight="500">Normal</tspan></text>
          <rect x="218" y="180" width="80" height="3" rx="1.5" fill="#24211C" />
          <rect x="218" y="180" width="72" height="3" rx="1.5" fill="#52B788" />

          {/* Consultation Card */}
          <rect x="50" y="214" width="280" height="110" rx="16" fill="#2A2520" stroke="rgba(200, 180, 150, 0.2)" strokeWidth="1" />
          <rect x="66" y="230" width="38" height="38" rx="10" fill="#38322B" stroke="rgba(200, 180, 150, 0.25)" />
          <path d="M85 240v18M76 249h18" stroke="#CBB494" strokeWidth="2" strokeLinecap="round" />
          <text x="114" y="244" fill="#F4EFE6" fontSize="13" fontFamily="sans-serif" fontWeight="600">Active Consultation</text>
          <text x="114" y="260" fill="#B3A898" fontSize="11" fontFamily="sans-serif">Dr. Sharma • Cardiology Dept</text>
          
          <rect x="66" y="280" width="115" height="28" rx="6" fill="#CBB494" />
          <text x="123" y="298" fill="#171512" fontSize="11" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">View Records</text>
          
          <rect x="190" y="280" width="124" height="28" rx="6" fill="#352F28" stroke="rgba(200, 180, 150, 0.2)" />
          <text x="252" y="298" fill="#CBB494" fontSize="11" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">Next Slot 14:00</text>

          {/* Quick Actions List */}
          <rect x="50" y="338" width="280" height="52" rx="12" fill="#201C18" stroke="rgba(200, 180, 150, 0.1)" strokeWidth="1" />
          <circle cx="74" cy="364" r="10" fill="#2F2923" />
          <path d="M70 364h8M74 360v8" stroke="#CBB494" strokeWidth="1.5" />
          <text x="94" y="362" fill="#F4EFE6" fontSize="12" fontFamily="sans-serif" fontWeight="500">Hospital Workflow Sync</text>
          <text x="94" y="376" fill="#8C8275" fontSize="10" fontFamily="sans-serif">Connected via Axios REST API</text>
          <text x="306" y="367" fill="#CBB494" fontSize="12" fontFamily="sans-serif">→</text>

          {/* Bottom Nav */}
          <rect x="42" y="406" width="296" height="44" rx="22" fill="#181512" stroke="#332D27" strokeWidth="1" />
          <circle cx="95" cy="428" r="4" fill="#CBB494" />
          <circle cx="160" cy="428" r="4" fill="#6B6256" />
          <circle cx="220" cy="428" r="4" fill="#6B6256" />
          <circle cx="285" cy="428" r="4" fill="#6B6256" />
          <rect x="145" y="458" width="90" height="4" rx="2" fill="#474037" />
        </svg>
      </div>
    );
  }

  if (projectKey === 'moviewatchlist') {
    return (
      <div className="project-mockup-wrapper web-frame" role="img" aria-label={`${title} web application interface`}>
        <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
          <defs>
            <linearGradient id="browserBg" x1="0" y1="0" x2="520" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#25221E" />
              <stop offset="100%" stopColor="#1B1815" />
            </linearGradient>
            <linearGradient id="poster1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#473B2E" />
              <stop offset="100%" stopColor="#28221B" />
            </linearGradient>
            <linearGradient id="poster2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#32443C" />
              <stop offset="100%" stopColor="#1B2420" />
            </linearGradient>
            <linearGradient id="poster3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3D3447" />
              <stop offset="100%" stopColor="#211C27" />
            </linearGradient>
          </defs>

          {/* Browser Chrome */}
          <rect x="0" y="0" width="520" height="340" rx="14" fill="url(#browserBg)" stroke="#3B342C" strokeWidth="1.5" />
          <rect x="0" y="0" width="520" height="36" rx="14" fill="#2E2822" />
          <line x1="0" y1="36" x2="520" y2="36" stroke="#3B342C" strokeWidth="1" />
          <circle cx="20" cy="18" r="4.5" fill="#E06C75" opacity="0.85" />
          <circle cx="36" cy="18" r="4.5" fill="#E5C07B" opacity="0.85" />
          <circle cx="52" cy="18" r="4.5" fill="#98C379" opacity="0.85" />
          
          <rect x="120" y="8" width="280" height="20" rx="6" fill="#171512" stroke="rgba(200, 180, 150, 0.2)" strokeWidth="1" />
          <text x="260" y="22" fill="#9E9282" fontSize="10" fontFamily="monospace" textAnchor="middle">abhinav-moviewatchlist.vercel.app</text>

          {/* Inner Content */}
          <text x="24" y="65" fill="#F4EFE6" fontSize="15" fontFamily="sans-serif" fontWeight="700">CineVault</text>
          <text x="96" y="65" fill="#CBB494" fontSize="11" fontFamily="sans-serif" fontWeight="600">• OMDb Sync</text>
          
          <rect x="24" y="80" width="310" height="32" rx="6" fill="#1A1714" stroke="#3B342C" strokeWidth="1" />
          <text x="40" y="100" fill="#807669" fontSize="11" fontFamily="sans-serif">Search movies, series & actors...</text>
          
          <rect x="345" y="80" width="70" height="32" rx="6" fill="#CBB494" />
          <text x="380" y="100" fill="#171512" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">Watchlist (8)</text>

          <rect x="424" y="80" width="72" height="32" rx="6" fill="#2D2721" stroke="#3B342C" />
          <text x="460" y="100" fill="#B3A898" fontSize="11" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">Watched (14)</text>

          {/* Movie Cards */}
          <rect x="24" y="126" width="148" height="194" rx="10" fill="#24201B" stroke="rgba(200, 180, 150, 0.2)" strokeWidth="1" />
          <rect x="32" y="134" width="132" height="106" rx="6" fill="url(#poster1)" />
          <rect x="40" y="142" width="34" height="16" rx="4" fill="#13110E" opacity="0.9" />
          <text x="57" y="154" fill="#CBB494" fontSize="9" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">8.8 ★</text>
          <text x="36" y="258" fill="#F4EFE6" fontSize="12" fontFamily="sans-serif" fontWeight="600">Inception</text>
          <text x="36" y="274" fill="#998F80" fontSize="10" fontFamily="sans-serif">2010 • Sci-Fi / Action</text>
          <rect x="36" y="286" width="124" height="24" rx="5" fill="#322C25" stroke="rgba(200, 180, 150, 0.25)" />
          <text x="98" y="302" fill="#CBB494" fontSize="10" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">✓ In Watchlist</text>

          <rect x="186" y="126" width="148" height="194" rx="10" fill="#24201B" stroke="rgba(200, 180, 150, 0.1)" strokeWidth="1" />
          <rect x="194" y="134" width="132" height="106" rx="6" fill="url(#poster2)" />
          <rect x="202" y="142" width="34" height="16" rx="4" fill="#13110E" opacity="0.9" />
          <text x="219" y="154" fill="#CBB494" fontSize="9" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">9.0 ★</text>
          <text x="198" y="258" fill="#F4EFE6" fontSize="12" fontFamily="sans-serif" fontWeight="600">The Dark Knight</text>
          <text x="198" y="274" fill="#998F80" fontSize="10" fontFamily="sans-serif">2008 • Crime / Drama</text>
          <rect x="198" y="286" width="124" height="24" rx="5" fill="#322C25" stroke="rgba(200, 180, 150, 0.15)" />
          <text x="260" y="302" fill="#B3A898" fontSize="10" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">+ Add to List</text>

          <rect x="348" y="126" width="148" height="194" rx="10" fill="#24201B" stroke="rgba(200, 180, 150, 0.1)" strokeWidth="1" />
          <rect x="356" y="134" width="132" height="106" rx="6" fill="url(#poster3)" />
          <rect x="364" y="142" width="34" height="16" rx="4" fill="#13110E" opacity="0.9" />
          <text x="381" y="154" fill="#CBB494" fontSize="9" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">8.6 ★</text>
          <text x="360" y="258" fill="#F4EFE6" fontSize="12" fontFamily="sans-serif" fontWeight="600">Interstellar</text>
          <text x="360" y="274" fill="#998F80" fontSize="10" fontFamily="sans-serif">2014 • Adventure</text>
          <rect x="360" y="286" width="124" height="24" rx="5" fill="#322C25" stroke="rgba(200, 180, 150, 0.15)" />
          <text x="422" y="302" fill="#B3A898" fontSize="10" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">+ Add to List</text>
        </svg>
      </div>
    );
  }

  // Chef Claude
  return (
    <div className="project-mockup-wrapper web-frame" role="img" aria-label={`${title} web application interface`}>
      <svg viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="mockup-svg">
        <defs>
          <linearGradient id="aiBg" x1="0" y1="0" x2="520" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#25221E" />
            <stop offset="100%" stopColor="#1A1815" />
          </linearGradient>
          <linearGradient id="recipeCardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#302A24" />
            <stop offset="100%" stopColor="#201C18" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="520" height="340" rx="14" fill="url(#aiBg)" stroke="#3B342C" strokeWidth="1.5" />
        <rect x="0" y="0" width="520" height="36" rx="14" fill="#2E2822" />
        <line x1="0" y1="36" x2="520" y2="36" stroke="#3B342C" strokeWidth="1" />
        <circle cx="20" cy="18" r="4.5" fill="#E06C75" opacity="0.85" />
        <circle cx="36" cy="18" r="4.5" fill="#E5C07B" opacity="0.85" />
        <circle cx="52" cy="18" r="4.5" fill="#98C379" opacity="0.85" />
        
        <rect x="120" y="8" width="280" height="20" rx="6" fill="#171512" stroke="rgba(200, 180, 150, 0.2)" strokeWidth="1" />
        <text x="260" y="22" fill="#9E9282" fontSize="10" fontFamily="monospace" textAnchor="middle">abhinav-chefclaude.vercel.app</text>

        <text x="24" y="66" fill="#F4EFE6" fontSize="16" fontFamily="sans-serif" fontWeight="700">Chef Claude</text>
        <rect x="126" y="52" width="140" height="20" rx="10" fill="rgba(203, 180, 148, 0.15)" stroke="rgba(203, 180, 148, 0.3)" />
        <text x="196" y="66" fill="#CBB494" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">Mixtral-8x7B • HuggingFace</text>

        {/* Left Column: Ingredients */}
        <rect x="24" y="84" width="200" height="236" rx="10" fill="#1E1B17" stroke="#38322B" strokeWidth="1" />
        <text x="38" y="106" fill="#F4EFE6" fontSize="12" fontFamily="sans-serif" fontWeight="600">Available Ingredients</text>
        <text x="38" y="122" fill="#8C8275" fontSize="10" fontFamily="sans-serif">Add at least 3 items to cook</text>

        <rect x="38" y="134" width="76" height="22" rx="6" fill="#322C25" stroke="rgba(200, 180, 150, 0.2)" />
        <text x="76" y="149" fill="#CBB494" fontSize="10" fontFamily="sans-serif" textAnchor="middle">✦ Avocados</text>

        <rect x="122" y="134" width="86" height="22" rx="6" fill="#322C25" stroke="rgba(200, 180, 150, 0.2)" />
        <text x="165" y="149" fill="#CBB494" fontSize="10" fontFamily="sans-serif" textAnchor="middle">✦ Sourdough</text>

        <rect x="38" y="164" width="68" height="22" rx="6" fill="#322C25" stroke="rgba(200, 180, 150, 0.2)" />
        <text x="72" y="179" fill="#CBB494" fontSize="10" fontFamily="sans-serif" textAnchor="middle">✦ Garlic</text>

        <rect x="114" y="164" width="60" height="22" rx="6" fill="#322C25" stroke="rgba(200, 180, 150, 0.2)" />
        <text x="144" y="179" fill="#CBB494" fontSize="10" fontFamily="sans-serif" textAnchor="middle">✦ Lime</text>

        <rect x="38" y="194" width="80" height="22" rx="6" fill="#322C25" stroke="rgba(200, 180, 150, 0.2)" />
        <text x="78" y="209" fill="#CBB494" fontSize="10" fontFamily="sans-serif" textAnchor="middle">✦ Olive Oil</text>

        <rect x="38" y="272" width="172" height="34" rx="8" fill="#CBB494" />
        <text x="124" y="293" fill="#171512" fontSize="11" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">⚡ Generate Recipe</text>

        {/* Right Column: Recipe Output */}
        <rect x="236" y="84" width="260" height="236" rx="10" fill="url(#recipeCardGrad)" stroke="rgba(200, 180, 150, 0.25)" strokeWidth="1" />
        <rect x="250" y="100" width="70" height="18" rx="4" fill="rgba(82, 183, 136, 0.15)" stroke="rgba(82, 183, 136, 0.3)" />
        <text x="285" y="112" fill="#52B788" fontSize="9" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">AI CHEF RECIPE</text>
        <text x="250" y="138" fill="#F4EFE6" fontSize="13" fontFamily="sans-serif" fontWeight="700">Artisan Guacamole Bruschetta</text>
        <text x="250" y="154" fill="#998F80" fontSize="10" fontFamily="sans-serif">Prep time: 10 mins • Yields: 2 servings</text>

        <line x1="250" y1="166" x2="480" y2="166" stroke="#3E372E" strokeWidth="1" />

        <circle cx="256" cy="182" r="3" fill="#CBB494" />
        <text x="268" y="186" fill="#D4CBC0" fontSize="10" fontFamily="sans-serif">Toast sourdough with rubbed garlic</text>

        <circle cx="256" cy="202" r="3" fill="#CBB494" />
        <text x="268" y="206" fill="#D4CBC0" fontSize="10" fontFamily="sans-serif">Coarsely mash ripe avocados with lime</text>

        <circle cx="256" cy="222" r="3" fill="#CBB494" />
        <text x="268" y="226" fill="#D4CBC0" fontSize="10" fontFamily="sans-serif">Drizzle extra virgin olive oil & sea salt</text>

        <rect x="250" y="244" width="232" height="62" rx="6" fill="#181512" stroke="#3A332B" />
        <text x="260" y="262" fill="#CBB494" fontSize="9.5" fontFamily="monospace">Markdown Response Streamed</text>
        <text x="260" y="278" fill="#8C8275" fontSize="9" fontFamily="sans-serif">Rendered with Tailwind CSS & dynamic state</text>
        <text x="260" y="294" fill="#8C8275" fontSize="9" fontFamily="sans-serif">Direct inference from Mixtral-8x7B model</text>
      </svg>
    </div>
  );
};
