import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Toolbar } from './toolbar/toolbar';
import { SharedModule } from './shared/shared-module';
import { CommonModule } from '@angular/common';
import { Student as StudentComponent } from './student/student';
import { PerfilUsuario } from './perfil-usuario/perfil-usuario';

export interface Student{
   name: string;
   age: number;
}
@Component({
  selector: 'app-root',
  imports: [SharedModule, StudentComponent, Navbar,Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // Propiedad para controlar el estado de carga
  loading =  false 
  students: Student[] = []; // Lista de estudiantes
  // Tiempo de espera para simular la carga de datos
  readonly TIMEOUT = 2000; 

  //cuando la app se inicializa 
  constructor() {
    // Simulamos una carga de datos
    this.loading = true;
    setTimeout(() => {
      this.students = [
        { name: 'Ana', age: 22 },
        { name: 'Luis', age: 21 }
      ]
      this.loading = false;
    }, this.TIMEOUT); // Simula una carga de 2 segundos
  }

  // Este método se ejecuta cuando el componente se inicializa
  ngOnInit() {
      
  }

  trackByStudentId(index: number, student: Student): number {
    return index; // Aquí puedes usar un identificador único si lo tienes
  }

}
