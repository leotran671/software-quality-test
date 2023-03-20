import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HyppopotamusComponent } from './hyppopotamus.component';
import { Hyppopatamus } from './hyppopotamus';

describe('HyppopotamusComponent', () => {
  let component: HyppopotamusComponent;
  let fixture: ComponentFixture<HyppopotamusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HyppopotamusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HyppopotamusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Hyppopotamus', () => {
    it('Hyppo weight should be 1502', () => {
      const Hyppo = new Hyppopatamus('Hyppo', 1501, 32);
      expect(Hyppo.eat()).toBe(1502);
    });
    it('Hyppo weight should be 1500.7', () => {
      const Hyppo = new Hyppopatamus('Hyppo', 1501, 32);
      expect(Hyppo.swim()).toBe(1500.7);
    });
    it('fight test Hyppo1 should win against Hyppo2', () => {
      const h1 = new Hyppopatamus('h1', 1650, 32);
      const h2 = new Hyppopatamus('h2', 1800, 29);
      expect(h1.fight(h2)).toBe(h1);
    });
    it('toString test Should convert hippotamus object into string', () => {
      const Hyppo = new Hyppopatamus('Hyppo', 1501, 32);
      expect(Hyppo.toString()).toBe("Hippopotame Hyppo : poids = 1501 kg, taille des défenses = 32 cm");
    });
  });
});
