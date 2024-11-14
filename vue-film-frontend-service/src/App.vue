<template>
  <div id="app">
    <h1>Film List</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="film in films" :key="film.id">
          <td>{{ film.id }}</td>
          <td>{{ film.title }}</td>
          <td>{{ film.genre }}</td>
          <td>{{ film.rating }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      films: [],
    };
  },
  created() {
    this.fetchFilms();
  },
  methods: {
    async fetchFilms() {
      try {
        const response = await axios.get('http://localhost:5000/film-list');
        this.films = response.data;
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
