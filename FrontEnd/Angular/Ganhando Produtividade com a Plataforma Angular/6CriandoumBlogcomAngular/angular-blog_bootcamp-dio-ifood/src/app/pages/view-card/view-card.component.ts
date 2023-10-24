import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { database } from 'src/app/data/database';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css'],
})
export class ViewCardComponent implements OnInit {
  private id: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponents(this.id);
  }

  setValuesToComponents(id: string | null) {
    const result = database.filter((elem) => elem.id === id)[0];

    this.imageViewCard = result.post_image;
    this.titleViewCard = result.title_post;
    this.contentViewCard = result.content_post;
    this.authorImageViewCard = result.author_image;
    this.authorNameViewCard = result.author_name;
    this.dateViewCard = result.post_date;
  }

  @Input()
  imageViewCard: string = '';

  @Input()
  titleViewCard: string = '';

  @Input()
  contentViewCard: string = '';

  @Input()
  authorNameViewCard: string = '';

  @Input()
  authorImageViewCard: string = '';

  @Input()
  dateViewCard: string = '';
}
