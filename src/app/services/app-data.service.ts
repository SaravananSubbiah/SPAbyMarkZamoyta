import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from './user.service';
import { Country } from '../view-models/country';
import { Score } from '../view-models/score';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppDataService {

  private countries : Array<Country> = [
    { id: 1, name:"Switzerland",  epiIndex: 87.57, temp: 85 },
    { id: 2, name:"Luxembourg",   epiIndex: 83., temp: 90 },
    { id: 5, name:"Czech-Republic", epiIndex: 81.47, temp: 95 },
    { id: 6, name:"Germany", epiIndex: 80.47, temp: 35 },
    { id: 7, name:"Spain", epiIndex: 79.09, temp: 75 },
    { id: 8, name:"Austria", epiIndex: 78.32, temp: 105 },
    { id: 9, name:"Sweden", epiIndex: 78.09, temp: 25 },
    { id: 10, name:"Norway", epiIndex: 78.04, temp: 85 }
  ];

  private scores : Array<Score> = [
    { id: 1, name:"Switzerland",  score: 85 },
    { id: 2, name:"Luxembourg", score: 90 },
    { id: 5, name:"Czech-Republic", score: 95 },
    { id: 6, name:"Germany", score: 35 },
    { id: 7, name:"Spain", score: 75 },
    { id: 8, name:"Austria", score: 105 },
    { id: 9, name:"Sweden", score: 25 },
    { id: 10, name:"Norway", score: 85 }
  ];

  constructor(private userService: UserService, private http: Http) {
  }

  createCountry(vm: Country) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
    let id = 0;
    this.countries.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.countries.push(vm);
    return Observable.of(vm);
  }

  deleteCountry(id: number) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
  }

  getCountries() : Observable<any> {
    return Observable.of(this.countries);
  }

  getCountry(id: number) : Observable<Country> {
    var country = this.countries.find(c => c.id == id);
    return Observable.of(country);
  }

  updateCountry(updatedCountry: Country) : Observable<any> {
    var country = this.countries.find(c => c.id == updatedCountry.id);
    Object.assign(country, updatedCountry);
    return Observable.of(country).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  }

    getScores() : Observable<any> {
    return Observable.of(this.scores);
  }

  getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
  getAirportList() : Observable<any> {
        var data =  this.http.get('http://localhost:4200/src/app/xml/AirportList.xml')        
            .map(response => response.json);
            //var xmlData = JSON.stringify({ data });
            /*xml2js.parseString(data, ((result) => {
              console.log(result);
                return result;
                }));*/

            console.log(data);
            return data;
    }

  
}
