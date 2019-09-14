import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

fdescribe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('shoud have <h1> with "Tour of Heroes"', () => {
   // fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(app.title);
  });
  it('shoud have <h1> with update value "Hero App"', () => {
      app.title = 'Hero App'
      fixture.detectChanges();
     const h1 = fixture.nativeElement.querySelector('h1');
     expect(h1.textContent).toContain(app.title);
   });
});
