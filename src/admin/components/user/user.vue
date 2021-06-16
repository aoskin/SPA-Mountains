<template lang="pug">
  .user-component
    avatar(size="2.8" :src="userImg")
    .user-component__name Андрей Оськин
</template>

<script>
import avatar from "../avatar";

export default {
  components: {
    avatar
  },
  computed: {
    userImg() {
      return require("../../../images/content/user.jpg").default
    }
  }

}
</script>

<style lang="postcss">
  .user-component {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    align-items: center;
    color: #fff;

    &__name {
      margin-left: 18px;
    }
  }
</style>