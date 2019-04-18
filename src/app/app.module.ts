/*
  这个文件是Angular的根模块，告诉Angular如何组装应用
*/

// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// Angular 核心模块
import { NgModule } from '@angular/core';

// 虽然 ngModel 是一个有效的 Angular 指令，不过它在默认情况下是不可用的。
// 它属于一个可选模块 FormsModule，你必须自行添加此模块才能使用该指令。
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// 根组件
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

/*
  @NgModule 装饰器，@NgModule 接受一个元数据对象，告诉 Angular 如何编译和启动应用
*/
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent
  ],
  imports: [ // 配置当前模块运行依赖的其他模块
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图（称为根组件） 通过引导根 AppModule 来启动应用，这里一般写的是根组件
})

/*
  根模块不需要导出任何东西
*/
export class AppModule { }
