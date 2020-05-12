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

  ////////////////
  await knex("card").insert({
    number: "022", 
    email: "ilyas.savas@hotmail.com", 
    location: "10009", 
    story: "I was walking in a park and one gentlemen offered me a free donut and mentioned KindCard. To be honest, i was having a really bad day. That was the first time that I actually smiled. Thanks a lot!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "022", 
    email: "ebiamonte@gmail.com", 
    location: "New York, NY", 
    story: "I was walking through the city on December 8, 2018 and someone gave me a donut. It was thoughtful"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "020", 
    email: "dianajhiggs@gmail.com", 
    location: "New York, NY", 
    story: "I was with a group of ladies visiting New York City and doing sightseeing walking. We arrived in Union Square and the young man was giving out free donuts. He passed a card to me and now I have it with me. I am now visiting my cousin in Tennessee . I am hoping to take it back to Canada Nova Scotia where I live and pass it on to someone else by doing some active kindness."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "181", 
    email: "gibson.andreaj@gmail.com", 
    location: "83702", 
    story: "A young lady bought me some coffee and she had the sunniest smile. So nice to share kindness!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "012", 
    email: "cc@northrock.bm", 
    location: "10019", 
    story: "A woman bought my sister in law and me lunch at Union Square Christmas market"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "015", 
    email: "amanda.adili@gmail.com", 
    location: "10019", 
    story: "I was walking in Union Square on a cold day and a kind friendly guy offered me a free donut. I asked what the catch was, and he gave me the kindcard and said he was offering it to be kind and I can pass it on! I felt warm and moved and appreciated the gesture. Genuine human kindness still exists when you least expect it. What a blessing."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "214", 
    email: "lstoof87@gmail.com", 
    location: "10019", 
    story: "We were in Central Park, and a guy was passing out hand warmers. Such a nice treat on a cold day!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "202", 
    email: "wilby677@aol.com", 
    location: "New York, NY", 
    story: "In Central Park was given hand warmers"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "165", 
    email: "Trippndic@aol.com", 
    location: "07753", 
    story: "I recieved my card from a generous soul at the Great Wall Chinese restaurant as we engaged in conversation,  she paid for my dinner and handed me the card, a kind gesture that will not be forgotten"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "227", 
    email: "garrytechgeek@gmail.com", 
    location: "10024", 
    story: "Given to me by a friend"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "010", 
    email: "robc7374@yahoo.com", 
    location: "08723", 
    story: "It was on my windshield with 10.00 bill. The note said,”Go Cocks have a beer on me” [I have South Carolina plates]"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "057", 
    email: "lupitamlopez9@gmail.com", 
    location: "Dallas, TX", 
    story: "I was traveling  with my family and needed someone to switch seats with me, so we could fly together as a family. This nice young lady was able to switch with us. As a token of appreciation I gave her $20 dollars which she did not want to take. I told her to please pay it forward and she handed me this card. I want to take this time to thank her and let her know it is the little things in life that make people feel better. Thank you young lady!!!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "010", 
    email: "you@example.com", 
    location: "29576", 
    story: "Attached to windshield wiper"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "058", 
    email: "danlove2020@yahoo.com", 
    location: "10980", 
    story: "I was hiking out of Harriman State park with my 4-year old son who had just burned his finger.  I asked the only other hiker I saw, a stranger,  if he had a first aide kit and he did. He gave us some sting relief pads that worked like a charm. Its time I started carrying a first aide kit for my family and for others that may need it."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "041", 
    email: "vera.lentini@gmail.com", 
    location: "07712", 
    story: "Initial distro"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "044", 
    email: "cmc@christineconforti.com", 
    location: "07712", 
    story: "In the generous circumstance of a free networking hour, I met Joe who shared his vision for merging his brain's love for data and analytics with his heart's love kindness and positive impact. He gifted me this card, which had a very auspicious number 44 on it (a number that has deep meaning and is affirming for me). That was Kindness Moment #1. Kindness moment #2, was him giving me a concrete reason to get a  boost of joy through my own act of kindness (which I just realized I already did moments after we met, by helping a older man Bill find parking). I can't wait to pay it forward to the next beautiful soul today."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "105", 
    email: "nlane28@gmail.com", 
    location: "Asbury Park, NJ", 
    story: "I came in to just get a small cup of the best ice cream.. and a sweet couple  were ahead of me... the gentleman went and paid for me before I even realized what was going on... he handed me this card and asked me to pass it along and return the favor to someone else.  This totally made my day!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "243", 
    email: "gabby0726@comcast.net", 
    location: "08723", 
    story: "Helping a friend moving with college."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "053", 
    email: "mallardilucia@gmail.com", 
    location: "Berlin, Germany", 
    story: "I received my card from my first couchsurfer who helped me to do a video editing."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "053", 
    email: "ianluana207@gmail.com", 
    location: "Berlin, Germany", 
    story: "My sister got it from a guy at a party and the next day she gave it to me. In exchange I had to buy  toilet paper , which I did on Christmas Eve in the only Supermarket I could find open in Berlin."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "139", 
    email: "ptiso@kellersinc.com", 
    location: "28405", 
    story: "Nephew started the Kind Card Project"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "141", 
    email: "jeneholly727@ec.rr.com", 
    location: "Willmington, NC", 
    story: "My Nephew started this project and I believe in it, therefore I am spreading the kindness!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "101", 
    email: "Dcommand23@yahoo.com", 
    location: "Newark, NJ", 
    story: "I received my card from RAOC (Random Acts of Cards) on Reddit."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "148", 
    email: "mimipop18@aol.com", 
    location: "Boca Raton, FL", 
    story: "Sent to me from my grandson!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "092", 
    email: "diannacarney8@gmail.com", 
    location: "02333", 
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "093", 
    email: "diannacarney8@gmail.com", 
    location: "02333", 
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "094", 
    email: "diannacarney8@gmail.com", 
    location: "02333", 
    story: "I was sent my card through the mail thanks to r/RandomActsofCards!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "096", 
    email: "you@example.com", 
    location: "01004", 
    story: "Donated to charity"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "097", 
    email: "you@example.com", 
    location: "01003", 
    story: "Gave up seat for someone"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "291", 
    email: "ryanjkeating@outlook.com", 
    location: "84763", 
    story: "From the creator of the website Joe! Joe gifted them to me to get it all going and starting the process of random acts of kindness!  Looking forward to starting it and spreading the good vibes:):):)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "292", 
    email: "ryanjkeating@outlook.com", 
    location: "84763", 
    story: "From the creator of the website Joe! Joe gifted them to me to get it all going and starting the process of random acts of kindness!  Looking forward to starting it and spreading the good vibes:):):)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "293", 
    email: "mimedesign55@gmail.com", 
    location: "84763", 
    story: "From my boyfriend Ryan who received them from the creator of the website Joe!  Joe gifted them to Ryan to get it all going and starting the process of random acts of kindness!  Ryan then gifted one to me in a loving kiss and to start the process of spreading the good vibes randomly to others!!!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "254", 
    email: "hh@hh.com", 
    location: "Tallahassee, FL", 
    story: "Someone bought me a coffee."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "254", 
    email: "keposada9@gmail.com", 
    location: "Tallahassee, FL", 
    story: "Received my card from a friend"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "098", 
    email: "chelsea.c.gould@gmail.com", 
    location: "Boston, MA", 
    story: "Kind Card originator asked if folks on the subreddit randomactsofcards would like to participate. I replied and they sent me some Kindcards to distribute."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "302", 
    email: "cultivatekindnessbox@gmail.com", 
    location: "45030", 
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "303", 
    email: "cultivatekindnessbox@gmail.com", 
    location: "45030", 
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "304", 
    email: "cultivatekindnessbox@gmail.com", 
    location: "45030", 
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "305", 
    email: "cultivatekindnessbox@gmail.com", 
    location: "45030", 
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "306", 
    email: "cultivatekindnessbox@gmail.com", 
    location: "45030", 
    story: "From KindCard to send to Cultivate Kindness Box subscribers!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "648", 
    email: "jwallenhorst6@gmail.com", 
    location: "44092", 
    story: "Someone let me call my mom when my phone was dead"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "650", 
    email: "bridgettetzlaff@gmail.com", 
    location: "44092", 
    story: "KindCard mailed me the card to start!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "633", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "634", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "635", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "636", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "637", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "638", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "639", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "640", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "641", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "627", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "628", 
    email: "sfrohwerk@wickliffeschools.com", 
    location: "44092", 
    story: "At school i give at least 8 hugs a day so its my goal for everyone i hug i give a kindness card :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "633", 
    email: "lscalese@icloud.com", 
    location: "44092", 
    story: "Told someone they looked nice today"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "779", 
    email: "versacesamantha@gmail.com", 
    location: "30328", 
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "778", 
    email: "versacesamantha@gmail.com", 
    location: "30328", 
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "780", 
    email: "versacesamantha@gmail.com", 
    location: "30328", 
    story: "Mailed with a thank you card from a college friend who I haven’t seen in a while!"
  }).returning("id").then(records => records[0])
  
  await knex("card").insert({
    number: "449", 
    email: "justalittlegrace@yahoo.com", 
    location: "80906", 
    story: "I received my kind card in a cultivate kindness box which is a box to help spread kindness. In this box was my kind card which is one of the ways that I will be planning on spreading kindness."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "719", 
    email: "danamarie924@gmail.com", 
    location: "19125", 
    story: "Empoweringcuts a man who gives our free haircuts to the homeless"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "778", 
    email: "rebsnow94@gmail.com", 
    location: "Lawrenceville, GA", 
    story: "My wonderful co-worker/friend surprised me with my favorite starbucks drinks. I had a bad week at work and she gave me a note with the coffee that said 'because you survived a really tough week'. The sweetest!!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "721", 
    email: "bebalovee924@gmail.com", 
    location: "Philadelphia, PA", 
    story: "Randomly from my loving kids father with an amazing bright smile in his face ❤️"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1323", 
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1324", 
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1325", 
    email: "gaunt.kyle@gmail.com", 
    location: "Raleigh, North Carolina", 
    story: "Thanks Joe!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "743", 
    email: "jenileemarie12@yahoo.com", 
    location: "98513", 
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "744", 
    email: "jenileemarie12@yahoo.com", 
    location: "98513", 
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "745", 
    email: "jenileemarie12@yahoo.com", 
    location: "98513", 
    story: "Heard about Kind Card Map on the radio driving into work and loved the idea so wanted to join in!  My cards arrived in the mail a few days later."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "467", 
    email: "you@example.com", 
    location: "53762", 
    story: "I helped by closing the door."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "jodi.baumberger@k12.sd.us", 
    location: "53762", 
    story: "A gift from a student."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "291", 
    email: "revolvente@hotmail.com", 
    location: "Guadalara, Mexico", 
    story: "Mi amigo Ryan, tuvo un gran gesto al ayudarme a conseguir una nueva computadora para mí, él quiso ayudarme a tener las herramientas necesarias para continuar mi trabajo y poder seguir enseñando español como lengua extranjera. Él me entregó la tarjeta, cuando nos reunimos en Guadalajara. In English....my friend Ryan gave me a grand gesture to help me to have the tools necessary, a computer, in order to continue my work and to be able to teach Spanish to foreigners.  He gave me the kind card, when we reunited in Guadalajara, Mexico."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "699", 
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "700", 
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "701", 
    email: "carlismolen@gmail.com", 
    location: "Atlanta, Georgia", 
    story: "Joe, you are awesome. Thanks for sending cards to Eric and me."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "435", 
    email: "ohiomucks@gmail.com", 
    location: "45103", 
    story: "I went to a retreat at my church and the counselor put the KindCard in my craft bag."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "436", 
    email: "ohiomucks@gmail.com", 
    location: "45103", 
    story: "I went to a retreat at my church and the counselor put the KindCard in my craft bag."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "340", 
    email: "faithhowlett06@gmail.con", 
    location: "45150", 
    story: "I was at a church retreat and they gave them out."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "290", 
    email: "abigail.barber@btinternet.com", 
    location: "Kendal, UK", 
    story: "I was out walking the dogs, just heading home, when out the corner of my eye I spotted a little gift bag. I opened it to see what was inside and I saw the card and a gift box with a lovely pair of earrings in it!  Thank you who ever you are, they made my day."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "376", 
    email: "missnevaehlynne@gmail.com", 
    location: "Ohio", 
    story: "I got it in a valentine gift bag"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "377", 
    email: "missnevaehlynne@gmail.com", 
    location: "Ohio", 
    story: "I got it in a valentine gift bag"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "palmers603@gmail.com", 
    location: "57381", 
    story: "My child’s teacher handed out bracelets and cards to her students."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "gracaroni@hotmail.com", 
    location: "57381", 
    story: "Some kid held the door for me. And handed me this card!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "you@example.com", 
    location: "57362", 
    story: "My kindergarten teacher gave to me."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "jodi.baumberger@k12.sd.us", 
    location: "57362", 
    story: "From a student"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "343", 
    email: "kaceygross@yahoo.com", 
    location: "57362", 
    story: "He received it in his mailbox."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "290", 
    email: "axholland@icloud.com", 
    location: null, 
    story: "I received 5 kindcards from the lovely people behind the idea. I’ve shared my first one with a hidden present in my neighbourhood and can’t wait to see how far it goes."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "252", 
    email: "keposada@sbcglobal.net", 
    location: "Tallahassee, Florida", 
    story: "From a kind friend."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1342", 
    email: "nbrianna92@yahoo.com", 
    location: "63366", 
    story: "Ashley Perry paid for and brought me an energy drink one early morning because she knew we had a lot of work to do that day! It was very appreciated and I'm excited to pass it on :)"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "095", 
    email: "anitha999@hotmail.com", 
    location: "Melbourne, Australia", 
    story: "It was given to me by a wonderful and generous person who I interact with in an online forum."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1497", 
    email: "you@example.com", 
    location: "Denver, Colorado", 
    story: "Someone found my phone."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "1497", 
    email: "joegelay@gmail.com", 
    location: "Denver, Colorado", 
    story: "Found a locked iPhone at the grocery store. Held onto it until the owner's wife called and was able to get it back to him. Gave him this card and told him to pay the kindness forward when he had the chance!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "764", 
    email: "fengdina@gmail.com", 
    location: "Vancouver, Canada", 
    story: "From the kind card instagram. I'm going to send it along to another postcrossing member."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "123", 
    email: "chautrancindy@gmail.com", 
    location: "Sunnyvale, CA", 
    story: "It was included in a birthday card I received from a friendly stranger off Reddit, specifically the r/RandomActsofCards subreddit."
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "098", 
    email: "amymatthews2013@yahoo.com", 
    location: "64804", 
    story: "I received a birthday card from reddit with it in it!"
  }).returning("id").then(records => records[0])

  await knex("card").insert({
    number: "342", 
    email: "nicolegortmaker@gmail.com", 
    location: null, 
    story: "My teacher gave it to me."
  }).returning("id").then(records => records[0])

  // newest card above // 

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
