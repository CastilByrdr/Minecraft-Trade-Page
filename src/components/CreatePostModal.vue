<script setup lang="ts">
import router from "@/router";
import {
  categoryItems,
  closeModal,
  mustShowModal,
} from "@/service/CreatePostModalService";

function onCreatePostClicked() {
  closeModal();
  router.push({ path: "/profile/list" });
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': mustShowModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Post</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field mt-5">
          <label class="food m-4" for="item-selected"
            >List of all food Items</label
          >
          <div class="select is-full-width">
            <select class="form-control" id="type">
              <option
                v-for="categoryItem of categoryItems"
                :value="categoryItem.id"
              >
                {{ categoryItem.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label" for="is-available">Is the item available?</label>
          <input type="text" class="input" id="is-available" />
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-success is-primary"
          @click.prevent="onCreatePostClicked()"
        >
          Save
        </button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-card-head {
  background-color: rgb(144, 244, 180);
}
.modal-card-body {
  background-color: rgb(224, 244, 228);
}
</style>
