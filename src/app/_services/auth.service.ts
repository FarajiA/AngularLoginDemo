import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    public authUser: any;

    constructor(private http: Http) {
        this.authUser = JSON.parse(localStorage.getItem('AuthInfo'));
        if (this.authUser)
            this.authUser.authorized = !!this.authUser;
    }

    login(username: string, password: string){
        return new Promise((resolve, reject) => {
            let user = {
                username: username,
                authorized: true,
                token: 'akixixkoaoosjueuejjslal'
            };
            localStorage.setItem('AuthInfo', JSON.stringify(user));

            return resolve(user);
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('AuthInfo');
    }

}
