import { PeopleService } from './service/people.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppStatesModule } from './app.states';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { LeanComponent } from './lean/lean.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    PeopleComponent,
    LeanComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppStatesModule,
    HttpClientModule

  ],
  providers: [ PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
