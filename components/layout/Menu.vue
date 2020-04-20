<template>
  <div class="header">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">
            <a href="#">{{$t("message.home.title")}}</a>
          </router-link>
        </li>
        <li class="change">
          <a @click="changeRouter" class="change-btn">{{$t("message.product.title")}}</a>
          <div class="change-category">
            <router-link to="/products/0">
              <a href="#">{{$t("message.product.category[0].title")}}</a>
            </router-link>
            <router-link to="/products/1">
              <a href="#">{{$t("message.product.category[1].title")}}</a>
            </router-link>
            <router-link to="/products/2">
              <a href="#">{{$t("message.product.category[2].title")}}</a>
            </router-link>
          </div>
        </li>
        <li>
          <router-link to="/news">
            <a href="#news">{{$t("message.news.title")}}</a>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <a href="#contact">{{$t("message.contact.title")}}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeRouter: function() {
      console.log(this.$route.name);
      if (this.$route.name == "Products") {
       location.reload();
      } else {
        this.$router.push({ path: "/products" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: rgb(34, 34, 34);
  // position: fixed;
  // width: 100%;
  // top: 0;
  // z-index: 999;
  .menu {
    padding: 0 160px;
    text-align: center;
    ul {
      margin: 0;
      li {
        display: inline-block;
        position: relative;
        line-height: 80px;
        height: 80px;
        width: 20%;
        font-size: 20px;
        &:hover {
          color: white;
          height: 100%;
          background: #3773bd;
        }
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: white;
          text-decoration: none;
        }
      }
      .change {
        .change-category {
          z-index: 998;
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          width: 100%;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          a {
            font-size: 16px;
            color: black;
            width: 100%;
            text-decoration: none;
            display: block;
          }
          a:hover {
            background-color: #f1f1f1;
          }
        }
      }
      .change:hover {
        background-color: #3773bd;
        .change-category {
          display: block;
        }
      }
    }
  }
}
</style>