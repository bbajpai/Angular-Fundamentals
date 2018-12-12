import {Component, Input,Output , EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date : {{event.date}}</div>
            <div [ngClass]="getClassStartTime()" [ngSwitch]="event.time">
                 Time : {{event.time}}
                 <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                 <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                 <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div> Price : {{event.price}}</div>
            <div [hidden]="!event?.location"> 
                <span>Location : {{event?.location?.address}}</span>
                <span> &nbsp;&nbsp; {{event?.location?.city}}</span>
                <span>&nbsp;{{event?.location?.country}}</span>
            </div>
            <div [hidden]="!event?.onlineURL"> Online URL : {{event.onlineURL}} </div>
            <!--<button class="btn btn-primary" (click)="handleClick()">Click </button>-->
        </div>
    `,
    styles:[`.thumbnail { min-height:210px}
             .green { color:green !important}
             .bold {font-weight:bold !important }`
            ]
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

    getClassStartTime(){
        //const isEarlyStart = this.event && this.event.time === '8:00 am';
            if(this.event && this.event.time === '8:00 am')
                return ['green bold'];
           return [];

    }
}