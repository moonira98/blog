import { Component, OnInit, inject } from '@angular/core';
import { Card } from "../../layout/card/card";
import { ICard } from '../../model/card';
import { model } from '@angular/core';
import { Cards } from '../../services/cards';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [FormsModule, Card, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
    cards = model<ICard[]>([])
    cardsService = inject(Cards)
  

    ngOnInit(): void {
      this.getCards()
    }
    
    getCards() {
      this.cardsService.getCards().subscribe((res: ICard[]) => {
        this.cards.set(res)
        console.log(this.cards())
      })
    }

}


