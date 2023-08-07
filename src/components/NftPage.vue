<template>
    <div>
        <Header />
        <nav class="breadcrumb-wrapper">
            <div class="container-fluid">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/"><span itemprop="name">Main</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/nft"><span itemprop="name">Browser</span></a></li>
                    <li class="breadcrumb-item" itemprop="itemListElement"><span itemprop="name">HV-MTL</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </nav>
        <div class="topline">
            <div class="wrapper3">
                <!-- <div class="menubox">
                    <div class="filter-btn" id="filter-menu"><span style="float:left; margin-left:10px;">Filter</span></div>
                </div> -->
                <div class="searchbar">
                    <div class="search-form">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Search by HV-MTL ID" aria-label="Suche" name="quicksearch" v-model="searchId">
                        </div>
                    </div>
                </div>
                <div class="menubox">
                    <div class="filter-btn" id="filter-menu" @click="searchNFTById"><span style="float:left; margin-left:14px;">Search</span></div>
                </div>
            </div>
            <div class="d-flex align-items-start" method="get">
                <input type="hidden" name="page" id="currentPage" value="1">
                <div class="w-360px sidebar sticky-top">
                    <div class="wrapper center-block">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <!-- <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Price</a></h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class=" noborder">
                                        <h5>Price Range in ETH</h5>
                                        <div class="filterhalf">
                                            <div><input type="number" value placeholder="Min" class="price_range" name="price_range_downlimit"></div>
                                            <div><input type="number" value placeholder="Max" class="price_range" name="price_range_uplimit"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr> -->
                            <div class="wrapper center-block">
                                <div class="panel panel-default">
                                    <h4 class="panel-title">
                                        <a class="collapsed">
                                            Traits
                                        </a>
                                    </h4>
                                    <div v-if="collectionData">
                                        <div v-for="(traitValues, traitName) in collectionData.traits" :key="traitName">
                                            <div class="panel-heading" role="tab" :id="'head' + removeSpaces(traitName)">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" role="button" data-toggle="collapse" :href="'#col' + removeSpaces(traitName)" aria-expanded="false" :aria-controls="'col' + removeSpaces(traitName)">
                                                        {{ traitName }}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div :id="'col' + removeSpaces(traitName)" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="'head' + removeSpaces(traitName)">
                                                <div class="panel-body">
                                                    <div v-for="(value, key) in traitValues" :key="key">
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" :value="key" @change="handleCheckboxChange">
                                                                <div></div>
                                                                <span>{{ key }}</span>
                                                            </label>
                                                        </div>
                                                        <br>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="panel panel-default">
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
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100" id="main-content" style="background: #1c1d20!important; padding: 0px!important;">
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
                                    <a :href="'/NftDetails?id=' + nft.tokenId" class="list list-item-vessel" style="height: 235px!important;">
                                        <div class="topside">
                                            <div class="pricetop">#{{ nft.tokenId }}</div>
                                            <div class="marketprice" v-html="nft.price"></div>
                                        </div>
                                        <div class="image"><img :src="nft.image" alt="NFT"></div>
                                        <div class="bottomside">
                                        <div class="basics">
                                            <div class="box"><div class="text">Rank: {{ nft.rank }}</div></div>
                                            <div class="box"><div class="text">Score: {{ nft.score }}</div></div>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div id="page_links" class="pt-3" v-if="!isFiltered">
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
                            <!-- <div id="page_links" class="pt-3" v-if="isFiltered">
                                <nav aria-label="Page navigation example">
                                <ul class="pagination" style="justify-content: right!important;">
                                    <li class="page-item">
                                    <a href="#" class="page-link">Read more</a>
                                    </li>
                                </ul>
                                </nav>
                            </div> -->
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
import { OPENSEA_API_KEY, ALCHEMY_API_KEY, HV_MTL, MO_API_KEY, API_URL } from '../main.js';

export default {
    name: 'NftPage',
    components: {
        Header,
    },
    data() {
        return {
            nfts: [],
            collectionData: null,
            currentPage: 1,
            limit: 100,
            totalPages: 0,
            contractAddress: HV_MTL,
            totalSupply: 28078,
            isLoading: false,
            searchId: '',
            isSearchActive: false,
            isFiltered: false,
            selectedTraits: [],
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

        handleCheckboxChange(event) {
            const trait = event.target.value;
            if (event.target.checked) {
                this.selectedTraits.push(trait);
            } else {
                const index = this.selectedTraits.indexOf(trait);
                if (index > -1) {
                    this.selectedTraits.splice(index, 1);
                }
            }

            if (this.selectedTraits.length === 0) {
                this.isFiltered = false;
                this.fetchNFTs();
            } else {
                this.isFiltered = true;
                this.searchNftByTraits(this.selectedTraits);
            }
        },
        

        removeSpaces(str) {
            return str.replace(/\s+/g, '');
        },
        fetchCollectionData() {
            const options = {
                method: 'GET',
                url: 'https://api.opensea.io/api/v1/collection/hv-mtl',
                headers: { 'X-API-KEY': OPENSEA_API_KEY }
            };

            axios.request(options)
                .then(response => {
                    this.collectionData = response.data.collection;
                    console.log(this.collectionData)
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async fetchNFTs(tokenIds = null) {
            this.isLoading = true;
            this.nfts = [];

            if (tokenIds) {
                const chunks = [];
                while (tokenIds.length) {
                    chunks.push(tokenIds.splice(0, 20));
                }

                const promises = chunks.map(chunk => {
                    const tokenIdsStr = chunk.join('&token_ids=');
                    return axios.get(`https://api.opensea.io/api/v1/assets?asset_contract_address=${this.contractAddress}&token_ids=${tokenIdsStr}`, {
                        headers: {
                            'X-API-KEY': OPENSEA_API_KEY
                        }
                    });
                });

                try {
                    const responses = await Promise.all(promises);
                    let allAssets = [];
                    responses.forEach(response => {
                        const assets = response.data.assets;
                        assets.forEach(asset => {
                            const tokenId = asset.token_id;

                            if (!this.nfts.some(nft => nft.tokenId === tokenId)) {
                                this.nfts.push({
                                    tokenId: tokenId,
                                    image: asset.image_url,
                                    price: null
                                });
                                allAssets.push(tokenId);
                            }
                        });
                    });

                    allAssets.forEach(asset => {
                        axios.get(`${API_URL}/getwiki?id=${asset}`)
                            .then((priceResponse) => {
                                const listing = priceResponse.data.data[0];
                                const tokenId = listing.vessel;
                                const currentPrice = listing.floor;
                                const nft = this.nfts.find(nft => nft.tokenId === tokenId);
      
                                if (nft && !nft.price) {
                                    nft.price = listing.marketplace_image !== '' 
                                        ? `<img src="${require('@/assets/icon/' + listing.marketplace_image)}">` + currentPrice + ' ' + listing.floor_currency
                                        : currentPrice + ' ' + listing.floor_currency;
                                    
                                    nft.rank = listing.rank;
                                    nft.score = listing.score;
                                }
                            })
                            .catch((error) => {
                                console.error('获取价格信息时出错：', error);
                            });
                    });

                    // const priceChunks = [];
                    // while (allAssets.length) {
                    //     priceChunks.push(allAssets.splice(0, 20));
                    // }

                    // const pricePromises = priceChunks.map(chunk => {
                    //     const tokenIds = chunk.map(asset => 'token_ids=' + asset).join('&');
                    //     return axios.get(`https://api.opensea.io/v2/orders/ethereum/seaport/listings?asset_contract_address=${this.contractAddress}&${tokenIds}`, {
                    //         headers: {
                    //             accept: 'application/json',
                    //             'X-API-KEY': OPENSEA_API_KEY
                    //         }
                    //     });
                    // });

                    // const priceResponses = await Promise.all(pricePromises);

                    // priceResponses.forEach(response => {
                    //     const listings = response.data.orders;
                    //     listings.forEach(listing => {
                    //         const tokenId = listing.maker_asset_bundle.assets[0].token_id;
                    //         const currentPrice = listing.current_price;
                    //         const eth = currentPrice / 1e18;
                    //         const nftIndex = this.nfts.findIndex(nft => nft.tokenId === tokenId);
                    //         if (nftIndex !== -1) {
                    //             this.nfts[nftIndex].price = `${eth} ETH`;
                    //             console.log(`Token ID11: ${tokenId}, Current Price: ${eth}`);
                    //         }
                    //     });
                    // });
                    
                } catch (error) {
                    console.error('Error fetching NFT data:', error);
                } finally {
                    this.isLoading = false;
                }
            }else{
                let startToken = (this.currentPage - 1) * this.limit + 1;
                axios
                    .get(`https://eth-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_API_KEY}/getNFTsForCollection?contractAddress=${this.contractAddress}&startToken=${startToken}&limit=${this.limit}&withMetadata=true`)
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
                                    'X-API-KEY': OPENSEA_API_KEY
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
                                        image: asset.image_url,
                                        price: null
                                    }))
                                );
                                

                                assets.forEach(asset => {
                                    axios.get(`${API_URL}/getwiki?id=${asset.token_id}`)
                                    .then((priceResponse) => {
                                        const listing = priceResponse.data.data[0];
                                        const tokenId = listing.vessel;
                                        const currentPrice = listing.floor;
                                        const nft = this.nfts.find(nft => nft.tokenId === tokenId);
                                        if (nft && !nft.price) {
                                            nft.price = listing.marketplace_image !== '' 
                                            ? `<img src="${require('@/assets/icon/' + listing.marketplace_image)}">` + currentPrice + ' ' + listing.floor_currency
                                            : currentPrice + ' ' + listing.floor_currency;                                            
                                            nft.rank = listing.rank;
                                            nft.score = listing.score;

                                            // console.log(`Token ID: ${tokenId}, Current Price: ${currentPrice}`);
                                        }
                                    })
                                    .catch((error) => {
                                        console.error('获取价格信息时出错：', error);
                                    });
                                });

                                // const tokenIds = assets.map(asset => 'token_ids=' + asset.token_id).join('&');
                                // console.log(asset.token_id)
                                // axios.get(`https://api.opensea.io/v2/orders/ethereum/seaport/listings?asset_contract_address=${this.contractAddress}&${tokenIds}`, {
                                //     headers: {
                                //         accept: 'application/json',
                                //         'X-API-KEY': OPENSEA_API_KEY
                                //     }
                                // })
                                // .then((priceResponse) => {
                                //     const listings = priceResponse.data.orders;

                                //     listings.forEach(listing => {
                                //         const tokenId = listing.maker_asset_bundle.assets[0].token_id;
                                //         const currentPrice = listing.current_price;

                                //         const nft = this.nfts.find(nft => nft.tokenId === tokenId);
                                //         if (nft && !nft.price) {
                                //             let wei = currentPrice;
                                //             let eth = wei / 1e18;

                                //             nft.price = eth + ' ETH';
                                //             console.log(`Token ID: ${tokenId}, Current Price: ${eth}`);
                                //         }
                                //     });
                                // })
                                // .catch((error) => {
                                //     console.error('获取价格信息时出错：', error);
                                // });
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
            }
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
                    `https://api.opensea.io/api/v1/asset/${this.contractAddress}/${this.searchId}`, {
                        headers: {
                            'X-API-KEY': OPENSEA_API_KEY,
                        },
                    }
                );
                const asset = response.data;
                this.nfts = [];
                this.nfts.push({
                    tokenId: asset.token_id,
                    image: asset.image_url,
                    price: null 
                });
                
                axios.get(`${API_URL}/getwiki?id=${asset.token_id}`)
                    .then((priceResponse) => {
                        const listing = priceResponse.data.data[0];
                        const tokenId = listing.vessel;
                        const currentPrice = listing.floor;
                        const nft = this.nfts.find(nft => nft.tokenId === tokenId);
                        if (nft && !nft.price) {
                            nft.price = listing.marketplace_image !== '' 
                            ? `<img src="${require('@/assets/icon/' + listing.marketplace_image)}">` + currentPrice + ' ' + listing.floor_currency
                            : currentPrice + ' ' + listing.floor_currency;                                            
                            nft.rank = listing.rank;
                            nft.score = listing.score;
                        }
                    })
                .catch((error) => {
                    console.error('获取价格信息时出错：', error);
                });
                // axios.get(`https://api.opensea.io/v2/orders/ethereum/seaport/listings?asset_contract_address=${this.contractAddress}&token_ids=${asset.token_id}`, {
                //     headers: {
                //         accept: 'application/json',
                //         'X-API-KEY': OPENSEA_API_KEY
                //     }
                // })
                // .then((priceResponse) => {
                //     const listings = priceResponse.data.orders;

                //     listings.forEach(listing => {
                //         const tokenId = listing.maker_asset_bundle.assets[0].token_id;
                //         const currentPrice = listing.current_price;

                //         // Find the corresponding NFT in the nfts array and update its price.
                //         const nft = this.nfts.find(nft => nft.tokenId === tokenId);
                //         if (nft && !nft.price) {
                //             let wei = currentPrice;
                //             let eth = wei / 1e18;

                //             nft.price = eth + ' ETH';
                //             console.log(`Token ID: ${tokenId}, Current Price: ${eth}`);
                //         }
                //     });
                // })
                // .catch((error) => {
                //     console.error('获取价格信息时出错：', error);
                // });
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

        searchNftByTraits(searchQueries) {

            this.isLoading = true;
            this.nfts = [];

            if (!Array.isArray(searchQueries)) {
                searchQueries = [searchQueries];
            }

            Promise.all(
                searchQueries.map(searchQuery =>
                    axios.get('https://deep-index.moralis.io/api/v2/nft/search', {
                        params: {
                            chain: 'eth',
                            format: 'decimal',
                            addresses: [`${HV_MTL}`],
                            q: searchQuery,
                            filter: 'attributes'
                        },
                        headers: {
                            'Accept': 'application/json',
                            'X-API-Key': MO_API_KEY,
                        }
                    })
                )
            )
            .then(responses => {
                const combinedResults = responses.flatMap(response => response.data.result);
                const tokenIds = combinedResults.map(result => result.token_id);
                this.fetchNFTs(tokenIds);
            })
            .catch(error => {
                console.error('获取NFT数据时出错：', error);
                this.isLoading = false;
            });
        }
    },
    mounted() {
        this.fetchNFTs();
        this.fetchCollectionData();
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
