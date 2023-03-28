import { ref } from "vue";

const username = ref("");

export const authState = {
  username,
};

// export const users = ref([
//     { id: 0, username: "mzhunio", email: "mzhunio@a.com", isAdmin: true },
//     { id: 1, username: "rzhunio", email: "rzhunio@a.com", isAdmin: false },
//     { id: 2, username: "kzhunio", email: "kzhunio@a.com", isAdmin: false },
//   ]);