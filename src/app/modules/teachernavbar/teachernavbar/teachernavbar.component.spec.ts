import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernavbarComponent } from './teachernavbar.component';

describe('TeachernavbarComponent', () => {
  let component: TeachernavbarComponent;
  let fixture: ComponentFixture<TeachernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
