import Vue from "vue";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";



new Vue({
  el: "#review-component",
  template: "#review-slider", 
  components: { Swiper, SwiperSlide },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 1,
        breakpoints: {
          480: {
            slidesPerView: 2,
          }
        }
      },
      
    }
  },

  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      });
    }, 
    slide(directions) {
      const slider = this.$refs["slider"].$swiper
      switch(directions) {
        case "prev" :
          slider.slidePrev();
        break;
        case "next" :
          slider.slideNext();
        break;
      }
    }


  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  }

})