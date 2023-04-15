import request from "supertest";
import { app } from "../../../../app";

jest.setTimeout(10000);

describe("POST /users", () => {
  it("This test should create a user", async () => {
    const userData = {
      name: "UsuarioDeTest TestTest",
      email: "UsuarioTesteTeste@example.com",
    };
    const response = await request(app)
      .post("/users")
      .send(userData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.name).toBe(userData.name);
    expect(response.body.data.email).toBe(userData.email);
  });
  it("If the user already exists in the database, this test will return an error", async () => {
    await request(app).post("/users").send({
      name: "UsuarioDeTest Test",
      email: "UsuarioTeste@example.com",
    });

    const response = await request(app)
      .post("/users")
      .send({
        name: "UsuarioDeTest Test",
        email: "UsuarioTeste@example.com",
      });

    expect(response.status).toBe(422);
  });
});
