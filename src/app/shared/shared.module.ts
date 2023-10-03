import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
