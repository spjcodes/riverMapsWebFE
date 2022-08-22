import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditComponent } from './sql-edit.component';

describe('SqlEditComponent', () => {
  let component: SqlEditComponent;
  let fixture: ComponentFixture<SqlEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
