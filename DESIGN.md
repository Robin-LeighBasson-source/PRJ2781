# Morrow Design System

## Direction

Morrow uses the clarity of a career platform with the visual confidence of a premium culture brand. The homepage is image-led, spacious, and direct. It avoids corporate job-board blue, generic SaaS cards, fake statistics, and unverified partner claims.

## Colour

All interface colours are expressed in OKLCH tokens in `src/styles.css`.

- Light sage is the main brand field and signature colour.
- A darker moss green carries readable headings and primary actions.
- True white and near-black form the architectural base.
- Coral and sky blue appear as controlled role and image accents.
- Semantic tints are used for internship and graduate-role tags.

## Typography

Manrope Variable is hosted locally through `@fontsource-variable/manrope`. Display headings use strong scale contrast, tight but legible tracking, and balanced wrapping. Body copy stays at or above `1rem` with generous line-height and restrained measure.

## Layout

- Mobile-first CSS with content-driven changes at `40rem` and `64rem`.
- A 4-point spacing family underpins gaps and padding.
- Marketing sections use fluid spacing; opportunity rows use a denser product rhythm.
- Desktop uses an asymmetric hero and split brand statement. Mobile becomes a deliberate single-column composition.

## Components

- Sticky navigation with a full-screen mobile menu.
- Search shell with role and location fields.
- Responsive opportunity rows that collapse into readable mobile blocks.
- Portal motif built in CSS so it remains sharp at every size.
- Near-black footer with internal navigation and a newsletter placeholder.
- Toast feedback explains where future backend behavior will connect.

## Interaction

Controls have visible keyboard focus and minimum touch-friendly sizing. Motion is limited to the initial hero composition, menu transitions, button feedback, and toast feedback. `prefers-reduced-motion` removes non-essential animation.
