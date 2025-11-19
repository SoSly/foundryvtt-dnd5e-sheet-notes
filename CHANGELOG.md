# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.2.1) - 2025-11-19

### Fixed
- Corrected module.json verified compatibility format to use single values instead of arrays

## [1.2.0](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.2.0) - 2025-11-19

### Changed
- Updated to support Foundry VTT v13 and D&D 5e system v5.x while maintaining backward compatibility with v12/v4.x

## [1.1.2](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.1.2) - 2025-07-28

### Fixed
- Fixed sheet filtering being broken for other tabs after toggling category collapse

## [1.1.1](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.1.1) - 2025-07-28

### Fixed
- Removed unnecessary sheet re-render when toggling category collapse

## [1.1.0](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.1.0) - 2025-07-28

### Added
- Collapsible categories - click on category headers to expand/collapse their contents
- Hidden notes count displayed when categories are collapsed
- Search functionality for notes that searches both note names and content
- Favorites support - notes can now be dragged to the favorites bar and clicked to open

### Changed
- More compact category layout with improved control button alignment
- Default "Notes" category can now be collapsed and reordered
- Uncategorized notes are automatically organized into the default category

## [1.0.0](https://github.com/nivthefox/foundryvtt-dnd5e-sheet-notes/releases/tag/1.0.0) - 2025-07-27

### Added
- Notes tab on character sheets (PC and NPC)
- Create and organize notes with custom categories
- Drag and drop notes between categories
- Right-click context menu for notes (view, edit, duplicate, delete)
- Rich text editor for note content