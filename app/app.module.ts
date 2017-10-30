import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import { AddPokemonComponent } from './poke-add/add-pokemon.component';
import { ListPokemonComponent } from './poke-list/list-pokemon.component';

import { PokemonService } from './shared/pokemon.service';
import './shared/rxjs-extensions';


@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          NavbarComponent,
                          AddPokemonComponent,
                          ListPokemonComponent
                          ],
  providers: [ PokemonService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }