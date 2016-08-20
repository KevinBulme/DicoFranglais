import { Translator, Type } from './translator';

const TRANSLATORS: Translator[] = [
    { english: "spoiler", french: "divulgachage", type: Type.Serious, author: "Anonyme"},
    { english: "stalk", french: "espiotraquer", type: Type.Serious, author: "Anonyme"},
    { english: "smartphone", french: "ordiphone", type: Type.Serious, author: "Anonyme"},
    { english: "secured shell", french: "coquillage sécurisé", type: Type.Funny, author: "Anonyme"},
    { english: "fanzone", french: "zone des ventilateurs", type: Type.Funny, author: "Anonyme"},
    { english: "selfie", french: "ego-portrait", type: Type.Serious, author: "Bebe Dino"}
];

export class Translations {

    public translators: Translator[];

    constructor(){
        this.translators = TRANSLATORS ;
    }
}