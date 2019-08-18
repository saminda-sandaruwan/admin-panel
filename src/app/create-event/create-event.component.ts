import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const API_BASE_URL = "http://localhost:8000";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private http: HttpClient, 
              private router: Router)
              { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {

    this.addForm = this.fb.group({
      Title: [''],
      Description: [''],
      Date: [''],
      Start_time: [''],
      End_time: ['']
    })
  }

  submit(): void {
    const controls = this.addForm.controls;
    let body = new URLSearchParams();
    var ss = controls['Title'].value;

    let data = new FormData();

    var event = {
      "title": controls['Title'].value,
      "description": controls['Description'].value,
      "date": controls['Date'].value,
      "start_time": controls['Start_time'].value,
      "end_time": controls['End_time'].value
    }

    data.append("event", JSON.stringify(event));

    // body.set('title', );
    // body.set('description', controls['Description'].value);
    // body.set('date', controls['Date'].value);
    // body.set('start_time', controls['Start_time'].value);
    // body.set('end_time', controls['End_time'].value);

    let uri = API_BASE_URL + "/api/eventpost";  
    this.http.post(uri, event).subscribe(res => {

      this.router.navigateByUrl("list-event");
    });
  }

}
