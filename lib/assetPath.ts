/**
 * Helper function to get the correct asset path with basePath prefix
 * Used for GitHub Pages deployment where basePath is '/personnal-website'
 */
export function assetPath(path: string): string {
    // In Next.js with basePath, we need to prefix all asset paths
    // This ensures images and videos load correctly on GitHub Pages
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/personnal-website';
    
    // If the path already starts with the basePath, don't double it
    if (path.startsWith(basePath)) {
        return path;
    }
    
    // Remove leading slash if present and add basePath
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
}
