<script setup lang="ts">
import { getAllUsers } from "@/service/UserService";
import { users } from "../state/user";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

async function getUsers() {
  const allUsers = await getAllUsers();

  users.value = allUsers;
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
               <td>
                <abbr title="lastActive">{{ formatDistanceToNow(new Date(user.lastActive), { includeSeconds: true, addSuffix: true }) }}</abbr>
              </td>
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
