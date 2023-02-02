import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulari: FormGroup;
  carregant = false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private router:Router) {
    this.formulari = this.fb.group({
      usuari: ['', Validators.required],
      contra: ['', Validators.required]

    })
  }

  ngOnInit(): void {

  }
  acces() {

    const usuari = this.formulari.value.usuari;
    const contra = this.formulari.value.contra;

    if (usuari == 'iocdawm9' && contra == 'ioc@dmin-123') {
      
      this.acces_tauler();
    }
    else {
      this.missatge_error();
      this.formulari.reset();
    }
  }

acces_tauler(){
  //Accedim a tauler
  this.carregant=true;
  setTimeout(()=>{
    //Carreguem tauler
    this.router.navigate(['tauler']);
    },1000)
}

  missatge_error() {
    //Missatge d'error
    this._snackBar.open('Error en dades d´accés', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }



}

