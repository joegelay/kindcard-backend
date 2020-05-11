exports.seed = async function(knex) {
  await knex('card_user').del()
  await knex('user').del()
  await knex('card').del()

  const joe_id = await knex("user").insert({
    name: "Joe"
  }).returning("id").then(records => records[0])

  const phil_id = await knex("user").insert({
    name: "Phil"
  }).returning("id").then(records => records[0])

  const one_id = await knex("card").insert({
    number: "001", 
    email: "joegelay@gmail.com", 
    location: "Brick, NJ", 
    story: "First card ever!"
  }).returning("id").then(records => records[0])

  const two_id = await knex("card").insert({
    number: "002", 
    email: "phil@philzona.net", 
    location: "Dallas, TX", 
    story: "Second card printed"
  }).returning("id").then(records => records[0])


  await knex("card_user").insert([{
    user_id: joe_id,
    card_id: one_id
  },
  {
    user_id: phil_id,
    card_id: two_id
  }])

  console.log(joe_id, phil_id, one_id, two_id)

  return true 
};
