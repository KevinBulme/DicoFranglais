import { Translator } from './translator';

const TRANSLATORS: Translator[] = [
    { english: "spoiler", french: "divulgachage"},
    { english: "stalk", french: "espiotraquer"},
    { english: "smartphone", french: "ordiphone"}
];

export class SeriousTranslations {

    public translators: Translator[];

    constructor(){
        this.translators = TRANSLATORS ;
    }
}