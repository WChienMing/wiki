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
                            <input class="form-control" type="text" placeholder="Search by HV-MTL ID" aria-label="Suche" name="quicksearch" v-model="searchId">
                        </div>
                    </div>
                </div>
                <!-- <div class="topsort" id="sorting">
                    <div class="select-sort">
                        <button @click="searchNFTById">Search</button>
                    </div>
                </div> -->
                <div class="menubox">
                    <div class="filter-btn" id="filter-menu"><span style="float:left; margin-left:14px;" @click="searchNFTById">Search</span></div>
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
                                                 Role
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
                                                Relic
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
                                                 ID
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
                        <div class="list-wrapper" v-if="isLoading">
                            <div id="results" class="row align-items-center mb-3">
                            Loading...
                            </div>
                        </div>
                        <div class="list-wrapper" v-else>
                            <div id="results" class="row align-items-center mb-3">
                                <div class="col-auto"  v-for="nft in nfts" :key="nft.tokenId">
                                    <a :href="'/NftDetails?id=' + nft.tokenId" class="list list-item-relic">
                                        <div class="topside">
                                        <div class="marketprice"> ETH</div>
                                        </div>
                                        <div class="image"><img :src="nft.image" alt="NFT"></div>
                                        <div class="bottomside">
                                        <div class="basics">
                                            <div class="box">
                                            <div class="text">#{{ nft.tokenId }}</div>
                                            </div>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div id="page_links" class="pt-3">
                                <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a href="#" class="page-link" :class="{ disabled: currentPage === 1 || isSearchActive }" @click.prevent="isSearchActive ? null : gotoPage(1)">First</a>
                                    </li>
                                    <li class="page-item" v-if="visiblePages[0] > 1">
                                    <a href="#" class="page-link" :class="{ disabled: isSearchActive }" @click.prevent="isSearchActive ? null : gotoPage(visiblePages[0] - 1)">...</a>
                                    </li>
                                    <li class="page-item" v-for="page in visiblePages" :key="page">
                                    <a href="#" class="page-link" :class="{ active: currentPage === page, disabled: isSearchActive }" @click.prevent="isSearchActive ? null : gotoPage(page)">{{ page }}</a>
                                    </li>
                                    <li class="page-item" v-if="visiblePages[visiblePages.length - 1] < totalPages && !isSearchActive">
                                    <a href="#" class="page-link" :class="{ disabled: isSearchActive }" @click.prevent="isSearchActive ? null : gotoPage(visiblePages[visiblePages.length - 1] + 1)">...</a>
                                    </li>
                                    <li class="page-item">
                                    <a href="#" class="page-link" :class="{ disabled: currentPage === totalPages || isSearchActive }" @click.prevent="isSearchActive ? null : gotoPage(totalPages)">Last</a>
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
  name: 'NftPage',
  components: {
    Header,
  },
  data() {
    return {
      nfts: [],
      currentPage: 1,
      limit: 100,
      totalPages: 0,
      contractAddress: '0x4b15a9c28034dC83db40CD810001427d3BD7163D',
      totalSupply: 27300,
      isLoading: false,
      searchId: '',
      isSearchActive: false,
    };
  },
  computed: {
    visiblePages() {
      if (this.isSearchActive) {
        return [1];
      }
      const start = this.currentPage - 2 < 1 ? 1 : this.currentPage - 2;
      const end = start + 4 > this.totalPages ? this.totalPages : start + 4;
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  },
  methods: {
    fetchNFTs() {
      let startToken = (this.currentPage - 1) * this.limit + 1;

      this.isLoading = true;
      this.nfts = [];

      axios
        .get(`https://eth-mainnet.g.alchemy.com/nft/v2/p5mON-omIMAgLAz82zfHaIymONhonpQ_/getNFTsForCollection?contractAddress=${this.contractAddress}&startToken=${startToken}&limit=${this.limit}&withMetadata=true`)
        .then((response) => {
          const nftsId = response.data.nfts.map(nft => parseInt(nft.id.tokenId, 16));
          const tokenIdsChunks = [];
          while (nftsId.length > 0) {
            tokenIdsChunks.push(nftsId.splice(0, 20));
          }
          const promises = tokenIdsChunks.map(chunk => {
            const tokenIds = chunk.join('&token_ids=');
            return axios.get(`https://api.opensea.io/api/v1/assets?asset_contract_address=${this.contractAddress}&token_ids=${tokenIds}`, {
              headers: {
                'X-API-KEY': '8d6c9ede2a294c6c9e3f23214dbb24d2'
              }
            });
          });

          axios.all(promises)
            .then(axios.spread((...responses) => {
              responses.forEach(response => {
                const assets = response.data.assets;
                this.nfts.push(
                  ...assets.map(asset => ({
                    tokenId: asset.token_id,
                    image: asset.image_url
                  }))
                );
              });
              this.nfts.sort((a, b) => a.tokenId - b.tokenId);
            }))
            .catch((error) => {
              console.error('获取NFT数据时出错：', error);
            });
        })
        .catch((error) => {
          console.error('获取NFT数据时出错：', error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    async searchNFTById() {
      if (this.searchId.trim() === '') {
        this.isSearchActive = false;
        this.fetchNFTs();
        return;
      }

      this.isLoading = true;
      this.isSearchActive = true;
     

      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v1/asset/${this.contractAddress}/${this.searchId}`,
          {
            headers: {
              'X-API-KEY': '8d6c9ede2a294c6c9e3f23214dbb24d2',
            },
          }
        );
        const asset = response.data;
        this.nfts = [];
        this.nfts.push({
          tokenId: asset.token_id,
          image: asset.image_url,
        });
      } catch (error) {
        console.error('搜索NFT时出错：', error);
      } finally {
        this.isLoading = false;
      }
    },
    gotoPage(page) {
      this.currentPage = page;
      this.fetchNFTs();
    },
  },
  mounted() {
    this.fetchNFTs();
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
