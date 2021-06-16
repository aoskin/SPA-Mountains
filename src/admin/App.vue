<template lang="pug">
  .app
    topline(title="Панель администрирования")
      user
    navigation
    .page-content
      .container
        header.page-header
          h1.page-title Блок "Обо мне"
          iconed-button(type="iconed" title="Добавить группу" @click="emptyShow = true" v-if="emptyShow === false")
        ul.skills
          li.item(v-if="emptyShow")
            category(
              empty
              @remove="emptyShow = false"
              )
          li.item(v-for="skill in skills" :key="skill.id")
            category(:title="skill.category" :skills="skill.skills")
</template>

<script>
import topline from "./components/topline";
import user from "./components/user";
import navigation from "./components/navigation";
import button from "./components/button";
import category from "./components/category";

export default {
  components: {
    topline,
    user,
    navigation,
    iconedButton: button,
    category,
  },
  data() {
    return {
      skills: [],
      emptyShow: false
    }
  },

  created() {
    this.skills = require("./data/skills.json")
  }

}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>