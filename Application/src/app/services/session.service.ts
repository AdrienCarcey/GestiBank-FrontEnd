import { Injectable } from "@angular/core";
import { Session } from '../modeles/session'

@Injectable()
export class SessionService {

	constructor(){}

	setSession(session: Session){
		localStorage.setItem("session", JSON.stringify(session));
	}

	getSession(){
		return JSON.parse(localStorage.getItem("session"));
	}

	getSessionName(){
		return JSON.parse(localStorage.getItem("session")).nomUtilisateur;
	}

	destroySession(){
		localStorage.removeItem("session");
	}

}
