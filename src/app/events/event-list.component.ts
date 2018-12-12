import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


declare let toastr;

@Component({
    selector:'event-list',
    template:`
    <div>
        <h1> Upcoming angular events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event' #thumbnail (eventClick)="handleEventClick($event)"></event-thumbnail>
            </div>
        </div>
        
        <button class="btn btn-primary" (click)=thumbnail.logFoo()>Call Method</button>
    </div>
    `
})

export class EventListComponent implements OnInit{
    events:any[];
    constructor(private eventService: EventService, private _toastr : ToastrService){
        
    }
    ngOnInit(){
        this.events= this.eventService.getEvents();
    }
    handleEventClick(message){
        console.log("Event received :: "+message);
    }
    handleThumbnailClick(eventName){
        this._toastr.success(eventName,"hiii");
    }
}
