import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { AppComponent } from './app.component';
import { User } from './user';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should add two numbers', () => {
  //   const result = component.add(1, 2);
  //   expect(result).toBe(3);
  // });

  // it('should subtract two numbers', () => {
  //   const result = component.sub(2, 1);
  //   expect(result).toBe(1);
  // });

  // it('should multiply two numbers', () => {
  //   const result = component.mul(2, 3);
  //   expect(result).toBe(6);
  // });

  // it('should divide two numbers', () => {
  //   const result = component.div(6, 3);
  //   expect(result).toBe(2);
  // });
  // it('should return NaN when dividing by zero', () => {
  //   const result = component.div(1, 0);
  //   expect(isNaN(result)).toBe(true);
  // });
  
  describe('User', () => {
    it('should create a valid user', () => {
      const user = new User('john.doe@example.com', 'John', 'Doe', 20);
      expect(user.isValid()).toBe(true);
    });
  
    it('should not create a user with invalid email', () => {
      const user = new User('john.doe', 'John', 'Doe', 20);
      expect(user.isValid()).toBe(false);
    });

    it('should not create a user with missing email', () => {
      const user = new User('', 'John', 'Doe', 20);
      expect(user.isValid()).toBe(false);
    });
  
    it('should not create a user with missing first name', () => {
      const user = new User('john.doe@example.com', '' , 'Doe', 20);
      expect(user.isValid()).toBe(false);
    });
  
    it('should not create a user with missing last name', () => {
      const user = new User('john.doe@example.com', 'John', '', 20);
      expect(user.isValid()).toBe(false);
    });

    it('should not create a user with missing age', () => {
      const user = new User('john.doe@example.com', 'John', 'Doe');
      expect(user.isValid()).toBe(false);
    });

    it('should not create a user with age below 13', () => {
      const user = new User('john.doe@example.com', 'John', 'Doe', 10);
      expect(user.isValid()).toBe(false);
    });
  });
});


