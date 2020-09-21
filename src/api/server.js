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
    this.post("/users/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);

      const users = schema.users.all();

      const user = users.models.find(
        ({ attrs }) => attrs.email === email && attrs.password === password
      );

      if (user) {
        return schema.users.find(user.attrs.id);
      }

      return new Response(400, {}, { errors: ["login failled"] });
    });
    this.patch("/users/:id");
    this.delete("/users/:id");
  },

  seeds(server) {
    server.createList("user", 3);
    console.log(server.db.dump());
  },
});
