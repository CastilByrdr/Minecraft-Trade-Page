<script setup lang="ts">
import axios from "axios";
import { users } from "../state/user";

async function getUsers() {
  const res = await axios.get("http://localhost:3000/user");

  users.value = res.data;
}

getUsers();

</script>

<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody v-for="user in users">
            <tr>
              <td>
                <abbr title="id">{{ user.id }}</abbr>
              </td>
              <td>
                <abbr title="username">{{ user.username }}</abbr>
              </td>
              <td>
                <abbr title="email">{{ user.email }}</abbr>
              </td>
              <td>
                <abbr title="isAdmin">{{ user.isAdmin }}</abbr>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
table,
th,
td {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
