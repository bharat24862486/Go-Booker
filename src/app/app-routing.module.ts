import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/Home/home/home.component';
import { SingleComponent } from './MyComponents/Pages/SingleMovie/single/single.component';
import { SingleMovieCinemaComponent } from './MyComponents/Pages/SingleMovieCinema/single-movie-cinema/single-movie-cinema.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'singleMovie/:id' , component: SingleComponent},
  {path:'singleMovieCinema/:name' , component: SingleMovieCinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
