import { Translator } from './translator';

const TRANSLATORS: Translator[] = [
    { english: "secured shell", french: "coquillage sécurisé"},
    { english: "fanzone", french: "zone des ventilateurs"}
];

export class FunnyTranslations {

    public translators: Translator[];

    constructor(){
        this.translators = TRANSLATORS ;
    }
}