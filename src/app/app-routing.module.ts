// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// // import {LoginComponent} from "./login/login.component";
// // import {CreateEventComponent} from "./create-event/create-event.component";
// // import {ListEventComponent} from "./list-event/list-event.component";
// // import {EditEventComponent} from "./edit-event/edit-event.component";

// // const routes: Routes = [
// //   { path: 'login', component: LoginComponent },
// //   { path: 'create-event', component: CreateEventComponent },
// //   { path: 'list-event', component: ListEventComponent },
// //   { path: 'edit-event', component: EditEventComponent },
// //   {path : '', component : LoginComponent}

// // ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {ListEventComponent} from "./list-event/list-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'create-event', component: CreateEventComponent },
    { path: 'list-event', component: ListEventComponent },
    { path: 'edit-event/:id', component: EditEventComponent },
    { path : '', component :LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

