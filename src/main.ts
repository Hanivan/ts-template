import { AppModule } from "./app.module";

class Director {
  static construct() {
    return new AppModule().setController().build();
  }
}

function execute() {
  const app = Director.construct();

  app.sayHello();
}
execute();
