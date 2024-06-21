import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOBBYComponent } from './lobby.component';

describe('LOBBYComponent', () => {
  let component: LOBBYComponent;
  let fixture: ComponentFixture<LOBBYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LOBBYComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LOBBYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
