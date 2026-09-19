const tripDays = [
  {
    id: 1,
    date: "Thu · 17 Sep",
    shortDate: "17 Sep",
    title: "Land softly in Heraklion",
    location: "Heraklion",
    status: "Booked",
    color: "#c86643",
    summary: "Land, find a tasty simple dinner near the hotel, then check in and rest.",
    metrics: ["~4 km taxi", "~10 min transfer", "Late check-in"],
    note: "Keep the hotel confirmation and address handy for the taxi; ask about a nearby kitchen still serving after landing.",
    stay: "Poseidon Hotel",
    hotel: {
      label: "Tonight",
      name: "Poseidon Hotel",
      checkIn: "Thu 17 · 15:00–00:00",
      checkOut: "Fri 18 · by 11:00",
      room: "Double or Twin Room",

      note: "Late arrival around 22:00–23:00 approved"
    },
    mapsQuery: "Poseidonos 54, Heraklion, Greece",
    events: [
      ["19:25", "Fly from Tel Aviv", "Blue Bird BZ758 · Terminal 3"],
      ["21:15", "Arrive in Heraklion", "Taxi from HER to the hotel"],
      ["22:00–23:00", "Late check-in", "Arrival window already approved"]
    ],
    points: [
      { name: "Heraklion Airport", coords: [35.337058, 25.180972], type: "fixed" },
      { name: "Poseidon Hotel", coords: [35.339851, 25.147745], type: "fixed" }
    ]
  },
  {
    id: 2,
    date: "Fri · 18 Sep",
    shortDate: "18 Sep",
    title: "The road to Chania",
    location: "Heraklion → Chania",
    status: "Booked",
    color: "#e3a942",
    summary: "Collect the car, stop for a special lunch in Rethymno, then settle into Chania.",
    metrics: ["~140 km drive", "~2h15 direct", "Easy afternoon"],
    note: "At pickup, photograph every side of the car, confirm the fuel policy and ask SK Rent to explain the exact return procedure.",
    stay: "Polixeny’s Suites · night 1 of 2",
    hotel: {
      label: "Tonight · night 1 of 2",
      name: "Polixeny’s Suites",
      checkIn: "Fri 18 · 14:00–23:30",
      checkOut: "Sun 20 · by 11:00",
      room: "Junior Suite with Balcony",

      note: "Property-confirmed stay: 18–20 Sep; Booking.com dates are wrong"
    },
    mapsQuery: "Polixeny's Suites, Chania, Greece",
    events: [
      ["10:00", "Pick up from SK Rent", "Heraklion Airport · bring the reservation voucher"],
      ["10:30–12:30", "Drive to Rethymno", "Allow time for rental pickup, parking and the walk into the old town"],
      ["12:30–14:30", "A proper first lunch", "Raki BaRaki or an arranged Avli lunch; allow time for a short wander"],
      ["15:30–16:30", "Arrive in Chania", "Estimated arrival after lunch and the onward drive; check in and enjoy an easy evening"]
    ],
    points: [
      { name: "Heraklion Airport", coords: [35.337058, 25.180972], type: "fixed" },
      { name: "Polixeny’s Suites", coords: [35.51554, 24.022812], type: "fixed" }
    ]
  },
  {
    id: 3,
    date: "Sat · 19 Sep",
    shortDate: "19 Sep",
    title: "Falasarna beach day",
    location: "Chania",
    status: "Our plan",
    color: "#e3a942",
    summary: "Beach, a light lunch and likely pizza near the hotel tonight.",
    metrics: ["~110 km round trip", "~1h15 each way", "Return when ready"],
    note: "Check wind and waves before leaving. Choose an organised beach area with an umbrella; shade and sunbeds are not reserved.",
    stay: "Polixeny’s Suites · night 2 of 2",
    hotel: {
      label: "Tonight · night 2 of 2",
      name: "Polixeny’s Suites",
      checkIn: "Already checked in",
      checkOut: "Sun 20 · by 11:00",
      room: "Junior Suite with Balcony",

      note: "Property-confirmed stay: 18–20 Sep; pack for departure tonight"
    },
    mapsQuery: "Playa Paraiso Falassarna, Crete, Greece",
    events: [
      ["10:00–10:30", "Leave Chania for Falasarna", "Suggested departure after the later start; allow 1–1h15 and arrive around 11:00–11:45."],
      ["11:00–13:30", "Beach, shade and swimming", "Find an umbrella and sunbeds in an organised area. Take breaks in the shade."],
      ["13:30–14:30", "Lunch in the shade", "Playa Paraiso for snacks, or Kyma Fotis for sandwiches and salads. See today’s guide for links and prices."],
      ["Afternoon", "Flexible return to Chania", "Stay if it feels good, or return for a rest. No need to wait for sunset."],
      ["Evening", "Probably pizza near the hotel", "A simple evening near Polixeny’s; choose a pizza place when back, then pack for tomorrow. Nothing booked."]
    ],
    points: [
      { name: "Chania Old Town", coords: [35.51554, 24.022812], type: "fixed" },
      { name: "Falasarna", coords: [35.49725, 23.57956], type: "flexible" }
    ]
  },
  {
    id: 4,
    date: "Sun · 20 Sep",
    shortDate: "20 Sep",
    title: "A gorge, then the edge of Crete",
    location: "Chania → Imbros → Lykos",
    status: "Route choice",
    color: "#718167",
    summary: "The recommended route is Imbros: enough adventure, without spending the next day recovering.",
    metrics: ["8–9 km hike", "2.5–3.5h trail", "Moderate"],
    note: "Plan A is the recommendation. Carry trail shoes, sun protection and at least 1.5 litres of water each; confirm the Lykos boat before leaving Chania.",
    stay: "Taverna Akrogiali · Lykos",
    hotel: {
      label: "Tonight",
      name: "Taverna Akrogiali",
      checkIn: "Sun 20 · from 14:00",
      checkOut: "Mon 21 · 07:00–12:00",
      room: "Deluxe Double · balcony + sea view",

      note: "Coordinate the boat transfer with the property; timing and availability need confirmation"
    },
    mapsQuery: "Lykos Beach, Sfakia, Crete",
    plans: [
      {
        id: "imbros",
        label: "Plan A",
        title: "Imbros Gorge",
        note: "Balanced, scenic and much easier to fit around the transfer to Lykos.",
        events: [
          ["07:30", "Leave Chania", "About 60 km · allow 1h15–1h30 to Komitades"],
          ["09:00", "Taxi to the trailhead", "Roughly 10–15 minutes; arrange the ride from Komitades"],
          ["09:30–13:00", "Hike Imbros Gorge", "8–9 km · 2.5–3.5 hours · mostly descending, low exposure"],
          ["13:00–15:00", "Lunch and continue to Sfakia", "Komitades to Sfakia is about 10 km · 15 minutes"],
          ["Afternoon", "Park and boat to Lykos", "Confirm the sailing or property pickup in advance"],
          ["Evening", "Dinner at Akrogiali", "Everything after arrival stays deliberately empty"]
        ]
      },
      {
        id: "aradena",
        label: "Plan B",
        title: "Aradena adventure",
        note: "Only choose this after confirming the exact trail, transfer and boat logistics; it is the more technical, exposed day.",
        events: [
          ["07:00", "Leave Chania early", "Allow about 2 hours for the mountain road and setup"],
          ["Morning", "Aradena route", "Roughly 10.5 km · estimate 4–5 hours for hikers · exposed sections"],
          ["Afternoon", "Recover and reach Sfakia", "Build in food, transfer and a generous delay buffer"],
          ["Late afternoon", "Boat to Lykos", "This plan only works with a confirmed late-enough connection"],
          ["Evening", "Dinner and rest", "Expect this to feel like the trip’s hardest day"]
        ]
      }
    ],
    points: [
      { name: "Chania", coords: [35.51554, 24.022812], type: "fixed" },
      { name: "Imbros Gorge", coords: [35.227089, 24.164514], type: "fixed" },
      { name: "Chora Sfakion", coords: [35.201331, 24.136091], type: "fixed" },
      { name: "Lykos", coords: [35.200502, 24.06765], type: "fixed" }
    ]
  },
  {
    id: 5,
    date: "Mon · 21 Sep",
    shortDate: "21 Sep",
    title: "Coastal path, with a boat built in",
    location: "Lykos → Glyka Nera → Plakias",
    status: "Flexible",
    color: "#4b8276",
    summary: "Walk as far as it feels good. The boat from Glyka Nera is part of the design.",
    metrics: ["5.5–9 km walk", "2–3h trail", "Boat escape"],
    note: "Check wind and boat service that morning. The final Glyka Nera–Sfakia section is exposed and includes a fixed cable; taking the boat is the preferred relaxed option.",
    stay: "Sofia Hotel · Plakias",
    hotel: {
      label: "Tonight",
      name: "Sofia Hotel",
      checkIn: "Mon 21 · from 13:00",
      checkOut: "Tue 22 · by 11:00",
      room: "Double or Twin Room",

      note: "Breakfast included"
    },
    mapsQuery: "Sofia Hotel, Plakias, Crete",
    plans: [
      {
        id: "boat",
        label: "Plan A",
        title: "Walk, then boat",
        note: "Recommended: it keeps the beautiful section and removes the most exposed final stretch.",
        events: [
          ["08:30", "Lykos to Loutro", "About 2.5 km · 40–60 minutes on foot, or roughly 10 minutes by boat"],
          ["10:00–11:15", "Loutro to Glyka Nera", "About 2.8 km · roughly 1 hour on the E4 coastal path"],
          ["11:15–13:30", "Swim and lunch", "Allow 2 hours to enjoy the beach rather than only pass through"],
          ["Afternoon", "Boat to Sfakia", "Roughly 15 minutes; timetable and wind must be checked locally"],
          ["After the boat", "Retrieve the car", "Sfakia to Kourtaliotiko is roughly 40 km · about 55 minutes"],
          ["Optional", "Kourtaliotiko waterfall", "About 2 km return · allow 45–60 minutes plus any swim; recheck access rules"],
          ["Evening", "Drive to Plakias", "Roughly 20 km · 30 minutes, then check in and eat"]
        ]
      },
      {
        id: "trail",
        label: "Plan B",
        title: "Walk all the way",
        note: "A 9 km coastal walking day before the drive. Skip Kourtaliotiko if you choose this version.",
        events: [
          ["08:30", "Lykos to Loutro", "About 2.5 km · 40–60 minutes on foot"],
          ["10:00–11:15", "Loutro to Glyka Nera", "About 2.8 km · roughly 1 hour"],
          ["11:15–13:00", "Swim and early lunch", "Rest before deciding on the exposed section"],
          ["13:00–14:30", "Glyka Nera to Sfakia", "About 3.5 km · 1h15–1h30 · exposed path and fixed cable"],
          ["Afternoon", "Retrieve the car", "Go directly toward Plakias; do not add another hike"],
          ["Evening", "Check in at Sofia Hotel", "Dinner and recovery in Plakias"]
        ]
      }
    ],
    points: [
      { name: "Lykos", coords: [35.200502, 24.06765], type: "fixed" },
      { name: "Loutro", coords: [35.196645, 24.082879], type: "fixed" },
      { name: "Glyka Nera", coords: [35.201641, 24.106984], type: "flexible" },
      { name: "Chora Sfakion", coords: [35.201331, 24.136091], type: "fixed" },
      { name: "Sofia Hotel", coords: [35.191092, 24.393126], type: "fixed" }
    ]
  },
  {
    id: 6,
    date: "Tue · 22 Sep",
    shortDate: "22 Sep",
    title: "Palm forest and the wild south",
    location: "Plakias → Preveli → Agia Galini",
    status: "Flexible",
    color: "#2c7b7c",
    summary: "Preveli is the anchor. Triopetra and Agios Pavlos follow; Ligres is purely optional.",
    metrics: ["450 steps", "2.5–3.5h Preveli", "Easy–moderate"],
    note: "The western approach has the classic view but 450 steep steps each way. Start early, carry water and treat every beach after Preveli as optional.",
    stay: "Astoria Hotel · Agia Galini",
    hotel: {
      label: "Tonight",
      name: "Astoria Hotel",
      checkIn: "Tue 22 · 15:00–00:00",
      checkOut: "Wed 23 · 08:00–11:00",
      room: "Standard Double Room",

      note: "Breakfast included"
    },
    mapsQuery: "Astoria Hotel, Agia Galini, Crete",
    plans: [
      {
        id: "sunset",
        label: "Plan A",
        title: "Wild coast + sunset",
        note: "The fuller scenic day; only keep Agios Pavlos if driving the final stretch after sunset feels comfortable.",
        events: [
          ["08:30–09:00", "Drive to Preveli", "About 35 km from Plakias · allow 45–55 minutes"],
          ["09:00–12:30", "Preveli Palm Beach", "450 steps down and back · about 20 minutes down, 30 minutes up"],
          ["12:30–14:00", "Palm forest, swim and lunch", "Keep the whole Preveli stop to roughly 2.5–3.5 hours"],
          ["15:00–16:30", "Triopetra", "About 35 km · 50 minutes from Preveli; allow 60–90 minutes"],
          ["Late day", "Agios Pavlos sunset", "Short coastal hop; leave about 35 km · 45 minutes for Agia Galini afterward"],
          ["Evening", "Check in at Astoria", "Expect an after-dark arrival"]
        ]
      },
      {
        id: "easy",
        label: "Plan B",
        title: "Preveli + easy arrival",
        note: "The calmer version: enjoy Preveli fully, make one brief coast stop, then reach Agia Galini in daylight.",
        events: [
          ["08:30–09:00", "Drive to Preveli", "About 35 km · allow 45–55 minutes"],
          ["09:00–13:00", "Preveli and palm forest", "450 steps each way · 2.5–3.5 hours including swim and lunch"],
          ["14:00–15:00", "Choose one coast stop", "Triopetra for the rocks or Agios Pavlos for a quieter swim"],
          ["15:30–17:00", "Drive to Agia Galini", "Allow roughly 45–60 minutes from the coast"],
          ["Evening", "Check in before dark", "Village walk, dinner and a proper rest"]
        ]
      }
    ],
    points: [
      { name: "Plakias", coords: [35.191092, 24.393126], type: "fixed" },
      { name: "Preveli Beach", coords: [35.152528, 24.47383], type: "fixed" },
      { name: "Triopetra", coords: [35.112637, 24.554763], type: "flexible" },
      { name: "Agios Pavlos", coords: [35.1016, 24.5658], type: "flexible" },
      { name: "Agia Galini", coords: [35.097145, 24.688485], type: "fixed" }
    ]
  },
  {
    id: 7,
    date: "Wed · 23 Sep",
    shortDate: "23 Sep",
    title: "A slow turn back to Heraklion",
    location: "Agia Galini → Heraklion",
    status: "Booked",
    color: "#5a7770",
    summary: "Keep the route loose: Phaistos, Matala or a long village lunch—then return the car on time.",
    metrics: ["~80 km direct", "~1h25 drive", "Car back 19:00"],
    note: "The non-negotiable is the 19:00 SK Rent return. Refuel before the airport and aim to arrive by 18:00, even if the morning plan runs late.",
    stay: "Athinaikon Hotel · Heraklion",
    hotel: {
      label: "Tonight",
      name: "Athinaikon Hotel",
      checkIn: "Wed 23 · 14:00–00:00",
      checkOut: "Thu 24 · by 11:00",
      room: "Double or Twin Room",

      note: "Leave around 06:30–06:45 for the ferry"
    },
    mapsQuery: "Athinaikon Hotel, Heraklion, Greece",
    plans: [
      {
        id: "phaistos",
        label: "Plan A",
        title: "Phaistos + lunch",
        note: "A meaningful final stop with enough margin to protect the car return.",
        events: [
          ["09:30", "Leave Agia Galini", "Phaistos is about 30 km · roughly 35 minutes"],
          ["10:15–11:45", "Visit Phaistos", "Allow 1–1.5 hours for the archaeological site"],
          ["12:00–14:00", "Long lunch", "Stay nearby rather than adding another major destination"],
          ["By 15:30", "Drive north", "Allow about 1h15 to the airport plus refuelling"],
          ["17:30–18:00", "Reach Heraklion Airport", "Keep a full hour of return buffer"],
          ["19:00", "Return the car to SK Rent", "Same airport location; then taxi about 10 minutes to Athinaikon"],
          ["Evening", "Early dinner and sleep", "Alarm is 05:30 for the ferry"]
        ]
      },
      {
        id: "slow",
        label: "Plan B",
        title: "Slow village day",
        note: "Choose this if you want to end the road trip rested rather than collect one more sight.",
        events: [
          ["Morning", "Agia Galini without rushing", "Breakfast, harbour walk and a final swim · 2–3 hours"],
          ["12:00–14:00", "Inland village lunch", "Pick one stop on the route north"],
          ["By 15:30", "Drive to Heraklion", "About 80 km direct · roughly 1h25 plus refuelling"],
          ["17:30–18:00", "Reach Heraklion Airport", "Keep a full hour of return buffer"],
          ["19:00", "Return the car to SK Rent", "Then taxi about 10 minutes to Athinaikon"],
          ["Evening", "Early dinner and sleep", "Alarm is 05:30 for the ferry"]
        ]
      }
    ],
    points: [
      { name: "Agia Galini", coords: [35.097145, 24.688485], type: "fixed" },
      { name: "Phaistos — optional", coords: [35.051318, 24.813708], type: "flexible" },
      { name: "Heraklion Airport", coords: [35.337058, 25.180972], type: "fixed" },
      { name: "Athinaikon Hotel", coords: [35.334989, 25.141517], type: "fixed" }
    ]
  },
  {
    id: 8,
    date: "Thu · 24 Sep",
    shortDate: "24 Sep",
    title: "Across the Aegean",
    location: "Heraklion → Santorini",
    status: "Booked",
    color: "#2d7f91",
    summary: "An early ferry earns a full arrival day in Perissa with nothing urgent after check-in.",
    metrics: ["1h35 ferry", "~35 min transfer", "No car"],
    note: "Complete SeaJets check-in online and keep the QR tickets offline. A normal taxi from Athinios to Perissa is an option; have the hotel address ready.",
    stay: "Roula Villa · Perissa · night 1 of 2",
    hotel: {
      label: "Tonight · night 1 of 2",
      name: "Roula Villa Studios & Apartments",
      checkIn: "Thu 24 · 14:00–00:00",
      checkOut: "Sat 26 · 05:00–11:00",
      room: "Family Superior Hydro-massage",

      note: "Expected arrival time should be shared in advance"
    },
    mapsQuery: "Roula Villa Studios & Apartments, Perissa, Santorini",
    events: [
      ["05:30", "Wake up", "Leave Athinaikon around 06:30–06:45"],
      ["07:00", "Reach Heraklion port", "Boarding buffer after online check-in"],
      ["08:00–09:35", "SeaJets to Santorini", "Champions League Jet 2"],
      ["09:45–10:30", "Transfer to Perissa", "Roughly 15 km · allow 30–45 minutes depending on port traffic"],
      ["14:00", "Check in", "Pool or Perissa beach · keep 2–3 hours completely loose"]
    ],
    points: [
      { name: "Heraklion Port", coords: [35.341917, 25.141817], type: "fixed" },
      { name: "Athinios Port", coords: [36.386598, 25.429321], type: "fixed" },
      { name: "Perissa", coords: [36.356927, 25.473867], type: "fixed" }
    ]
  },
  {
    id: 9,
    date: "Fri · 25 Sep",
    shortDate: "25 Sep",
    title: "Wedding day",
    location: "Santorini",
    status: "Anchor fixed",
    color: "#d38161",
    summary: "A slow morning, plenty of time to get ready, and the family wedding in the afternoon.",
    metrics: ["Morning free", "Wedding anchor", "Timing TBD"],
    note: "Keep the morning relaxed. Confirm the wedding venue, ceremony time and transfers with the family before setting a departure time.",
    stay: "Roula Villa · Perissa · night 2 of 2",
    hotel: {
      label: "Tonight · night 2 of 2",
      name: "Roula Villa Studios & Apartments",
      checkIn: "Already checked in",
      checkOut: "Sat 26 · by 11:00",
      room: "Family Superior Hydro-massage",

      note: "Ask Roula Villa to confirm luggage storage after checkout"
    },
    mapsQuery: "Perissa, Santorini, Greece",
    events: [
      ["Morning", "Keep it light", "Breakfast, pool or Perissa beach · cap it at 1–2 hours"],
      ["Midday", "Get ready without rushing", "Exact venue, time and transfer still to confirm"],
      ["Afternoon", "Wedding", "Family wedding"]
    ],
    points: [
      { name: "Perissa", coords: [36.356927, 25.473867], type: "fixed" }
    ]
  },
  {
    id: 10,
    date: "Sat · 26 Sep",
    shortDate: "26 Sep",
    title: "Back to Crete, then one last exhale",
    location: "Santorini → Heraklion",
    status: "Booked",
    color: "#c86643",
    summary: "A relaxed Santorini morning, the afternoon ferry and a final suite with an outdoor jacuzzi.",
    metrics: ["1h35 ferry", "~35 min port ride", "Jacuzzi night"],
    note: "Confirm luggage storage with Roula Villa before checkout; it is not yet arranged. Keep ferry essentials with you and confirm the transfer pickup time and port buffer with the driver.",
    stay: "Porta Suites · Heraklion",
    hotel: {
      label: "Tonight",
      name: "Porta Suites",
      checkIn: "Sat 26 · 15:00–21:00",
      checkOut: "Sun 27 · by 11:00",
      room: "Premium Sea View Suite · outdoor jetted tub",

      note: "Arrival around 18:00 is inside the confirmed window"
    },
    mapsQuery: "Porta Suites, Heraklion, Greece",
    events: [
      ["By 11:00", "Check out", "Store bags only if agreed with Roula Villa, then have a final lunch"],
      ["13:30–14:15", "Transfer to Athinios port", "About 15 km · allow 30–45 minutes plus a generous boarding buffer"],
      ["15:45–17:20", "SeaJets to Heraklion", "Champions League Jet 1"],
      ["Around 18:00", "Check in at Porta Suites", "Port transfer is roughly 3 km · about 10 minutes; sea-view suite and outdoor jetted tub"],
      ["Evening", "Final dinner", "No need to turn the night into another itinerary"]
    ],
    points: [
      { name: "Perissa", coords: [36.356927, 25.473867], type: "fixed" },
      { name: "Athinios Port", coords: [36.386598, 25.429321], type: "fixed" },
      { name: "Heraklion Port", coords: [35.341917, 25.141817], type: "fixed" },
      { name: "Porta Suites", coords: [35.3373, 25.1278], type: "fixed" }
    ]
  },
  {
    id: 11,
    date: "Sun · 27 Sep",
    shortDate: "27 Sep",
    title: "Home",
    location: "Heraklion → Tel Aviv",
    status: "Booked",
    color: "#153c39",
    summary: "Early taxi, comfortable airport buffer and home by lunchtime.",
    metrics: ["~5 km taxi", "10–15 min", "3h airport buffer"],
    note: "Book the taxi the night before and check Blue Bird’s terminal/baggage status before leaving the hotel.",
    stay: "Home",
    hotel: {
      label: "Morning checkout",
      name: "Porta Suites",
      checkIn: "Already checked in",
      checkOut: "Sun 27 · by 11:00",
      room: "Premium Sea View Suite · outdoor jetted tub",

      note: "Leave at 07:30; no need to use the full checkout window"
    },
    mapsQuery: "Heraklion International Airport, Greece",
    events: [
      ["07:30", "Taxi to the airport", "About 5 km · roughly 10–15 minutes; aim to arrive around 08:00"],
      ["11:05", "Fly from Heraklion", "Blue Bird BZ753"],
      ["12:45", "Arrive in Tel Aviv", "Honeymoon complete"]
    ],
    points: [
      { name: "Porta Suites", coords: [35.3373, 25.1278], type: "fixed" },
      { name: "Heraklion Airport", coords: [35.337058, 25.180972], type: "fixed" }
    ]
  }
];

const stays = [
  ["17—18 Sep", "Poseidon Hotel", "Heraklion · late arrival approved", "1 night"],
  ["18—20 Sep", "Polixeny’s Suites", "Chania · property-confirmed dates", "2 nights"],
  ["20—21 Sep", "Taverna Akrogiali", "Lykos · sea-view balcony", "1 night"],
  ["21—22 Sep", "Sofia Hotel", "Plakias · breakfast included", "1 night"],
  ["22—23 Sep", "Astoria Hotel", "Agia Galini · breakfast included", "1 night"],
  ["23—24 Sep", "Athinaikon Hotel", "Heraklion · near the ferry port", "1 night"],
  ["24—26 Sep", "Roula Villa", "Perissa · hydro-massage room", "2 nights"],
  ["26—27 Sep", "Porta Suites", "Heraklion · outdoor jetted tub", "1 night"]
];

const filter = document.querySelector("[data-day-filter]");
const timeline = document.querySelector("[data-timeline]");
const stayList = document.querySelector("[data-stay-list]");

let selectedDay = null;

function createDayChip(day) {
  const button = document.createElement("button");
  button.className = "day-chip";
  button.type = "button";
  button.dataset.day = String(day.id);
  button.setAttribute("aria-label", `Show day ${day.id}, ${day.date}`);
  const [weekday, date] = day.date.split(" · ");
  button.innerHTML = `<strong>${day.id}</strong><span>${weekday}<small>${date}</small></span>`;
  button.addEventListener("click", () => selectDay(day.id, true));
  return button;
}

function createOverviewChip() {
  const button = document.createElement("button");
  button.className = "day-chip is-overview is-active";
  button.type = "button";
  button.dataset.day = "all";
  button.innerHTML = "<strong>∞</strong><span>Whole<small>route</small></span>";
  button.addEventListener("click", () => selectDay(null, false));
  return button;
}

function createDayCard(day) {
  const article = document.createElement("article");
  article.className = "day-card";
  article.id = `day-${day.id}`;
  article.dataset.dayCard = String(day.id);
  article.style.setProperty("--day-color", day.color);

  const renderEvents = events => events.map(([time, title, detail]) => `
    <div class="day-event">
      <span class="event-time">${time}</span>
      <div class="event-copy"><strong>${title}</strong><span>${detail}</span></div>
    </div>
  `).join("");

  const initialPlan = day.plans?.[0];
  const activeEvents = initialPlan?.events ?? day.events;
  const planTabs = day.plans ? `
    <div class="plan-tabs" role="tablist" aria-label="Plans for ${day.title}">
      ${day.plans.map((plan, index) => `
        <button
          class="plan-tab${index === 0 ? " is-active" : ""}"
          id="day-${day.id}-tab-${plan.id}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="day-${day.id}-plan"
          tabindex="${index === 0 ? "0" : "-1"}"
          data-plan-id="${plan.id}"
        ><span>${plan.label}</span>${plan.title}</button>
      `).join("")}
    </div>
  ` : "";

  const metrics = day.metrics.map(metric => `<span>${metric}</span>`).join("");
  const filename = String(day.id).padStart(2, "0");
  const hotel = day.hotel;
  const mapFile = day.id === 9 ? "08" : filename;

  article.innerHTML = `
    <div class="day-card-head">
      <span class="day-number">${day.id}</span>
      <div>
        <p class="day-date">${day.date} · ${day.location}</p>
        <h3>${day.title}</h3>
      </div>
      <span class="day-status">${day.status}</span>
    </div>
    <p class="day-summary">${day.summary}</p>
    <a class="day-guide-link" href="./day-${String(day.id).padStart(2, "0")}.html"><strong>${day.location} · day guide →</strong><span>Food, activities, packing & practical details</span></a>
    <div class="day-metrics" aria-label="Day at a glance">${metrics}</div>
    <div class="day-detail-grid">
      <div class="day-plan">
        ${planTabs}
        <div
          class="plan-panel"
          id="day-${day.id}-plan"
          ${initialPlan ? `role="tabpanel" aria-labelledby="day-${day.id}-tab-${initialPlan.id}"` : ""}
        >
          ${initialPlan ? `<div class="plan-lead"><strong data-plan-title>${initialPlan.title}</strong><p data-plan-note>${initialPlan.note}</p></div>` : ""}
          <div class="day-events" data-plan-events>${renderEvents(activeEvents)}</div>
        </div>
        <aside class="day-note"><strong>Keep in mind</strong><p>${day.note}</p></aside>
      </div>
      <div class="day-side">
        <figure class="day-map">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.mapsQuery)}" target="_blank" rel="noreferrer" aria-label="Open ${day.location} in Google Maps">
            <img class="day-map-image" src="./assets/map-day-${mapFile}.png" alt="${day.id === 9 ? "Arrival route to Perissa; wedding venue is not yet confirmed" : `Static OpenStreetMap route for day ${day.id}: ${day.location}`}" loading="lazy">
          </a>
          <figcaption><span>${day.id === 9 ? "Perissa arrival route · venue pending" : `Day ${day.id} route`}</span><span>© OpenStreetMap</span></figcaption>
        </figure>
        <section class="hotel-card" aria-label="Stay details for ${hotel.name}">
          <p class="hotel-label">${hotel.label}</p>
          <h4>${hotel.name}</h4>
          <div class="hotel-times">
            <span><small>Check-in</small><strong>${hotel.checkIn}</strong></span>
            <span><small>Check-out</small><strong>${hotel.checkOut}</strong></span>
          </div>
          <dl>
            <div><dt>Room</dt><dd>${hotel.room}</dd></div>
          </dl>
          <p class="hotel-note">${hotel.note}</p>
          <a class="tool-link" href="./day-${String(day.id).padStart(2, "0")}.html#hotels">Laundry, services & contact →</a>
        </section>
      </div>
    </div>
    <div class="day-foot">
      <span class="stay-pill">Sleep: ${day.stay}</span>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.mapsQuery)}" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
    </div>
  `;

  if (day.plans) {
    const tabs = [...article.querySelectorAll("[role='tab']")];
    const panel = article.querySelector("[role='tabpanel']");
    const activatePlan = planId => {
      const plan = day.plans.find(item => item.id === planId);
      tabs.forEach(tab => {
        const active = tab.dataset.planId === planId;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", `day-${day.id}-tab-${plan.id}`);
      panel.querySelector("[data-plan-title]").textContent = plan.title;
      panel.querySelector("[data-plan-note]").textContent = plan.note;
      panel.querySelector("[data-plan-events]").innerHTML = renderEvents(plan.events);
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", event => {
        event.stopPropagation();
        activatePlan(tab.dataset.planId);
      });
      tab.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const next = tabs[(index + direction + tabs.length) % tabs.length];
        activatePlan(next.dataset.planId);
        next.focus();
      });
    });
  }

  article.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    selectDay(day.id, false);
  });
  return article;
}

function renderStaticContent() {
  filter.append(createOverviewChip(), ...tripDays.map(createDayChip));
  timeline.append(...tripDays.map(createDayCard));

  stays.forEach(([date, name, note, nights]) => {
    const row = document.createElement("div");
    row.className = "stay-row";
    row.innerHTML = `
      <span class="stay-date">${date}</span>
      <span class="stay-name"><strong>${name}</strong><span>${note}</span></span>
      <span class="stay-nights">${nights}</span>
    `;
    stayList.append(row);
  });
}

function selectDay(dayId, shouldScroll) {
  selectedDay = dayId;
  const chips = document.querySelectorAll("[data-day]");
  const cards = document.querySelectorAll("[data-day-card]");

  chips.forEach(chip => {
    const isSelected = dayId === null ? chip.dataset.day === "all" : chip.dataset.day === String(dayId);
    chip.classList.toggle("is-active", isSelected);
    chip.setAttribute("aria-pressed", String(isSelected));
    if (isSelected) chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });

  cards.forEach(card => {
    const isSelected = card.dataset.dayCard === String(dayId);
    card.classList.toggle("is-active", isSelected);
    card.classList.toggle("is-muted", dayId !== null && !isSelected);
  });

  if (dayId === null) {
    return;
  }

  const day = tripDays.find(item => item.id === dayId);
  if (shouldScroll) {
    document.getElementById(`day-${day.id}`).scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function initObservers() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

document.querySelector("[data-show-overview]").addEventListener("click", () => {
  selectDay(null, false);
  document.getElementById("itinerary").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("[data-print]").addEventListener("click", () => window.print());

renderStaticContent();
initObservers();

// Greece's local calendar date also works when either phone is in Israel.
const greekDate = new Intl.DateTimeFormat("en-CA", {timeZone: "Europe/Athens", year: "numeric", month: "2-digit", day: "2-digit"}).format(new Date());
const todayId = tripDays.find(day => greekDate === `2026-09-${String(day.id + 16).padStart(2, "0")}`)?.id;
const todayButton = document.querySelector("[data-today]");
todayButton.textContent = todayId ? "Today’s plan" : (greekDate < "2026-09-17" ? "Start of the trip" : "Last day of the trip");
todayButton.addEventListener("click", () => selectDay(todayId ?? (greekDate < "2026-09-17" ? 1 : 11), true));
document.querySelector("[data-santorini]").addEventListener("click", () => selectDay(8, true));
