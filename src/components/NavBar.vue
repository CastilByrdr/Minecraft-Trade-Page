<script setup lang="ts"></script>

<template>
  <nav class="navbar is-justify-content-center pt-2" role="navigation">
    <img
      id="title"
      src="graphics/HeaderTitle.png"
      alt="Minecraft Marketplace: The online item-trading hub for Minecraft servers!"
      class="center"
    />
  </nav>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div
        class="navbar-burger"
        data-target="navbarExampleTransparentExample"
      ></div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <!-- <div class="navbar-start">
        <a class="navbar-item is-primary"> Home </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a
            class="navbar-link"
            href="https://bulma.io/documentation/overview/start/"
          >
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/overview/start/"
            >
              Overview
            </a>
            <a
              class="navbar-item"
              href="https://bulma.io/documentation/overview/modifiers/"
            >
              Modifiers
            </a>
          </div>
        </div>
      </div> -->

      <div class="navbar-start">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Documentation </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button has-text-black" href="">
                <span class="icon">
                  <i class="fa-solid fa-user-plus"></i>
                </span>
                <span>Register</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" href="">
                <span class="icon">
                  <i class="fa-solid fa-right-to-bracket"></i>
                </span>
                <span>Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgb(105, 172, 235);
}
</style>
