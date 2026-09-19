# Navigation and CEO Profile Layout Fix

## Changes
- Add global page navigation behavior so internal links open at the top of the destination page on mobile, tablet, and desktop, while preserving deliberate in-page anchor links.
- Rework the CEO hero into a clean, stable two-column layout with a properly framed portrait, readable title, and buttons that never clip or overlap.
- Replace excessive pill and circular styling across the CEO page with restrained small-radius panels and square icon treatments.
- Rebuild the Leadership at NETREX section so its cards and text remain fully visible at every screen size.
- Expand capabilities into four clear groups: Technical, Leadership, Marketing and Sales, and Management.

## Validation
- Check the CEO page at mobile, tablet, and desktop widths for text overflow, image cropping, overlap, and contrast.
- Test navigation between several pages and confirm each destination starts at its hero/top section.
- Confirm the preview builds without errors.

## Technical details
- Add a route-change scroll handler inside the existing router.
- Keep hash links such as `#contact` and `#profile` working as intentional section navigation.
- Use existing semantic colors and established NETREX styling throughout.
