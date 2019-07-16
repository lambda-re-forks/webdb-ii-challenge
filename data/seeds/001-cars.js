exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "AAAAAAAAAAAAAAAAAAAAAA",
          Make: "Toyota",
          Model: "Camry",
          Mileage: 175000
        },
        {
          VIN: "AAAAABBBBBBBBB",
          Make: "Chevy",
          Model: "Silverado",
          Mileage: 17500
        },
        {
          VIN: "ACCCCCCCCC",
          Make: "Ford",
          Model: "Explorer",
          Mileage: 100000
        }
      ]);
    });
};
