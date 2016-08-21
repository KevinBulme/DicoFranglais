import { Translator, Type } from './translator';

const TRANSLATORS: Translator[] = [
    { english: "spoiler", french: "divulgachage", type: Type.Serious, author: "Anonyme"},
    { english: "stalk", french: "espiotraquer", type: Type.Serious, author: "Anonyme"},
    { english: "smartphone", french: "ordiphone", type: Type.Serious, author: "Anonyme"},
    { english: "secured shell", french: "coquillage sécurisé", type: Type.Funny, author: "Anonyme"},
    { english: "fanzone", french: "zone des ventilateurs", type: Type.Funny, author: "Anonyme"},
    { english: "selfie", french: "ego-portrait", type: Type.Serious, author: "Bébé Dino"},
    { english: "post", french: "billet", type: Type.Serious, author: "Sylvie"},
    { english: "customiser", french: "personnaliser", type: Type.Serious, author: "Sylvie"},
    { english: "pitch", french: "résumé", type: Type.Serious, author: "Sylvie"},
    { english: "legging", french: "caleçon", type: Type.Serious, author: "Sylvie"},
    { english: "caddie", french: "chariot", type: Type.Serious, author: "Sylvie"},
    { english: "prime-time", french: "première partie de soirée", type: Type.Funny, author: "Sylvie"},
    { english: "goal average", french: "moyenne de buts", type: Type.Funny, author: "Sylvie"},
    { english: "fun", french: "amusant", type: Type.Serious, author: "Sylvie"},
    { english: "chill", french: "posé", type: Type.Serious, author: "Kévin"},
    { english: "week-end", french: "samanche", type: Type.Serious, author: "Sylvie"},
    { english: "sandwich", french: "sable sorcière", type: Type.Funny, author: "Kévin"},
    { english: "brunch", french: "déjeunette", type: Type.Serious, author: "Académie Française"},
    { english: "chewing-gum", french: "rumino-gomme", type: Type.Serious, author: "Sylvie"},
    { english: "shopping", french: "emplettes", type: Type.Serious, author: "Sylvie"},
    { english: "ok", french: "entendu", type: Type.Serious, author: "Sylvie"},
    { english: "camping", french: "hôtellerie de plein air", type: Type.Serious, author: "Sylvie"},
    { english: "lifting", french: "derma-tension", type: Type.Serious, author: "Kévin"},
    { english: "best-seller", french: "meilleure vente", type: Type.Serious, author: "Sylvie"},
    { english: "block-buster", french: "exploseur de block", type: Type.Funny, author: "Kévin"},
    { english: "blazer", french: "veste de complet-veston", type: Type.Serious, author: "Sylvie"},
    { english: "cloud", french: "nuage", type: Type.Serious, author: "Wahou"},
    { english: "business", french: "procédure d'entreprise", type: Type.Serious, author: "Wahou"},
    { english: "big data", french: "grosse donnée", type: Type.Serious, author: "Wahou"},
    { english: "data mining", french: "fouille de données", type: Type.Serious, author: "Wahou"},
    { english: "parking", french: "parc de stationnement", type: Type.Serious, author: "Wahou"},
    { english: "apple", french: "pomme", type: Type.Serious, author: "Wahou"},
    { english: "microsoft", french: "minuscule doux", type: Type.Funny, author: "Wahou"},
    { english: "google", french: "10¹⁰⁰ mal écrit", type: Type.Funny, author: "Wahou"},
    { english: "firefox", french: "feunard", type: Type.Funny, author: "Wahou"},
];

export class Translations {

    public translators: Translator[];

    constructor(){
        this.translators = TRANSLATORS ;
    }
}