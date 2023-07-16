import{s as Et,n as Xe,e as Ye}from"../chunks/scheduler.e108d1fd.js";import{S as Nt,i as Vt,g as l,s,z as Ot,h as a,f as r,c as o,j as c,x as n,k as t,A as D,l as Pt,y as e,a as kt,B as St}from"../chunks/index.a9aad4a7.js";import{M as Ht}from"../chunks/modal.aa14af62.js";import{m as Dt,s as Zt,d as qt}from"../chunks/store.04b0bdc9.js";const Ut=!1,Ft=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ut},Symbol.toStringTag,{value:"Module"}));function Rt(Z){let A,q,p,x,g,_,re="SNDI",U,m,v,i,we='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',ie,u,d,fe='<h6 class="dropdown-header">Profil</h6>',Be,ge,B,$e="Aktueller Benutzer",ze,de,et='<button class="dropdown-item" type="button">Passwort ändern</button>',Ie,ce,tt='<button id="login-creator" class="dropdown-item" type="button">Logins Verwalten</button>',ke,ue,lt='<button class="dropdown-item" type="button">Ausloggen</button>',He,ae,at=`<div class="bg-dark-subtle"><div class="btn-group p-2 svelte-1y81bwy"><button id="add" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Hinzufügen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="edit" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Bearbeiten" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="del" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Entfernen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="cancel" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Schließen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg></button></div></div> <ul class="sidebar-list list-group list-group-flush svelte-1y81bwy" id="sidebar-list"></ul> <div class="sidebar-search input-group pb-1 px-1 svelte-1y81bwy"><button id="advanced" class="btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1y81bwy" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" title="Nach Parametern Suchen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg></button> <ul class="dropdown-menu" id="group-select-dropdown"><li><h6 class="dropdown-header">Gruppe</h6></li> <form class="px-3 py-1" action="javascript:handleAdvanced()"><div class="mb-2"><select id="group-select" class="form-select" aria-label="Group Select"></select></div> <button id="button-group-select" type="submit" class="btn btn-primary"><span id="spinner-group-select" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
						Suchen</button></form></ul> <input type="text" class="form-control" placeholder="Suche" id="search"/> <button id="select-button" class="btn btn-outline-secondary dropdown-toggle" type="button" title="Kategorie" data-bs-toggle="dropdown" aria-expanded="false">Bürger</button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Kategorie</h6></li> <li><button id="user" class="dropdown-item active" type="button">Bürger</button></li> <li><button id="workless" class="dropdown-item" type="button">Arbeitslosenreg.</button></li> <li><button id="criminal" class="dropdown-item" type="button">Kriminalregister</button></li></ul></div>`,Ee,b,R,nt='<div class="card-title row"><div class="col"><label for="forename" class="form-label">Vorname</label> <input id="forename" type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" readonly=""/></div> <div class="col"><label for="surname" class="form-label">Nachname</label> <input id="surname" type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" readonly=""/></div></div> <div class="row"><div class="col"><label for="account" class="form-label">Account</label> <input id="account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div> <div class="col"><label for="role" class="form-label">Gruppe</label> <input id="role" type="text" class="form-control" placeholder="Gruppe" aria-label="Gruppe" readonly=""/></div></div> <button id="user-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="user-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="user-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="user-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="user-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button>',Ne,j,st='<div class="card-title row"><div class="col"><label for="workless-select" class="form-label">Account</label> <div class="input-group mb-3 workless-select"><button id="workless-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="workless-select-dropdown" class="dropdown-menu"></ul> <input id="workless-account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div></div> <div class="col"><label for="old-company" class="form-label">Vorheriger Betrieb</label> <input id="old-company" type="text" class="form-control" placeholder="Vorgeriger Betrieb" aria-label="Vorgeriger Betrieb" readonly=""/></div></div> <div class="row"><div class="col form-group"><label for="date-of-dismiss" class="form-label">Datum der Entlassung</label> <input type="date" class="form-control" id="date-of-dismiss" readonly=""/></div> <div class="col"><label for="currently-workless" class="form-label">Aktuell Arbeitslos</label> <div class="input-group mb-3 currently-select"><button id="currently-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswahl">Auswahl</button> <ul id="currently-select-dropdown" class="dropdown-menu"><li><button id="yes-currently" class="dropdown-item" type="button">Ja</button></li> <li><button id="no-currently" class="dropdown-item" type="button">Nein</button></li></ul> <input id="currently-workless" type="text" class="form-control" placeholder="Auswahl" aria-label="Auswahl" readonly=""/></div></div></div> <div id="only-on-currently-no" class="row" hidden=""><div class="col"><label for="new-company" class="form-label">Neuer Betrieb</label> <input id="new-company" type="text" class="form-control" placeholder="Neuer Betrieb" aria-label="Neuer Betrieb" readonly=""/></div> <div class="col"><label for="total-time" class="form-label">Insgeammte arbeitslose Zeit</label> <input id="total-time" type="text" class="form-control" placeholder="Insgeammte arbeitslose Zeit" aria-label="Insgeammte arbeitslose Zeit" readonly=""/></div></div> <button id="workless-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="workless-confirm-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="workless-abort-button" class="btn btn-outline-danger m-3" type="button" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 justify-content-center get-user" style="max-width: 160px;">Bürger abrufen</button>',Ve,W,ot='<div class="card-title row"><div class="col"><label for="criminal-select" class="form-label">Beschuldigter</label> <div class="input-group mb-3 criminal-select"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="criminal-select-dropdown" class="dropdown-menu"></ul> <input id="criminal-account" type="text" class="form-control" placeholder="Beschuldigter" aria-label="Beschuldigter" readonly=""/></div></div> <div class="col"><label for="kind" class="form-label">Art</label> <input id="kind" type="text" class="form-control" placeholder="Art" aria-label="Art" readonly=""/></div></div> <div class="row"><div class="col"><label for="accuser-select" class="form-label">Anzeiger</label> <div class="input-group mb-3 accuser-select"><button id="accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="accuser-select-dropdown" class="dropdown-menu"></ul> <input id="accuser" type="text" class="form-control" placeholder="Anzeiger" aria-label="Anzeiger" readonly=""/></div></div> <div class="col"><label for="police-consultant" class="form-label">Sachberater Polizei</label> <div class="input-group mb-3 police-consultant-select"><button id="police-consultant-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="police-consultant-select-dropdown" class="dropdown-menu"></ul> <input id="police-consultant" type="text" class="form-control" placeholder="Sachberater Polizei" aria-label="Sachberater Polizei" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="lawyer-culprit" class="form-label">Anwalt des Beschuldigtens</label> <div class="input-group mb-3 lawyer-culprit-select"><button id="lawyer-culprit-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-culprit-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-culprit" type="text" class="form-control" placeholder="Anwalt des Beschuldigtens" aria-label="Anwalt des Beschuldigtens" readonly=""/></div></div> <div class="col"><label for="lawyer-accuser" class="form-label">Anwalt des Anzeigers</label> <div class="input-group mb-3 lawyer-accuser-select"><button id="lawyer-accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-accuser-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-accuser" type="text" class="form-control" placeholder="Anwalt des Anzeigers" aria-label="Anwalt des Anzeigers" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="facts" class="form-label">Tatbestand</label> <input id="facts" type="text" class="form-control" placeholder="Tatbestand" aria-label="Tatbestand" readonly=""/></div></div> <div class="row"><div class="col"><label for="time-of-crime" class="form-label">Zeitpunkt der Tat</label> <input id="time-of-crime" type="text" class="form-control" placeholder="Zeitpunkt der Tat" aria-label="Zeitpunkt der Tat" readonly=""/></div> <div class="col"><label for="location-of-crime" class="form-label">Ort der Tat</label> <input id="location-of-crime" type="text" class="form-control" placeholder="Ort der Tat" aria-label="Ort der Tat" readonly=""/></div></div> <div class="row"><div class="col"><label for="note" class="form-label">Kommentar</label> <input id="note" type="text" class="form-control" placeholder="Kommentar" aria-label="Kommentar" readonly=""/></div></div> <div class="row"><div class="col"><label for="verdict" class="form-label">Urteil</label> <div class="input-group mb-3 verdict-select"><button id="verdict-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen">Urteil</button> <ul id="verdict-select-dropdown" class="dropdown-menu"><li><button id="no-yet" class="dropdown-item" type="button">a.) Noch kein Verfahren</button></li> <li><button id="guilty" class="dropdown-item" type="button">b.) Schuldig</button></li> <li><button id="innocent" class="dropdown-item" type="button">c.) Unschuldig</button></li></ul> <input id="verdict" type="text" class="form-control" placeholder="Urteil" aria-label="Urteil" readonly=""/></div></div></div> <button id="criminal-add-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="criminal-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="criminal-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 get-user" style="max-width: 160px;">Bürger abrufen</button>',Oe,h,f,K,rt="Einen Login hinzufügen:",Pe,ne,it='<div class="col"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-add-select-dropdown" class="dropdown-menu"></ul> <input id="login-add-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <div class="col"><label for="login-add-password" class="form-label">Passwort</label> <input id="login-add-password" type="password" class="form-control" placeholder="Passwort" aria-label="Passwort"/></div>',Se,y,G,J,dt="Rechte für Bürger",De,C,z,ct="None",I,ut="ReadOnly",k,bt="Write",Ze,F,Q,pt="Rechte für Arbeitslose",qe,L,H,vt="None",E,ht="ReadOnly",N,gt="Write",Ue,X,Y,mt="Rechte für das Kriminalregister",Re,M,V,wt="None",O,ft="ReadOnly",P,yt="Write",je,S,xt=`<span id="add-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Hinzufügen`,We,be,_t=`<label for="delete-login" class="form-label">Einen Login entfernen:</label> <div class="card-title row col delete-login"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-delete-select-dropdown" class="dropdown-menu"></ul> <input id="login-delete-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <button id="delete-login-button" type="button" class="btn btn-outline-danger m-3"><span id="delete-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Entfernen</button>`,Ke,pe,Ct=`<p style="margin: 0;">Alle Logins entfernen:</p> <button id="delete-all-logins-button" type="button" class="btn btn-outline-danger m-3 delete-all-logins"><span id="delete-all-logins-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Alle Logins löschen</button>`,Ge,$,Lt="Schließen",Je,ee,Mt=`<div><label for="password-changer" class="form-label">Passwort ändern:</label> <div class="card-title row password-changer"><div class="col"><label for="new-password" class="form-label">Neues Passwort</label> <input id="new-password" type="password" class="form-control" placeholder="Neues Passwort" aria-label="Neues Passwort"/></div> <div class="col"><label for="new-password-wdh" class="form-label">Wiederholen</label> <input id="new-password-wdh" type="password" class="form-control" placeholder="Wiederholen" aria-label="Wiederholen"/></div></div> <button id="change-password-button" type="button" class="btn btn-outline-danger m-3"><span id="change-password-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Ändern</button></div> <button class="btn btn-outline-danger m-2" type="button">Schließen</button>`,Fe,se,Tt='<div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Name</h5> <p class="card-text" id="name"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Version</h5> <p class="card-text" id="version"></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Entwickler</h5> <p class="card-text" id="devs"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Repository</h5> <p class="card-text"><a target="_blank" id="repo"></a></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Beschreibung</h5> <p class="card-text" id="description"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Bürger insgesammt</h5> <p class="card-text" id="users"></p></div></div></div></div>',Qe,At;return{c(){A=l("meta"),q=s(),p=l("section"),x=l("nav"),g=l("div"),_=l("a"),_.textContent=re,U=s(),m=l("div"),v=l("div"),i=l("button"),i.innerHTML=we,ie=s(),u=l("ul"),d=l("li"),d.innerHTML=fe,Be=s(),ge=l("li"),B=l("button"),B.textContent=$e,ze=s(),de=l("li"),de.innerHTML=et,Ie=s(),ce=l("li"),ce.innerHTML=tt,ke=s(),ue=l("li"),ue.innerHTML=lt,He=s(),ae=l("div"),ae.innerHTML=at,Ee=s(),b=l("div"),R=l("div"),R.innerHTML=nt,Ne=s(),j=l("div"),j.innerHTML=st,Ve=s(),W=l("div"),W.innerHTML=ot,Oe=s(),h=l("div"),f=l("div"),K=l("label"),K.textContent=rt,Pe=s(),ne=l("div"),ne.innerHTML=it,Se=s(),y=l("div"),G=l("div"),J=l("label"),J.textContent=dt,De=s(),C=l("select"),z=l("option"),z.textContent=ct,I=l("option"),I.textContent=ut,k=l("option"),k.textContent=bt,Ze=s(),F=l("div"),Q=l("label"),Q.textContent=pt,qe=s(),L=l("select"),H=l("option"),H.textContent=vt,E=l("option"),E.textContent=ht,N=l("option"),N.textContent=gt,Ue=s(),X=l("div"),Y=l("label"),Y.textContent=mt,Re=s(),M=l("select"),V=l("option"),V.textContent=wt,O=l("option"),O.textContent=ft,P=l("option"),P.textContent=yt,je=s(),S=l("button"),S.innerHTML=xt,We=s(),be=l("div"),be.innerHTML=_t,Ke=s(),pe=l("div"),pe.innerHTML=Ct,Ge=s(),$=l("button"),$.textContent=Lt,Je=s(),ee=l("div"),ee.innerHTML=Mt,Fe=s(),se=l("div"),se.innerHTML=Tt,this.h()},l(oe){const me=Ot("svelte-pset25",document.head);A=a(me,"META",{name:!0,content:!0}),me.forEach(r),q=o(oe),p=a(oe,"SECTION",{class:!0});var ve=c(p);x=a(ve,"NAV",{class:!0});var Bt=c(x);g=a(Bt,"DIV",{class:!0});var ye=c(g);_=a(ye,"A",{href:!0,class:!0,"data-svelte-h":!0}),n(_)!=="svelte-130echy"&&(_.textContent=re),U=o(ye),m=a(ye,"DIV",{class:!0});var zt=c(m);v=a(zt,"DIV",{class:!0});var xe=c(v);i=a(xe,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),n(i)!=="svelte-1uf5uhq"&&(i.innerHTML=we),ie=o(xe),u=a(xe,"UL",{class:!0});var T=c(u);d=a(T,"LI",{"data-svelte-h":!0}),n(d)!=="svelte-juqfu2"&&(d.innerHTML=fe),Be=o(T),ge=a(T,"LI",{});var It=c(ge);B=a(It,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),n(B)!=="svelte-tont5g"&&(B.textContent=$e),It.forEach(r),ze=o(T),de=a(T,"LI",{"data-svelte-h":!0}),n(de)!=="svelte-1ejrwio"&&(de.innerHTML=et),Ie=o(T),ce=a(T,"LI",{"data-svelte-h":!0}),n(ce)!=="svelte-1wg4okg"&&(ce.innerHTML=tt),ke=o(T),ue=a(T,"LI",{"data-svelte-h":!0}),n(ue)!=="svelte-18qyzcn"&&(ue.innerHTML=lt),T.forEach(r),xe.forEach(r),zt.forEach(r),ye.forEach(r),Bt.forEach(r),He=o(ve),ae=a(ve,"DIV",{class:!0,"data-svelte-h":!0}),n(ae)!=="svelte-1axk1q2"&&(ae.innerHTML=at),Ee=o(ve),b=a(ve,"DIV",{class:!0});var w=c(b);R=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(R)!=="svelte-1gdqj6y"&&(R.innerHTML=nt),Ne=o(w),j=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(j)!=="svelte-1q1683a"&&(j.innerHTML=st),Ve=o(w),W=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(W)!=="svelte-yubxqo"&&(W.innerHTML=ot),Oe=o(w),h=a(w,"DIV",{id:!0});var te=c(h);f=a(te,"DIV",{});var le=c(f);K=a(le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(K)!=="svelte-1elzi6x"&&(K.textContent=rt),Pe=o(le),ne=a(le,"DIV",{class:!0,"data-svelte-h":!0}),n(ne)!=="svelte-1nek0y8"&&(ne.innerHTML=it),Se=o(le),y=a(le,"DIV",{class:!0,style:!0});var he=c(y);G=a(he,"DIV",{class:!0});var _e=c(G);J=a(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(J)!=="svelte-1dy4v9n"&&(J.textContent=dt),De=o(_e),C=a(_e,"SELECT",{id:!0,class:!0,"aria-label":!0});var Ce=c(C);z=a(Ce,"OPTION",{"data-svelte-h":!0}),n(z)!=="svelte-qtemz2"&&(z.textContent=ct),I=a(Ce,"OPTION",{"data-svelte-h":!0}),n(I)!=="svelte-qphrza"&&(I.textContent=ut),k=a(Ce,"OPTION",{"data-svelte-h":!0}),n(k)!=="svelte-ov28pk"&&(k.textContent=bt),Ce.forEach(r),_e.forEach(r),Ze=o(he),F=a(he,"DIV",{class:!0});var Le=c(F);Q=a(Le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(Q)!=="svelte-1ylgrto"&&(Q.textContent=pt),qe=o(Le),L=a(Le,"SELECT",{id:!0,class:!0,"aria-label":!0});var Me=c(L);H=a(Me,"OPTION",{"data-svelte-h":!0}),n(H)!=="svelte-qtemz2"&&(H.textContent=vt),E=a(Me,"OPTION",{"data-svelte-h":!0}),n(E)!=="svelte-qphrza"&&(E.textContent=ht),N=a(Me,"OPTION",{"data-svelte-h":!0}),n(N)!=="svelte-ov28pk"&&(N.textContent=gt),Me.forEach(r),Le.forEach(r),Ue=o(he),X=a(he,"DIV",{class:!0});var Te=c(X);Y=a(Te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),n(Y)!=="svelte-d0gpuu"&&(Y.textContent=mt),Re=o(Te),M=a(Te,"SELECT",{id:!0,class:!0,"aria-label":!0});var Ae=c(M);V=a(Ae,"OPTION",{"data-svelte-h":!0}),n(V)!=="svelte-qtemz2"&&(V.textContent=wt),O=a(Ae,"OPTION",{"data-svelte-h":!0}),n(O)!=="svelte-qphrza"&&(O.textContent=ft),P=a(Ae,"OPTION",{"data-svelte-h":!0}),n(P)!=="svelte-ov28pk"&&(P.textContent=yt),Ae.forEach(r),Te.forEach(r),he.forEach(r),je=o(le),S=a(le,"BUTTON",{id:!0,type:!0,class:!0,"data-svelte-h":!0}),n(S)!=="svelte-1h1u1w8"&&(S.innerHTML=xt),le.forEach(r),We=o(te),be=a(te,"DIV",{"data-svelte-h":!0}),n(be)!=="svelte-k308nx"&&(be.innerHTML=_t),Ke=o(te),pe=a(te,"DIV",{"data-svelte-h":!0}),n(pe)!=="svelte-2smmib"&&(pe.innerHTML=Ct),Ge=o(te),$=a(te,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),n($)!=="svelte-muivp7"&&($.textContent=Lt),te.forEach(r),Je=o(w),ee=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(ee)!=="svelte-19r1zvj"&&(ee.innerHTML=Mt),Fe=o(w),se=a(w,"DIV",{id:!0,"data-svelte-h":!0}),n(se)!=="svelte-1uw969w"&&(se.innerHTML=Tt),w.forEach(r),ve.forEach(r),this.h()},h(){document.title="SNDM",t(A,"name","description"),t(A,"content","Main Page"),t(_,"href","/"),t(_,"class","navbar-brand svelte-1y81bwy"),t(i,"class","btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy"),t(i,"type","button"),t(i,"title","Profil"),t(i,"data-bs-toggle","dropdown"),t(i,"aria-expanded","false"),t(B,"class","dropdown-item"),t(B,"type","button"),t(u,"class","dropdown-menu dropdown-menu-end"),t(v,"class","btn-group dropdown"),t(m,"class","d-flex"),t(g,"class","container-fluid"),t(x,"class","nav navbar bg-secondary-subtle svelte-1y81bwy"),t(ae,"class","sidebar bg-dark svelte-1y81bwy"),t(R,"id","user-container"),R.hidden=!0,t(j,"id","workless-container"),j.hidden=!0,t(W,"id","criminal-container"),W.hidden=!0,t(K,"for","add-login"),t(K,"class","form-label"),t(ne,"class","card-title row add-login"),t(J,"for","login-add-user-permissions"),t(J,"class","form-label"),z.__value="None",D(z,z.__value),I.__value="ReadOnly",D(I,I.__value),k.__value="Write",D(k,k.__value),t(C,"id","login-add-user-permissions"),t(C,"class","form-select"),t(C,"aria-label","Permissions"),t(G,"class","col"),t(Q,"for","login-add-workless-permissions"),t(Q,"class","form-label"),H.__value="None",D(H,H.__value),E.__value="ReadOnly",D(E,E.__value),N.__value="Write",D(N,N.__value),t(L,"id","login-add-workless-permissions"),t(L,"class","form-select"),t(L,"aria-label","Permissions"),t(F,"class","col"),t(Y,"for","login-add-criminal-permissions"),t(Y,"class","form-label"),V.__value="None",D(V,V.__value),O.__value="ReadOnly",D(O,O.__value),P.__value="Write",D(P,P.__value),t(M,"id","login-add-criminal-permissions"),t(M,"class","form-select"),t(M,"aria-label","Permissions"),t(X,"class","col"),t(y,"class","row"),Pt(y,"padding-top","5px"),t(S,"id","add-login-button"),t(S,"type","button"),t(S,"class","btn btn-outline-danger m-3"),t($,"class","btn btn-outline-danger m-2"),t($,"type","button"),t(h,"id","login-container"),h.hidden=!0,t(ee,"id","password-changer-container"),ee.hidden=!0,t(se,"id","stats-container"),t(b,"class","mid p-3 bg-body-secondary svelte-1y81bwy"),t(p,"class","main svelte-1y81bwy")},m(oe,me){e(document.head,A),kt(oe,q,me),kt(oe,p,me),e(p,x),e(x,g),e(g,_),e(g,U),e(g,m),e(m,v),e(v,i),e(v,ie),e(v,u),e(u,d),e(u,Be),e(u,ge),e(ge,B),e(u,ze),e(u,de),e(u,Ie),e(u,ce),e(u,ke),e(u,ue),e(p,He),e(p,ae),e(p,Ee),e(p,b),e(b,R),e(b,Ne),e(b,j),e(b,Ve),e(b,W),e(b,Oe),e(b,h),e(h,f),e(f,K),e(f,Pe),e(f,ne),e(f,Se),e(f,y),e(y,G),e(G,J),e(G,De),e(G,C),e(C,z),e(C,I),e(C,k),e(y,Ze),e(y,F),e(F,Q),e(F,qe),e(F,L),e(L,H),e(L,E),e(L,N),e(y,Ue),e(y,X),e(X,Y),e(X,Re),e(X,M),e(M,V),e(M,O),e(M,P),e(f,je),e(f,S),e(h,We),e(h,be),e(h,Ke),e(h,pe),e(h,Ge),e(h,$),e(b,Je),e(b,ee),e(b,Fe),e(b,se),Qe||(At=St(B,"click",Z[4]),Qe=!0)},p:Xe,i:Xe,o:Xe,d(oe){oe&&(r(q),r(p)),r(A),Qe=!1,At()}}}function jt(Z,A,q){let p,x,g;Ye(Z,Dt,d=>q(1,p=d)),Ye(Z,Zt,d=>q(2,x=d)),Ye(Z,qt,d=>q(3,g=d));var _=localStorage.getItem("auth");const re=localStorage.getItem("current_user");var U=localStorage.getItem("permissions");U&&(U=JSON.parse(U)),(!_||!re||!U)&&(window.open("/login","_self"),we("InvalidLocalKeys"));let m,v,i;function we(d){if(m&&v&&i){const fe=new Ht(m);v.textContent="Fehler",i.textContent=d,fe.toggle()}throw d}function ie(){if(m&&v&&i&&re){const d=new Ht(m);v.textContent="Info",i.textContent="Der akutelle Benutzer ist "+re,d.toggle()}}const u=()=>ie();return Z.$$.update=()=>{Z.$$.dirty&14&&(m=g,v=x,i=p)},[ie,p,x,g,u]}class Qt extends Nt{constructor(A){super(),Vt(this,A,jt,Rt,Et,{})}}export{Qt as component,Ft as universal};