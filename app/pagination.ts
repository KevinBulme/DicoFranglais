import { Translator } from './Translator';

export class Page {
    letter: string;
    translations: Translator[];
}

export class Pagination {
    pages: Page[];

    constructor(){
        this.pages = new Array<Page>();
        let i: number;
        for (i = 0; i<26 ; i++){
            this.pages[i] = new Page();
            this.pages[i].letter = String.fromCharCode(i+65);
            this.pages[i].translations = new Array<Translator>();
        }
    }

    getPage(letter: string): Page {
        letter = letter.toUpperCase();
        let index: number = letter.charCodeAt(0);
        return this.pages[index-65];
    }

    getPageIndex(letter: string): number {
        letter = letter.toUpperCase();
        let index: number = letter.charCodeAt(0);
        return index-65;
    }

    addTranslator(translator: Translator) {
        let firstLetter: string = translator.english.substr(0,1);
        this.pages[this.getPageIndex(firstLetter)].translations.push(translator);
    }
}