<template>
  <div>
    <Header />
    <div class="index_splash">
      <div class="container">
        <swiper
          class="swiper"
          :modules="modules"
          :space-between="30"
          :slides-per-view="3"
          :pagination="{ clickable: true }"
        >
          <swiper-slide class="slide">Slide 1</swiper-slide>
          <swiper-slide class="slide">Slide 2</swiper-slide>
          <swiper-slide class="slide">Slide 3</swiper-slide>
          <swiper-slide class="slide">Slide 4</swiper-slide>
          <swiper-slide class="slide">Slide 5</swiper-slide>
          <swiper-slide class="slide">Slide 6</swiper-slide>
          <swiper-slide class="slide">Slide 7</swiper-slide>
          <swiper-slide class="slide">Slide 8</swiper-slide>
        </swiper>
        <div class="row align-items-start">
          <div class="col-md-7">
            <h1>HV-MTL-WIKI</h1>
            <h2>Your Key to the HV-MTL Metaverse</h2>
            <p>The HV-MTL (Heavy Metal) collection is made up of 30,000 Mechs derived from 8 different Power Source types.
              Beginning March 15, 2023, eligible Sewer Passes can be burned to summon a Power Source that will reveal an
              Evo 1 Mech. Evo 1 holders can participate in future minigame sets with their Evo 1s to unlock additional
              HV-MTL evolution stages. Holders of HV-MTLs are subject to the HV-MTL License Agreement available at <a
                href="https://hv-mtl.com/hvmtl-license-agreement" target="_blank"
                rel="noopener">https://hv-mtl.com/hvmtl-license-agreement.</a></p>
            <!-- <div class="teaser">
                        <a href="./otherdeed">Discover Otherside</a>
                        <a href=",/tool/wallet-inventory">My Inventory</a>
                    </div> -->
          </div>
          <div class="col-md-3 ml-auto index-tools">
            <!-- <h2>Video</h2> -->
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RrFdF5a4wdk"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-4 ml-auto lastsales">
            <h2>Latest Sales</h2>
            <div v-if="latestSales.length > 0">
              <div v-for="sale in latestSales" :key="sale.asset.token_id" class="saleitems">
                <a :href="'NftDetails?id=' + sale.asset.token_id">
                  <div class="image">
                    <img style="width: 63px;" :src="sale.asset.image_thumbnail_url" />
                  </div>
                  <div class="noresources">
                    <div>
                      <div class="box">#{{ sale.asset.token_id }}</div>
                    </div>
                    <div style="float: left;"></div>
                  </div>
                  <div class="price">
                    <img :src="sale.payment_token.image_url" alt="Ether" title="Ether" />
                    {{ (sale.total_price / (10 ** sale.payment_token.decimals)).toFixed(2) }}
                  </div>
                  <div class="date">{{ formatDate(sale.event_timestamp) }}</div>
                </a>
              </div>
            </div>

            <!-- <a class="saleitemsbox" href="./tool/sale-browser">See all Sales</a> -->
            <!-- <a class="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/HVMTLS?ref_src=twsrc%5Etfw">Tweets by HVMTLS</a> -->
          </div>
          <div class="col-md-4 col-xl-4 ml-auto lastsales">
            <h2>Top5 Sales within 24H</h2>
            <div v-if="top5.length > 0">
              <div v-for="sale in top5" :key="sale.asset.token_id" class="saleitems">
                <a :href="'NftDetails?id=' + sale.asset.token_id">
                  <div class="image">
                    <img style="width: 63px;" :src="sale.asset.image_thumbnail_url" />
                  </div>
                  <div class="noresources" style="display: block!important;">
                    <div>
                      <div class="box">#{{ sale.asset.token_id }}</div>
                    </div>
                    <div style="float: left;"></div>
                  </div>
                  <div class="price">
                    <img :src="sale.payment_token.image_url" alt="Ether" title="Ether" />
                    {{ (sale.total_price / (10 ** sale.payment_token.decimals)).toFixed(2) }}
                  </div>
                  <div class="date">{{ formatDate(sale.event_timestamp) }}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xl-4 ml-auto lastsales">
            <NftRank></NftRank>
          </div>
          <div class="col-md-12 col-xl-12 index">
            <div class="newsfeed">
              <h2>Latest News</h2>
              <div class="news">
                <h4>PREPARING LAUNCH</h4>
                <!-- <div class="date">2023-05-30</div> -->
                <p class="newscontent">
                  Undisturbed for centuries, HV-MTL have been summoned abruptly through a rift in space-time (and if they
                  knew how much it had to do with Jimmys atomic shit, theyd be impressed).Gary is convinced theres a
                  cosmic battle on the horizon and needs every HV (pronounced Heavy) to evolve into its final form before
                  its too late. But are the HVs new friends — or is there reason to be wary?
                </p>
                <div class="teaser">
                  <a href="https://mdvmm.xyz/">FOLLOW THE STORY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/HeaderSection.vue';
import { OPENSEA_API_KEY, HV_MTL } from '../main.js';
import NftRank from './NftRank.vue'


// import { defineComponent } from 'vue'
  import { Pagination } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
export default {
  name: 'MainPage',
  components: {
    Header,
    NftRank,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      latestSales: [],
      top5: [],
    };
  },
  setup() {

    return {
      modules: [Pagination]
    }
    
  },
  methods: {
    async getLatestSales() {
      try {
        const response = await axios.get(`https://api.opensea.io/api/v1/events`, {
          params: {
            asset_contract_address: HV_MTL,
            event_type: 'successful',
            limit: '5',
          },
          headers: {
            'X-API-KEY': OPENSEA_API_KEY,
          },
        });
        this.latestSales = response.data.asset_events;
      } catch (error) {
        console.error('Error fetching latest sales:', error);
      }
    },

    async getTop5SalesWithin24H() {
      try {

        const oneDayAgo = (Date.now() / 1000) - 24 * 60 * 60;

        const response = await axios.get('https://api.opensea.io/api/v1/events', {
          params: {
            asset_contract_address: HV_MTL,
            event_type: 'successful',
            occurred_after: oneDayAgo,
            limit: 100,
          },
          headers: {
            'X-API-KEY': OPENSEA_API_KEY,
          },
        });

        const sales = response.data.asset_events;

        sales.sort((a, b) => parseFloat(b.total_price) - parseFloat(a.total_price));


        const top5Sales = sales.slice(0, 5);
        console.log(top5Sales);

        this.top5 = top5Sales;
      } catch (error) {
        console.error('获取销售数据时出错:', error);
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString + 'Z'); // 添加'Z'来指定日期为UTC时间
      const timeElapsed = Date.now() - date.getTime();
      const minutesElapsed = Math.floor(timeElapsed / (1000 * 60));

      if (minutesElapsed < 60) {
        return `${minutesElapsed} minutes ago`;
      } else {
        const hoursElapsed = Math.floor(minutesElapsed / 60);
        return `${hoursElapsed} hours ago`;
      }
    }
  },
  mounted() {
    this.getLatestSales();
    this.getTop5SalesWithin24H();

    let script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('async', 'true');
    document.head.appendChild(script);
  },
};
</script>

<style>
</style>
