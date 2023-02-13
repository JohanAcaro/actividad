import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.page.html',
  styleUrls: ['./databinding.page.scss'],
})
export class DatabindingPage{

  hijos: number=0;
  numGanador = 2;
  mayorMenor ="...";
  

  constructor() { }

  comprobarHijos(){
  //Si el usuario tiene dos hijos, se le muestra una card de felicitación
  if(this.hijos)
  {
    if(this.numGanador < this.hijos)
    {
      this.mayorMenor = 'menor que';
    }
    else if(this.numGanador > this.hijos)
    {
      this.mayorMenor = 'mayor que';
    }
    else{
      this.mayorMenor = '';
    }
  }
  }

  

}
