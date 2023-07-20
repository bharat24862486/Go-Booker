import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public auth: AuthService, private fetcher:ApiService) {}
  ngOnInit(): void {
    this.getUserProfile()
    this.changer()
  }
  getUserProfile() {
    this.auth.user$.subscribe((user) => {
      console.log(user); // User profile data
    });
  }
  value:any

  changer(){
    this.value = this.fetcher.searchState
  }

  onClickChange(){
    console.log("hello")
    this.fetcher.searchState = !this.fetcher.searchState
    this.value = this.fetcher.searchState
  }
}
