import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommunicatorService} from "./communicator.service";
import {WordComponent} from "./word/word.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wordle';
  words : number [] = [1,2,3,4,5,6];
  todaysWord : string | undefined;
  guessedWord = "";
  numberOfGuesses : number = 0;
  hidden = true;

  @ViewChildren(WordComponent) wordComp : QueryList<any> | undefined;

  constructor(private communicatorService : CommunicatorService) {
    this.todaysWord = communicatorService.getTodaysWord();
  }
  ngOnInit() {

  }
  checkWord()
  {
    if (this.numberOfGuesses === 6)
    {
      alert("TRY AGAIN TOMORROW");
    }else
    {
      console.log("inside checkWord" + "word is " + this.guessedWord);
      if (this.guessedWord?.length != 5 || this.numberOfGuesses < 6 ) {
        this.communicatorService.setGuessedWord(this.guessedWord);
        this.wordComp?.get(this.numberOfGuesses).showLetters();
        if (this.guessedWord === this.todaysWord) {
          //  alert here and style change
          alert("CORRECT");
        }
        this.numberOfGuesses++;
        this.guessedWord = "";
      }
    }

  }
  about() : void
  {
    this.hidden = false;
  }
  close() : void
  {
    this.hidden = true;
  }

}
