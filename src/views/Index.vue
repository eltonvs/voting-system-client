<template>
  <div class="home">
    <img class="logo" alt="Logo - Tribunal Superior Eleitoral" src="@/assets/logo.png">

    <hr>

    <div class="options-menu">
      <router-link to="/vote" class="button">
        <img src="@/assets/vote.png" alt="">
        <p>Votar</p>
      </router-link>
      <router-link to="/results" class="button">
        <img src="@/assets/info.png" alt="">
        <p>Resultados</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style>
.logo {
  width: 250px;
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid #00000020;
  border-bottom: 1px solid #ffffff40;
  margin: 60px 0;
}

.options-menu {
  display: flex;
  justify-content: center;
}

.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin: 0 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 15px;
  width: 180px;
  color: #206a2b;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  color: #e7a908;
}

.button p {
  flex: 1;
  margin: 0;
  margin-left: 25px;
  font-weight: bold;
}
</style>
