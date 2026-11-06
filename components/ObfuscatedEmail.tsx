'use client';

import { useState } from 'react';
import { useT } from '@/lib/useT';

// Adresse encodée en base64 et décodée seulement au clic, pour échapper aux scrapers.
const ENCODED = 'cGkuYmFud2FydGhAZ21haWwuY29t';

export default function ObfuscatedEmail({ className = '' }: { className?: string }) {
    const t = useT();
    const [address, setAddress] = useState<string | null>(null);

    if (address) {
        return (
            <a href={`mailto:${address}`} className={`break-all ${className}`}>
                {address}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setAddress(atob(ENCODED))}
            className={`underline underline-offset-2 ${className}`}
        >
            {t('contact.showEmail')}
        </button>
    );
}
