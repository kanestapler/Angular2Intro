import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
    constructor(private heroService: HeroService, private router: Router) {}
    title = 'Heroes';
    selectedHero: Hero;
    public heroes: Hero[];
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}