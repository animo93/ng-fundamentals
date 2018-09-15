import { Component } from '@angular/core'
@Component({
	selector: 'events-list',
	template: `<div>
		<h1>Upcoming Angular Events</h1>
		<hr>
		<event-thumbnail [event]="event1"></event-thumbnail>
		</div>`
})
export class EventsListComponent{
	event1 = {
		id : 1,
		name : 'Angular Connect',
		date : '31/8/2018',
		time : '2:28',
		price : 599.9,
		imgUrl : 'assets/angularconnect-shield.png',
		location : {
			address : 'Pimple Saudagar',
			city : 'Pune',
			country : 'India'
		}
	}

	
}