# Changelog

All notable changes to this project will be documented in this file.

## [0.2.1] - 2025-01-27

### Added
- Centralised colour system with CSS custom properties
- `styles/colors.css` file containing all colour variables
- Organised colour variables by category (primary, text, background, accent, etc.)

### Changed
- **BREAKING**: All hardcoded colour values replaced with CSS custom properties
- Updated `styles/styles.css` to use colour variables instead of hex values
- Updated `styles/globals.css` to use colour variables instead of hex values
- Added `colors.css` import to `pages/_app.js` for global colour variable availability

### Technical Changes
- Created comprehensive colour variable system in `styles/colors.css`
- Migrated 42+ hardcoded colour values to semantic variable names
- Organised colours into logical groups (primary, text, background, accent, hover states)
- Maintained all existing visual styling while enabling easy theme customisation

## [0.2.0] - 2025-01-27

### Added
- Design token system with CSS custom properties for consistent theming
- Dark theme implementation with indigo colour palette
- Modern card components with hover effects and shadows
- Standardised button components (`.btn`, `.btn-ghost`)
- Section header patterns with eyebrow text and lead paragraphs
- Responsive grid system for card layouts
- Enhanced accessibility with focus states and keyboard navigation
- Visual regression tests for design token validation

### Changed
- **BREAKING**: Complete visual overhaul from light teal theme to dark indigo theme
- Updated all colour references to use design tokens
- Modernised typography with Inter font family
- Enhanced project cards with new styling and hover effects
- Improved section headers with consistent markup patterns
- Updated reusable card components to use token-based styling

### Technical Changes
- Created `styles/tokens.css` with comprehensive design token system
- Updated `styles/globals.css` with modern utility classes
- Migrated all hardcoded colours in `styles/styles.css` to token variables
- Enhanced component CSS modules to use design tokens
- Added comprehensive visual regression tests
- Preserved Bootstrap 3 grid system and existing navbar functionality

### Preserved
- Bootstrap 3 grid system (`.row`, `.col-*` classes)
- Existing navbar functionality and styling
- Modal functionality for project details
- `resume.min.json` data structure
- All existing component props and behaviour
- Responsive design patterns

### Accessibility
- Enhanced focus states for keyboard navigation
- Improved colour contrast for WCAG AA compliance
- Added proper focus indicators for interactive elements
- Maintained semantic HTML structure

## [0.1.0] - 2022-10-31

### Added
- Initial release ready for usage
- Next.js portfolio template
- Bootstrap 3 integration
- Responsive design
- Project showcase with modals
- Skills and abilities sections
- Contact information display
