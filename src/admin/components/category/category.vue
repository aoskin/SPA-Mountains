<template lang="pug">
  card
    edit-line(slot="title" 
    v-model="skillTitle" 
    :editModeDefault="empty"
    @remove="$emit('remove', $event)"
    )
    template(slot="content")
      ul.skills(v-if="empty === false")
        li.item(v-for="skill in skills" :key="skill.id")
          skill(
            :skill="skill"
            @remove="$emit('remove-skill', $event)"
            @approve="$emit('edit-skill', $event)"
            )
      .add-line
        skillAdd(:blocked="empty")
</template>

<script>
import card from "../card";
import editLine from "../editLine";
import skill from "../skill";
import skillAdd from "../skillAdd";

export default {
  components: {
    card,
    editLine,
    skill,
    skillAdd
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: ""
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      skillTitle: this.title
    }
  }

}
</script>

<style lang="postcss">

.add-line {
  padding-top: 70px;
  margin-top: auto;
  padding-left: 25%;
}

</style>