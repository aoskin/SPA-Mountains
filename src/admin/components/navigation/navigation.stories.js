import navigation from "./navigation.vue";


export default {
  title: "navigation",
  components: { navigation }
};

export const defaultView = () => ({
  components: { navigation },
  template: `
    <navigation />
  `,
});