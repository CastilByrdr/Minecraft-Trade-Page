<script setup lang="ts">
import { deleteUser, getAllUsers, reloadUsers } from "@/service/UserService";
import { formatDistanceToNow } from "date-fns";
import { users } from "../state/user";

async function getUsers() {
  const allUsers = await getAllUsers();

  users.value = allUsers;
}

getUsers();

async function onDeleteUserClicked(userId: number) {
  await deleteUser(userId);
  await reloadUsers();
}
</script>

<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Image</th>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Last Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="user in users">
            <tr>
              <td>
                <figure>
                  <img
                    :src="user.imagePath"
                    style="width: 70px; height: 70px"
                  />
                </figure>
              </td>
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
                <abbr title="lastActive">{{
                  formatDistanceToNow(new Date(user.lastActive), {
                    includeSeconds: true,
                    addSuffix: true,
                  })
                }}</abbr>
              </td>
              <th>
                <abbr title="Played">
                  <button class="button" @click="onDeleteUserClicked(user.id)">
                    <i class="fas fa-trash"></i>
                  </button>
                </abbr>
              </th>
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
