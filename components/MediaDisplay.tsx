'use client';

interface MediaDisplayProps {
    image?: string;
    video?: string;
    alt: string;
    className?: string;
}

export default function MediaDisplay({ image, video, alt, className = '' }: MediaDisplayProps) {
    // Video takes priority if both exist
    if (video) {
        return (
            <video
                className={`w-full h-full object-cover ${className}`}
                controls
                loop
                muted
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    if (image) {
        return (
            <img
                src={image}
                alt={alt}
                className={`w-full h-full object-cover ${className}`}
                loading="lazy"
            />
        );
    }

    return null;
}
