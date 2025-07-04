import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Student } from '../student/student';


// This module is used to share common components, directives, and pipes across the application.
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    //etc
    
  ], 
  exports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
