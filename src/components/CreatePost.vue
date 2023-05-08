<script setup lang="ts">

</script>

<template>
    <div class="container is-max-desktop mt-5">
        <h1 class="title">Trade Items in Minecraft Marketplace</h1>

        <div class="container" mt-5>
            <router-link to = "/ItemCategories">
            <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1065/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f">
            <button class="button is-primary is-light has-text-link">Create Listing</button>
            </router-link>
        </div>
        
    </div>
</template>

<style scoped>
button {
  font-family: "Minecraft";
}
.container {
    position:relative;
    width: 100%;
}

.container img {
    width: 100%;
    height: auto;
}

.container .button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%,-50%);
    /* background-color: lightblue; */
    color: green;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

}
</style>