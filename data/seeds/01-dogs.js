exports.seed = function (knex) {
  return knex("dogs").insert([
      { name: "Meleez", breed: "Aussiedoodle", age: 1 },
      { name: "York", breed: "Whoodle", age: 2 }
  ], "id");
};