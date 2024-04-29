import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ClassesComponent } from "./components/classes/classes.component";
import { ContactComponent } from "./components/contact/contact.component";
import { SchedulesComponent } from "./components/schedules/schedules.component";
import { TrainersComponent } from "./components/trainers/trainers.component";
import { LoginComponent } from "./components/login/login.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ClassesComponent, ContactComponent, SchedulesComponent, TrainersComponent, LoginComponent]
})
export class AppComponent {
  title = 'Nhebek Wa7ch';
}
