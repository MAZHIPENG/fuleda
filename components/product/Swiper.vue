<template>
  <div class="scroll">
    <!-- <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="banner-img-box">
          <img class="banner-img" src="@/assets/image/product/product-01.jpg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner-img-box">
          <img class="banner-img" src="@/assets/image/product/product-02.jpg" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper> -->
    <!-- <a-carousel autoplay="true" effect="fade">
      <div class="swiper-slide">
        <img class="banner-img" :src="imgUrls[0]" />
      </div>
      <div class="swiper-slide">
        <img class="banner-img" :src="imgUrls[1]" />
      </div>
    </a-carousel> -->
    <el-carousel class="banner-img-box"> 
      <el-carousel-item>
        <img class="banner-img" src="@/assets/image/product/product-01.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img class="banner-img" src="@/assets/image/product/product-02.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 设置轮播
        effect: "fade",
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
          }
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperSlides: [1, 2, 3, 4]
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // this.swiper.slideTo(0, 0, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.banner-img-box{
  height: 400px;
}
.banner-img{
  width: 100%;
  height: 100%;
}
.swiper-slide {
  height: 300px;
  position: relative;
  width: 100%;
  img {
    position: relative;
    width: 100%;
    height: 300px;
    content: "";
    display: block;
    z-index: 10;
  }
}
</style>