<template>
  <div class="home">
    <Swiper></Swiper>
    <Introduction></Introduction>
    <Project></Project>
  </div>
</template>

<script>
import Swiper from "@/components/home/Swiper";
import Introduction from "@/components/home/Introduction";
import Project from "@/components/home/Project";
export default {
  name: "Home",
  components: {
    Swiper,
    Introduction,
    Project
  },
  // mounted() {
  //   window.addEventListener("scroll", this.scrollToTop);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.scrollToTop);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  padding-bottom: 6px;
}
li {
  display: inline-block;
}
a {
  color: white;
  text-decoration: none;
}
</style>
