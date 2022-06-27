import { Injectable } from '@angular/core';
import {WORDS} from "./words";

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  guessingWord : string | undefined;
  todaysWord = "";
  words : string [] | undefined;

  constructor() { }
  getWords() : string []
  {
    return WORDS;
  }
  public setGuessedWord(guessedWord: string | undefined)
  {
    this.guessingWord = guessedWord;
  }
  getTodaysWord() : string
  {
    this.words = this.getWords();
    this.todaysWord = this.words[Math.floor(Math.random()*this.words.length-1)];
    return this.todaysWord;
  }
}
