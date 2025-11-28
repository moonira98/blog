import { Component, OnInit, inject, signal } from '@angular/core';
import { Card } from "../../layout/card/card";
import { ICard } from '../../model/card';
import { model } from '@angular/core';
import { Cards } from '../../services/cards';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { Header } from "../header/header";

@Component({
  selector: 'app-home',
  imports: [FormsModule, Card, RouterLink, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
    cards = model<ICard[]>([])
    cardsService = inject(Cards)
    newArray: ICard[] = []
    searchWord: string = ''

    ngOnInit(): void {
      this.getCards()
    }
    
    getCards() {
      this.cardsService.getCards().subscribe((res: ICard[]) => {
        this.cards.set(res)
        console.log(this.cards())
      })
    }

    search() {
      const word = this.searchWord.trim().toLowerCase();
      console.log(this.searchWord)
      this.newArray = this.cards().filter((el) => 
        el.title.toLowerCase().includes(word)
      )
      this.cards.set(this.newArray)
    }

}


