import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';



declare const FB:any;

@Component({
    selector: 'facebook-login',
    templateUrl: 'facebooklogin.html'
   // directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {


    constructor( private router: Router) {

        FB.init({
            appId      : '179614539238355',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {

        FB.login(
        (response)=> {
            if (response.authResponse) {
               console.log('Welcome!  Fetching your information.... ');
               FB.api('/me', {locale: 'en_US', fields: 'name, email' }, (response1) => {


                  console.log('Facebook Profile Connected ' + response1.email + '.');
                   alert(response1.name+ 'Facebook Profile Connected, ' + response1.email + '.');
                   this.router.navigate(['edit-profile']);
               });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        },
        {scope:'email'}
        );
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
          console.log(resp.status);
          FB.api('/me', { locale: 'en_US', fields: 'name, email' },function(userInfo) {
        console.log(userInfo.name + ': ' + userInfo.email);
        alert(userInfo.name + 'Facebook Profile Connected, ' + userInfo.email + '.');
      });
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {

        }else {

        }
    };

    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }
}
