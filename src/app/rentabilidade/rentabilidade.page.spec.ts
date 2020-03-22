import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentabilidadePage } from './rentabilidade.page';

describe('RentabilidadePage', () => {
  let component: RentabilidadePage;
  let fixture: ComponentFixture<RentabilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentabilidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
