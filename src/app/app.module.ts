import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
	CreateSessionComponent,
  SessionListComponent,
	DurationPipe

} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component'
import { TOASTR_TOKEN,
				Toastr,
				JQ_TOKEN,
				CollapsibleWellComponent,
			  SimpleModalComponent
} from './common/index'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
    CreateSessionComponent,
    SessionListComponent,
		CollapsibleWellComponent,
		DurationPipe,
		SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
		{ provide: JQ_TOKEN, useValue: jQuery }
    EventRouteActivator,
    EventListResolver,
		AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event , Do you really want to cancel ?');
  }
  return true;
}
