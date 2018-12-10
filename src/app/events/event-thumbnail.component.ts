import {Component, Input,Output , EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date : {{event.date}}</div>
            <div> Time : {{event.time}}</div>
            <div> Price : {{event.price}}</div>
            <div> 
                <span>Location : {{event.location.address}}</span>
                <span> &nbsp;&nbsp; {{event.location.city}}</span>
                <span>&nbsp;{{event.location.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClick()">Click </button>
        </div>
    `
})

export class EventThumbnail{
    @Input() event:any;
    @Output() eventClick = new EventEmitter();
    someProperty ="Some data";
    handleClick(){
        console.log("Clicked !!!");
        this.eventClick.emit("Event generated from child :: " + this.event.name );
    }

    logFoo(){
        console.log("Foo");
    }
}