import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainDataService } from '@app/_services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-modal',
  standalone: true,
	templateUrl: './modal.component.html',
  imports: [CommonModule, FormsModule]
})
export class ModalComponent {
	@Input() title: string;
	@Input() message: string;
	@Input() type: 'input' | 'message';
	tooltip: string
	showTooltip: boolean = false

	newColumnTitle: string = ''

	constructor(public activeModal: NgbActiveModal,  private dataService: MainDataService) {}

	addColumn() {
		let result = this.dataService.addColumn(this.newColumnTitle)
		if (result.ok) {
			this.activeModal.close()
		} else {
			this.tooltip = result.message
			this.showTooltip = true
		}
	}
}
