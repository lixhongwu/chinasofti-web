<template>
  <div>
      <div class="food">
    <header class="search mui-bar mui-bar-nav">
        <a href="#" class="mui-icon mui-icon-arrowleft"></a>
        <input type="search" placeholder="请输入关键字"/>
        <span class="mui-icon mui-icon-search"></span>
    </header>
    <div class="gClass">
        <ul class="searchlist-normal">
            <li class="normal-list" v-for="(item,index) in goodslist">
                <router-link :to="'/pClass/gClass/details/'+item.goodsCode">
                    <div class="pro-img">
                       <img src="../../resource/a1.jpg"/>
                    </div>
                    <div class="product-info-box">
                        <div class="product-name">               
                            <span>{{item.title}}</span>           
                        </div>
                        <div class="gray-icon"></div>            
                        <div class="product-price-m">           
                            <em>
                                ¥<span class="big-price">{{item.price}}</span>
                            </em>            
                        </div>           
                    </div>
                </router-link>  
            </li>
        </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            goodslist:[]
        }
    },
    created(){
        var ids = this.$route.params.num
        console.log('我是路由参数');
        console.log(ids);
        var than = this;
        this._initGoods(ids,than);


    },
    methods:{
        _initGoods(ids,than){
            console.log('我是二级数据');
            console.log(ids);
            var url = 'http://192.168.1.109:7903/chinasofti.com/selectGoodsByClassId';
            axios.get(url, {
　　              params: { 'ids': ids }
            }).then(function (res) {
                   console.log('goods数据');
　　               console.log(res.data);
                    than.goodslist = res.data;
                   console.log(than.goodslist);
            }).catch(function (res) {
　　                 alert(res);
           });
        }
    }
  
}
</script>


<style>
.food{
   position: fixed;
  left: 0;
  top: 0;
  bottom: 68px;
  z-index: 30;
  width: 100%;
  background: #ffffff;
}

/* header */
    .search{
        width:100%;
        height:44px;
        background-color:#000;
        color:#fff;
        display:flex;
    }
    .search a{
         line-height:29px;
         color:#fff;
    }
     .search input{
        flex:1;
        color:#fff;
    }
    .search .mui-icon-search{
        line-height:29px;
    }
    /* gClass */
    .gClass{
        margin-top:44px;
        background-color: #fff;

    }
     .gClass .searchlist-normal li a{
        display:flex;
     }
    .gClass .searchlist-normal .pro-img{
        flex:0 0 100px;
        height: 100px;
        width: 100px;
        margin-left: 10px;
        overflow: hidden;
        text-align: center;
    }
    .gClass .pro-img img{
        width: auto;
        max-width: 100px;
        height: 100px;
    }
    .gClass .searchlist-normal .product-info-box{
         flex:1;
         padding-top:10px;
         padding-left:10px;
         color:#000;
    }
    .searchlist-normal .normal-list a .product-info-box .gray-icon {
    height: 25px;
    margin: 0px;
    overflow: hidden;
    line-height: 25px;
}
 .searchlist-normal .normal-list a .product-info-box .product-price-m {
    height: 20px;
    overflow: hidden;
   /*  width: 100%;
   line-height: 20px;
   margin-right: 10px; */
    color:red;
}
</style>
