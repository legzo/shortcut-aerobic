import ModuleA from "../src/ModuleA";

const ratio = 0.5;

describe('navigate, selection and deletion', () => {
    test('01 - navigate to end block and find the key to open the door', () => {
        // TIPS : on laptop keyboard, you can navigate to end of file by using ⌘A,→  / Ctrl+A, →
        expect(new ModuleA().openTheDoor("the key is at the end of this file")).toEqual('unlocked');
    });

    test('02 - Deletion to next word', () => {
        // Delete all unused spaces by using delete to Word End ⌥⌦ / Ctrl+Delete
        expect('                             to much spaces kill spaces').not.toContain('    ');
    });

    test('03 - Deletion to word start word', () => {
        // Delete MouseForEver by using delete to Word Start ⌥⌫ / Ctrl+Backspace
        expect('delete the last straw!MouseForEver').not.toContain('MouseForEver');
    });

    test('04 - Delete the failing line', () => {
        let deleteUnusedLine = 'This test should pass';
        deleteUnusedLine += '*** delete me by using ⌘⌫ / Ctrl+Y ****';
        expect(deleteUnusedLine).toEqual('This test should pass');
    });

    test('05 - Extend selection', () => {
        // by using ⌥↑ | Ctrl+W
        expect(`***** SELECT ME WITH EXTEND SELECTION*****`).toEqual('selected')
    });

    test('06 - Extend selection code scope', () => {
        // by using ⌥↑ | Ctrl+W
        // extend selection depends on scope, by using ⌥↑ | Ctrl+W select only what needed in line below
        expect(new ModuleA().test()).toEqual('youpii');
        expect(`***** REPLACE ME *****`).toEqual('new ModuleA().test()')
    });

    test('07 - edit multiple lines with clone caret', () => {
        // Use ⌥,⌥↓ / Ctrl,Ctrl+↓  to clone caret (press Esc to exit multi caret edition)
        // Edit song to match expected lyrics
        const song
            = 'Somewhere over the rainbow'
            + 'Way up high'
            + 'And the dreams that you dream of'
            + 'Once in a lullaby, oh'
        expect(song).toEqual(
            ' > Somewhere over the rainbow\n'
            + ' > Way up high\n'
            + ' > And the dreams that you dream of\n'
            + ' > Once in a lullaby, oh\n'
        )
    });

    test('08 - Select next occurrence then edit multi lines', () => {
        // by using ^G | Alt+J (press Esc to exit multi caret edition)
        let message = `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        message += `Un tiens vaut mieux que deux tu l'auras.`;
        expect(message).toEqual('ha ha ha ha ha ha ');
    });

    test('09 - Select all occurrences then edit multi carets', () => {
        // by using ^⌘G | Ctrl+Shift+Alt+J (press Esc to exit multi caret edition)
        const message = `Lorem ipsum TO_CHANGE sit amet, consectetur adipiscing elit. 
        Nam TO_CHANGE dignissim sem at posuere. Donec sollicitudin est ac lorem eleifend, 
        eget aliquam velit consectetur. Aliquam id TO_CHANGE sit amet nisl suscipit iaculis 
        nec et magna. TO_CHANGE in felis ut lacus gravida faucibus. Suspendisse dictum 
        at sem ac semper. TO_CHANGE venenatis placerat ipsum vel bibendum. Donec et 
        diam nibh.`;
        expect(message).toEqual(`Lorem ipsum allOccurences sit amet, consectetur adipiscing elit. 
        Nam allOccurences dignissim sem at posuere. Donec sollicitudin est ac lorem eleifend, 
        eget aliquam velit consectetur. Aliquam id allOccurences sit amet nisl suscipit iaculis 
        nec et magna. allOccurences in felis ut lacus gravida faucibus. Suspendisse dictum 
        at sem ac semper. allOccurences venenatis placerat ipsum vel bibendum. Donec et 
        diam nibh.`);
    });

    test('10 - Navigate to sayYes definition', () => {
        // by using ⌘B | Ctrl+B and change behaviour to make this test pass
        expect(new ModuleA().sayYes()).toEqual('yes');
    });

    test('11 - Navigate to file structure to change ratio', () => {
        // Use ⌘F12 / Ctrl+F12 to navigate to ratio declaration
        expect(3 * ratio).toEqual(6);
    });

    test(`12 - Navigate back and forward`, () => {
        // Use navigate back to find and copy the first verse of the song
        // Use ⌥⌘← / Ctrl+Alt+← to navigate back
        // Use ⌥⌘→ / Ctrl+Alt+→ to navigate forward
        expect(new ModuleA().theFirstVerseOfTheSongIs("copy here the first verse of the song"))
            .toBe(true)
    });

});
// the key is "trash your mouse"
// TIPS : on laptop keyboard, you can navigate to top of file by using ⌘A,←  / Ctrl+A, ←
