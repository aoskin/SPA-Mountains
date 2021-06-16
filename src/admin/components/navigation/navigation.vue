<template lang="pug">
  nav.navigation-component
    .container
      ul.navigation-component__list
        li(
          :class="['navigation-component__item', {active: item.active}]"
          v-for="item in links" :key="item.id"
          )
          a(href="`/${item.alias}`").navigation-component__link {{item.title}}
</template>

<script>
const links = [
  {id: 0, title: "Обо мне", alias: "about", active: true},
  {id: 1, title: "Работы", alias: "works", active: false},
  {id: 2, title: "Отзывы", alias: "reviews", active: false},
];
export default {

data() {
  return {
    links
  }
}

}
</script>

<style lang="postcss" scoped src="./navigation.pcss"></style>