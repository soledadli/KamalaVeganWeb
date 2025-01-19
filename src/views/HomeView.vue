<template>
  <div id="app">
    <header class="header">
      <h1 class="title">KamalaVegan Restaurant</h1>
      <nav>
        <ul>
          <li><router-link to="/menu">Speisekarte</router-link></li>
          <li><a href="#reserve">Reservierung</a></li>
          <li><a href="#about">Über Uns</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>

    <section id="reserve" class="section">
      <h2>Reserve a Table</h2>
      <form @submit.prevent="submitReservation">
        <label for="date">Select a Date:</label>
        <input type="date" id="date" v-model="reservation.date" required />

        <label for="time">Select a Time:</label>
        <input type="time" id="time" v-model="reservation.time" required />

        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" v-model="reservation.guests" min="1" required />

        <label for="notes">Additional Notes:</label>
        <textarea id="notes" v-model="reservation.notes">
Please add allergies or requests here.</textarea
        >

        <button type="submit">Reserve</button>
      </form>
    </section>

    <section id="about" class="section">
      <h2>About Us</h2>
      <p>
        Welcome to KamalaVegan, where we serve fresh, healthy, and delicious vegetarian dishes made
        with love and care. Join us for a meal that nourishes your body and soul!
      </p>
    </section>

    <section id="contact" class="section">
      <h2>Contact Us</h2>
      <p>Address:</p>
      <p>Phone:</p>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />

        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>

    <footer class="footer">
      <p>&copy; 2025 KamalaVegan - All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      reservation: {
        date: '',
        time: '',
        guests: 1,
      },
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitReservation() {
      alert(
        `Reservation confirmed for ${this.reservation.guests} guests on ${this.reservation.date} at ${this.reservation.time}.`,
      )
      this.reservation.date = ''
      this.reservation.time = ''
      this.reservation.guests = 1
    },
    submitForm() {
      alert(`Thank you, ${this.form.name}! We have received your message.`)
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },
  },
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.header {
  background: #2ecc71;
  color: white;
  padding: 1rem;
  text-align: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-list li {
  margin: 0 1rem;
}

.nav-list a {
  color: white;
  text-decoration: none;
}

.section {
  padding: 2rem;
  text-align: center;
}

form {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

form input,
form textarea,
form button {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

form button {
  background: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background: #27ae60;
}

footer {
  background: #2ecc71;
  color: white;
  text-align: center;
  padding: 1rem 0;
}
</style>
