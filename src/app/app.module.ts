import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforofDemoComponent } from './components/ngforof-demo/ngforof-demo.component';
import { NdswitchDemoComponent } from './components/ndswitch-demo/ndswitch-demo.component';
import { CustomDerectiveDemoComponent } from './components/custom-derective-demo/custom-derective-demo.component';
import { BoxDirective } from './directives/box.directive';
import { NgTaskDemoComponent } from './components/ng-task-demo/ng-task-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforofDemoComponent,
    NdswitchDemoComponent,
    CustomDerectiveDemoComponent,
    BoxDirective,
    NgTaskDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
