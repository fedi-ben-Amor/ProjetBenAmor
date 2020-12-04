import { Component,Input,OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'fed-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input("C") COM:Commentaire[];
  constructor() {}

  ngOnInit(): void {
  }

}
