/**
 * Helper function to get the correct asset path with basePath prefix
 * Used for deployments that may have a basePath configuration
 */
export function assetPath(path: string): string {
    // Get basePath from environment variable (empty string for root domain)
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    
    // If basePath is empty or the path already starts with the basePath, return as-is
    if (!basePath || path.startsWith(basePath)) {
        return path;
    }
    
    // Remove leading slash if present and add basePath
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
}
