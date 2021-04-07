import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public turno: string;
  public selecX: number[];
  public selecO: number[];
  public resultadoBusqueda:any;
  public msjsalida:string;
  public Soluciones:number[][];
  public ganoo:boolean[];

  constructor(){}

  ngOnInit(): void {
    this.turno = "X";
    this.selecX = [];
    this.selecO = [];
    this.msjsalida = "Mensajes del Triki";
    this.Soluciones =[ [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    this.ganoo = [];
  
  }

  triquiclic(btnselect :number){
    
    if (this.turno == "X"){

      this.resultadoBusqueda = this.selecX.indexOf(btnselect);     
       if (this.resultadoBusqueda != -1){
        this.msjsalida = "Movimiento no valido";
        return;
       }
    
      this.resultadoBusqueda = this.selecO.indexOf(btnselect);     
      if (this.resultadoBusqueda != -1){
       this.msjsalida = "Movimiento no valido";
       return;
     }

      this.selecX.push(btnselect);   
      this.turno = "O";
  
      
    }else{

   
        this.resultadoBusqueda = this.selecX.indexOf(btnselect);
        if (this.resultadoBusqueda != -1){
         this.msjsalida = "Movimiento no valido";
         return;
        }
       this.resultadoBusqueda = this.selecO.indexOf(btnselect);
       if (this.resultadoBusqueda != -1){
        this.msjsalida = "Movimiento no valido";
        return;
      } 
   
      this.selecO.push(btnselect);
      this.turno = "X";   
    
    }

    this.opcionesGanar(this.selecX, this.selecO);
   
   }

   opcionesGanar(selecX: number[], selecO: number[]){
      
    this.ganoo = [];
 
     this.Soluciones.forEach(solucion => {  
      
      selecX.forEach(element => {
       if( solucion.indexOf(element) != -1){
          this.ganoo.push(true);      
        }    
      
          if((this.ganoo[0]) && (this.ganoo[1]) && (this.ganoo[2])) {
            this.msjsalida ="El ganador es X";          
            this.selecX = [1,2,3,4,5,6,7,8,9];
            this.selecO = [];
            return;
        }   
       });   
       this.ganoo = [];   
      });
    
      this.ganoo = [];      
     
      this.Soluciones.forEach(solucion => {       
       selecO.forEach(element => {       
      
         if(solucion.indexOf(element) != -1){
          this.ganoo.push(true);      
        }   
        if((this.ganoo[0]) && (this.ganoo[1]) && (this.ganoo[2])) {
          this.msjsalida ="El ganador es O";
          this.selecO = [1,2,3,4,5,6,7,8,9];
          this.selecX = [];           
          return;
         }   
       });
       
       this.ganoo = [];              
    });

   }

   reiniciar(){
        this.selecO = [];
        this.selecX = [];
        this.msjsalida = "";
   }
}
