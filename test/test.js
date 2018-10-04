var request = require('supertest');
request = request('http://localhost:1337'); //root url
var chai = require('chai');
var expect = chai.expect;
var auth_token;
beforeEach(function (done) {
  request.post("/signin")
  .send({user_name: "ibtesam.latif", password: "samba1234"})
  .set("Accept", "application/json")
  .expect('Content-Type', /json/)
  .end(function(err, res) {
    expect(res.status).to.equal(200);
    auth_token = res.body.data.token;
    console.log("Authorization: ");
    console.log(auth_token);
    done();
  });
});

it("Login", function (done) {
  request.post("/signin")
  .send({user_name: "jb", password: "1234"})
  .set("Accept", "application/json")
  .expect('Content-Type', /json/)
  .end(function(err, res) {
    expect(res.status).to.equal(200);
    affiliate_token = res.body.data.token;
    console.log("Authorization: ");
    console.log(affiliate_token);
    done();
  });
});
