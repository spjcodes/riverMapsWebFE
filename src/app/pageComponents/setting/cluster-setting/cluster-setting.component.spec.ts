import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterSettingComponent } from './cluster-setting.component';

describe('ClusterSettingComponent', () => {
  let component: ClusterSettingComponent;
  let fixture: ComponentFixture<ClusterSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
