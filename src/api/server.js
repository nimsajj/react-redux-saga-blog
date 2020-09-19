import { Server, Model, Factory } from "miragejs";
import { nanoid } from "nanoid";
import faker from "faker";

new Server({
  models: {
    user: Model,
  },
  factories: {
    user: Factory.extend({
      id() {
        return nanoid();
      },
      name() {
        return faker.name.findName();
      },
      email() {
        return faker.internet.email();
      },
      password() {
        return faker.internet.password();
      },
    }),
  },
  routes() {
    this.namespace = "api";

    this.get("/users");
    this.get("/users/:id");
    this.post("/users");
    this.patch("/users/:id");
    this.delete("/users/:id");
  },

  seeds(server) {
    server.createList("user", 3);
    console.log(server.db.dump());
  },
});
