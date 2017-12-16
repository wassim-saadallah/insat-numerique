import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public Students: any[] = [];
  public filieres = [];
  public student: any;
  public dataIsAvailable = false;
  public num_fil: number;

  constructor(private _http: Http) {
  }


  onChange(fil, cin) {
    this.changeStudent(fil, cin)
  }

  ngOnInit() {
    this.student = {};
    this.getStudents();
    this.getFilieres();
  }


  getStudents() {
    this.num_fil = 0;
    this._http.get('http://localhost:3000/etudiants/filiere/0').subscribe((data: Response) => {
      this.Students = data.json();
      console.log(this.Students)
    });
  }

  getFilieres() {
    this._http.get('http://localhost:3000/filieres').subscribe((data: Response) => {
      this.filieres = data.json();
      console.log(this.filieres);
    });
  }


  getStudentsBy(event) {

    this.num_fil = event;
    return this._http.get('http://localhost:3000/etudiants/filiere/' + event).subscribe((data: Response) => {
      this.Students = data.json();
    });
  }

  deleteStudent(cin) {
    return this._http.delete('http://localhost:3000/etudiants/' + cin).subscribe((data: Response) => {
      this.Students = data.json();
    });
  }


  changeStudent(fil, cin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const f = { filiere: fil }
    return this._http.put('http://localhost:3000/etudiants/' + cin, JSON.stringify(f),
      { headers: headers }).subscribe((data: Response) => {
        this.Students = data.json();
        console.log(data.json());
      });
  }

  onChanged(year) {
    if (year === "all") {
      this.getStudents();
    } else {
      return this._http.get('http://localhost:3000/etudiants/filiere/' + this.num_fil + '/year/' + year).subscribe((data: Response) => {
        console.log(data.json());
        this.Students = data.json();
      });
    }
  }


}
