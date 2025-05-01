import { formatCurrency } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnChanges{
  @Input() passwordLength: number=0;
  @Input() numbersAllowed: boolean=false;
  @Input() charactersAllowed: boolean=false;

  @ViewChild('displayPass') ref!: ElementRef;
  pass = "";
  displayText='';

  copyPassword(){
    this.displayText=this.ref.nativeElement.textContent;
    navigator.clipboard.writeText(this.displayText);

  }
  generatePassword(){
    this.pass="";
    let dataString='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(this.numbersAllowed==true){
      dataString+='0123456789';
    }
  
    if(this.charactersAllowed==true){
      dataString+='!@#$%^&*()_+';
    }

    for(let i = 0; i < this.passwordLength; i++) {
      const char = Math.floor(Math.random() * dataString.length)
      this.pass += dataString.charAt(char)
    }
  }

  ngOnChanges(): void {
      this.generatePassword();
  }
}
