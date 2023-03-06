import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'AppComponent',
		},
	],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	// constructor(
	// 	@Inject('name') private readonly name: string,
	// ) {
	// 	console.log(this.name);
	// }
}
