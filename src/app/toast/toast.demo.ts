import {
  Component,
  OnInit
} from '@angular/core';

import {
  SohoToastService,
  SohoToastPositionType
} from '../../soho/toast';

@Component({
  selector: 'soho-toast-demo',
  templateUrl: 'toast.demo.html'
})
export class ToastDemoComponent implements OnInit {
  // Inject Toast Servivce as a dependency and get an instance variable
  constructor(private toastService: SohoToastService) { }
  ngOnInit() { }

  showToast(position: SohoToastPositionType = SohoToastService.TOP_RIGHT) {
    this.toastService.show({title: 'Sample Message', message: 'This is a Toast message', position: position});
  }
}
