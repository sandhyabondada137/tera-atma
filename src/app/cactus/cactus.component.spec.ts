import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusComponent } from './cactus.component';

describe('CactusComponent', () => {
  let component: CactusComponent;
  let fixture: ComponentFixture<CactusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CactusComponent]
    });
    fixture = TestBed.createComponent(CactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
