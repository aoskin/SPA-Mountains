<template lang="pug">
  .skill-component(v-if="editMode === false")
    h3.skill-component__title {{skill.title}}
    .skill-component__percent {{skill.percent}} %
    .skill-component__buttons
      icon(symbol="pencil" @click="editMode = true" grayscale).skill-component__btn
      icon(symbol="trash" grayscale @click="$emit('remove', skill.id)").skill-component__btn
  .skill-component(v-else)
    h3.skill-component__title 
      app-input(noSidePaddings v-model="currentSkill.title")
    .skill-component__percent 
      app-input(v-model="currentSkill.percent" type="number" min="0" max="100" maxlength="3" )
    .skill-component__buttons
      icon(symbol="tick" @click="$emit('approve', currentSkill)").skill-component__btn
      icon(symbol="cross" @click="editMode = false").skill-component__btn
</template>

<script>
import input from "../input";
import icon from "../icon";

export default {
props: {
  skill: {
    type: Object,
    default: () => {},
    required: true
  }
},

  data() {
    return {
      editMode: false,
      currentSkill: {
        id: 0,
        title: this.skill.title,
        percent: this.skill.percent
      }
    }
  },
  components: {
    icon,
    appInput: input,
  }

}
</script>

<style lang="postcss" src="./skill.pcss">

</style>