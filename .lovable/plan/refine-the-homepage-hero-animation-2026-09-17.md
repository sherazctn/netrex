# Refine the homepage hero animation

## Goal
Make the technology animation feel intentional, responsive, and uncluttered instead of sending every logo through the same motion and producing excessive circles.

## Changes
- Give technology logos several distinct paths, directions, speeds, and entry points while keeping them evenly spaced.
- Make nearby logos react naturally to mouse and touch movement with gentle repulsion and depth, without moving the center logo.
- Replace the repeated hover halos with a single restrained focus treatment and readable logo label.
- Reduce decorative rings, particles, trails, and exit fragments so only meaningful motion remains.
- Trigger one subtle radar pulse when a logo approaches the core and one compact splash when it exits.
- Preserve a calm static layout for reduced-motion visitors and lower visual density on smaller screens.

## Verification
- Check the homepage at desktop and mobile widths.
- Test pointer movement, logo hover, touch interaction, exit effects, and reduced-motion behavior.
- Confirm there are no overlaps, animation errors, or page performance regressions.

## Technical details
- Refactor `TechBurstOrbit` path generation and interaction state.
- Simplify the supporting SVG layers in the homepage hero while keeping existing semantic color tokens and the fixed NETREX center.
