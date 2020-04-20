<template>
  <div class="footer">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">
            <a href="#">{{$t("message.home.title")}}</a>
          </router-link>
        </li>
        <li>
          <a @click="changeRouter">{{$t("message.product.title")}}</a>
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
    <div class="contact-content">
      <p class="contact-title">{{$t("message.footer.contactUs")}}</p>
      <p class="contact-number">{{$t("message.contact.companyName")}}</p>
      <p class="contact-number">{{$t("message.footer.address")}}</p>
      <p class="contact-number">{{$t("message.footer.wechat")}}</p>
      <p class="contact-number">{{$t("message.footer.contactPhone1")}}</p>
      <p class="contact-number">{{$t("message.footer.contactPhone2")}}</p>
      <p class="contact-number">{{$t("message.footer.contactEmail")}}</p>
    </div>
    <div class="copyright">
      <div class="copyright-content">
        <p>© {{new Date().getYear()}},www.fuledatech.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeRouter: function() {
      if (this.$route.name == "Products") {
        location.reload();
      } else {
        this.$router.push({ path: "/products/-1" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.footer {
  background-color: rgb(43, 43, 43);
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .menu {
    ul {
      border-bottom: 1px solid #5a5a5a;
      li {
        width: 20%;
        display: inline-block;
        a {
          width: 100%;
          color: white;
          text-decoration: none;
          display: inline-block;
          line-height: 240%;
        }
        &:hover {
          color: white;
          height: 100%;
          background: #3773bd;
        }
      }
    }
  }
  .contact-content {
    .contact-title {
      color: rgb(204, 204, 204);
      line-height: 240%;
      font-size: 16px;
    }
    .contact-number {
      margin: 0;
      line-height: 175%;
      font-size: 14px;
      color: rgb(153, 153, 153);
    }
  }
  .copyright {
    background-color: rgb(34, 34, 34);
    .copyright-content {
      margin: 0;
      padding: 0;
      vertical-align: middle;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 60px;
      color: rgb(153, 153, 153);
    }
  }
}
</style>