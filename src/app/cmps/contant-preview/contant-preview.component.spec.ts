import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantPreviewComponent } from './contant-preview.component';

describe('ContantPreviewComponent', () => {
  let component: ContantPreviewComponent;
  let fixture: ComponentFixture<ContantPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
