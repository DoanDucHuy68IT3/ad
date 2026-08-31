import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiCamera } from './ai-camera';

describe('AiCamera', () => {
  let component: AiCamera;
  let fixture: ComponentFixture<AiCamera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCamera],
    }).compileComponents();

    fixture = TestBed.createComponent(AiCamera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
