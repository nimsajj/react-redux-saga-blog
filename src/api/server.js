import {
  Server,
  Model,
  Factory,
  belongsTo,
  hasMany,
  association,
  RestSerializer,
} from "miragejs";

import { nanoid } from "nanoid";
import faker from "faker";

const IdSerializer = RestSerializer.extend({
  serializeIds: "always",
});

new Server({
  routes() {
    this.namespace = "api";
    //this.timing = 2000

    this.resource("users");
    this.resource("posts");
    this.resource("comments");

    const server = this;

    this.post("/users", function (schema, request) {
      const data = this.normalizedRequestAttrs();
      data.status = "creates";

      const result = server.create("user", data);
      return result;
    });

    this.post("/users/login", function (schema, request) {
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

    this.post("/posts", function (schema, req) {
      const data = this.normalizedRequestAttrs();
      data.date = new Date().toISOString();
      // Work around some odd behavior by Mirage that's causing an extra
      // user entry to be created unexpectedly when we only supply a userId.
      // It really want an entire Model passed in as data.user for some reason.
      const user = schema.users.find(data.userId);
      data.user = user;

      if (data.content === "error") {
        throw new Error("Could not save the post!");
      }

      const result = server.create("post", data);
      return result;
    });

    this.get("/posts/:postId/comments", (schema, req) => {
      const post = schema.posts.find(req.params.postId);
      return post.comments;
    });
  },
  models: {
    user: Model.extend({
      posts: hasMany(),
    }),
    post: Model.extend({
      user: belongsTo(),
      comments: hasMany(),
    }),
    comment: Model.extend({
      post: belongsTo(),
    }),
  },
  factories: {
    user: Factory.extend({
      id() {
        return nanoid();
      },
      email() {
        return faker.internet.email();
      },
      name() {
        return faker.name.findName();
      },
      password() {
        return faker.internet.password();
      },
      afterCreate(user, server) {
        // else auto creates
        if (user.status !== "creates") {
          server.createList("post", 3, { user });
        }
      },
    }),
    post: Factory.extend({
      id() {
        return nanoid();
      },
      title() {
        return faker.lorem.sentence();
      },
      date() {
        return faker.date.recent(7);
      },
      content() {
        return faker.lorem.paragraph();
      },
      afterCreate(post, server) {
        //server.createList('comment', 3, { post })
      },

      user: association(),
    }),
    comment: Factory.extend({
      id() {
        return nanoid();
      },
      date() {
        return faker.date.past(2);
      },
      text() {
        return faker.lorem.paragraph();
      },
      post: association(),
    }),
  },
  serializers: {
    user: IdSerializer,
    post: IdSerializer,
    comment: IdSerializer,
  },
  seeds(server) {
    server.createList("user", 3);
    console.log(server.db.dump());
  },
});
