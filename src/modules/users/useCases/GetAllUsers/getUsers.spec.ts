import request from "supertest";

jest.setTimeout(10000);

describe("GET /users", () => {
  it("This test must fetch multiple users", async () => {
    const response = await request("http://localhost:3333")
      .get("/users")
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});
