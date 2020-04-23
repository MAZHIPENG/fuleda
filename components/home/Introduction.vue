<template>
  <div class="introduct">
    <div class="title">
      <p>{{$t("message.home.introduction.aboutUs")}}</p>
    </div>
    <div class="introduction">
      <div class="introduction-content">
        <div class="introduction-title">
          <p>{{$t("message.home.introduction.companyIntr")}}</p>
        </div>
        <div class="introduction-text">
          <p>{{$t("message.home.introduction.intrContent[0].text")}}</p>
          <p>{{$t("message.home.introduction.intrContent[1].text")}}</p>
          <p>{{$t("message.home.introduction.intrContent[2].text")}}</p>
        </div>
      </div>
      <div class="introduction-img">
        <img src="@/assets/image/home/company.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.introduct {
  background-color: #f6f6f6;
  .title p {
    color: #3773dc;
    font-size: 30px;
    text-align: center;
  }
  .introduction {
    max-width: 1000px;
    line-height: 16.79px;
    display: flex;
    text-align: left;
    margin: 0 auto;
    .introduction-content {
      width: 45%;
      padding: 10px;
      padding: 5%;
      .introduction-title {
        color: rgb(67, 67, 67);
        line-height: 42px;
        font-size: 30px;
      }
      .introduction-text {
        color: rgb(102, 102, 102);
        line-height: 200%;
        font-size: 16px;
      }
    }
    .introduction-img {
      width: 50%;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
@media (max-width:1200px) {
  .introduct {
    padding: 20px;
    .introduction {
      .introduction-img img {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media(max-width:1000px) {
  .introduct {
    .introduction {
      display: block;
      .introduction-content {
        width: 100%;
      }
      .introduction-img {
        width: 100%;
        height: 500px;
        img {
          width: 70%;
          height: auto;
        }
      }
    }
  }
}
</style>