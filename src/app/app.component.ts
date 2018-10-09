import {Component} from '@angular/core';
import Backendless from 'backendless';
import {PersonService} from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private personService: PersonService) {
    Backendless.initApp(
      '2601D9F7-15B4-7CB2-FFFA-FB78C9D5BF00',
      '5F63C55E-F0E1-7FC1-FF78-53759633E100'
    );

    this.personService.loadAll();
  }
}
