import { Component} from '@angular/core';

@Component({
  selector: 'app-minijuego',
  templateUrl: './minijuego.page.html',
  styleUrls: ['./minijuego.page.scss'],
})
export class MinijuegoPage {

  num: number | undefined;
  mayorMenor ="...";
  numSecret: number = this.numAleatorio(0,100);

  constructor() { }

  numAleatorio(a: any, b : any) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  } 

  compruebaNumero() {
    if(this.num)
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'menor que';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'mayor que';
      }
      else{
        this.mayorMenor = '';
      }
    }
  }

  reinicia(){

  // Reiniciamos las variables
    this.num = 0;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0, 100);
  }

}
