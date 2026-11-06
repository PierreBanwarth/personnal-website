import Link from 'next/link';
import { cartels } from '@/lib/cartels';

export default function CartelsIndexPage() {
    return (
        <div className="bg-warm-white min-h-[70vh]">
            <section className="max-w-2xl mx-auto px-6 py-12 md:py-20">
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">Cartels</h1>
                <ul className="space-y-3">
                    {cartels.map((c) => (
                        <li key={c.slug}>
                            <Link href={`/cartels/${c.slug}`} className="text-charcoal underline">
                                {c.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
