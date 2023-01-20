import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication';
export function customMinMax(min: number, max: number, key: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && control.value !== null && (isNaN(control.value) || control.value.length < min || control.value.length > max)) {
      return { [key]: true };
    }
    return null;
  };
}

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _missedError: string = '';
  public missedErrors$ = new EventEmitter<string>();

  constructor(private localStorage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthenticationService
    // private _snackBar: MatSnackBar
  ) { }
  notification: any = null;
  public setMissedError(errMsg: any) {
    this._missedError = errMsg
    this.missedErrors$.emit(this._missedError);
  }

  public clearMissedError() {
    this._missedError = '';
    this.missedErrors$.emit(this._missedError);
  }
}
