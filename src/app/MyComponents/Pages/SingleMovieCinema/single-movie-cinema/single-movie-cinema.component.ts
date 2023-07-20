import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-single-movie-cinema',
  templateUrl: './single-movie-cinema.component.html',
  styleUrls: ['./single-movie-cinema.component.css']
})
export class SingleMovieCinemaComponent implements OnInit {
  datas:any=[]
  constructor(private fetcher:ApiService, private getParam : ActivatedRoute){}

  ngOnInit(): void {
    this.getParam.paramMap.subscribe((params)=>{
      this.fetcher.fetchSingleMovieCinema(params.get("name") || '').subscribe((res)=>{
        console.log(res)
        this.datas = res
      })
    })
  }

}
