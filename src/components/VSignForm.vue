<template>
  <form class="sign-form" novalidate>
    <div class="sign-form__container">
      <header class="container__header">
        <div class="header__title">
          <slot name="header-title"> </slot>
        </div>

        <div class="header__subtitle">
          <slot name="header-subtitle"> </slot>
        </div>
      </header>

      <main class="container__content">
        <slot name="content"> </slot>
      </main>

      <footer class="container__footer">
        <div class="footer__footer-item">
          <div class="footer-item__footer-button">
            <slot name="footer-button"> </slot>
          </div>
        </div>
        <div class="footer__footer-item item_flex">
          <slot name="item-flex"></slot>
        </div>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "VSignForm",
};
</script>

<style lang="scss" scoped>
.sign-form {
  position: relative;

  width: 100vw;
  height: 100vh;
  background: $--background-color-primary;

  .sign-form__container {
    background: $--background-color;
    border-radius: 6px;

    position: absolute;
    width: 407px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(10px 27px 42px $--shadow-color-sign-form);
    box-shadow: 0px 4px 24px $--color-box-shadow;
  }

  .container__header {
    margin: 0px 33px;

    .header__title {
      margin-top: 26px;
      display: block;
      text-align: center;
      font-family: $--font-family;
      font-style: normal;
      font-weight: $--font-weight-bold;
      font-size: $--font-size-title;
      line-height: 29px;
      letter-spacing: -0.428571px;
      color: $--color-primary;
    }

    .header__subtitle {
      margin: 30px 0px 0px;
      font-size: $--font-size-subtitle;
      > h4,
      span,
      p {
        margin: 8px 0px;
      }
    }
  }

  .container__content {
    margin: 24px 33px 0px;
    > :not(:nth-child(1)) {
      margin-top: 17px;
    }
  }

  .container__footer {
    margin: 0px 33px 35px;

    .footer__footer-item {
      margin-top: 14px;

      &.item_flex {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
    }
  }
  hr {
    border: none;
    margin: 40px 0px 0px;
  }
}
</style>
