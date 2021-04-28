import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Tareas, listaTareas } from '../../interfaces/tareas';
import {FormBuilder,FormGroup, Validators,AbstractControl} from '@angular/forms';
import { VistaMainComponent } from '../vista-main/vista-main.component';
interface seleccion {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.scss']
})

export class Vista3Component implements OnInit {
  tareas=listaTareas;
  formulario:FormGroup;
  Titulo: AbstractControl;
  id:number=0;
  aidi:number=0;

  //dato:Tareas={id:this.tareas.id,titulo='this.tareas.titulo',estado='this.tareas.estado'};
  opciones: seleccion[] = [
    {value: 1, viewValue: 'Iniciada'},
    {value: 2, viewValue: 'En proceso'},
    {value: 3, viewValue: 'Terminada'}
  ];

  constructor(public form:FormBuilder, private Router : Router, private route:ActivatedRoute) {
    this.formulario=this.form.group({
      Titulo:['',[Validators.required,Validators.minLength(5)]],
      estado:['',Validators.required]
  });
  this.Titulo= this.formulario.controls['Titulo'];

  } 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'];
    })
    for (let index = 0; index < listaTareas.length; index++) {
      //console.log(listaTareas[index].id);
      //console.log(this.id);
      if(listaTareas[index].id == this.id){
        this.aidi=index;
      }
    }
  }

  Actualizar(){
   // this.dato.titulo=this.formulario.value.Titulo;
   // this.dato.estado=this.formulario.value.estado;
   // this.dato.id=VistaMainComponent.id;
    //console.log(this.dato.titulo);
   //console.log(this.dato.estado);
   // console.log(this.dato.id);
   listaTareas[this.aidi].estado=this.formulario.value.estado;
   listaTareas[this.aidi].titulo=this.formulario.value.Titulo;
   this.Router.navigate(["/vista2"]);
   // this.tareas.push(this.dato);
   // VistaMainComponent.id++;
  }
  
  

}

