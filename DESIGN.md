---
version: alpha
name: web.dev
description: >-
  Google's authoritative resource for modern web development, delivering technical education and best practices through
  a clean, accessible interface that prioritizes clarity and developer productivity.
logo:
  src: >-
    https://www.gstatic.com/devrel-devsite/prod/v6c08f9bb601564cd99488472d05cdf6fb06f007f31b6552465782b15883ce123/web/images/lockup.svg
colors:
  surface: '#ffffff'
  surface-dim: '#f5f5f5'
  surface-bright: '#ffffff'
  surface-container-lowest: '#fafbff'
  surface-container-low: '#f7f9ff'
  surface-container: '#f5faff'
  surface-container-high: '#ecf3fe'
  surface-container-highest: '#e8f0fe'
  on-surface: '#202124'
  on-surface-variant: '#5f6368'
  inverse-surface: '#202124'
  inverse-on-surface: '#f8f9fa'
  outline: '#8ab4f8'
  outline-variant: '#bdc1c6'
  surface-tint: '#1b6ef3'
  primary: '#1b6ef3'
  on-primary: '#ffffff'
  primary-container: '#e8f0fe'
  on-primary-container: '#0b57d0'
  inverse-primary: '#a8c7fa'
  secondary: '#047db7'
  on-secondary: '#ffffff'
  secondary-container: '#c2e7ff'
  on-secondary-container: '#003d7a'
  tertiary: '#0f5223'
  on-tertiary: '#ffffff'
  tertiary-container: '#beefbb'
  on-tertiary-container: '#002110'
  error: '#b3261e'
  on-error: '#ffffff'
  error-container: '#f9dedc'
  on-error-container: '#410e0b'
  primary-fixed: '#e8f0fe'
  primary-fixed-dim: '#d3e3fd'
  on-primary-fixed: '#0b57d0'
  on-primary-fixed-variant: '#1b6ef3'
  secondary-fixed: '#c2e7ff'
  secondary-fixed-dim: '#7fcfff'
  on-secondary-fixed: '#003d7a'
  on-secondary-fixed-variant: '#047db7'
  tertiary-fixed: '#beefbb'
  tertiary-fixed-dim: '#80da88'
  on-tertiary-fixed: '#002110'
  on-tertiary-fixed-variant: '#0f5223'
  background: '#ffffff'
  on-background: '#202124'
  surface-variant: '#e8eaed'
typography:
  display:
    fontFamily: Google Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Google Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: '-0.01em'
  headline-md:
    fontFamily: Google Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0em
  title-lg:
    fontFamily: Google Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Google Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Google Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Google Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 50%
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
elevation:
  sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.03)
  md: 0 3px 8px rgba(0, 0, 0, 0.15)
  lg: 0 8px 24px rgba(0, 0, 0, 0.12)
layout:
  containerMaxWidth: 1280px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 40px
    border: none
  button-primary-hover:
    backgroundColor: '#0b57d0'
    boxShadow: '{elevation.md}'
  button-primary-focus:
    backgroundColor: '#0b57d0'
    outline: 2px solid {colors.primary}
    outlineOffset: 2px
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 40px
    border: 2px solid {colors.primary}
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  card:
    backgroundColor: '{colors.surface-container-lowest}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.sm}'
    border: 1px solid {colors.outline-variant}
  card-hover:
    backgroundColor: '{colors.surface-container-low}'
    boxShadow: '{elevation.md}'
  input-field:
    backgroundColor: '{colors.surface-dim}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    padding: 8px 16px
    border: 1px solid {colors.outline-variant}
    height: 40px
  input-field-focus:
    backgroundColor: '{colors.surface}'
    border: 2px solid {colors.primary}
    boxShadow: 0 0 0 3px rgba(27, 110, 243, 0.1)
  badge:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
    display: inline-block
  link:
    textColor: '{colors.primary}'
    typography: '{typography.body-md}'
    textDecoration: none
    borderBottom: 1px solid transparent
  link-hover:
    textColor: '#0b57d0'
    borderBottom: 1px solid {colors.primary}
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    textColor: '{colors.on-surface}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
---

## Overview

web.dev is Google's authoritative developer education platform, embodying a philosophy of 'Technical Clarity through Minimalism.' The design system prioritizes information hierarchy and accessibility, using a vibrant primary blue (#1b6ef3) as the signature accent for interactive elements and calls-to-action, set against a pristine white canvas (#ffffff) with carefully calibrated neutral grays (#202124 for text, #5f6368 for secondary content). The aesthetic is 'Functional Modernism'—rejecting ornament in favor of precision, whitespace, and purposeful color. Every interaction invites the user deeper into technical content without distraction.

The brand voice is authoritative yet approachable: direct, jargon-aware but never gatekeeping, and deeply respectful of developer time. Sentences are active and outcome-focused. Example: 'Optimize Core Web Vitals to improve user experience and search ranking—measure with real-world data, not lab estimates.' The tone avoids hype; instead, it grounds claims in standards, performance metrics, and reproducible techniques.

## Colors

The color system is anchored in a Material 3 semantic structure with a developer-centric twist. Primary (#1b6ef3) is the signature Google blue, used exclusively on CTAs, active states, links, and focus indicators—it commands attention without aggression. The primary container (#e8f0fe) provides a soft background for secondary information or disabled states, maintaining visual continuity. On-primary (#ffffff) ensures maximum contrast for accessibility (WCAG AAA on all text).

Secondary (#047db7) and tertiary (#0f5223) are reserved for status indicators, badges, and supplementary actions; they are never used for primary CTAs. The surface stack (surface #ffffff, surface-container-high #ecf3fe, surface-container-highest #e8f0fe) creates subtle depth without shadows, relying instead on 1px bord

## Typography

The type system uses Google Sans as the primary typeface, paired with Roboto for body copy and Roboto Mono for code samples. Display (56px, 700 weight, -0.02em letter-spacing) anchors hero sections with commanding presence; headline-lg (40px, 600 weight) introduces major sections; headline-md (28px, 600 weight) breaks content into digestible chunks. Body-lg (18px, 400 weight, 28px line-height) is used for introductory paragraphs and feature descriptions, while body-md (16px, 400 weight, 24px line-height) serves as the default paragraph text. Label-md (14px, 500 weight, 0.02em letter-spacing) is applied to buttons, form labels, and metadata; label-sm (12px, 500 weight) for badges and captions. All headlines use negative letter-spacing (-0.01em to -0.02em) to tighten visual weight and improv

## Layout

The layout follows a 12-column grid with a max-width of 1280px, centered on the viewport with symmetric gutters of 24px. Sections are separated by 40px (lg spacing) vertically, creating a rhythm that balances density with breathing room. The container model is fluid up to 1280px, then fixed; this ensures readability on ultra-wide displays without excessive line lengths. Whitespace is semantic: 24px (md spacing) separates related content blocks, 12px (sm spacing) groups tightly related elements (e.g., icon + label), and 4px (xs spacing) is reserved for micro-interactions like focus rings. The gutter (24px) is consistent across all breakpoints, maintaining visual coherence. Hero sections use full-width backgrounds (surface-container-high #ecf3fe) with content constrained to the container max

## Elevation & Depth

Depth is conveyed through subtle shadows and background color shifts rather than dramatic layering. Level 1 (Base): no shadow, surface #ffffff. Level 2 (Cards, inputs): 1px solid border in outline-variant (#bdc1c6) + box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.03). Level 3 (Modals, dropdowns, elevated cards on hover): box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15) + optional background shift to surface-container-high (#ecf3fe). Level 4 (Floating action buttons, tooltips): box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12). Shadows use a key-shadow (sharp, near-black) and ambi

## Shapes

The shape philosophy is 'Precision with Warmth'—sharp corners (4px, 8px) for utilitarian elements, rounded corners (16px, 24px, 50%) for interactive and inviting surfaces. Buttons use full-rounded (50% border-radius) at 40px height, creating a pill shape that feels approachable and modern without sacrificing clarity. Input fields also use 50% border-radius (40px height, 8px padding) to signal interactivity. Cards use 16px border-radius (lg) to balance structure with softness; this radius is applied consistently across all container elements. Badges and status indicators use 50% (full) to empha

## Components

### Action Elements
Buttons are the primary interaction pattern. Button-primary uses background: {colors.primary} (#1b6ef3), text-color: {colors.on-primary} (#ffffff), padding: 12px 24px, height: 40px, border-radius: 50%, and typography: {typography.label-md}. On hover, the background shifts to #0b57d0 (darker primary) with box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15) to signal elevation. On focus, add outline: 2px solid {colors.primary} with outline-offset: 2px. Button-secondary is identical except background: transparent, text-color: {colors.primary}, and border: 2px solid {colors.primary}; on hover, background becomes {colors.surface-container-high} (#ecf3fe). All buttons use transition: all 200ms cubic-bezier(0.2, 0, 0.38, 0.9) for smooth state changes.

### Containers & Surfaces
Cards ar

## Do's and Don'ts

**Do**
- Do use primary (#1b6ef3) exclusively for CTAs, active states, and focus indicators—never for passive content or backgrounds.
- Do maintain 24px gutters and 40px section spacing to preserve the rhythm and prevent visual clutter.
- Do apply full-rounded (50% border-radius) to all interactive elements (buttons, inputs, badges) to signal affordance.
- Do use Google Sans for all UI text and headlines; reserve Roboto for body copy and Roboto Mono for code.
- Do pair shadows with background color shifts (e.g., surface-container-high on hover) rather than relying on shadow alone for depth.
- Do test all text on both light and dark backgrounds to ensure WCAG AAA contrast (minimum 7:1 for normal text, 4.5:1 for large text).

**Don't**
- Don't use secondary (#047db7) or tertiary (#0f5223) for primary CTAs; reserve them for status indicators and supplementary actions only.
- Don't apply border-radius values smaller than 4px (sm) or larger than 24px (xl) outside of full-rounded (50%) contexts—this breaks the shape hierarchy.
- Don't use shadows deeper than 0 8px 24px rgba(0, 0, 0, 0.12); excessive shadow depth contradicts the flat, clarity-focused aesthetic.
- Don't mix typefaces within a single component; use Google Sans for labels/buttons and Roboto only for body paragraphs and extended copy.
- Don't apply color directly to text; always use the on-* token pairs (on-surface, on-primary, on-error) to maintain semantic consistency.
- Don't exceed 1280px container max-width; wider layouts reduce readability and dilute the focused, developer-centric experience.
