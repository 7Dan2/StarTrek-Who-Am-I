import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsndComponent } from './modalsnd.component';

describe('ModalsndComponent', () => {
  let component: ModalsndComponent;
  let fixture: ComponentFixture<ModalsndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
