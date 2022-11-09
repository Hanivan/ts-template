import { AppService } from "./app.service";

export class AppController {
  private appService: AppService;

  constructor() {
    this.appService = new AppService();
  }

  sayHello() {
    return this.appService.getHello();
  }
}
