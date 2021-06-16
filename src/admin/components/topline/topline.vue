<template lang="pug">
  .topline-component
    .container.topline-component__container
      slot
      .topline-component__title {{ title }}
      .topline-component__buttons
        button(type="button").topline-component__btn Выйти
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Панель администрирования"
    },
  }

}
</script>

<style lang="postcss" scoped src="./topline.pcss"></style>