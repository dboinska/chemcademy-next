import naughtyWords from 'naughty-words';
import { RegExpMatcher, englishDataset } from 'obscenity';

export function profanityFilter(text: string) {
   if (!text) {
     console.error('Missing text')
     return;
   }
   try {
     const naughtyWordsList = naughtyWords.pl;
     naughtyWordsList.push('pizd')
     console.log({naughtyWordsList})
     const foundWords: string[] = [];
     
     naughtyWordsList.forEach(word => {
        if (word === 'cyc') {
         const regex = new RegExp(`\\b${word}\\b`, 'i');
         if (regex.test(text)) {
           foundWords.push(word);
         }
       } else {
if      (text.toLowerCase().includes(word.toLowerCase())){
         foundWords.push(word);
       }
       }
       
     });
     
     const hasNaughtyWords = foundWords.length > 0;
     const matcher = new RegExpMatcher({
       ...englishDataset.build(),
     });
     const hasObscenity = matcher.hasMatch(text);
     const isTextValid = !hasNaughtyWords && !hasObscenity;
     
     if (!isTextValid) {
       console.error('Tekst zawiera niedozwolone słowa:', foundWords);
       console.error('Znaleziono w tekście:', text);
     }
     
     return isTextValid;
   } catch (error) {
     console.error('Błąd podczas sprawdzania tekstu:', error);
     return false;
   }
}