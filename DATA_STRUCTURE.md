# Data Structure Guide

This document explains the data structures in `lib/data.ts` and how to add new works.

## Overview

The portfolio uses a simple, TypeScript-based data system defined in `lib/data.ts`. All works (GIFs and cyanotypes) are stored as objects in arrays, making it easy to add new content without touching components.

## Data Types

### Work Interface

```typescript
interface Work {
  id: string;              // Unique identifier (e.g., 'live-001')
  title: string;           // Display title
  type: 'live' | 'cyanotype';  // Category
  image?: string;          // Path to main image
  sourceImage?: string;    // Path to source image (cyanotypes only)
  date?: string;           // Date in any format (e.g., '2024-01-15' or '2024')
  location?: string;       // Location (live images)
  artist?: string;         // Artist/musician name (live images)
  description?: string;    // Descriptive text
  technique?: string;      // Technique used (cyanotypes)
  dimensions?: string;     // Print dimensions (cyanotypes)
  credits?: string;        // Credits/attribution
  instagramUrl?: string;   // Instagram link (optional)
}
```

### Project Interface

```typescript
interface Project {
  id: string;              // Unique identifier
  title: string;           // Display title
  slug: string;            // URL-friendly slug
  type: 'live' | 'cyanotype';  // Category
  description: string;     // Project description
  image: string;           // Thumbnail/cover image
  year?: number;           // Optional year
  works: string[];         // Array of work IDs in this project
}
```

---

## Live Images Array

### Example Work

```typescript
{
  id: 'live-001',
  title: 'Concertina Performance',
  type: 'live',
  image: '/images/live/concertina_1.gif',
  date: '2024',
  description: 'Concertina player in motion',
}
```

### Adding a Live Image

1. Save your GIF to `public/images/live/your-image.gif`

2. Add to `liveWorks` array:

```typescript
{
  id: 'live-012',           // Next available number
  title: 'Concert Name',    // Display title
  type: 'live',             // Always 'live' for GIFs
  image: '/images/live/your-image.gif',  // Path to file
  date: '2024-01-15',       // Concert date (required)
  location: 'Venue Name',   // Optional: where it was taken
  artist: 'Band/Artist',    // Optional: who was performing
  description: 'Brief description',  // Optional but recommended
}
```

### Required vs Optional Fields

| Field | Required | Example |
|-------|----------|---------|
| id | ✓ | 'live-012' |
| title | ✓ | 'Concertina Performance' |
| type | ✓ | 'live' |
| image | ✓ | '/images/live/concert.gif' |
| date | - | '2024-01-15' |
| location | - | 'Paris Concert Hall' |
| artist | - | 'Marie Dubois' |
| description | - | 'Captured during opening act' |

---

## Cyanotypes Array

### Example Work

```typescript
{
  id: 'cyan-001',
  title: 'Cyanotype Study #1',
  type: 'cyanotype',
  image: '/images/cyanotypes/cyanotype-01.png',
  sourceImage: '/images/sources/source-01.png',
  date: '2024',
  technique: 'Cyanotype print on paper',
  dimensions: 'A4 (21 × 29.7 cm)',
  credits: 'Pierre Banwarth, image source. Printed by [Name]',
  description: 'Exploration of tonal range and material',
}
```

### Adding a Cyanotype

1. Save your print image to `public/images/cyanotypes/print-name.png`

2. Optionally save source to `public/images/sources/source-name.png`

3. Add to `cyanotypeWorks` array:

```typescript
{
  id: 'cyan-002',           // Next available number
  title: 'Print Title',     // Display title
  type: 'cyanotype',        // Always 'cyanotype'
  image: '/images/cyanotypes/my-print.png',  // Path to print
  sourceImage: '/images/sources/my-source.png',  // Optional
  date: '2024-01-15',       // Creation/print date
  technique: 'Cyanotype print on paper',  // Technical info
  dimensions: 'A4',         // Print size
  credits: 'Pierre Banwarth, image. Printed by [Name]',  // Credits
  description: 'About this work...',  // Description
}
```

### Required vs Optional Fields

| Field | Required | Example |
|-------|----------|---------|
| id | ✓ | 'cyan-002' |
| title | ✓ | 'Study in Blue' |
| type | ✓ | 'cyanotype' |
| image | ✓ | '/images/cyanotypes/study.png' |
| sourceImage | - | '/images/sources/original.png' |
| date | - | '2024-01-15' |
| technique | - | 'Cyanotype on cotton paper' |
| dimensions | - | '20 × 30 cm' |
| credits | - | 'Printer Name' |
| description | - | 'Artistic notes' |

---

## File Naming Conventions

### For IDs
- Live images: `live-001`, `live-002`, etc.
- Cyanotypes: `cyan-001`, `cyan-002`, etc.
- Increment by 1 for new works

### For Image Files
Use clear, lowercase names with hyphens:
- ✓ Good: `concert-paris-2024.gif`
- ✓ Good: `silhouette-study.gif`
- ✗ Bad: `image 1.gif` (spaces)
- ✗ Bad: `CONCERT.GIF` (mixed case)
- ✗ Bad: `new_concert_v2_final.gif` (too complex)

### Directory Structure
```
public/images/
├── live/
│   ├── concertina_1.gif
│   ├── danseur.gif
│   └── new-concert.gif     ← Add new GIFs here
├── cyanotypes/
│   ├── cyanotype-01.png
│   └── study-blue.png      ← Add print images here
└── sources/
    ├── source-01.png
    └── original-photo.png   ← Add source images here (optional)
```

---

## Date Format

Use any consistent format. Examples:
- `'2024'` — Year only
- `'2024-01'` — Year-month
- `'2024-01-15'` — Full date (ISO 8601)
- `'January 15, 2024'` — Readable format
- `'Jan 2024'` — Abbreviated

Displayed as-is on the website, so use a format readable to your audience.

---

## Text Fields

### Title
- Keep under 50 characters ideally
- Use sentence case: "Concert at the Paris Hall"
- Avoid ALL CAPS

### Description
- 1-2 sentences
- Explain the photograph or its context
- Keep it concise

### Technique
- Describe the photographic/printing process
- Example: "Cyanotype print on cotton paper"
- Example: "Game Boy Camera, GIF animation"

### Credits
- Mention collaborators
- Format: "Pierre Banwarth, photograph. [Name], printing."
- Or: "Photo by Pierre Banwarth. Print by [Name]."

### Dimensions
- Use standard formats: `A4`, `30 × 40 cm`, `12 × 16 inches`
- Be consistent in your measurements

---

## Gallery Structure

### How Works Appear

**Live Images Page** (`/live-images`):
- 3-column grid on desktop
- All works from `liveWorks` array
- Sorted in array order

**Cyanotypes Page** (`/cyanotypes`):
- 2-column grid on desktop
- All works from `cyanotypeWorks` array
- Sorted in array order
- Shows source image if provided

**Homepage** (`/`):
- First 3 live images as "Featured Works"
- Link to full galleries

### Changing Display Order

Change the order works appear by rearranging their position in the array:

```typescript
export const liveWorks: Work[] = [
  // First work appears first
  { id: 'live-001', ... },
  // Second work appears second
  { id: 'live-002', ... },
  // Add new works to control position
  { id: 'live-012', ... },
];
```

---

## Complete Example: Adding a New Live Image

### Step 1: Prepare Image
- File: `happy-concert.gif`
- Location: `public/images/live/happy-concert.gif`

### Step 2: Update lib/data.ts

Find `liveWorks` array and add:

```typescript
export const liveWorks: Work[] = [
  // ... existing works ...
  {
    id: 'live-012',
    title: 'Happy Concert',
    type: 'live',
    image: '/images/live/happy-concert.gif',
    date: '2024-02-14',
    location: 'Brussels Music Hall',
    artist: 'The Happy Band',
    description: 'Drummer caught mid-rhythm, contrast-rich moment.',
  },
];
```

### Step 3: Done!
- No component changes needed
- Gallery updates automatically
- Site rebuilds if running `npm run dev`

---

## Complete Example: Adding a New Cyanotype

### Step 1: Prepare Images
- Print file: `portrait-study.png` → `public/images/cyanotypes/`
- Source file: `portrait-original.png` → `public/images/sources/`

### Step 2: Update lib/data.ts

Find `cyanotypeWorks` array and add:

```typescript
export const cyanotypeWorks: Work[] = [
  // ... existing works ...
  {
    id: 'cyan-003',
    title: 'Portrait Study',
    type: 'cyanotype',
    image: '/images/cyanotypes/portrait-study.png',
    sourceImage: '/images/sources/portrait-original.png',
    date: '2024-02-14',
    technique: 'Cyanotype on cotton paper',
    dimensions: '18 × 24 cm',
    credits: 'Pierre Banwarth, photograph. Anne Lambert, printing.',
    description: 'Exploration of face and form through historical process.',
  },
];
```

### Step 3: Done!
- Gallery updates automatically
- Print and source display together

---

## Troubleshooting Data

### Gallery Not Showing New Works
1. Check ID is unique (no duplicates)
2. Verify image path is correct
3. Ensure image file exists in `public/images/`
4. Restart `npm run dev` if needed

### Image Path Issues
- Always use lowercase with hyphens: `my-image.gif`
- Must start with `/images/`
- Must include file extension: `.gif`, `.png`, `.jpg`
- On Windows, paths use forward slashes `/` (not backslashes `\`)

### Special Characters
- Avoid é, à, ö in filenames (use e, a, o instead)
- Use hyphens for spaces: `concert-paris-2024.gif`
- Avoid special characters like `!`, `@`, `#`, `$`

---

## TypeScript Safety

The data system uses TypeScript interfaces for type checking. This means:

✓ IDE autocomplete suggests field names
✓ Errors highlight before build
✓ Required fields are enforced
✓ Type mismatch caught immediately

If you see TypeScript errors in your editor:
1. Verify all required fields are present
2. Check spelling of field names
3. Ensure type matches (string, not number, etc.)

---

## Next Steps

1. Open `lib/data.ts` in your editor
2. Add new works to the appropriate array
3. Save the file
4. If `npm run dev` is running, page updates immediately
5. If not running, start it: `npm run dev`
6. Visit http://localhost:3000 to see changes

For more info, see `PORTFOLIO_README.md` and `QUICK_START.md`.
