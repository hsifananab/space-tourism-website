export const pages = [
  { label: 'home', path: '/' },
  {
    label: 'destination',
    path: 'destination',
    title: 'pick your destination',
    bg: 'destination-pattern',
  },
  // {
  //   label: 'crew',
  //   path: 'crew',
  //   title: 'meet your crew',
  //   bg: 'crew-pattern',
  // },
  {
    label: 'technology',
    path: 'technology',
    title: 'space launch 101',
    bg: 'technology-pattern',
  },
];

export const destinations = [
  {
    title: 'moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    time: '3 days',
    image: require('../assets/img/destination/image-moon.png'),
  },
  {
    title: 'mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. km',
    time: '9 months',
    image: require('../assets/img/destination/image-mars.png'),
  },
  {
    title: 'europa',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. km',
    time: '3 years',
    image: require('../assets/img/destination/image-europa.png'),
  },
  {
    title: 'titan',
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. km',
    time: '7 years',
    image: require('../assets/img/destination/image-titan.png'),
  },
];

export const crew = [
  {
    position: 'Commander',
    name: 'Douglas Hurley',
    desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: require('../assets/img/crew/image-douglas-hurley.png'),
  },
  {
    position: 'Mission Specialist',
    name: 'MARK SHUTTLEWORTH',
    desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: require('../assets/img/crew/image-mark-shuttleworth.png'),
  },
  {
    position: 'PILOT',
    name: 'Victor Glover',
    desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    image: require('../assets/img/crew/image-victor-glover.png'),
  },
  {
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    image: require('../assets/img/crew/image-anousheh-ansari.png'),
  },
];

export const technologies = [
  {
    title: 'LAUNCH VEHICLE',
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      portrait: require('../assets/img/technology/image-launch-vehicle-portrait.jpg'),
      landscape: require('../assets/img/technology/image-launch-vehicle-landscape.jpg'),
    },
  },
  {
    title: 'SPACEPORT',
    desc: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    image: {
      portrait: require('../assets/img/technology/image-spaceport-portrait.jpg'),
      landscape: require('../assets/img/technology/image-spaceport-landscape.jpg'),
    },
  },
  {
    title: 'SPACE CAPSULE',
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      portrait: require('../assets/img/technology/image-space-capsule-portrait.jpg'),
      landscape: require('../assets/img/technology/image-space-capsule-landscape.jpg'),
    },
  },
];
