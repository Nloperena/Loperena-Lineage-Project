# The Wolf and The Eagle: A Chronicle of the House of Loperena

A beautiful, scroll-based family history website that tells the story of the Loperena family through generations, from the Basque region of Spain to modern-day Florida.

## Features

- **Scroll-Based Presentation**: Navigate through the family history like flipping through a storybook or PowerPoint slides
- **Interactive Family Tree**: Visual representation of the family lineage using Mermaid.js
- **Beautiful Animations**: Smooth transitions and fade-in effects as you scroll
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
FamilyTreeLoperena/
├── app/
│   ├── globals.css          # Global styles and scroll snap configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all narrative sections
├── components/
│   ├── ScrollSection.tsx    # Reusable scroll section component
│   └── FamilyTree.tsx       # Mermaid.js family tree visualization
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Mermaid.js**: Family tree visualization

## Customization

### Adding New Sections

Add new scroll sections by wrapping content in the `ScrollSection` component:

```tsx
<ScrollSection className="bg-gradient-to-b from-gray-900 to-gray-800">
  <div>
    {/* Your content here */}
  </div>
</ScrollSection>
```

### Modifying the Family Tree

Edit the Mermaid diagram code in `components/FamilyTree.tsx` to update family relationships, add members, or change styling.

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Color scheme: Modify Tailwind color classes throughout components

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or deploy using the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## License

Private family project - All rights reserved


