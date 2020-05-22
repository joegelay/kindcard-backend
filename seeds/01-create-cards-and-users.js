exports.seed = async function(knex) {
  await knex('user').del()
  await knex('story').del()
  await knex('card').del()

  ///// seed cards ////// 

  const card9 = await knex("card").insert({
    number: "009"
  }).returning("id").then(records => records[0])

  const card22 = await knex("card").insert({
    number: "022"
  }).returning("id").then(records => records[0])

  const card20 = await knex("card").insert({
    number: "020"
  }).returning("id").then(records => records[0])

  const card181 = await knex("card").insert({
    number: "181"
  }).returning("id").then(records => records[0])

  const card12 = await knex("card").insert({
    number: "012"
  }).returning("id").then(records => records[0])

  const card15 = await knex("card").insert({
    number: "015"
  }).returning("id").then(records => records[0])

  const card700 = await knex("card").insert({
    number: "700"
  }).returning("id").then(records => records[0])

  const card214 = await knex("card").insert({
    number: "214"
  }).returning("id").then(records => records[0])

  const card202 = await knex("card").insert({
    number: "202"
  }).returning("id").then(records => records[0])

  const card165 = await knex("card").insert({
    number: "165"
  }).returning("id").then(records => records[0])

  const card227 = await knex("card").insert({
    number: "227"
  }).returning("id").then(records => records[0])

  const card10 = await knex("card").insert({
    number: "010"
  }).returning("id").then(records => records[0])

  const card57 = await knex("card").insert({
    number: "057"
  }).returning("id").then(records => records[0])

  const card58 = await knex("card").insert({
    number: "058"
  }).returning("id").then(records => records[0])

  const card41 = await knex("card").insert({
    number: "041"
  }).returning("id").then(records => records[0])

  const card44 = await knex("card").insert({
    number: "044"
  }).returning("id").then(records => records[0])

  const card105 = await knex("card").insert({
    number: "105"
  }).returning("id").then(records => records[0])

  const card243 = await knex("card").insert({
    number: "243"
  }).returning("id").then(records => records[0])

  const card53 = await knex("card").insert({
    number: "053"
  }).returning("id").then(records => records[0])

  const card139 = await knex("card").insert({
    number: "139"
  }).returning("id").then(records => records[0])

  const card141 = await knex("card").insert({
    number: "141"
  }).returning("id").then(records => records[0])

  const card101 = await knex("card").insert({
    number: "101"
  }).returning("id").then(records => records[0])

  const card148 = await knex("card").insert({
    number: "148"
  }).returning("id").then(records => records[0])

  const card92 = await knex("card").insert({
    number: "092"
  }).returning("id").then(records => records[0])

  const card93 = await knex("card").insert({
    number: "093"
  }).returning("id").then(records => records[0])

  const card94 = await knex("card").insert({
    number: "094"
  }).returning("id").then(records => records[0])

  const card96 = await knex("card").insert({
    number: "096"
  }).returning("id").then(records => records[0])

  const card97 = await knex("card").insert({
    number: "097"
  }).returning("id").then(records => records[0])

  const card291 = await knex("card").insert({
    number: "291"
  }).returning("id").then(records => records[0])

  const card292 = await knex("card").insert({
    number: "292"
  }).returning("id").then(records => records[0])

  const card293 = await knex("card").insert({
    number: "293"
  }).returning("id").then(records => records[0])

  const card254 = await knex("card").insert({
    number: "254"
  }).returning("id").then(records => records[0])

  const card98 = await knex("card").insert({
    number: "098"
  }).returning("id").then(records => records[0])

  const card302 = await knex("card").insert({
    number: "302"
  }).returning("id").then(records => records[0])

  const card303 = await knex("card").insert({
    number: "303"
  }).returning("id").then(records => records[0])

  const card304 = await knex("card").insert({
    number: "304"
  }).returning("id").then(records => records[0])

  const card305 = await knex("card").insert({
    number: "305"
  }).returning("id").then(records => records[0])

  const card306 = await knex("card").insert({
    number: "306"
  }).returning("id").then(records => records[0])

  const card648 = await knex("card").insert({
    number: "648"
  }).returning("id").then(records => records[0])

  const card650 = await knex("card").insert({
    number: "650"
  }).returning("id").then(records => records[0])

  const card633 = await knex("card").insert({
    number: "633"
  }).returning("id").then(records => records[0])

  const card634 = await knex("card").insert({
    number: "634"
  }).returning("id").then(records => records[0])

  const card635 = await knex("card").insert({
    number: "635"
  }).returning("id").then(records => records[0])

  const card636 = await knex("card").insert({
    number: "636"
  }).returning("id").then(records => records[0])

  const card637 = await knex("card").insert({
    number: "637"
  }).returning("id").then(records => records[0])

  const card638 = await knex("card").insert({
    number: "638"
  }).returning("id").then(records => records[0])

  const card639 = await knex("card").insert({
    number: "639"
  }).returning("id").then(records => records[0])

  const card640 = await knex("card").insert({
    number: "640"
  }).returning("id").then(records => records[0])

  const card641 = await knex("card").insert({
    number: "641"
  }).returning("id").then(records => records[0])

  const card627 = await knex("card").insert({
    number: "627"
  }).returning("id").then(records => records[0])

  const card628 = await knex("card").insert({
    number: "628"
  }).returning("id").then(records => records[0])

  const card780 = await knex("card").insert({
    number: "780"
  }).returning("id").then(records => records[0])

  const card779 = await knex("card").insert({
    number: "779"
  }).returning("id").then(records => records[0])

  const card778 = await knex("card").insert({
    number: "778"
  }).returning("id").then(records => records[0])

  const card449 = await knex("card").insert({
    number: "449"
  }).returning("id").then(records => records[0])

  const card719 = await knex("card").insert({
    number: "719"
  }).returning("id").then(records => records[0])

  const card721 = await knex("card").insert({
    number: "721"
  }).returning("id").then(records => records[0])

  const card1323 = await knex("card").insert({
    number: "1323"
  }).returning("id").then(records => records[0])

  const card1324 = await knex("card").insert({
    number: "1324"
  }).returning("id").then(records => records[0])

  const card1325 = await knex("card").insert({
    number: "1325"
  }).returning("id").then(records => records[0])

  const card743 = await knex("card").insert({
    number: "743"
  }).returning("id").then(records => records[0])

  const card744 = await knex("card").insert({
    number: "744"
  }).returning("id").then(records => records[0])

  const card745 = await knex("card").insert({
    number: "745"
  }).returning("id").then(records => records[0])

  const card467 = await knex("card").insert({
    number: "467"
  }).returning("id").then(records => records[0])

  const card342 = await knex("card").insert({
    number: "342"
  }).returning("id").then(records => records[0])

  const card699 = await knex("card").insert({
    number: "699"
  }).returning("id").then(records => records[0])

  const card701 = await knex("card").insert({
    number: "701"
  }).returning("id").then(records => records[0])

  const card435 = await knex("card").insert({
    number: "435"
  }).returning("id").then(records => records[0])

  const card436 = await knex("card").insert({
    number: "436"
  }).returning("id").then(records => records[0])

  const card340 = await knex("card").insert({
    number: "340"
  }).returning("id").then(records => records[0])

  const card290 = await knex("card").insert({
    number: "290"
  }).returning("id").then(records => records[0])

  const card376 = await knex("card").insert({
    number: "376"
  }).returning("id").then(records => records[0])

  const card377 = await knex("card").insert({
    number: "377"
  }).returning("id").then(records => records[0])

  const card343 = await knex("card").insert({
    number: "343"
  }).returning("id").then(records => records[0])

  const card252 = await knex("card").insert({
    number: "252"
  }).returning("id").then(records => records[0])

  const card1342 = await knex("card").insert({
    number: "1342"
  }).returning("id").then(records => records[0])

  const card95 = await knex("card").insert({
    number: "095"
  }).returning("id").then(records => records[0])

  const card1497 = await knex("card").insert({
    number: "1497"
  }).returning("id").then(records => records[0])

  const card764 = await knex("card").insert({
    number: "764"
  }).returning("id").then(records => records[0])

  const card123 = await knex("card").insert({
    number: "123"
  }).returning("id").then(records => records[0])

  const card83 = await knex("card").insert({
    number: "083"
  }).returning("id").then(records => records[0])

  ///// seed stories ///
  await knex("story").insert({
    number: "009", 
    cardId: card9,
    email: "ilyas.savas@hotmail.com", 
    location: "New York, New York", 
    lat:	40.7275043,
    lng:	-73.9800645,
    created_at: "2018-12-09T00:05:58.224Z",
    story: "I was walking in a park and one gentlemen offered me a free donut and mentioned KindCard. To be honest, i was having a really bad day. That was the first time that I actually smiled. Thanks a lot!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "022", 
    cardId: card22,
    email: "ebiamonte@gmail.com", 
    location: "New York, NY", 
    lat:	40.7127753,
    lng:	-74.0059728,
    created_at: "2018-12-12T00:05:58.224Z",
    story: "I was walking through the city on December 8, 2018 and someone gave me a donut. It was thoughtful"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "020", 
    email: "dianajhiggs@gmail.com", 
    location: "Union Square, New York, NY", 
    cardId: card20,
    lat:	40.7128753,
    lng:	-74.0060728,
    created_at: "2018-12-13T00:05:58.224Z",
    story: "I was with a group of ladies visiting New York City and doing sightseeing walking. We arrived in Union Square and the young man was giving out free donuts. He passed a card to me and now I have it with me. I am now visiting my cousin in Tennessee . I am hoping to take it back to Canada Nova Scotia where I live and pass it on to someone else by doing some active kindness."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "181", 
    email: "gibson.andreaj@gmail.com", 
    location: "Boise, Idaho", 
    cardId: card181,
    lat:	43.6624385,	
    lng:	-116.1630431,
    created_at: "2018-12-16T00:05:58.224Z",
    story: "A young lady bought me some coffee and she had the sunniest smile. So nice to share kindness!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "012", 
    email: "cc@northrock.bm", 
    location: "Union Square, New York, NY", 
    cardId: card12,
    lat:	40.7686973,
    lng:	-73.9918181,
    created_at: "2019-01-03T00:05:58.224Z",
    story: "A woman bought my sister in law and me lunch at Union Square Christmas market"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "015", 
    email: "amanda.adili@gmail.com", 
    location: "Union Square, New York, NY", 
    cardId: card15,
    lat:	40.7687973,
    lng:	-73.9919181,
    created_at: "2019-01-13T00:05:58.224Z",
    story: "I was walking in Union Square on a cold day and a kind friendly guy offered me a free donut. I asked what the catch was, and he gave me the kindcard and said he was offering it to be kind and I can pass it on! I felt warm and moved and appreciated the gesture. Genuine human kindness still exists when you least expect it. What a blessing."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "214", 
    email: "lstoof87@gmail.com", 
    location: "Central Park, New York, NY", 
    cardId: card214,
    lat:	40.7688973,
    lng:	-73.9920181,
    created_at: "2019-01-29T00:05:58.224Z",
    story: "We were in Central Park, and a guy was passing out hand warmers. Such a nice treat on a cold day!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "202", 
    email: "wilby677@aol.com", 
    location: "Central Park, New York, NY", 
    cardId: card202,
    lat:	40.7689973,
    lng:	-73.9921181,
    created_at: "2019-02-08T00:05:58.224Z",
    story: "In Central Park was given hand warmers"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "165", 
    email: "Trippndic@aol.com", 
    location: "Neptune, NJ", 
    cardId: card165,
    lat:	40.2240869,
    lng:	-74.0887576,
    created_at: "2019-03-07T00:05:58.224Z",
    story: "I recieved my card from a generous soul at the Great Wall Chinese restaurant as we engaged in conversation,  she paid for my dinner and handed me the card, a kind gesture that will not be forgotten"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "227", 
    email: "garrytechgeek@gmail.com", 
    location: "New York, NY", 
    cardId: card227,
    lat:	40.7859464,
    lng:	-73.9741874,
    created_at: "2019-03-30T00:05:58.224Z",
    story: "Given to me by a friend"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "010", 
    email: "robc7374@yahoo.com", 
    location: "Brick, NJ", 
    cardId: card10,
    lat:	40.0508979,
    lng:	-74.1357407,
    created_at: "2019-05-03T00:05:58.224Z",
    story: "It was on my windshield with 10.00 bill. The note said,”Go Cocks have a beer on me” [I have South Carolina plates]"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "057", 
    email: "lupitamlopez9@gmail.com", 
    location: "Dallas, TX", 
    cardId: card57,
    lat:	32.7766642,
    lng:	-96.7969879,
    created_at: "2019-06-02T00:05:58.224Z",
    story: "I was traveling  with my family and needed someone to switch seats with me, so we could fly together as a family. This nice young lady was able to switch with us. As a token of appreciation I gave her $20 dollars which she did not want to take. I told her to please pay it forward and she handed me this card. I want to take this time to thank her and let her know it is the little things in life that make people feel better. Thank you young lady!!!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "010", 
    email: "you@example.com", 
    location: "Murrells Inlet, SC", 
    cardId: card10,
    lat:	33.566559,
    lng:	-79.0532061,
    created_at: "2019-07-08T00:05:58.224Z",
    story: "Attached to windshield wiper"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "058", 
    email: "danlove2020@yahoo.com", 
    location: "Stony Point, NY",
    cardId: card58,
    lat:	41.2455339,
    lng:	-74.0417628,
    created_at: "2019-08-10T00:05:58.224Z",
    story: "I was hiking out of Harriman State park with my 4-year old son who had just burned his finger.  I asked the only other hiker I saw, a stranger,  if he had a first aide kit and he did. He gave us some sting relief pads that worked like a charm. Its time I started carrying a first aide kit for my family and for others that may need it."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "041", 
    email: "vera.lentini@gmail.com", 
    location: "Asbury Park, NJ", 
    cardId: card41,
    lat:	40.2448804,
    lng:	-74.0593872,
    created_at: "2019-08-21T00:05:58.224Z",
    story: "Initial distro"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "044", 
    email: "cmc@christineconforti.com", 
    location: "Asbury Park, NJ",
    cardId: card44,
    lat:	40.2449804,
    lng:	-74.0594872,
    created_at: "2019-09-19T00:05:58.224Z",
    story: "In the generous circumstance of a free networking hour, I met Joe who shared his vision for merging his brain's love for data and analytics with his heart's love kindness and positive impact. He gifted me this card, which had a very auspicious number 44 on it (a number that has deep meaning and is affirming for me). That was Kindness Moment #1. Kindness moment #2, was him giving me a concrete reason to get a  boost of joy through my own act of kindness (which I just realized I already did moments after we met, by helping a older man Bill find parking). I can't wait to pay it forward to the next beautiful soul today."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "105", 
    email: "nlane28@gmail.com", 
    location: "Cookman Creamery, Asbury Park, NJ", 
    cardId: card105,
    lat:	40.2203907,
    lng:	-74.0120817,
    created_at: "2019-09-24T00:05:58.224Z",
    story: "I came in to just get a small cup of the best ice cream.. and a sweet couple  were ahead of me... the gentleman went and paid for me before I even realized what was going on... he handed me this card and asked me to pass it along and return the favor to someone else.  This totally made my day!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "243", 
    email: "gabby0726@comcast.net", 
    location: "Brick, NJ", 
    cardId: card243,
    lat:	40.0508979,
    lng:	-74.1357407,
    created_at: "2019-12-08T00:05:58.224Z",
    story: "Helping a friend moving with college."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "053", 
    email: "mallardilucia@gmail.com", 
    location: "Berlin, Germany", 
    cardId: card53,
    lat:	52.5200066,
    lng:	13.404954,
    created_at: "2019-12-20T00:05:58.224Z",
    story: "I received my card from my first couchsurfer who helped me to do a video editing."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "053", 
    email: "ianluana207@gmail.com", 
    location: "Berlin, Germany", 
    cardId: card53,
    lat:	52.520166,
    lng:	13.405054,
    created_at: "2019-12-29T00:05:58.224Z",
    story: "My sister got it from a guy at a party and the next day she gave it to me. In exchange I had to buy toilet paper, which I did on Christmas Eve in the only Supermarket I could find open in Berlin."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "139", 
    email: "ptiso@kellersinc.com", 
    location: "Wilmington, NC", 
    cardId: card139,
    lat:	34.2426224,
    lng:	-77.8252923,
    created_at: "2020-01-02T00:05:58.224Z",
    story: "Nephew started the Kind Card Project"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "141", 
    email: "jeneholly727@ec.rr.com", 
    location: "Willmington, NC", 
    cardId: card141,
    lat:	34.2103894,
    lng:	-77.8868117,
    created_at: "2020-01-02T00:05:58.224Z",
    story: "My Nephew started this project and I believe in it, therefore I am spreading the kindness!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "101", 
    email: "Dcommand23@yahoo.com", 
    location: "Newark, NJ", 
    cardId: card101,
    lat:	40.735657,
    lng:	-74.1723667,
    created_at: "2020-01-04T00:05:58.224Z",
    story: "I received my card from RAOC (Random Acts of Cards) on Reddit."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "148", 
    email: "mimipop18@aol.com", 
    location: "Boca Raton, FL",
    cardId: card148, 
    lat:	26.3683064,
    lng:	-80.1289321,
    created_at: "2020-01-06T00:05:58.224Z",
    story: "Sent to me from my grandson!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "092", 
    email: "diannacarney8@gmail.com", 
    location: "East Bridgewater, MA", 
    cardId: card92,
    lat:	42.0371506,
    lng:	-70.9427914,
    created_at: "2020-01-07T00:05:58.224Z",
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "093", 
    email: "diannacarney8@gmail.com", 
    location: "East Bridgewater, MA", 
    cardId: card93,
    lat:	42.0372506,
    lng:	-70.9428914,
    created_at: "2020-01-07T00:05:58.224Z",
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "094", 
    email: "diannacarney8@gmail.com", 
    location: "East Bridgewater, MA", 
    cardId: card94,
    lat:	42.0372606,
    lng:	-70.9429014,
    created_at: "2020-01-07T00:05:58.224Z",
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "095", 
    email: "you@example.com", 
    location: "New York, NY", 
    cardId: card96,
    lat:	40.8639624,
    lng:	-73.9330429,
    created_at: "2020-01-09T00:05:58.224Z",
    story: "Helped carry bags for someone at the grocery store"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "096", 
    email: "you@example.com", 
    location: "New York, NY", 
    cardId: card96,
    lat:	40.8639624,
    lng:	-73.9330429,
    created_at: "2020-01-09T00:05:58.224Z",
    story: "Donated to charity"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "097", 
    email: "you@example.com", 
    location: "New York, NY", 
    cardId: card97,
    lat:	40.8173411,
    lng:	-73.9433299,
    created_at: "2020-01-09T00:05:58.224Z",
    story: "Gave up seat for someone"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "291", 
    email: "ryanjkeating@outlook.com", 
    location: "Rockville, Utah", 
    cardId: card291,
    lat:	37.1338095,
    lng:	-113.0428974,
    created_at: "2020-01-10T00:05:58.224Z",
    story: "From the creator of the website Joe! Joe gifted them to me to get it all going and starting the process of random acts of kindness!  Looking forward to starting it and spreading the good vibes:):):)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "292", 
    email: "ryanjkeating@outlook.com", 
    location: "Rockville, Utah", 
    cardId: card292,
    lat:	37.1339095,
    lng:	-113.0429074,
    created_at: "2020-01-10T00:05:58.224Z",
    story: "From the creator of the website Joe! Joe gifted them to me to get it all going and starting the process of random acts of kindness!  Looking forward to starting it and spreading the good vibes:):):)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "293", 
    email: "mimedesign55@gmail.com", 
    location: "Rockville, Utah", 
    cardId: card293,
    lat:	37.134095,
    lng:	-113.0429174,
    created_at: "2020-01-10T00:05:58.224Z",
    story: "From my boyfriend Ryan who received them from the creator of the website Joe!  Joe gifted them to Ryan to get it all going and starting the process of random acts of kindness!  Ryan then gifted one to me in a loving kiss and to start the process of spreading the good vibes randomly to others!!!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "254", 
    email: "hh@hh.com", 
    location: "Tallahassee, FL", 
    cardId: card254,
    lat:	30.4383559,
    lng:	-84.2808429,
    created_at: "2020-01-14T00:05:58.224Z",
    story: "Someone bought me a coffee."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "254", 
    cardId: card254,
    email: "keposada9@gmail.com", 
    location: "Tallahassee, FL", 
    lat:	30.4382559,
    lng:	-84.2807329,
    created_at: "2020-01-14T00:05:58.224Z",
    story: "Received my card from a friend"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "098", 
    cardId: card98,
    email: "chelsea.c.gould@gmail.com", 
    location: "Boston, MA", 
    lat:	42.3600825,
    lng:	-71.0588801,
    created_at: "2020-01-15T00:05:58.224Z",
    story: "Kind Card originator asked if folks on the subreddit randomactsofcards would like to participate. I replied and they sent me some Kindcards to distribute."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "302", 
    cardId: card302,
    email: "cultivatekindnessbox@gmail.com", 
    location: "Harrison, OH", 
    lat:	39.2667628,
    lng:	-84.7942091,
    created_at: "2020-01-26T00:05:58.224Z",
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "303", 
    cardId: card303,
    email: "cultivatekindnessbox@gmail.com", 
    location: "Harrison, OH", 
    lat:	39.2668628,
    lng:	-84.7942191,
    created_at: "2020-01-26T00:05:58.224Z",
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "304", 
    cardId: card304,
    email: "cultivatekindnessbox@gmail.com", 
    location: "Harrison, OH", 
    lat:	39.2669628,
    lng:	-84.7943191,
    created_at: "2020-01-26T00:05:58.224Z",
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "305", 
    cardId: card305,
    email: "cultivatekindnessbox@gmail.com", 
    location: "Harrison, OH", 
    lat:	39.2670628,
    lng:	-84.7944191,
    created_at: "2020-01-26T00:05:58.224Z",
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "306", 
    cardId: card306,
    email: "cultivatekindnessbox@gmail.com", 
    location: "Harrison, OH", 
    lat:	39.2671628,
    lng:	-84.7945191,
    created_at: "2020-01-26T00:05:58.224Z",
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "648", 
    cardId: card648,
    email: "jwallenhorst6@gmail.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5977963,
    lng:	-81.4663475,
    created_at: "2020-01-28T00:05:58.224Z",
    story: "Someone let me call my mom when my phone was dead"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "650", 
    cardId: card650,
    email: "bridgettetzlaff@gmail.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5978963,
    lng:	-81.4664475,
    created_at: "2020-01-28T00:05:58.224Z",
    story: "KindCard mailed me the card to start!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "633", 
    cardId: card633,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5979063,
    lng:	-81.4665475,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "634", 
    cardId: card634,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5979163,
    lng:	-81.4666475,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "635", 
    cardId: card635,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5979263,
    lng:	-81.4666575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "636", 
    cardId: card636,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5980263,
    lng:	-81.4667575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "637", 
    cardId: card637,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5981263,
    lng:	-81.4668575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "638", 
    cardId: card638,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5982263,
    lng:	-81.4669575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "639", 
    cardId: card639,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5983263,
    lng:	-81.4670575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "640", 
    cardId: card640,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5984263,
    lng:	-81.4671575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "641", 
    cardId: card641,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5985263,
    lng:	-81.4672575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "627", 
    cardId: card627,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5985363,
    lng:	-81.4673575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "628", 
    cardId: card628,
    email: "sfrohwerk@wickliffeschools.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5986363,
    lng:	-81.4674575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "633", 
    cardId: card633,
    email: "lscalese@icloud.com", 
    location: "Wickliffe, Ohio", 
    lat:	41.5987363,
    lng:	-81.4675575,
    created_at: "2020-01-29T00:05:58.224Z",
    story: "Told someone they looked nice today"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "779", 
    cardId: card779,
    email: "versacesamantha@gmail.com", 
    location: "Sandy Springs, GA", 
    lat:	33.9253024,
    lng:	-84.3857442,
    created_at: "2020-02-05T00:05:58.224Z",
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "778", 
    cardId: card778,
    email: "versacesamantha@gmail.com", 
    location: "Sandy Springs, GA", 
    lat:	33.9254024,
    lng:	-84.3858442,
    created_at: "2020-02-05T00:05:58.224Z",
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "780", 
    cardId: card780,
    email: "versacesamantha@gmail.com", 
    location: "Sandy Springs, GA", 
    lat:	33.9255024,
    lng:	-84.3859442,
    created_at: "2020-02-05T00:05:58.224Z",
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])
  
  await knex("story").insert({
    number: "449", 
    cardId: card449,
    email: "justalittlegrace@yahoo.com", 
    location: "Colorado Springs, CO", 
    lat:	38.7665005,
    lng:	-104.8804893,
    created_at: "2020-02-05T00:05:58.224Z",
    story: "I received my kind card in a cultivate kindness box which is a box to help spread kindness. In this box was my kind card which is one of the ways that I will be planning on spreading kindness."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "719", 
    cardId: card719,
    email: "danamarie924@gmail.com", 
    location: "Philadelphia, PA", 
    lat:	39.9793657,
    lng:	-75.1253492,
    created_at: "2020-02-05T00:05:58.224Z",
    story: "Empoweringcuts a man who gives our free haircuts to the homeless"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "778", 
    cardId: card778,
    email: "rebsnow94@gmail.com", 
    location: "Lawrenceville, GA", 
    lat:	33.9562149,
    lng:	-83.9879625,
    created_at: "2020-02-07T00:05:58.224Z",
    story: "My wonderful co-worker/friend surprised me with my favorite starbucks drinks. I had a bad week at work and she gave me a note with the coffee that said 'because you survived a really tough week'. The sweetest!!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "721", 
    cardId: card721,
    email: "bebalovee924@gmail.com", 
    location: "Philadelphia, PA", 
    lat:	39.9525839,
    lng:	-75.1652215,
    created_at: "2020-02-08T00:05:58.224Z",
    story: "Randomly from my loving kids father with an amazing bright smile in his face ❤️"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1323", 
    cardId: card1323,
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    lat:	35.7795897,
    lng:	-78.6381787,
    created_at: "2020-02-08T00:05:58.224Z",
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1324", 
    cardId: card1324,
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    lat:	35.7796897,
    lng:	-78.6382787,
    created_at: "2020-02-08T00:05:58.224Z",
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1325", 
    cardId: card1325,
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    lat:	35.7797897,
    lng:	-78.6383787,
    created_at: "2020-02-08T00:05:58.224Z",
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "743", 
    cardId: card743,
    email: "jenileemarie12@yahoo.com", 
    location: "Lacey, Washington", 
    lat:	46.9959374,
    lng:	-122.7319699,
    created_at: "2020-02-11T00:05:58.224Z",
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "744", 
    cardId: card744,
    email: "jenileemarie12@yahoo.com", 
    location: "Lacey, Washington", 
    lat:	46.9969374,
    lng:	-122.7329699,
    created_at: "2020-02-11T00:05:58.224Z",
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "745", 
    cardId: card745,
    email: "jenileemarie12@yahoo.com", 
    location: "Lacey, Washington", 
    lat:	46.9970374,
    lng:	-122.7340699,
    created_at: "2020-02-11T00:05:58.224Z",
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "467",
    cardId: card467, 
    email: "you@example.com", 
    location: "Madison, WI", 
    lat:	43.0731,
    lng:	-89.4012,
    created_at: "2020-02-13T00:05:58.224Z",
    story: "I helped by closing the door."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "jodi.baumberger@k12.sd.us", 
    location: "Madison, WI", 
    lat:	43.0741,
    lng:	-89.4022,
    created_at: "2020-02-13T00:05:58.224Z",
    story: "A gift from a student."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "291", 
    cardId: card291,
    email: "revolvente@hotmail.com", 
    location: "Guadalajara, Mexico", 
    lat:	20.6596988,
    lng:	-103.3496092,
    created_at: "2020-02-13T00:05:58.224Z",
    story: "Mi amigo Ryan, tuvo un gran gesto al ayudarme a conseguir una nueva computadora para mí, él quiso ayudarme a tener las herramientas necesarias para continuar mi trabajo y poder seguir enseñando español como lengua extranjera. Él me entregó la tarjeta, cuando nos reunimos en Guadalajara. In English....my friend Ryan gave me a grand gesture to help me to have the tools necessary, a computer, in order to continue my work and to be able to teach Spanish to foreigners.  He gave me the kind card, when we reunited in Guadalajara, Mexico."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "699", 
    cardId: card699,
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    lat:	33.7489954,
    lng:	-84.3889824,
    created_at: "2020-02-14T00:05:58.224Z",
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "700", 
    cardId: card700,
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    lat:	33.7589954,
    lng:	-84.3889824,
    created_at: "2020-02-14T00:05:58.224Z",
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "701", 
    cardId: card701,
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    lat:	33.7689954,
    lng:	-84.3889824,
    created_at: "2020-02-14T00:05:58.224Z",
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "435", 
    cardId: card435,
    email: "ohiomucks@gmail.com", 
    location: "Batavia, Cermont County, Ohio", 
    lat:	39.1125485,
    lng:	-84.1646163,
    created_at: "2020-02-15T00:05:58.224Z",
    story: "I went to a retreat at my church and the counselor put the KindCard in my craft bag."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "436", 
    cardId: card436,
    email: "ohiomucks@gmail.com", 
    location: "Batavia, Cermont County, Ohio", 
    lat:	39.1126485,
    lng:	-84.1646163,
    created_at: "2020-02-15T00:05:58.224Z",
    story: "I went to a retreat at my church and the counselor put the KindCard in my craft bag."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "340", 
    cardId: card340,
    email: "faithhowlett06@gmail.con", 
    location: "Batavia, Cermont County, Ohio", 
    lat:	39.1680808,
    lng:	-84.238417,
    created_at: "2020-02-15T00:05:58.224Z",
    story: "I was at a church retreat and they gave them out."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "290", 
    cardId: card290,
    email: "abigail.barber@btinternet.com", 
    location: "Kendal, UK", 
    lat:	54.328006,
    lng:	-2.74629,
    created_at: "2020-02-17T00:05:58.224Z",
    story: "I was out walking the dogs, just heading home, when out the corner of my eye I spotted a little gift bag. I opened it to see what was inside and I saw the card and a gift box with a lovely pair of earrings in it!  Thank you who ever you are, they made my day."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "376", 
    cardId: card376,
    email: "missnevaehlynne@gmail.com", 
    location: "Ohio, United States", 
    lat:	39.9611755,
    lng:	-82.9987942,
    created_at: "2020-02-17T00:05:58.224Z",
    story: "I got it in a valentine gift bag"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "377", 
    cardId: card377,
    email: "missnevaehlynne@gmail.com", 
    location: "Ohio, United States", 
    lat:	39.9621755,
    lng:	-82.9997942,
    created_at: "2020-02-17T00:05:58.224Z",
    story: "I got it in a valentine gift bag"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "palmers603@gmail.com", 
    location: "Wessington, South Dakota", 
    lat:	44.3312583,
    lng:	-98.704075,
    created_at: "2020-02-18T00:05:58.224Z",
    story: "My child’s teacher handed out bracelets and cards to her students."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "gracaroni@hotmail.com", 
    location: "Wessington, South Dakota", 
    lat:	44.3322583,
    lng:	-98.705075,
    created_at: "2020-02-18T00:05:58.224Z",
    story: "Some kid held the door for me. And handed me this card!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "you@example.com", 
    location: "Wessington, South Dakota", 
    lat:	44.3332583,
    lng:	-98.706075,
    created_at: "2020-02-19T00:05:58.224Z",
    story: "My kindergarten teacher gave to me."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "jodi.baumberger@k12.sd.us", 
    location: "Wessington, South Dakota", 
    lat:	44.3342583,
    lng:	-98.707075,
    created_at: "2020-02-20T00:05:58.224Z",
    story: "From a student"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "343", 
    cardId: card343,
    email: "kaceygross@yahoo.com", 
    location: "Wessington, South Dakota", 
    lat:	44.3352583,
    lng:	-98.708075,
    created_at: "2020-02-23T00:05:58.224Z",
    story: "He received it in his mailbox."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "290", 
    cardId: card290,
    email: "axholland@icloud.com", 
    location: "Kendal, UK", 
    lat:	54.329007,
    lng:	-2.75129,
    created_at: "2020-02-24T00:05:58.224Z",
    story: "I received 5 kindcards from the lovely people behind the idea. I’ve shared my first one with a hidden present in my neighbourhood and can’t wait to see how far it goes."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "252", 
    cardId: card252,
    email: "keposada@sbcglobal.net", 
    location: "Tallahassee, Florida", 
    lat:	30.4392559,
    lng:	-84.2827329,
    created_at: "2020-02-25T00:05:58.224Z",
    story: "From a kind friend."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1342", 
    cardId: card1342,
    email: "nbrianna92@yahoo.com", 
    location: "St. Paul, MO", 
    lat:	38.8809704,
    lng:	-90.7342734,
    created_at: "2020-03-03T00:05:58.224Z",
    story: "Ashley Perry paid for and brought me an energy drink one early morning because she knew we had a lot of work to do that day! It was very appreciated and I'm excited to pass it on :)"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "095", 
    cardId: card95,
    email: "anitha999@hotmail.com", 
    location: "Melbourne, Australia", 
    lat:	-37.8136276,
    lng:	144.9630576,
    created_at: "2020-03-07T00:05:58.224Z",
    story: "It was given to me by a wonderful and generous person who I interact with in an online forum."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1497", 
    cardId: card1497,
    email: "you@example.com", 
    location: "Denver, Colorado", 
    lat:	39.7392358,
    lng:	-104.990251,
    created_at: "2020-04-02T00:05:58.224Z",
    story: "Someone found my phone."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "1497", 
    cardId: card1497,
    email: "joegelay@gmail.com", 
    location: "Denver, Colorado", 
    lat:	39.7402358,
    lng:	-104.991251,
    created_at: "2020-04-03T00:05:58.224Z",
    story: "Found a locked iPhone at the grocery store. Held onto it until the owner's wife called and was able to get it back to him. Gave him this card and told him to pay the kindness forward when he had the chance!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "764", 
    cardId: card764,
    email: "fengdina@gmail.com", 
    location: "Vancouver, Canada", 
    lat:	49.2827291,
    lng:	-123.1207375,
    created_at: "2020-04-04T00:05:58.224Z",
    story: "From the kind card instagram. I'm going to send it along to another postcrossing member."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "123", 
    cardId: card123,
    email: "chautrancindy@gmail.com", 
    location: "Sunnyvale, CA", 
    lat:	37.36883,
    lng:	-122.0363496,
    created_at: "2020-04-28T00:05:58.224Z",
    story: "It was included in a birthday card I received from a friendly stranger off Reddit, specifically the r/RandomActsofCards subreddit."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "098", 
    cardId: card98,
    email: "amymatthews2013@yahoo.com", 
    location: "Joplin, Missouri", 
    lat:	37.0193161,
    lng:	-94.5005808,
    created_at: "2020-05-06T00:05:58.224Z",
    story: "I received a birthday card from reddit with it in it!"
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "342", 
    cardId: card342,
    email: "nicolegortmaker@gmail.com", 
    location: "Wessington, South Dakota", 
    lat:	44.4637134,
    lng:	-99.0581089,
    created_at: "2020-05-10T00:05:58.224Z",
    story: "My teacher gave it to me."
  }).returning("id").then(records => records[0])

  await knex("story").insert({
    number: "083", 
    cardId: card83,
    email: "pavlounikitas@yahoo.gr", 
    location: "Amsterdam, Netherlands", 
    lat: 52.308398,
    lng: 4.984454,
    created_at: "2020-05-12T00:05:58.224Z",
    story: "I met Joe while he was couchsurfing at my apartment at the time in Amsterdam. Then Joe went visiting other cities and on his way back to the US he spent his last night in Amsterdam once more. Joe offered a couple beers, and we had a chilled evening at a nice spot in the center of Amsterdam having a great time. Thanks Joe, you are a great person. Keep spreading joy bro!"
  }).returning("id").then(records => records[0])

  // newest card above // 

  // await knex("card_user").insert([{
  //   user_id: joe_id,
  //   card_id: one_id
  // },
  // {
  //   user_id: phil_id,
  //   card_id: two_id
  // }])

  return true 
};
