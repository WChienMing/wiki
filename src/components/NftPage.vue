<template>
    <div>
        <Header />
        <nav class="breadcrumb-wrapper">
            <div class="container-fluid">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/nft"><span itemprop="name">Main</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="#"><span itemprop="name">Browser</span></a></li>
                    <li class="breadcrumb-item" itemprop="itemListElement"><span itemprop="name">HV-MTL</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>
        <div class="topline">
            <div class="wrapper3">
                <div class="menubox">
                    <div class="filter-btn" id="filter-menu"><span style="float:left; margin-left:10px;">Filter</span></div>
                </div>
                <div class="searchbar">
                    <div class="search-form">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Search by Wallet or Vessel-ID" aria-label="Suche" name="quicksearch" value>
                            <div class="btn"></div>
                        </div>
                    </div>
                </div>
                <div class="topsort" id="sorting">
                    <div class="select-sort">
                        <select name="sortBy" id="sorting">
                            <option value="pricelowtohigh">Price low to high</option>
                            <option value="pricelowtohigh">Price low to high</option>
                            <option value="pricehightolow">Price high to low</option>
                            <option value="idlowtohigh">ID low to high</option>
                            <option value="idhightolow">ID high to low</option>
                            <option value="listingnewtoold">Listing new to old</option>
                            <option value="listingoldtonew">Listing old to new</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-start" method="get">
                <input type="hidden" name="page" id="currentPage" value="1">
                <div class="w-360px sidebar sticky-top">
                    <div class="wrapper center-block">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Status</a></h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                        <div class="checkbox"><label><input type="checkbox" name="show_all" value="All">
                                                <div></div><span>Show All</span>
                                            </label></div><br>
                                        <h5>Option</h5>
                                        <div class="checkbox"><label><input type="checkbox" name="getallids" value="1">
                                                <div></div><span>Export IDs</span>
                                            </label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Price</a></h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body noborder">
                                        <h5>Price Range in ETH</h5>
                                        <div class="filterhalf">
                                            <div><input type="number" value placeholder="Min" class="price_range" name="price_range_downlimit"></div>
                                            <div><input type="number" value placeholder="Max" class="price_range" name="price_range_uplimit"></div>
                                        </div>
                                        <h5>Currency</h5>
                                        <div class="checkbox"><label><input type="checkbox" name="currency[]" value="ETH">
                                                <div></div><span>ETH</span>
                                            </label></div>
                                        <div class="checkbox"><label><input type="checkbox" name="currency[]" value="APE">
                                                <div></div><span>APE</span>
                                            </label></div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="wrapper center-block">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headCat">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#colCat" aria-expanded="false" aria-controls="colCat">
                                                <div class="svgbox"></div> Role
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="colCat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headCat">
                                        <div class="panel-body">
                                            <div class="checkbox"><label><input type="checkbox" name="category[]" value="Enchanter">
                                                    <div></div><span>Enchanter</span>
                                                </label></div><br>
                                            <div class="checkbox"><label><input type="checkbox" name="category[]" value="Farmer">
                                                    <div></div><span>Farmer</span>
                                                </label></div><br>
                                            <div class="checkbox"><label><input type="checkbox" name="category[]" value="Hunter">
                                                    <div></div><span>Hunter</span>
                                                </label></div><br>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headCat">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#colRelic" aria-expanded="false" aria-controls="colRelic">
                                                <div class="svgbox"></div> Relic
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="colRelic" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headCat">
                                        <div class="panel-body">
                                            <div class="checkbox"><label><input type="checkbox" name="relic[]" value="KodaPendant">
                                                    <div></div><span>KodaPendant</span>
                                                </label></div><br>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headLoc">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#colLoc" aria-expanded="false" aria-controls="colLoc">
                                                <div class="svgbox"></div> ID
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="colLoc" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headLoc">
                                        <div class="panel-body">
                                            <h5>Vessel-ID</h5><input type="number" placeholder value class="price_range" name="vesselid">
                                            <h5>ID Range</h5>
                                            <div class="filterhalf">
                                                <div><input type="number" value placeholder="0" class="price_range" name="id_range_downlimit"></div>
                                                <div><input type="number" value placeholder="99999" class="price_range" name="id_range_uplimit"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100" id="main-content">
                    <div class="results" id="content">
                        <div class="results-found">
                            <div class="col-12">
                                <div id="activefilters" class="align-items-left mb-3"></div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div id="allids"></div>
                        </div>
                        <div class="list-wrapper">
                            <div id="results" class="row align-items-center mb-3">
                                <div class="col-auto"  v-for="nft in nfts" :key="nft.token_id">
                                    <a :href="'/NftDetails?id=' + nft.token_id" class="list list-item-relic">
                                        <div class="topside">
                                            <div class="marketprice">{{ nftPrice[nft.token_id] }} ETH</div>
                                        </div>
                                        <div class="image"><img :src="nft.image_url" alt="NFT"></div>
                                        <div class="bottomside">
                                            <div class="basics">
                                                <div class="box">
                                                    <div class="text">#{{ nft.token_id }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <!-- <div id="page_links" class="pt-3">
                                <button @click="gotoPage(currentPage - 1)">上一页</button>
                                <span>当前页：{{ currentPage }}</span>
                                <button @click="gotoPage(currentPage + 1)">下一页</button>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a href="#" data-page="1" class="page-link disabled">Previous</a></li>
                                        <li class="page-item"><a href="#" data-page="1" class="page-link active">1</a></li>
                                        <li class="page-item"><a href="#" data-page="2" class="page-link disabled">Next</a></li>
                                    </ul>
                                </nav>
                            </div> -->
                            <div id="page_links" class="pt-3">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
<<<<<<< Updated upstream
                                            <a href="#" class="page-link" :class="{ disabled: currentPage === 1 }" @click.prevent="gotoPage(1)">首页</a>
                                        </li>
                                        <li class="page-item" v-if="visiblePages[0] > 1">
                                            <a href="#" class="page-link" @click.prevent="gotoPage(visiblePages[0] - 1)">...</a>
                                        </li>
                                        <li class="page-item" v-for="page in visiblePages" :key="page">
                                            <a href="#" class="page-link" :class="{ active: currentPage === page }" @click.prevent="gotoPage(page)">{{ page }}</a>
=======
                                            <a href="#" class="page-link" :class="{ disabled: currentPage === 1 }" @click.prevent="gotoPage(1)">First</a>
                                        </li>
                                        <li class="page-item" v-if="currentPage > 3">
                                            <a href="#" class="page-link" @click.prevent="gotoPage(currentPage - 3)">...</a>
                                        </li>
                                        <li class="page-item" v-for="page in 5" :key="page" v-if="page >= currentPage - 2 && page <= currentPage + 2">
                                            <a href="#" class="page-link" :class="{ active: currentPage === (currentPage - 3 + page) }" @click.prevent="gotoPage(currentPage - 3 + page)">{{ currentPage - 3 + page }}</a>
                                        </li>
                                        <li class="page-item" v-if="currentPage < totalPages - 2">
                                            <a href="#" class="page-link" @click.prevent="gotoPage(currentPage + 3)">...</a>
>>>>>>> Stashed changes
                                        </li>
                                        <li class="page-item" v-if="visiblePages[visiblePages.length - 1] < totalPages">
                                            <a href="#" class="page-link" @click.prevent="gotoPage(visiblePages[visiblePages.length - 1] + 1)">...</a>
                                        </li>
                                        <li class="page-item">
<<<<<<< Updated upstream
                                            <a href="#" class="page-link" :class="{ disabled: currentPage === totalPages }" @click.prevent="gotoPage(totalPages)">末页</a>
=======
                                            <a href="#" class="page-link" :class="{ disabled: currentPage === totalPages }" @click.prevent="gotoPage(totalPages)">Last</a>
>>>>>>> Stashed changes
                                        </li>
                                    </ul>
                                </nav>
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

export default {
  name: 'InfoPage',
  components: {
    Header,
  },
  data() {
    return {
      nfts: [],
      nftPrice: {},
<<<<<<< Updated upstream
      currentPage: 1, // 当前页码
      limit: 100, // 每页的 NFT 数量
=======
      offset: 0, // 当前的偏移量
      limit: 300, // 每页的 NFT 数量
>>>>>>> Stashed changes
      totalPages: 0, // 总页数
      contractAddress: '0x4b15a9c28034dC83db40CD810001427d3BD7163D', // 替换为你的合约地址
      totalSupply: 27376, // 总的供应量
    };
  },
  computed: {
    visiblePages() {
      const start = this.currentPage - 2 < 1 ? 1 : this.currentPage - 2;
      const end = start + 4 > this.totalPages ? this.totalPages : start + 4;
      return Array.from({length: end - start + 1}, (_, i) => start + i);
    }
  },
  methods: {
    fetchNFTs() {
      const apiKey = '8d6c9ede2a294c6c9e3f23214dbb24d2';
      let startId = (this.currentPage - 1) * this.limit + 1;
      let endId = this.currentPage * this.limit;
      let tokenIds = Array.from({length: endId - startId + 1}, (_, i) => startId + i);

<<<<<<< Updated upstream
      // 将 tokenIds 转换为请求参数的形式
      const tokenIdsParams = tokenIds.map(id => `token_ids=${id}`).join('&');

=======
>>>>>>> Stashed changes
      // 获取 NFTs
      axios
        .get(`https://api.opensea.io/api/v1/assets?asset_contract_address=${this.contractAddress}&${tokenIdsParams}`, { headers: { 'X-API-KEY': apiKey } })
        .then((response) => {
          this.nfts = response.data.assets;
        })
        .catch((error) => {
          console.error('获取 NFT 数据时出错:', error);
        });
<<<<<<< Updated upstream
=======

      // 获取 total_supply
      axios
        .get(`https://api.opensea.io/api/v1/collection/${collectionSlug}`)
        .then((response) => {
            console.log(response);
          if (response.data.collection && response.data.collection.stats.total_supply && !isNaN(response.data.collection.stats.total_supply)) {
            this.totalPages = Math.ceil(response.data.collection.stats.total_supply / this.limit);
          } else {
            console.error('Response data stats.total_supply is not a number:', response.data.collection ? response.data.collection.stats.total_supply : 'N/A');
            this.totalPages = 0; // Or a default number
          }
        })
        .catch((error) => {
          console.error('获取 total_supply 时出错:', error);
        });
>>>>>>> Stashed changes
    },
    gotoPage(page) {
      // 更改当前页码并获取新的 NFTs
      this.currentPage = page;
      this.fetchNFTs();
    },
  },
  mounted() {
    // 在组件挂载时获取第一页的 NFTs
    this.fetchNFTs();
    // 计算总页数
    this.totalPages = Math.ceil(this.totalSupply / this.limit);
  },
};
</script>

<style>
.dropdown-menu {min-width: 45rem;}
.categories-column { background-color: #c5c5c5; padding: 1rem; }
.category-link {display: block; padding-bottom: 4px; margin-right: 1rem; text-decoration: none; color: #212529; }
.category-link:hover { text-decoration: underline; }
.row {margin-right: 0px; margin-left: 0px; justify-content: center;}
.navbar-dark .navbar-nav .nav-link { color: #fff;}
.dropdown-menu {padding: 0px;}
.dropdown-item {padding: 0.4rem 0rem;margin-bottom: 10px;}
.dropdown-item .media-body p {font-weight: 300;margin-bottom: 0rem;}
.navbar .maincolumns {padding: 15px 5px 5px;}
.dropdown, .dropleft, .dropright, .dropup {margin-right: 40px;}
.navbar-brand {margin-right: 70px;padding-bottom: 0.3125rem;}
.navbar-brand img{width: 40px;}
.nav-link { font-size: 16px;}
.dropdown-item .media svg{width:30px;margin-right: 1rem!important; padding-top: 4px;}
.dropdown-menu {border: 0;}
.dropdown:hover .dropdown-menu {border: 1px solid #42454a3b;}
.navbar {padding: 0.5rem 2.5rem 0.5rem;}
.navbar-dark{ box-shadow: rgba(0,0,0,0.05) 0px 10px 35px; transition: 0.2s ease all;}
.dropdown-item.active, .dropdown-item:active { color: #000000; text-decoration: none; background: none;}
.bg-dark { background-color: #1e1f22!important; border-bottom: 1px solid #383b3f;}
.crypto-status { position: absolute; right: 15px;width: 430px; height: auto; z-index: 1; border-radius: 5px; padding: 5px 5px;}
.crypto-status svg {width: 0.7em; height: 0.7em; margin-top: -4px;}
.crypto-status .cryptocurrencies { display: flex; flex-direction: row; justify-content: space-between; width: 100%;}
.crypto-status .cryptocurrencies .cryptocurrency { display: flex; flex-direction: column; width: 20%; text-align: center;}
.crypto-status .cryptocurrencies .cryptocurrency + .cryptocurrency { border-left: 1px solid #383b3f;}
.crypto-status .cryptocurrencies .cryptocurrency b { color: #dddddd;}
.crypto-status .cryptocurrencies .cryptocurrency b i { font-size: 11px; vertical-align: middle; margin-right: -4px;}
.crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-up { color: limegreen;}
.crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-down { color: red;}
.crypto-status .cryptocurrencies .cryptocurrency span { font-size: 12px; color: #999;}
.svg_color_map svg {color: #1500c1}
.svg_color_wallet svg {color: #cd2323}
.svg_color_kodas svg {color: #b7aaff}
.svg_color_vessels svg {color: #2cbd52}
.svg_color_otherdeeds svg {color: #EE4444}
.svg_color_sales svg {color: #6a4a00}
.svg_color_pricealerts svg {color: #127800}
.svg_color_kodalanguage svg {color: #ff6ec5}
@media (min-width: 992px) {
.navbar-expand-lg .navbar-collapse { justify-content: space-between!important;}
}
@media (max-width: 992px) {
.crypto-status { display: none; }
}
@media (max-width: 767px) {
.crypto-status { display: none; }
.navbar-nav {text-align: center;}
.dropdown, .dropleft, .dropright, .dropup { margin-right: 0px; border-bottom: 1px solid #8d8a8a45!important;}
.mobile_last {border-bottom:none!important;}
.navbar {padding:5px;}
.navbar-dark .navbar-brand { padding-left: 20px;}
.navbar-dark .navbar-toggler { margin-right: 10px; padding: 5px 20px;}
.dropdown-menu { min-width: 100%;}
}
@media (max-width: 767px) {
.breadcrumb-wrapper .container-fluid {padding-right:0px; padding-left:0px;}
.main {padding-top:20px!important}
}
@media(max-width:414px){
.container {
padding-right: 10px;
padding-left: 10px;
}
.noshowmobile {
display:none;
}
footer {
padding-bottom:20px;
}
}
</style>
