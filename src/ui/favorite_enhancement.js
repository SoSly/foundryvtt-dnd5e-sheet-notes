/**
 * Favorite Enhancement System for Notes
 * Handles special behavior when favorited notes are clicked
 */

/**
 * Register libWrapper enhancement for note item usage
 */
export function registerFavoriteEnhancement() {
    libWrapper.register('dnd5e-sheet-notes',
        'dnd5e.documents.Item5e.prototype.use',
        async function(wrapped, config={}, dialog={}, message={}) {
            if (this.type === 'dnd5e-sheet-notes.note') {
                return this.sheet.render(true);
            }
            return wrapped(config, dialog, message);
        }, 'MIXED');
}
