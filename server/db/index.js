const Sequelize = require("sequelize");
const conn = require("./conn");
const Campus = require("./Campus");
const Student = require("./Student");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  try {
    const [campus1, campus2, campus3, campus4] = await Promise.all([
      Campus.create({
        name: "Hunter College",
        imageUrl: "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        address: "695 Park Ave, New York, NY 10065",
      }),
      Campus.create({
        name: "Baruch College",
        imageUrl: "https://static.wixstatic.com/media/7383ad_4ab056985c054a7585eb3df5be341036~mv2.png/v1/fill/w_1500,h_1500,al_c/Baruch%20College.png",
        address: "55 Lexington Ave, New York, NY 10010",
      }),
      Campus.create({
        name: "Queens College",
        imageUrl: "https://www.cuny.edu/wp-content/uploads/sites/4/assets//qc_logo.jpg",
        address: "65-30 Kissena Blvd, Flushing, NY 11367",
      }),
      Campus.create({
        name: "Brooklyn College",
        imageUrl: "https://www.brooklyncollegeathletics.com/images/logos/site/site.png",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
      }),
    ]);

    const [student1, student2, student3, student4] = await Promise.all([
      Student.create({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        gpa: 3.5,
        campusId: 1,
      }),
      Student.create({
        firstName: "Jane",
        lastName: "Bar",
        email: "janebar@gmail.com",
        gpa: 3.0,
        campusId: 2,
      }),
      Student.create({
        firstName: "Jack",
        lastName: "Foo",
        email: "jackfoo@gmail.com",
        gpa: 3.2,
        campusId: 3,
      }),
      Student.create({
        firstName: "Jill",
        lastName: "Baz",
        email: "jillbaz@gmail.com",
        gpa: 3.8,
        campusId: 2,
      }),
    ]);

    console.log("Database synced!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  syncAndSeed,
  models: {
    Campus,
    Student,
  },
  conn,
};
