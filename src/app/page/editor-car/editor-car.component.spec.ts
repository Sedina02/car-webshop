import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCarComponent } from './editor-car.component';

describe('EditorCarComponent', () => {
  let component: EditorCarComponent;
  let fixture: ComponentFixture<EditorCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
