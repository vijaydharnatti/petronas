import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  report: any[] = [];
  serviceBaseUrl = environment.baseApiUrl;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getWeatherReport();
  }

  //todo: this one is temporary method to be removed.
  getWeatherReport() {
    this.http.get<any>(this.serviceBaseUrl +"WeatherForecast")
      .subscribe(
        res => {
          this.report = res;

          for (let item of this.report) {
            console.log(item.summary);
          }


        },
        err => {
          console.log(err);

        }
      )
  }

}
