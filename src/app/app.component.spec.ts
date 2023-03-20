import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { User } from './user';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
      const user = new User('john.doe@example.com', '', 'Doe', 20);
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


