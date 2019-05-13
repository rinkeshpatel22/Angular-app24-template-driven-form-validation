import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  exports: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DemoModule { }
