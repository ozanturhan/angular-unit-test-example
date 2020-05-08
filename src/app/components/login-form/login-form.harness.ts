import { ComponentHarness } from '@angular/cdk/testing';

export class LoginFormHarness extends ComponentHarness {
  static hostSelector = 'app-login-form';

  protected locatorErroMessage = this.locatorFor('.error-message');

  async getErrorMessage() {
    const errorMessage = await this.locatorErroMessage();
    return errorMessage.text();
  }
}
