import Vue from "vue";


const thumbs = {
  props: ["works", "currentSlide"],
  template: "#slider-thumbs"

}

const btns = {
  template: "#slider-btns"
}

const preview = {
  props: ["currentSlide", "works", "currentIndex"],
  template: "#slider-preview",
  components: { thumbs, btns },
  computed: {
    reversedSlides() {
      const works = [...this.works];
      return works.slice(0, 3).reverse();
    }
  }
}

const tags = {
  props: ["tags"],
  template: "#slider-tags"
}

const info = {
  props: ["currentSlide"],
  template: "#slider-info",
  components: { tags },
  computed: {
    tagsArray() {
      return this.currentSlide.skills.split(",");
    }
  }

}

new Vue({
  el: "#slider-component",
  template: "#slider-container", 
  components: { preview, info },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },

  computed: {
    currentSlide() {
      return this.works[0];
    }
  },

  watch: {
    currentIndex(value) {
      this.currentIndexInfinite(value);
    }
  },

  methods: {
    currentIndexInfinite(index) {
      const slideNumber = this.works.length - 1;
      if(index < 0) this.currentIndex = slideNumber;
      if(index > slideNumber) this.currentIndex = 0;
    },

    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      });
    },

    changeSlide(directions) {
      const lastItem = this.works[this.works.length - 1];
      switch(directions) {

        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++
          break;
        
        case "prev" :
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--
          break;
        
      }
    }

  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }

})