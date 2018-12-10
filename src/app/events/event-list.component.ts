import { Component } from '@angular/core';


@Component({
    selector:'event-list',
    template:`
    <div>
        <h1> Upcoming angular events</h1>
        <hr>
        <event-thumbnail [event]='event1' #thumbnail (eventClick)="handleEventClick($event)"></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)=thumbnail.logFoo()>Call Method</button>
    </div>
    `
})

export class EventListComponent{
    event1 = {
        id:1,
        name:'Angular Connect',
        date:'1/6/2019',
        time:'10.30PM',
        price:599,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:{
            address:'ABC 101',
            city:'London',
            country:'England'
        }
    }

    handleEventClick(message){
        console.log("Event received :: "+message);
    }
}
