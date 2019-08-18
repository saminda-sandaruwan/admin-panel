import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event as Events } from "../models";
import { Router } from '@angular/router';

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events: Events[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    let uri = API_BASE_URL + "/api/eventget";

    this.http.get(uri).subscribe((res: any) => {
      this.events = res;
    })
  }

  delete(id: any): void {
    let uri = API_BASE_URL + "/api/eventdelete/" + id;
    this.http.delete(uri).subscribe(res => {
    });

  }

}
