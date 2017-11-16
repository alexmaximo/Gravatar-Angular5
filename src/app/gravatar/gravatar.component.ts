import { Component } from '@angular/core';

import { GravatarService } from './gravatar.service';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html'
})
export class GravatarComponent {
  email = '';
  resultado = null;
  message = null;

  constructor(private service: GravatarService) { }

  onSubmit(): void {
    this.service.getProfile(this.email).then((resultado: JSON[]) => this.resultado = resultado);
    if (this.resultado === null) {
      this.message = 'E-mail não encontrado';
    }else {
      this.message = null;
    }
  }
}
