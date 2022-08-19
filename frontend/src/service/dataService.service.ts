import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "src/models/book";

@Injectable({
    providedIn: 'root',
})
export class DataService {
                                                  
    private static readonly URL: string = 'http://ec2-13-127-0-192.ap-south-1.compute.amazonaws.com/book/getBooks';

    constructor(private http: HttpClient) { }
    
    public getData(): Observable<Book[]> {
        return this.http.get<Book[]>(DataService.URL);
    }
}
