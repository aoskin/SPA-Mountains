import tagAdd from "./tagAdd.vue";

export default {
  title: "tagAdd",
  components: {tagAdd}
}

export const defaultView = () => ({
  components: { tagAdd },
  data() {
    return {

    }
  },
  template: `
    <tagAdd  />
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};
