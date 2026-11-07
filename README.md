# Daruj krv, spasi život

Website of the Croatian Red Cross city branch in Buje (Hrvatski Crveni križ,
Gradsko društvo Crvenog križa Buje). It encourages blood donation in Umag, Buje
and Novigrad and lists upcoming donation events.

Built with Next.js, React and TypeScript, using plain CSS Modules. There is no
backend: all content lives in the repository.

## Getting started

This project uses [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

The site runs at <http://localhost:3005>.

| Command       | What it does                       |
| ------------- | ---------------------------------- |
| `pnpm dev`    | Starts the development server      |
| `pnpm build`  | Creates a production build         |
| `pnpm start`  | Serves the production build        |
| `pnpm lint`   | Checks and fixes code with Biome   |
| `pnpm format` | Formats code with Biome            |

## Updating content

All text is in [`src/content/page-content.ts`](src/content/page-content.ts).

To add a donation event, add an entry to `donationActions`. Keep the title in
the `DD.MM.YYYY. – Place` format, because the event list splits it into the date
and the place. The `HH:MM - HH:MM` hours in `time` also set the event's calendar
entry and search data:

```ts
{
    date: new Date('2027-01-15'),
    title: '15.01.2027. – Grad Umag',
    time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
    location: 'Zajednica Talijana Umag',
    address: 'Brolo 1, 52470 Umag',
    description:
        'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
},
```

The description only appears when the time, location or address is missing. When
no upcoming events remain, the page shows a "new dates soon" message instead.

The questions in the "Mogu li darivati?" check are in `eligibilityQuestions`.

An event stays listed through its whole day. The page regenerates hourly, so
finished events drop off without a new deployment when the site runs on a Node.js
server or on Vercel.

## Project structure

- `src/app`: page, metadata and global styles
- `src/components/sections`: page sections, each with its own CSS Module
- `src/components/illustrations`: animated drawings on the benefit posters
- `src/components/motion`: scroll-triggered reveals and progress
- `public/IMAGE-ATTRIBUTION.md`: photo credits
