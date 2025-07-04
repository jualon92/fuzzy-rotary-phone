import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.scss'
})
export class Student {
  //con el decorador @Input() se reciben datos desde el componente padre
  @Input() student!: { name: string; age: number; birthDate: Date  }; // Definimos la interfaz del estudiante

}
