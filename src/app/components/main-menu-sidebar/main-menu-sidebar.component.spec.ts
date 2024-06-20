import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuSidebarComponent } from './main-menu-sidebar.component';

describe('MainMenuSidebarComponent', () => {
  let component: MainMenuSidebarComponent;
  let fixture: ComponentFixture<MainMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
