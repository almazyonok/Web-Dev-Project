import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizePageComponent } from './quize-page.component';

describe('QuizePageComponent', () => {
  let component: QuizePageComponent;
  let fixture: ComponentFixture<QuizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
