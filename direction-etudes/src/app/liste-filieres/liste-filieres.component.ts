import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-liste-filieres',
  templateUrl: './liste-filieres.component.html',
  styleUrls: ['./liste-filieres.component.css']
})
export class ListeFilieresComponent implements OnInit {

  public listeFilieres: Array<string> = [];
  @Output() clicked = new EventEmitter<number>();

  constructor(private _http: Http) {
  }

  getFilieres() {
    return this._http.get('http://localhost:3000/filieres').subscribe((data: Response) => {
      this.listeFilieres = data.json();
      console.log("filieres : " + data.json());
    });
  }

  onClick(id: number){
    console.log('sending ' + id);
    this.clicked.emit(id);
  }

  ngOnInit() {
    this.getFilieres();
  }

}
