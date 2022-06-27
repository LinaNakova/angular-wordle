import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  // letter : string | undefined;
  letter = "";
  matched : boolean | undefined;
  contains : boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  showLetter(letter : string, rightPlace: boolean, contains: boolean) : void
  {
    this.letter = letter;
    this.matched = rightPlace;
    this.contains = contains;
    console.log(letter + " matched" + this.matched + " contains" + this.contains);
  }

}
