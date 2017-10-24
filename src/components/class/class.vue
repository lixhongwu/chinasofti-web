<template>
    <div>
        <router-view></router-view>
        <header class="search mui-bar mui-bar-nav">
                <a href="#" class="mui-icon mui-icon-arrowleft"></a>
                <input type="search" placeholder="请输入关键字"/>
                <span class="mui-icon mui-icon-search"></span>
        </header>
       
        <div class="pClass">
           <!--左边-->
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li class="menu-item" v-for="(item,index) in seller" :data-ids="item.ids" @click="selectMenu(index,$event)">
                        {{item.className}}
                    </li>
                  
                </ul>
            </div> 
            <!--右边-->
            <div class="foods-wrapper" ref="foodWrapper">
                <ul>
                    <li class="food-list food-list-hook">
                        <ul>
                            <li v-for="(item,index) in goods">
                                <router-link :to="'/pclass/gclass/'+item.ids">
                                    <img src="../../resource/a.jpg"/>
                                    <br />
                                    <span>{{item.className}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
</template>

<script type="text/javascript">
    import BScroll from 'better-scroll';
   /* import data from '@/common/js/data.json';*/
    export default{
      data(){
        return {
           goods:[]
        }
      },
     props:{
        seller:{
            type:Array
        }
      },
      created:function(){
         this.$nextTick(() => {
                this._initScroll()
            });
         console.log("hx10001");
          console.log(this.seller);
           var than = this;
           this._goodslist(1,than);
      },
      methods:{
        _initScroll() {
               /*左边导航滚动初始化*/
                this.menuScroll = new BScroll(this.$refs.menuWrapper,{
                    click:true
                });
                /*this.foodScroll = new BScroll(this.$refs.foodWrapper,{
                    click:true
                });*/
                $('.menu-wrapper>ul>li:first').addClass('current');
                console.log($('.menu-wrapper>ul>li:first'));
            },
        selectMenu(index,event){
              // if(!event._constructed) {
             //        return;
             //    };
                /*左边的导航*/
                var lis = $('.menu-wrapper>ul>li');
                console.log(lis);
                for(var i=0;i<=lis.length;i++){
                    $(lis[i]).removeClass('current');
                }
                var ev = $(event.target);
                console.log(11);
                var ids = ev.data('ids');
                var num = ev.index();
                console.log(ev.data('ids'));
                ev.addClass('current')
                /*右边的选项卡*/

                var detailli = $('.foods-wrapper>ul>li');
                for(var i=0;i<=detailli.length;i++){
                    $(detailli[i]).css('display','none');
                }
                $(detailli[num]).css('display','block');
                //console.log(li);
                var than = this;
                this._goodslist(ids,than);
        },
        /*根据左边获取到右边的的产品数据*/
        _goodslist(ids,than) {
            console.log('我是ids');
            console.log(ids);
            var url = 'http://192.168.1.109:7903/chinasofti.com/selectGoodsClass';
            axios.get(url, {
　　              params: { 'ids': ids }
            }).then(function (res) {
                   console.log('goods数据');
　　               console.log(res.data);
                    than.goods = res.data;
                   console.log(than.goods);
            }).catch(function (res) {
　　                 alert(res);
           });





        }






      }

    }

</script>

<style type="text/css">
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
    /* pClass */
    /* 左边 */
  .pClass{
    display:flex;
    position:absolute;
    width: 100%;
    top:44px;
    bottom:67px;
    overflow: hidden;
    background-color: #ffffff;
  }
  
  .pClass .menu-wrapper{
    flex: 0 0 100px;
    width: 100px;
    background:#f3f5f7;
  }
    
   .pClass .menu-wrapper .menu-item{
      display: table;
      width:100px;
      height: 54px;
      line-height: 54px;
      padding: 0 12px;
      border-bottom: 1px solid #eee;
    } 
    .current{
        position:relative;
        z-index:10;
        margin-top:-1px;
        background:#fff;
        font-weight:700;
    }
    /* 右边 */
    .foods-wrapper>ul>li{
        display:none;
    }
     .foods-wrapper>ul>li:first-child{
        display:block;
    }
    .foods-wrapper .food-list ul{
        overflow:hidden;
    }
    
    .foods-wrapper .food-list li{
        float: left;
        display:inline-block;
        text-align: center;
        margin:20px 0 0 20px;
    }
     .foods-wrapper .food-list a{
        color: #000;
     }
</style>

