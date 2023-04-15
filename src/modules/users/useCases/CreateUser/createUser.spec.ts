import request from "supertest";

jest.setTimeout(10000);

describe("POST /users", () => {
  it("This test should create a user", async () => {
    const userData = {
      name: "UsuarioDeTest Test",
      email: "UsuarioTeste@example.com",
    };
    const response = await request("http://localhost:3333")
      .post("/users")
      .send(userData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toBe(userData.name);
    expect(response.body.data.email).toBe(userData.email);
  });
});
