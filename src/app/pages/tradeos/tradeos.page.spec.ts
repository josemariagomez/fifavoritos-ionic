import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradeosPage } from './tradeos.page';

describe('TradeosPage', () => {
  let component: TradeosPage;
  let fixture: ComponentFixture<TradeosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradeosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
