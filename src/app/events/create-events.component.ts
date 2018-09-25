import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { EventService } from '../events/shared/index'

@Component({
	templateUrl: 'create-events.component.html',
	styles: [`
		em {float:right; color: #E05C65; padding-left: 10px;}
		.error input {background-color:#E3C3C5;}
		.error ::-webkit-input-placeholder { color: #999}
		.error ::-moz-placeholder {color: #999}
		.error :-moz-placeholder { color: #999}
		.error :ms-input-placeholder {color: #999}
	`]
})
export class CreateEventComponent{
	newEvent;
	isDirty:boolean = true;


	constructor(private router: Router,
							private service: EventService){
		
	}
	cancel(){
		this.router.navigate(['/events'])
	}
	
	saveEvent(formValues){
		this.service.saveEvent(formValues);
		this.isDirty = false;
		this.router.navigate(['/events'])
	}
}