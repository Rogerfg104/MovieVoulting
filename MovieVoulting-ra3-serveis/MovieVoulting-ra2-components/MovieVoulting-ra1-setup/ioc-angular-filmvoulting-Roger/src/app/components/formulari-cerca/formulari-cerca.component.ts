import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AsyncValidatorFn, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html'
})
export class FormulariCercaComponent implements OnInit {

  form!: FormGroup; // 👈 importante (!)

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      terme: [
        '',
        [Validators.minLength(2), Validators.maxLength(50)],
        [this.validadorAsync()]
      ]
    });

    this.form.get('terme')?.valueChanges
      .pipe(debounceTime(400))
      .subscribe(value => {
        console.log('Buscando:', value);
      });
  }

  validadorAsync(): AsyncValidatorFn {
    return (control) => {
      return new Promise(resolve => {
        setTimeout(() => {
          if (control.value === 'zz') {
            resolve({ sensResultats: true });
          } else {
            resolve(null);
          }
        }, 500);
      });
    };
  }

  netejar() {
    this.form.reset();
  }
}