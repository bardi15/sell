/* tslint:disable:no-unused-variable */

import { TestBed, async, } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

let routerStub;
class MockModule { }
class MockLoginComponent { }

describe('AppComponent', () => {
  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerStub }],
      declarations: [
        AppComponent
      ],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
          {
            path: 'list',
            component: MockLoginComponent
          }
        ]),
      ]
    });
    TestBed.compileComponents();
  });

  // it('should navigate', () => {
  //   expect(routerStub).toHaveBeenCalledWith(['/list']);
  //   //   const fixture = TestBed.createComponent(AppComponent);
  //   //   fixture.detectChanges();
  //   //   const router: Router = getTestBed().get(Router);
  //   //   expect(router.navigateByUrl).toHaveBeenCalledWith('dashboard/main');
  // });
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
