import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  imports: [RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
