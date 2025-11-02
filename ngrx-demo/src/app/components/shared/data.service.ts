import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Product } from "../models/product.model";


@Injectable({
    providedIn: 'root'
})

export class DataService {

    getCarsData() {
        return of([{ id: 1, name: 'Trek Émonda', price: 2499 },
        { id: 2, name: 'Specialized Turbo', price: 4999 },
        { id: 3, name: 'Giant Propel', price: 2999 },
        { id: 4, name: 'Canyon Aeroad', price: 3999 },] as Product[]).pipe(delay(3000));
    }

    getBikesData() {
        return of([{
            name: 'Tesla Model S',
            id: 0,
            price: 79990
        },
        {
            name: 'BMW i4',
            id: 1,
            price: 55900
        },
        {
            name: 'Ford Mustang Mach-E',
            id: 2,
            price: 42995
        },
        {
            name: 'Mercedes EQS',
            id: 3,
            price: 102310
        }]).pipe(delay(3000));
    }
}   