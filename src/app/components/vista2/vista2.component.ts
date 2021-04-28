import { Component, OnInit } from '@angular/core';
import { Tareas,listaTareas } from '../../interfaces/tareas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.scss']
})
export class Vista2Component implements OnInit {
  tareas=listaTareas;
  id:any;

  constructor(private Router:Router) {

   }

  ngOnInit(): void {
  }
  onnSubmit(hola:Tareas){
    this.id=hola.id;
    this.Router.navigate(["/vista3",this.id]);
  }
  eliminar(hola:Tareas){
    
  }

}
