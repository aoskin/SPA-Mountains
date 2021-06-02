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
        disabledClass: '.control-btn--review-disabled',
        initialSlide: 0,
        // loop: true,
        navigation: {
          prevEl: '.control-btn--review-prev',
          nextEl: '.control-btn--review-next'
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
          }
        },
      },
      
    }
  },
  computed: {
    slider() {
      return this.$refs["slider"].$swiper;
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
          if(slider.activeIndex !==0) {
            this.$el.querySelector( '.control-btn--review-prev' ).disabled = false;
          } else {this.$el.querySelector( '.control-btn--review-prev' ).disabled = true;}
          if(slider.activeIndex > 0) {
            this.$el.querySelector( '.control-btn--review-next' ).disabled = false;
          }
        break;
        case "next" :
          slider.slideNext();
          if(slider.isEnd) {
            this.$el.querySelector( '.control-btn--review-next' ).disabled = true;
          } else this.$el.querySelector( '.control-btn--review-next' ).disabled = false;
          if(slider.activeIndex > 0) {
            this.$el.querySelector( '.control-btn--review-prev' ).disabled = false;
          } 
        break;
      }
    },

  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  }

})