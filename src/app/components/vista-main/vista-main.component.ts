import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas, listaTareas } from '../../interfaces/tareas';
interface seleccion {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-vista-main',
  templateUrl: './vista-main.component.html',
  styleUrls: ['./vista-main.component.scss']
})

  export class VistaMainComponent implements OnInit {
    tareas=listaTareas;
    dato:Tareas={id:1,titulo:"elefante lgtb",estado:"casado"};
    static id:number=0;

    formulario:FormGroup;
    Titulo: AbstractControl;


    opciones: seleccion[] = [
      {value: 1, viewValue: 'Iniciada'},
      {value: 2, viewValue: 'En proceso'},
      {value: 3, viewValue: 'Terminada'}
    ];
  
    constructor(public form:FormBuilder, private Router : Router) {
      this.formulario=this.form.group({
        Titulo:['',[Validators.required,Validators.minLength(5)]],
        estado:['',Validators.required]
    });
    this.Titulo= this.formulario.controls['Titulo'];

  }
  
    ngOnInit(): void {
    }
    OnSubmit(){
      this.dato.titulo=this.formulario.value.Titulo;
      this.dato.estado=this.formulario.value.estado;
      this.dato.id=VistaMainComponent.id;
      //console.log(this.dato.titulo);
      //console.log(this.dato.estado);
      //console.log(this.dato.id);
      this.Router.navigate(["/vista2"]);
      this.tareas.push(this.dato);
      VistaMainComponent.id++;
    }
  }



