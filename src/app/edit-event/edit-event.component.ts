import { Component, OnInit } from '@angular/core';
import { Event, EventData } from '../models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: EventData = new EventData();
  editForm: FormGroup;

  username = "";

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadDetails();
  }

  loadDetails(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    let uri = API_BASE_URL  + "/api/eventgetbyid/"+id;
    this.http.get(uri).subscribe((res: any) =>{
      this.event = res;
    })
  }

  update(event: any): void {
    // let uri = API_BASE_URL  + "/api/update/"+id;
  }

}
