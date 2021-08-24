const { select } = require("../database/connection");
const connection = require("../database/connection");
const { index } = require("./OngController");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  },
};
