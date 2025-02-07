<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
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
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background: #27ae60;
}
</style>
