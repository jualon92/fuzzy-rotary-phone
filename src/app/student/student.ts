import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.scss'
})
export class Student {
  @Input() student!: { name: string; age: number; birthDate: Date  }; // Definimos la interfaz del estudiante

}
