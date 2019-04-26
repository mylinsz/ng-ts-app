import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 资讯管理
import { PopularScienceComponent } from './popular-science/popular-science.component';
import { InformationComponent } from './information/information.component';
import { EditInfoComponent } from './information/edit-info/edit-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InformationComponent },
  { path: 'edit/:id', component: EditInfoComponent },
  { path: 'popularscience', component: PopularScienceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
