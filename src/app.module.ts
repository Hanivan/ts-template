import { AppController } from "./app.controller";

interface IModule {
  setController(): this;
  build(): AppController;
}

export class AppModule implements IModule {
  private controller: AppController;

  setController(): this {
    this.controller = new AppController();
    return this;
  }

  build(): AppController {
    return new AppController();
  }
}
