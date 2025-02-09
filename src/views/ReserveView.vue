<template>
  <div id="app">
    <div class="overlay">
      <section id="reserve" class="section">
        <h2>Reserve a Table</h2>
        <form @submit.prevent="submitReservation">
          <label for="date">Select a Date:</label>
          <input type="date" id="date" v-model="reservation.date" required />

          <label for="time">Select Time:</label>
          <input list="timeOptions" id="time" v-model="reservation.time" required />
          <datalist id="timeOptions">
            <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
          </datalist>

          <label for="name">Name:</label>
          <input type="text" id="name" v-model="reservation.name" required />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" v-model="reservation.phone" required />

          <label for="email">Email Address:</label>
          <input type="email" id="email" v-model="reservation.email" required />

          <label for="guests">Number of Guests:</label>
          <input type="number" id="guests" v-model="reservation.guests" min="1" required />

          <label for="notes">Additional Notes:</label>
          <textarea id="notes" v-model="reservation.notes">
      Please add allergies or requests here.</textarea
          >

          <button type="submit">Reserve</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  data() {
    return {
      reservation: {
        date: '',
        time: '',
        guests: 1,
      },
      selectedTime: ref(null),
      timeOptions: computed(() => {
        let times = []
        let hour = 12
        let minute = 30

        while (hour < 22 || (hour === 21 && minute < 30)) {
          let formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
          times.push(formattedTime)

          minute += 30
          if (minute === 60) {
            minute = 0
            hour++
          }
        }

        return times
      }),
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
</style>
