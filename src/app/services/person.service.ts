import Backendless from 'backendless';
import {Person} from './person.interface';
import {Injectable} from '@angular/core';

const PersonsStore = Backendless.Data.of(Person);

@Injectable()
export class PersonService {

  public persons: Person[] = [];

  loadAll() {
    PersonsStore.find<Person>().then((persons: Person[]) => {
      this.persons = persons;
      console.log(this.persons);
      this.addRealTimeListeners();
    });
  }

  addRealTimeListeners(): void {
    const rtHandlers: Backendless.EventHandler = PersonsStore.rt();

    rtHandlers.addCreateListener<Person>(this.onPersonAdd.bind(this));
    rtHandlers.addUpdateListener<Person>(this.onPersonChange.bind(this));
    rtHandlers.addDeleteListener<Person>(this.onPersonRemove.bind(this));
  }

  onPersonAdd(newPerson: Person): void {
    console.log('person added!');
  }

  onPersonChange(updatedPerson: Person): void {
    console.log('person changed!');
  }

  onPersonRemove(oldPerson: Person): void {
    console.log('person removed!');
  }
}
