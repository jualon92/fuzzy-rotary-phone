import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Student } from './entities';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrls: ['./student.scss']
})
export class StudentComponent {
  //con el decorador @Input() se reciben datos desde el componente padre
  @Input() student!:  Student; // Definimos la interfaz del estudiante


}
