import type { CartelLink, CartelTrack } from '@/lib/cartels';

interface Props {
    tracks?: CartelTrack[];
    links?: CartelLink[];
    language: 'fr' | 'en';
}

export default function MusicSelection({ tracks = [], links = [], language }: Props) {
    if (tracks.length === 0 && links.length === 0) return null;
    const fr = language === 'fr';
    const heading =
        tracks.length > 1 ? (fr ? 'Sélection musicale' : 'Musical selection') : fr ? 'À écouter' : 'Listen';

    return (
        <div className="mt-8 space-y-6">
            {links.map((link) => (
                <p key={link.url} className="text-sm text-charcoal/70">
                    <span className="uppercase tracking-widest text-xs font-semibold text-charcoal/60">
                        {link.intro[language]}
                    </span>
                    {' : '}
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-charcoal hover:text-cyanotype"
                    >
                        {link.label} ↗
                    </a>
                </p>
            ))}

            {tracks.length > 0 && (
                <div>
                    <h2 className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold mb-3">{heading}</h2>
                    <ul className="space-y-2">
                        {tracks.map((track, i) => {
                            const name = [track.artist, track.title].filter(Boolean);
                            return (
                                <li key={track.url}>
                                    <a
                                        href={track.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-4 border-l-2 border-cyanotype/40 hover:border-cyanotype bg-charcoal/5 hover:bg-charcoal/10 pl-4 pr-3 py-2.5 transition-colors"
                                    >
                                        <span className="min-w-0 text-charcoal/80">
                                            {name.length > 0 ? (
                                                <>
                                                    {track.artist && <span className="font-semibold">{track.artist}</span>}
                                                    {track.artist && track.title && <span className="text-charcoal/50"> – </span>}
                                                    {track.title && <span>{track.title}</span>}
                                                </>
                                            ) : (
                                                <span>{fr ? `Morceau ${i + 1}` : `Track ${i + 1}`}</span>
                                            )}
                                        </span>
                                        <span className="shrink-0 text-xs uppercase tracking-widest text-cyanotype group-hover:underline">
                                            {fr ? 'Écouter' : 'Listen'} ↗
                                            <span className="sr-only"> (YouTube)</span>
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
