'use client';

import { GoogleTagManager as NextGoogleTagManager } from '@next/third-parties/google';

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
    return <NextGoogleTagManager gtmId={gtmId} />;
}