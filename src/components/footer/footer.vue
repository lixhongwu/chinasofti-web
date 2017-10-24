<template>
  <div class="footer">
    <ul class="item">
        <li>
            <router-link to="/Main">
                <i class="fa fa-home" aria-hidden="true"></i>
                <div>首页</div>
            </a>
        </router-link>
        <li>
            <router-link to="/pClass">
                <i class="fa fa-qrcode" aria-hidden="true"></i>
                <div>分类</div>
            </router-link>
        </li>
        <li>
            <router-link to="/gClass">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <div>购物车</div>
            </router-link>
        </li>
        <li>
            <a> <router-link to="/user">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <div>个人中心</div>
                </router-link>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>


<style>
@import "./footer.css"
</style>
