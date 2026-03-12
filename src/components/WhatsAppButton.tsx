import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "94714811047";
    const message = encodeURIComponent("Architectural Inquiry [SmartClean]: I would like to schedule a site assessment for my project.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[2000] group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative flex items-center justify-center w-14 h-14 bg-[#0B0F14]/80 backdrop-blur-xl border border-blueprint-accent/40 rounded-full hover:border-blueprint-accent/80 hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_0_20px_rgba(79,109,255,0.15)] group-hover:shadow-[0_0_30px_rgba(79,109,255,0.3)]">
                {/* Subtle Text Label on Hover */}
                <div className="absolute right-20 bg-blueprint-surface/90 backdrop-blur-md text-[10px] font-bold text-blueprint-text py-2 px-4 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-widest translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
                    Live Uplink
                </div>

                {/* Subtle Pulse Effect */}
                <div className="absolute inset-0 rounded-full border border-blueprint-accent/20 animate-ping opacity-20" />
                
                <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-blueprint-accent fill-none stroke-current stroke-[1.5]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            </div>
        </a>
    );
};

export default WhatsAppButton;
