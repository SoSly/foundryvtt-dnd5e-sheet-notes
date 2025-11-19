/**
 * Search Enhancement for item-list-controls
 * Extends the D&D 5e search functionality to include note content
 */

/**
 * Show a note item that matches content search
 * @param {HTMLElement} el - The note item element
 */
function showContentMatchedNote(el) {
    el.hidden = false;
    const section = el.closest('.items-section');
    if (section) {
        section.hidden = false;
    }
}

/**
 * Apply content search filter to notes
 * @param {ItemListControlsElement} controls - The list controls element
 */
function applyContentSearch(controls) {
    const searchTerm = controls.app._filters.notes.name;
    if (!searchTerm || !controls.app._notesContentMatches?.size) {
        return;
    }

    controls.list.querySelectorAll('.item[data-item-id]').forEach(el => {
        const noteId = el.dataset.itemId;
        if (!controls.app._notesContentMatches.has(noteId) || !el.hidden) {
            return;
        }
        showContentMatchedNote(el);
    });
}

/**
 * Show empty categories when in edit mode or dragging
 * @param {ItemListControlsElement} controls - The list controls element
 */
function showEmptyCategoriesInEditMode(controls) {
    const isEditMode = controls.app?.element?.classList?.contains('editable') ?? false;
    const notesTab = controls.list.closest('.tab.dnd5e-sheet-notes');
    const isDragging = notesTab?.classList.contains('dragging-active') ?? false;

    if (!isEditMode && !isDragging) {
        return;
    }

    controls.list.querySelectorAll('.items-section:not(:has(.item))').forEach(section => {
        section.removeAttribute('hidden');
    });
}

/**
 * Register libWrapper enhancement for ItemListControlsElement to enable content searching in notes
 */
export function registerSearchEnhancement() {
    libWrapper.register('dnd5e-sheet-notes', 'dnd5e.applications.components.ItemListControlsElement.prototype._applyFilters', function(wrapped) {
        const result = wrapped();

        if (this.getAttribute('for') !== 'notes') {
            return result;
        }

        applyContentSearch(this);
        showEmptyCategoriesInEditMode(this);

        return result;
    }, 'WRAPPER');
}
