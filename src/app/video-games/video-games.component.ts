import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {

  title = 'Video Games';
  videoGames = [
    // {title:'Super Mario 64'},
    // {title:'Resident Evil'}
  ];

  constructor(private http : Http){}

  //will invoke when component initialize
  ngOnInit(){
    this.http.get("http://localhost:5000/api/videogames")
      .map((res : Response) => res.json())
      .subscribe(data => {
          console.log(data);
          this.videoGames = data;
      });
  }

}


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  
// })
// export class AppComponent implements OnInit{
// }
