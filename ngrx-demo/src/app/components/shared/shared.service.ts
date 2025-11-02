import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  carsData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  carData$ = this.carsData.asObservable();
  bikesData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); 
  bikeData$ = this.bikesData.asObservable();
}