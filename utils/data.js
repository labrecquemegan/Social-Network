const usernames = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
];

const emails = [
  "Aaran@mail.com",
  "Aaren@mail.com",
  "Aarez@mail.com",
  "Aarman@mail.com",
  "Aaron@mail.com",
  "Aaron-James@mail.com",
  "Aarron@mail.com",
  "Aaryan@mail.com",
  "Aaryn@mail.com",
  "Aayan@mail.com",
  "Aazaan@mail.com",
  "Abaan@mail.com",
  "Abbas@mail.com",
  "Abdallah@mail.com",
  "Abdalroof@mail.com",
  "Abdihakim@mail.com",
  "Abdirahman@mail.com",
  "Abdisalam@mail.com",
  "Abdul@mail.com",
];

// get a random username
const getRandomPerson = (i) => {
  return usernames[i];
};

//   get a random email
const getRandomEmail = (i) => {
  return emails[i];
};

module.exports = { getRandomPerson, getRandomEmail };
