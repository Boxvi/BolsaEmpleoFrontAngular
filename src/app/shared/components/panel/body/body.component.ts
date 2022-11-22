import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sideNavStatus: boolean = false;
  username: string = '';
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUsername();

  }

  getUsername() {
    if (this.authService.getUser()) {
      this.username = this.authService.getUser().username;
    }
  }

}
