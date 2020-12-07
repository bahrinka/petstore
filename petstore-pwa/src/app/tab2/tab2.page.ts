import {Component, OnInit} from '@angular/core';
import {Pet} from '../interfaces/pet';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pets: Pet[] = [];
  statuses: string[] = ['available', 'sold', 'pending'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.statuses.forEach((status: string) =>{
      this.http.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`).subscribe((data: any) => {
        console.log(`Data: ${JSON.stringify(data)}`);
        /*data.forEach((pet:any)=>{
          console.log(`Data: ${JSON.stringify(data.name)}`);
        })*/
        this.pets = this.pets.concat(data);
      });
    });
  }

}
