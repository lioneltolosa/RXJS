import { fromEvent, Observable } from "rxjs";
import { debounceTime, pluck, map, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "./interfaces/github-user-interface";
import { GithubUsersResp } from "./interfaces/github-users-interface";

const body = document.querySelector('body');
const input = document.createElement('input');
const orderList = document.createElement('ol');
body.append(input, orderList);

const showUsers = ( users: GithubUser[]) => {
    console.log(users);
    orderList.innerHTML = '';

    for (let user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = user.avatar_url;

        const anchor = document.createElement('a');

        anchor.href = user.html_url;
        anchor.text = 'See View';
        anchor.target = '_blank'

        li.append( img );
        li.append( user.login);
        li.append( anchor )

        orderList.append( li )
    }
}

const url = 'https://api.github.com/search/users?q='

const event = fromEvent<KeyboardEvent>(document, 'keyup');

event.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>( text => {
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${text}`
        )
    }),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe(  showUsers )
