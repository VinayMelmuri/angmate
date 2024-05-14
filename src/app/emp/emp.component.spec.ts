import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card'; // Add this line
import {MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this line

import { EmpComponent } from './emp.component';

describe('EmpComponent', () => {
  let component: EmpComponent;
  let fixture: ComponentFixture<EmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule,MatFormFieldModule,ReactiveFormsModule,
        MatInputModule,BrowserAnimationsModule],
      declarations: [EmpComponent]
    });
    fixture = TestBed.createComponent(EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
