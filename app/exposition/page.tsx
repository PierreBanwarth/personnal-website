import { cartels } from '@/lib/cartels';
import { getCartelImages } from '@/lib/cartelImages';
import ExpositionContent from '@/components/ExpositionContent';

export default function ExpositionPage() {
    const cards = cartels.map((c) => {
        const images = getCartelImages(c.slug, c.group?.prefix);
        return {
            slug: c.slug,
            title: { fr: c.title, en: c.en.title },
            // Photo du cadre ; à défaut, l'œuvre elle-même
            thumb: images.frame ?? images.main ?? images.originals[0] ?? images.others[0],
            framed: !!images.frame,
        };
    });

    return (
        <div className="bg-warm-white min-h-screen">
            <ExpositionContent cards={cards} />
        </div>
    );
}
