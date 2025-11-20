import { Component,  input,  signal } from '@angular/core';
import {  ICard } from '../../model/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})

export class Card {
  card = input<Partial<ICard>>({})

}
