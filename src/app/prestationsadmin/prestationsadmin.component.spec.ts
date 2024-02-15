import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsadminComponent } from './prestationsadmin.component';

describe('PrestationsadminComponent', () => {
  let component: PrestationsadminComponent;
  let fixture: ComponentFixture<PrestationsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
