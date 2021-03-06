import { Directive, ElementRef, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

declare var $: any;

export const CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TimePickerDirective),
	multi: true
};

@Directive({
	selector: '[time-picker]',
	host: { '(blur)': 'onTouched($event)' },
	providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class TimePickerDirective implements ControlValueAccessor {

	private innerValue: string;
	@Input('changeMonth') changeMonth: boolean = true;
	@Input('changeYear') changeYear: boolean = true;

	constructor(private el: ElementRef) {
		$(this.el.nativeElement).timepicker({
			showMeridian: false,
			defaultTime: '0:00'
		}).on('keyup', (e) => {
			this.onChange(e.target.value);
		}).on('change', (e) => {
			this.onChange(e.target.value);
		});;
	}

	public onChange: any = () => { /*Empty*/ }
	public onTouched: any = () => { /*Empty*/ }

	get value(): any {
		return this.innerValue;
	};

	//set accessor including call the onchange callback
	set value(v: any) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChange(v);
		}
	}

	writeValue(val: string): void {
		this.innerValue = val;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
}