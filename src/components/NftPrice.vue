<template>
    <div>
        <div class="position-relative">
            <div v-if="$root.isFetching"
                class="position-fixed h-100 w-100 top-0 d-flex align-items-center justify-content-center"
                style="background-color: rgba(0, 0, 0, 0.2); z-index: 9999; top: 0;right: 0;bottom: 0;left: 0;">
                <div class="text-center" style="color:black">Loading...</div>

            </div>
            <div class="d-flex align-items-center main-content py-4">
                <div style="width: 260px;">
                    <img class="d-block mr-auto" src="../assets/logo.png" alt="" width="45%">
                </div>


            </div>
            <div class="d-flex align-items-start" method="get" style="">
                <input type="hidden" name="page" id="currentPage" value="1">
                <div class="w-100 main-content pt-0" id="main-content" style="background: #fff!important;">

                    <div class="row justify-content-center">
                        <div class="results col-md-7 col-12 nft-list nft-item" id="content">
                            <div class="row flex-grow-1 justify-content-start">
                                <!-- <div class="menubox">
                                <div class="filter-btn" id="filter-menu"><span style="float:left; margin-left:10px;">Filter</span></div>
                                </div> --> 
                                <div class="col-12 col-md-1"></div>
                                <div class="col-12 col-md-7 wrapper3">
                                    <div class="searchbar">
                                        <div class="search-form">
                                            <form @submit.prevent="searchNFTById">
                                                <div class="form-group">
                                                    <img src="../assets/icon/search.png">
                                                    <input class="form-control" type="text"
                                                        placeholder="Search by HV-MTL ID" aria-label="Suche"
                                                        name="quicksearch" v-model="searchId">
                                                </div>

                                            </form>
                                        </div>
                                        <!-- <div class="menubox">
                                            <div class="filter-btn" id="filter-menu" @click="searchNFTById"><span
                                            style="float:left; margin:16px;">Search</span></div>
                                        </div> -->
                                    </div>

                                </div>
                            </div>
                            <div class="tab">
                                <a class="tablinks cursor-pointer" :class="{ 'active': selectedTab == 'price' }"
                                    @click="selectedTab = 'price'">Pricelist</a>
                            </div>
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
                                <div id="results" class=" align-items-center mb-3">
                                    <div class="table-header">
                                        <div class="row ">
                                            <div class="col-1 text-center">Rank</div>
                                            <div class="col-2">HV</div>
                                            <div class="col-9" v-if="selectedTab == 'ranking'">Today votes</div>
                                            <div class="col-6" v-else>Season Ranking</div>
                                            <div class="col-3" v-if="selectedTab != 'ranking'">Price</div>
                                        </div>
                                    </div>
                                    <div class="" v-for="nft in selectedNfts[selectedTab]" :key="nft.tokenId">
                                        <a v-on:click="selectedID = nft.tokenId" class=" list list-item-vessel"
                                            :class="{ 'active': selectedID == nft.tokenId }">
                                            <!-- style="height: 235px!important;" -->
                                            <div class="row justify-content-start align-items-center">
                                                <div class="col-1 text-center">
                                                    <div class="pricetop ml-0">{{ nft.s3 }}</div>
                                                </div>
                                                <div class="col-2 d-flex">
                                                    <div class="position-relative" style="height: 42px;width: 42px">
                                                        <div class="image"><img :src="nft.image" alt="NFT"></div>
                                                    </div>
                                                    <div class="">
                                                        <div class="pricetop">#{{ nft.tokenId }}</div>
                                                    </div>

                                                </div>
                                                <div class="col-6 d-flex" v-if="selectedTab != 'ranking'">
                                                    <div class="flex-grow-1"
                                                        style="width: 100%;overflow-x: scroll;white-space: nowrap;">
                                                        <!-- <div class="box-new">
                                                                <div class="text">Score: {{ nft.score }}</div>
                                                            </div> -->
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's1' }">
                                                            <div class="text">S1-{{ nft.s1 }}</div>
                                                        </div>
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's2' }">
                                                            <div class="text">S2-{{ nft.s2 }}</div>
                                                        </div>
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's3' }">
                                                            <div class="text">S3-{{ nft.s3 }}</div>
                                                        </div>
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's4' }">
                                                            <div class="text">S4-{{ nft.s4 }}</div>
                                                        </div>
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's5' }">
                                                            <div class="text">S5-{{ nft.s5 }}</div>
                                                        </div>
                                                        <div class="box-new rank ml-2"
                                                            :class="{ 'active': nft.now === 's6' }">
                                                            <div class="text">S6-{{ nft.s6 }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8 d-flex" v-else>
                                                    <div class="box-new rank ml-2" :class="{ 'active': nft.now === 's1' }">
                                                        <div class="text">{{ nft.score }}</div>
                                                    </div>

                                                </div>
                                                <div class="col-2" v-if="selectedTab != 'ranking'">
                                                    <a :href="getMarketURL(nft)" target="_blank" rel="noopener noreferrer">
                                                        <div class="new-marketprice" v-if="nft.price">
                                                            <img v-if="nft.icon === 'blur.webp'" src="../assets/icon/blur.webp" alt="NFT Image">
                                                            <img v-else-if="nft.icon === 'opensea.webp'" src="../assets/icon/opensea.webp" alt="NFT Image">
                                                            <span>{{ nft.price }} {{ nft.floor_currency }}</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- <div class="col-1" v-if="selectedTab !== 'watchlist'">
                                                    <button @click="saveId(nft.tokenId)" class="ellipse">
                                                        <i class="gg-bookmark" style="color: #0983F1 !important;"></i>
                                                    </button>
                                                </div> -->
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div id="page_links" class="pt-3">
                                    <nav aria-label="Page navigation example" v-if="selectedTab == 'hv'">
                                        <ul class="pagination" :class="{ disabled_pagination: isSearchActive }">
                                            <li class="page-item">
                                                <button @click="loadMoreData" class="page-link">More</button>
                                            </li>
                                        </ul>
                                    </nav>
                                    <nav aria-label="Page navigation example"
                                        v-if="selectedTab == 'price' && this.pricepage !== ''">
                                        <ul class="pagination" :class="{ disabled_pagination: isSearchActive }">
                                            <li class="page-item">
                                                <button @click="loadMorePrice" class="page-link">More</button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-5 col-12 nft-list">
                            <NftDetails :selectedID="selectedID"></NftDetails>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import NftDetails from './NftModules.vue'

export default {
    name: 'NftPage',
    components: {
        NftDetails
    },
    data() {
        return {
            nfts: [],
            selectedNfts: {
                'price': [],
            },
            collectionData: null,
            selectedTab: 'price',

            connection: null,
            socket: null,
            itemID: 0,
            tmpList: [],

 
            isLoading: false,
            searchId: '',
            isSearchActive: false,
            isFiltered: false,
            selectedTraits: [],
            selectedID: null,
            lastTId: null,
            pricepage: '',
        };
    },
    watch: {
        selectedTab() {

        },
        selectedNfts() {
            // this.checkItem();
            console.log('trigger');
        }
    },
    computed: {

    },
    methods: {
        getMarketURL(nft) {
            const id = nft.tokenId;
            if (nft.icon === 'blur.webp') {
                return `https://blur.io/asset/0x4b15a9c28034dc83db40cd810001427d3bd7163d/${id}`;
            } else if (nft.icon === 'opensea.webp') {
                return `https://opensea.io/assets/ethereum/0x4b15a9c28034dc83db40cd810001427d3bd7163d/${id}`;
            } else {
                return '#';
            }
        },
        async fetchNFTsByPriceList() {
            const response = await axios.get(`https://forge.e2app.asia/api/getpricelist?page=${this.pricepage}`);
            const nftsData = response.data.data;
            const meta = response.data.meta;


            if (meta.totalPages != meta.currentPage && meta.totalPages > meta.currentPage){
                this.pricepage = meta.currentPage + 1;
            }else{
                this.pricepage = '';
            }

            if (nftsData.length > 0) {
                nftsData.forEach(nft => {
                    this.selectedNfts["price"].push({
                        tokenId: nft.t_id,
                        image: nft.image,
                        s1: nft.s1,
                        s2: nft.s2,
                        s3: nft.s3,
                        s4: nft.s4,
                        s5: nft.s5,
                        s6: nft.s6,
                        now: nft.current_season,
                        price: nft.price,
                        floor_currency: nft.floor_currency,
                        icon: nft.marketplace_image
                    });
                });
                if (this.selectedNfts[this.selectedTab].length > 0) {
                    this.selectedID = this.selectedNfts[this.selectedTab][0].tokenId;

                }

            }
        },

        async searchNFTById() {

            this.isLoading = true;
            this.isSearchActive = true;
            if (this.searchId == ""){
                this.isSearchActive = false;
            }
            try {
                const response = await axios.get(`https://forge.e2app.asia/api/getpricelist?search=${this.searchId}`);
                const nftsData = response.data.data;

                this.selectedNfts["price"] = [];
                nftsData.forEach(nft => {
                    this.selectedNfts["price"].push({
                        tokenId: nft.t_id,
                        image: nft.image,
                        s1: nft.s1,
                        s2: nft.s2,
                        s3: nft.s3,
                        s4: nft.s4,
                        s5: nft.s5,
                        s6: nft.s6,
                        now: nft.current_season,
                        price: nft.price,
                        floor_currency: nft.floor_currency,
                        icon: nft.marketplace_image
                    });

                });

            } catch (error) {
                console.error('搜索NFT时出错：', error);
            } finally {
                this.isLoading = false;
            }
        },

        async loadMorePrice() {
            // console.log("page", this.pricepage);
            await this.fetchNFTsByPriceList();
        },

    },
    mounted() {
        this.fetchNFTsByPriceList();
    },
};
</script>

<style>
.ellipse {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    width: 36px;
    height: 36px;
    left: 0;
    top: 0;
    background: #EBF2F8;
    border-radius: 50%;
}

.gg-bookmark,
.gg-bookmark::after {
    display: block;
    box-sizing: border-box;
}

.gg-bookmark {
    border: 2px solid;
    border-bottom: 0;
    overflow: hidden;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 20px
}

.gg-bookmark::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    top: 12px;
    left: -1px
}

.disabled_pagination {
    display: none !important;
}

.dropdown-menu {
    min-width: 45rem;
}

.categories-column {
    background-color: #c5c5c5;
    padding: 1rem;
}

.category-link {
    display: block;
    padding-bottom: 4px;
    margin-right: 1rem;
    text-decoration: none;
    color: #212529;
}

.category-link:hover {
    text-decoration: underline;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
    justify-content: center;
}

.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}

.dropdown-menu {
    padding: 0px;
}

.dropdown-item {
    padding: 0.4rem 0rem;
    margin-bottom: 10px;
}

.dropdown-item .media-body p {
    font-weight: 300;
    margin-bottom: 0rem;
}

.navbar .maincolumns {
    padding: 15px 5px 5px;
}

.dropdown,
.dropleft,
.dropright,
.dropup {
    margin-right: 40px;
}

.navbar-brand {
    margin-right: 70px;
    padding-bottom: 0.3125rem;
}

.navbar-brand img {
    width: 40px;
}

.nav-link {
    font-size: 16px;
}

.dropdown-item .media svg {
    width: 30px;
    margin-right: 1rem !important;
    padding-top: 4px;
}

.dropdown-menu {
    border: 0;
}

.dropdown:hover .dropdown-menu {
    border: 1px solid #42454a3b;
}

.navbar {
    padding: 0.5rem 2.5rem 0.5rem;
}

.navbar-dark {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 35px;
    transition: 0.2s ease all;
}

.dropdown-item.active,
.dropdown-item:active {
    color: #000000;
    text-decoration: none;
    background: none;
}

.bg-dark {
    background-color: #1e1f22 !important;
    border-bottom: 1px solid #383b3f;
}

.crypto-status {
    position: absolute;
    right: 15px;
    width: 430px;
    height: auto;
    z-index: 1;
    border-radius: 5px;
    padding: 5px 5px;
}

.crypto-status svg {
    width: 0.7em;
    height: 0.7em;
    margin-top: -4px;
}

.crypto-status .cryptocurrencies {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.crypto-status .cryptocurrencies .cryptocurrency {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
}

.crypto-status .cryptocurrencies .cryptocurrency+.cryptocurrency {
    border-left: 1px solid #383b3f;
}

.crypto-status .cryptocurrencies .cryptocurrency b {
    color: #dddddd;
}

.crypto-status .cryptocurrencies .cryptocurrency b i {
    font-size: 11px;
    vertical-align: middle;
    margin-right: -4px;
}

.crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-up {
    color: limegreen;
}

.crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-down {
    color: red;
}

.crypto-status .cryptocurrencies .cryptocurrency span {
    font-size: 12px;
    color: #999;
}

.svg_color_map svg {
    color: #1500c1
}

.svg_color_wallet svg {
    color: #cd2323
}

.svg_color_kodas svg {
    color: #b7aaff
}

.svg_color_vessels svg {
    color: #2cbd52
}

.svg_color_otherdeeds svg {
    color: #EE4444
}

.svg_color_sales svg {
    color: #6a4a00
}

.svg_color_pricealerts svg {
    color: #127800
}

.svg_color_kodalanguage svg {
    color: #ff6ec5
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
        justify-content: space-between !important;
    }
}

@media (max-width: 992px) {
    .crypto-status {
        display: none;
    }
}

@media (max-width: 767px) {
    .crypto-status {
        display: none;
    }

    .navbar-nav {
        text-align: center;
    }

    .dropdown,
    .dropleft,
    .dropright,
    .dropup {
        margin-right: 0px;
        border-bottom: 1px solid #8d8a8a45 !important;
    }

    .mobile_last {
        border-bottom: none !important;
    }

    .navbar {
        padding: 5px;
    }

    .navbar-dark .navbar-brand {
        padding-left: 20px;
    }

    .navbar-dark .navbar-toggler {
        margin-right: 10px;
        padding: 5px 20px;
    }

    .dropdown-menu {
        min-width: 100%;
    }
}

@media (max-width: 767px) {
    .breadcrumb-wrapper .container-fluid {
        padding-right: 0px;
        padding-left: 0px;
    }

    .main {
        padding-top: 20px !important
    }
}

@media(max-width:414px) {
    .container {
        padding-right: 10px;
        padding-left: 10px;
    }

    .noshowmobile {
        display: none;
    }

    footer {
        padding-bottom: 20px;
    }
}</style>
