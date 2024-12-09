const mongoose = require('mongoose');
const User = require('../models/User');
const Contact = require('../models/Contact');
require('dotenv').config();

// Faker.js for generating random data
const faker = require('faker');

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected');

    // Clear existing data
    await User.deleteMany({});
    await Contact.deleteMany({});
    console.log('Existing data cleared');

    // Create random users
    const users = [];
    for (let i = 0; i < 20; i++) {
      const user = new User({
        name: faker.name.firstName(),
        phone: faker.phone.phoneNumber('##########'), // 10-digit random phone number
        email: faker.internet.email(),
        password: 'password123', // Default password for all users (hashing will handle this during save)
      });
      await user.save();
      users.push(user);
    }
    console.log('Random users created');

    // Create random contacts and assign to users
    for (const user of users) {
      const contactCount = Math.floor(Math.random() * 10) + 1; // Each user gets 1-10 contacts
      const contacts = [];
      for (let i = 0; i < contactCount; i++) {
        const contact = new Contact({
          name: faker.name.firstName(),
          phone: faker.phone.phoneNumber('##########'),
          isSpam: faker.datatype.boolean(),
        });
        await contact.save();
        contacts.push(contact._id);
      }
      user.contacts = contacts;
      await user.save();
    }
    console.log('Random contacts created and assigned to users');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database seeding complete');
  } catch (err) {
    console.error('Error during data seeding:', err.message);
    process.exit(1);
  }
};

// Run the seeding script
seedData();
