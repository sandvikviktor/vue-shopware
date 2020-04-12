<template>
  <div class="text-center">
    <!-- User inlogged -->
    <ul v-if="userInlogged" class="list-group list-group-flush p-0">
      <li class="list-group-item">
        <router-link to="/manage">
          <div>
            <i class="fas fa-user"></i>
            <div>Mitt konto</div>
          </div>
        </router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/orders">
          <div>
            <i class="fas fa-clipboard-list"></i>
            <div>Mina ordrar</div>
          </div>
        </router-link>
      </li>
      <li class="list-group-item">
        <router-link v-on:click.native="userLogout" to="/login">
          <div>
            <i class="fas fa-sign-out-alt"></i>
            <div>Logga ut</div>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- User not inlogged -->
    <ul v-else class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link to="/register">
          <div>
            <i class="fas fa-user-plus"></i>
            <div>Registrera</div>
          </div>
        </router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/login">
          <div>
            <i class="fas fa-sign-in-alt"></i>
            <div>Logga in</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserDropdown",
  methods: {
    ...mapActions(["userLogout"])
  },
  computed: {
    ...mapGetters(["userInlogged"])
  }
};
</script>

<style scoped>
.list-group-item {
  padding: 0.5em;
}
a {
  font-weight: 500 !important;
}
i {
  font-weight: 500;
  font-size: 1.2rem;
}
a:hover i {
  transition: 0.3s ease;
  transform: scale(1.1);
}
</style>