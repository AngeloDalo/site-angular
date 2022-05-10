import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  color: string = "black";
  size: string = "none";
  selectField: FormControl = new FormControl();
  form: FormGroup;
  //richiama elemento generico in typescript
  //richiamo elemento about in html, metto nome attributo e il tipo
  //serve a stampare in console il contenuto nel quale è presente
  @ViewChild('about', { static: false }) aboutElement!: ElementRef;

  constructor(public fb: FormBuilder) {
    this.today = new Date();
    let money1 = 23;
    let money2 = 34;
    this.money = this.sum(money1, money2);
    console.log("costruttore");
    this.form = fb.group({
      'user': ['ciao', Validators.required],
      'email': ['', Validators.required],
      'date': ['']
    });
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
  helloColor(field: HTMLSelectElement){
    if (field.value == "1"){
      this.color = "red";
    } else if (field.value == "2") {
      this.color = "green";
    } else if (field.value == "3") {
      this.color ="blue";
    }
  }
  //form reattivo
  helloSize() {
    if (this.selectField.value == "1") {
      this.size = "big";
    } else if (this.selectField.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  }
  checkUser() {
    let user = this.form.controls['user'].value;
    if (!(user.length >= 8)) {
      this.form.controls['user'].setErrors({ incorect: true });
    } else {
      this.form.controls['user'].setErrors(null);
    }
  }
  send(): void {
    if (!this.form.valid) {
      alert("compilare tutti i campi obbligatori!");
      return;
    }
    console.log(
      this.form.controls['user'].value,
      this.form.controls['email'].value,
      this.form.controls['date'].value,
    )
  }

  //stampa codice html in console
  printElement(): void {
    console.log(this.aboutElement.nativeElement);
  }
}
