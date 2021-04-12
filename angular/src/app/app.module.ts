import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

import { MaterialModule } from './material/material.module';
import { UserService } from './services/user.service';
import { NearMeComponent } from './components/near-me/near-me.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BookingComponent } from './booking/booking.component'
import { CalendarEventFormDialogComponent } from './calendar/event-form/event-form.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    UpdateUserComponent,
    MapComponent,
    NearMeComponent,
    BookingComponent,
    CalendarEventFormDialogComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF2ZEj42wsx9GCLbeYn9VPhK5R8zuHeCU',
      libraries: ['places']
    }),

    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
