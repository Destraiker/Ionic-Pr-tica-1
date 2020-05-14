import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViagensPage } from './viagens.page';

describe('ViagensPage', () => {
  let component: ViagensPage;
  let fixture: ComponentFixture<ViagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
