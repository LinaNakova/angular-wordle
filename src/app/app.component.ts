import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommunicatorService} from "./communicator.service";
import {WordComponent} from "./word/word.component";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";


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
  // guessed = false;
  again=false;


  @ViewChildren(WordComponent) wordComp : QueryList<any> | undefined;

  constructor(private communicatorService : CommunicatorService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.todaysWord = communicatorService.getTodaysWord();
  }
  ngOnInit() {

  }
  checkWord()
  {
    if (this.numberOfGuesses === 6)
    {
      // alert("TRY AGAIN TOMORROW");
      this.again=true;
      this.guessedWord = "click the play again"
    }else
    {
      console.log("inside checkWord" + "word is " + this.guessedWord);
      if (this.guessedWord?.length != 5 || this.numberOfGuesses < 6 ) {
        this.communicatorService.setGuessedWord(this.guessedWord);
        this.wordComp?.get(this.numberOfGuesses).showLetters();
        if (this.guessedWord === this.todaysWord) {
          //  alert here and style change
          // alert("CORRECT");
          this.again = true;
          // this.guessed = true;
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
  reloadPage():void
  {
    this.again=false;
    // this.router.navigate([this.router.url]);
    window.location.reload();
  }

}
