import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {LetterComponent} from "../letter/letter.component";
import {CommunicatorService} from "../communicator.service";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input()
  guess: string | undefined;
  letters : string [] = [];
  i : number = 0;
  todaysWord = "";
  rightPlace : boolean | undefined;
  contains : boolean | undefined;
  @ViewChildren(LetterComponent) letterComp : QueryList<any> | undefined;

  constructor(private communicatorService: CommunicatorService) {
    this.todaysWord = communicatorService.todaysWord;
  }

  ngOnInit(): void {
  }
  doesContain(letter : string) : boolean
  {
    if (this.todaysWord?.includes(letter))
    {
      console.log("word " + this.guess + "true " + letter);
      return true;
    }
    else
    {
      console.log("false");
      return false;}
  }
  doesMatch(letter : string, index : number) : boolean
  {
    let j = 0;
    for (let l of this.todaysWord)
    {
      if (j === index)
      {
        if (l === letter)
        {
          console.log(letter + " " + l);
          return true;
        }
      }
      j++;
    }
    return false;
  }

  showLetters():void
  {
    this.i=0;
    if (this.guess != undefined && this.todaysWord != undefined)
    for (let letter of this.guess)
    {
      //this.letters[this.i] = letter;
      if (!this.doesMatch(letter,this.i))
      {
        this.rightPlace = false;
        this.contains = this.doesContain(letter);
      }
      else
      {
        this.rightPlace = true;
        this.contains = true;
      }
      this.letterComp?.get(this.i).showLetter(letter, this.rightPlace, this.contains);
      this.i++;
    }
    this.i=0;
    // this.letterComp?.forEach(comp => {comp.showLetter(this.letters[this.i]); this.i++;})
  }

}
