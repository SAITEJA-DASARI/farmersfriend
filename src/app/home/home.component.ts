import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  userObj
  onSubmit(query:NgForm){
    this.userObj=query.value;
    this.ds.setFormData(this.userObj);
    this.router.navigate(['/result'])
    query.reset()
  }

}
