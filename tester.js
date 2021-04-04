const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("Student Login testing", () => {
	test("Is user?", async (done) => {
		const res = await request.post("/").send({
			uid : "cO77kwy785eXoSeoVgXgr81T3cq1"
		});
		expect(res.status).toBe(200);
		expect(res.body.type).toBe(user);
		expect(res.body.type).not.toBeFalsy();

		done();
	}, 30000);

	//test("Email matching", async (done) => {});
});
