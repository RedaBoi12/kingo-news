import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainementnewsComponent } from './entertainementnews.component';

describe('EntertainementnewsComponent', () => {
  let component: EntertainementnewsComponent;
  let fixture: ComponentFixture<EntertainementnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainementnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainementnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
