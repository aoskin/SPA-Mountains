import skillAdd from "./skillAdd.vue";


export default {
  title: "skillAdd",
  components: { skillAdd }
};

export const defaultView = () => ({
  components: { skillAdd },

  template: `
    <skillAdd />
  `,

});