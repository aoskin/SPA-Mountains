<template lang="pug">
  .tag-add-component
    app-input(
      title="Добавление тега"
      v-model="currentTags"
      )
    ul.tags
      li.tag(
        v-if="tag.trim()"
        v-for="(tag, index) in tagsArray"
        :key="`${tag}${index}`"
      )
        tag(
          interactive 
          :title="tag"
          @click="removeTag(tag)"
          )
</template>

<script>
import appInput from "../input";
import tag from "../tag";

export default {
  components: {
    appInput, tag
  },
  data() {
    return {
      currentTags: "One, Two, Three"
    }
  },
  computed: {
    tagsArray() {
      return this.currentTags.trim().split(',');
    }
  },
  methods: {
    removeTeg(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);

      if(tagNdx < 0) return;
      
      tags.splice(tagNdx, 1);
      this.currentTags = tags.join(", ");
    }
  }
}
</script>

<style lang="postcss" scoped>

  .tags {
    display: flex;
    margin-top: 20px;
  }

  .tag {
    margin-right: 10px;
  }

</style>