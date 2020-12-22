const persons = [
  {
    id: 1,
    firstName: 'Aundrea',
    lastName: 'Kinde',
    email: 'akinde0@domainmarket.com',
  },
  {
    id: 2,
    firstName: 'Waldon',
    lastName: 'Burrow',
    email: 'wburrow1@virginia.edu',
  },
  {
    id: 3,
    firstName: 'Alfy',
    lastName: 'Janicki',
    email: 'ajanicki2@blogger.com',
  },
  {
    id: 4,
    firstName: 'Dwain',
    lastName: 'Tomasian',
    email: 'dtomasian3@bloomberg.com',
  },
  {
    id: 5,
    firstName: 'Lonee',
    lastName: 'Merck',
    email: 'lmerck4@etsy.com',
  },
  {
    id: 6,
    firstName: 'Man',
    lastName: 'Slyme',
    email: 'mslyme5@ucsd.edu',
  },
  {
    id: 7,
    firstName: 'Bev',
    lastName: 'McCarrick',
    email: 'bmccarrick6@tiny.cc',
  },
  {
    id: 8,
    firstName: 'Bliss',
    lastName: 'Euesden',
    email: 'beuesden7@ucoz.com',
  },
  {
    id: 9,
    firstName: 'Phylys',
    lastName: 'Hugonneau',
    email: 'phugonneau8@tiny.cc',
  },
  {
    id: 10,
    firstName: 'Anatollo',
    lastName: 'Guirardin',
    email: 'aguirardin9@ftc.gov',
  },
];

const newPersons = persons
  .filter((p) => p.id % 2 === 0)
  .map((p) => {
    const emailSplit = p.email.split('@');
    return {
      id: p.id,
      fullName: p.firstName + ' ' + p.lastName,
      username: emailSplit[0],
      domain: emailSplit[1],
    };
  });

console.log(newPersons);
