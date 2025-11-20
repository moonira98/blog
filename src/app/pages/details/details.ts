import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cards } from '../../services/cards';
import { ICard } from '../../model/card';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  cardId: string | null = null
  private route = inject(ActivatedRoute)
  cardService = inject(Cards)
  card = signal<Partial<ICard>>({})

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id');
    this.getCardById()
  }


  getCardById() {
    this.cardService.getCardById(this.cardId).subscribe((res: ICard) => {
      this.card.set(res)
      console.log(this.card())
    })
  }

}
