import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
