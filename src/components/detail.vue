<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <!-- bunbot -->
                <el-carousel>
                  <el-carousel-item v-for="(item,index) in imglist" :key="index">
                    <img :src="item.thumb_path" alt>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <!-- <div class="el-input-number el-input-number--small">
                                                    <span role="button" class="el-input-number__decrease is-disabled">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" class="el-input-number__increase">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                       
                                                        <input autocomplete="off" size="small" type="text" rows="2" max="60" min="1" validateevent="true" class="el-input__inner" role="spinbutton" aria-valuemax="60" aria-valuemin="1" aria-valuenow="1" aria-disabled="false">
                                                    
                                                       
                                                      
                                                    </div>
                        </div>-->

                        <el-input-number
                          v-model="num1"
                          @change="handleChange"
                          :min="1"
                          :max="10"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">60</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click="index=1" :class="{selected:index==1}">商品介绍</a>
                  </li>
                  <li>
                    <a @click="index=2" :class="{selected:index==2}" href="javascript:;">商品评论</a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-content entry"
                v-show="index==1"
                v-html="goodsinfo.content"
                style="display: block;"
              >内容</div>
              <div class="tab-content" v-show="index==2" style="display: block;">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postcomment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="item in commnetlist">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.add_time | globalformattime('YYYY-MM-DDTHH:mm:ss')}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
    
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">
                      <!-- <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>-->

                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageindex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount"
                      ></el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="item in hotgoodslist">
                    <div class="img-box">
                      <router-link :to="'/detail/'+item.id">
                        <!-- <a href="#/site/goodsinfo/90" class=""> -->
                        <img :src="item.img_url">
                        <!-- </a> -->
                      </router-link>
                    </div>
                    <div class="txt-box">
                      <!-- <a href="#/site/goodsinfo/90" class=""> -->
                      <router-link :to="'/detail/'+item.id">
                        {{item.title}}
                        <!-- </a> -->
                      </router-link>
                      <span>{{item.add_time | globalformattime}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "detail",
  data() {
    return {
      goodsinfo: {},
      index: 1,
      hotgoodslist: [],
      num1: 1,
      imglist: [],
      comment: "",
      //页码
      pageindex:1,
      //页容量
      pagesize:10,
      //总条数
      totalcount:0,
      //评论数组
      commnetlist:[]
    };
  },
  methods: {
    getdetail() {
      this.$axios
        .get(
          `http://111.230.232.110:8899/site/goods/getgoodsinfo/${
            this.$route.params.id
          }`
        )
        .then(res => {
          // console.log(res);
          this.goodsinfo = res.data.message.goodsinfo;
          this.hotgoodslist = res.data.message.hotgoodslist;
          this.imglist = res.data.message.imglist;
        });
    },
    handleChange(value) {
      // console.log(value);
    },
    //发送评论
    postcomment() {
      if (this.comment == "") {
        this.$message.error("请输入内容");
      } else {
        this.$axios
          .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
            commenttxt: this.comment
          })
          .then(res => {
            // console.log(res);
            if (res.data.status == 0) {
              this.$message.success(res.data.message);
              this.comment = "";
              this.pageindex=1;
              this.getcomment();

            }
          });
      }
    },
    //获取评论
    getcomment(){
      this.$axios.get(`site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageindex}&pageSize=${this.pagesize}`).then(res=>{
        console.log(res);
        this.totalcount=res.data.totalcount;
        this.commnetlist=res.data.message;
      })
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize=val;
        this.getcomment();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageindex=val;
        this.getcomment();
      }
  },
  created() {
    this.getdetail();
    this.getcomment();
    
  },
  watch: {
    $route(value, oldvalue) {
      // console.log(value, oldvalue);
      this.getdetail();
    }
  }
};
</script>

<style>
.pic-box {
  width: 395px;
  height: 320px;
}

.pic-box .el-carousel {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel .el-carousel__item {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
