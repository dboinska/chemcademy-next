import { useState, useEffect } from 'react';
import naughtyWords from 'naughty-words';
import { RegExpMatcher, englishDataset } from 'obscenity';

export function useContentValidation(text: string) {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!text) {
      setIsValid(true);
      setError('');
      return;
    }

    try {
      const naughtyWordsList = naughtyWords.pl; 
      const hasNaughtyWords = naughtyWordsList.some(word => 
        text.toLowerCase().includes(word.toLowerCase())
      );

        const matcher = new RegExpMatcher({
        ...englishDataset.build(),
      });

      const hasObscenity = matcher.hasMatch(text);
      const isTextValid = !hasNaughtyWords && !hasObscenity;

      setIsValid(isTextValid);
      setError(isTextValid ? '' : 'Tekst zawiera niedozwolone słowa');

         if (!isTextValid) {
        console.log('Tekst zawiera niedozwolone słowa');
      }
    } catch (error) {
      console.error('Błąd podczas sprawdzania tekstu:', error);
      setIsValid(true);
      setError('');
    }
  }, [text]);

  return { isValid, error };
}