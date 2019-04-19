// 你要从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器。
import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';
// import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';

// @Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-heroes', // CSS 元素选择器 app-heroes 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。
export class HeroesComponent implements OnInit {

  // private hero: string = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // selectedHero: Hero;

  heroes: Hero[];

  // heroes = HEROES;

  constructor(private heroService: HeroService) {

  }

  // ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero) {
  //   alert(hero.name);
  // }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
