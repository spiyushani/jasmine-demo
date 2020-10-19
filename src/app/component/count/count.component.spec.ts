import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountComponent} from './count.component';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('CountComponent', () => {
    const testLabel = 'Label';
    const testCount = 4;
    let component: CountComponent;
    let fixture: ComponentFixture<CountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CountComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly render the @Input values', () => {
        component.count = testCount;
        component.label = testLabel;
        fixture.detectChanges();

        const buttonElement = fixture.debugElement.query(By.css('p-button'));
        const badgeSpanElement = fixture.debugElement.query(By.css('.p-badge'));
        expect(buttonElement.nativeElement.label).toBe(testLabel);
        expect(badgeSpanElement.nativeElement.textContent).toEqual(testCount.toString());
    });

    it('should emit true on button click', () => {
        spyOn(component.onButtonClick, 'emit');
        const buttonElement = fixture.debugElement.nativeElement.querySelector('p-button');
        buttonElement.click();
        fixture.detectChanges();
        expect(component.onButtonClick.emit).toHaveBeenCalledWith(true);
    });
});
