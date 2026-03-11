import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoScrollScrubProps {
    videoSrc: string;
    playbackRate?: number;
    zoom?: number;
    className?: string;
    triggerStart?: string;
    triggerEnd?: string;
}

const VideoScrollScrub: React.FC<VideoScrollScrubProps> = ({
    videoSrc,
    playbackRate = 1,
    zoom = 1.15,
    className = "",
    triggerStart = "top top",
    triggerEnd = "bottom bottom"
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        // Force video to load
        video.load();

        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: triggerStart,
            end: triggerEnd,
            scrub: true,
            onUpdate: (self) => {
                if (video.duration) {
                    // Scrub video frame based on scroll progress
                    // We use the video's currentTime to "scrub"
                    video.currentTime = video.duration * self.progress;
                }
            }
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [triggerStart, triggerEnd]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
            />
            {/* Watermark Protection Overlay */}
            <div className="absolute bottom-4 right-4 w-20 h-6 bg-[#0B0F14]/60 backdrop-blur-sm rounded-sm z-20 pointer-events-none" />

            <div className="absolute inset-0 bg-transparent pointer-events-none" />
        </div>
    );
};

export default VideoScrollScrub;
