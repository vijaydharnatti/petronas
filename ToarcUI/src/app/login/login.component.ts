import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { MsalBroadcastService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  title = 'Employee';


  constructor(private authService: MsalService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;

    if (this.authService.instance.getAllAccounts().length > 0) {
     // this.islogin = true;

    }
    this.authService.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null) {
          this.authService.instance.setActiveAccount(res.account)

          

        }
      },
    );
    this.callprofile();
  

  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  callprofile() {
    this.http.get("https://graph.microsoft.com/v1.0/me").subscribe(
      res => {
        this.title = JSON.stringify(res);
        console.log(this.title);
      }
    )
  }
  //login in 

  login() {
    this.authService.loginRedirect();

  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    console.log(this.loginDisplay);
  }

}
