import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }
    store(key, value) {
        localStorage[key] = JSON.stringify(value);
    }

    load(key, defaultValue = null) {
        var value = localStorage[key] || defaultValue;
        return JSON.parse(value);
    }

}