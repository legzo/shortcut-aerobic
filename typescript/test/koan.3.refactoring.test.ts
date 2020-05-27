import {French, SayHello} from "../src/SayHello";

describe('usefull short cut refactoring. All test should still green.', () => {
    test('extract name to a variable by using ⌘⌥V', () => {
        // TIPS : use ⌥⏎ to replace with template string first
        expect('Hello David!').toEqual('Hello David!');
    });

    test('extract parameter name by using ⌘⌥P', () => {
        function sayHello() {
            return `Hello David!`;
        }

        expect(sayHello()).toEqual('Hello David!');
    });

    test('extract field name by using ⌘⌥F and affect it in constructor', () => {
        class Hello {
            say() {
                return `Hello David!`;
            }
        }

        expect(new Hello().say()).toEqual('Hello David!');
    });

    test('extract method hello with one parameters by using ⌘⌥M', () => {
        class Hello {
            constructor(private lang: string) {
            }
            say(firstName: string) {
                let hello = '';
                switch (this.lang.toLowerCase()) {
                    case 'fr':
                        hello = 'Bonjour';
                        break;
                    case 'en':
                        hello = 'Hello';
                        break;
                }
                return `${hello} ${firstName}!`;
            }
        }

        expect(new Hello('fr').say('David')).toEqual('Bonjour David!');
        expect(new Hello( 'en').say('David')).toEqual('Hello David!');
    });

    test('extract following variables to before each', () => {
        // TIPS : split affectation and declaration by using ⌥⏎
        const language = new French();
        const sayHello = new SayHello(language);

        expect(sayHello.hello()).toEqual('Salut David!');
    });
});