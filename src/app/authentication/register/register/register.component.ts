import { AuthenticationService } from 'src/app/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.authenticationService.apiCall('post',this.registerForm.value)
        .subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
            });
  }
}
