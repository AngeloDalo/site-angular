import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  //username: string = "AngelDal25";
  //username: string = "AngelDal25";

  @Input() user!: string;
  today: Date;
  money: number;
  show: boolean = false;
  //richiama elemento generico in typescript
  //richiamo elemento about in html, metto nome attributo e il tipo
  //serve a stampare in console il contenuto nel quale è presente
  @ViewChild('about', { static: false }) aboutElement!: ElementRef;

  constructor() {
    this.today = new Date();
    let money1 = 23;
    let money2 = 34;
    this.money = this.sum(money1, money2);
    console.log("costruttore");
  }

  ngOnInit(): void {
    console.log("init!");
  }
  ngAfterViewInit(): void {
    //se lo avessi messo in ngOnInit non avrebbe funzionato perchè codice html non è stato ancora creato
    //document.getElementById("button").style.backgroundColor = "red";
    console.log("dopo la fine");
  }

  //imposta show al suo contrario
  showHidden() {
    this.show = !this.show;
  }
  //nome(var1: tipo, var2; tipo): tipo_return{}
  sum(n1: number, n2: number): number {
    return n1+n2;
  }
  //invece di passare valore con value in html il valore lo prendo qui
  hello(field: HTMLSelectElement) {
    if (field.value == "1") {
      alert("Ciao");
    } else {
      console.log("ciao");
    }
  }
  //stampa codice html in console
  printElement(): void {
    console.log(this.aboutElement.nativeElement);
  }

}
