import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteacherdataComponent } from './viewteacherdata.component';

describe('ViewteacherdataComponent', () => {
  let component: ViewteacherdataComponent;
  let fixture: ComponentFixture<ViewteacherdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewteacherdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewteacherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
