<template>
    <div class="descrip-box">
        <div class=" align-items-center">
            <div class=" plots">
                <div class="col-md-12 d-flex justify-content-center">
                    <div class="vote col-md-6 text-center mr-3">
                        Today votes: {{ (score === null || score === 0) ? '-' : score }}
                    </div>
                    <div class="vote col-md-6 text-center ml-3">
                        Shard: {{ (shard === null || shard === 0) ? '-' : shard }}
                    </div>
                </div>
                <!-- <div class="d-flex descrip-child1 mx-0">
                    <div class="col-3 px-0">
                        <img :src="imageUrl" class="deed-image mb-0">
                    </div>
                    <div class="col-9 px-0">
                        <div class="nopaddingmobile justify-content-start align-items-center"
                            style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;height: 100%;">
                            <div class="liner" v-for="_state in states" :key="_state.name">
                                <a class="details" href="#">
                                    <h2 style="font-size: 13px !important;">{{ _state.name }}</h2>
                                    <div class="text" style="font-size: 12px !important;">{{ _state.value }}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="d-flex descrip-child1 mx-0">
                    <div class="col-4 px-0" style="position: relative;">
                        <img :src="imageUrl" class="deed-image mb-0" style="width: 100%;height: 100%;object-fit: cover; display: block;">
                    </div>
                    <div class="col-8 px-0 d-flex flex-column">
                        <div class="mb-2" v-if="leaderboardState">
                            <a class="details" href="#">
                            <h2 style="font-size: 13px !important;">{{ leaderboardState.name }}</h2>
                            <div class="text" style="font-size: 12px !important;">{{ leaderboardState.value }}</div>
                            </a>
                        </div>
                        <div class="nopaddingmobile justify-content-start align-items-center flex-grow-1" 
                            style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; height: 100%;">
                            <div class="liner" v-for="_state in nonLeaderboardStates" :key="_state.name">
                            <a class="details" href="#">
                                <h2 style="font-size: 13px !important;">{{ _state.name }}</h2>
                                <div class="text" style="font-size: 12px !important;">{{ _state.value }}</div>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mx-0" style="padding: 16px 0px">
                    <div class="col-lg-12 col-md-12 px-0">
                        <div class="row nopaddingmobile justify-content-start amp-bg ">
                            <div class="col-6 col-md-6 col-lg-6" :class="{ 'active': amp.value != '' }" v-for="amp in amps"
                                :key="amp.name">
                                <a class="d-flex amp details align-items-center justify-content-start" href="#">
                                    <div class="title">
                                        <h2 class="mb-0">{{ amp.name.split('_').join(' ') }}</h2>
                                    </div>
                                    <div class="text flex-grow-1">
                                        <p class="mb-0" :class="{ 'text-black': amp.value == '' }">{{
                                            amp.value == "" ? '-' : amp.value
                                        }}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-12 nopaddinggeneral">
                        <div class="item-activity">
                            <div class="headline">Item Activity</div>
                            <div class="header">
                                <div class="market">Event</div>
                                <div class="from">From</div>
                                <div class="to">To</div>
                                <div class="date">Date</div>
                            </div>
                            <div class="body" v-for="(event, index) in events" :key="index">
                                <div class="market">{{ event.event_type }}</div>
                                <div class="from">
                                    <a :href="getEtherscanURLFrom(event)">

                                        {{
                                            event.from_account
                                            ? (event.from_account.user && event.from_account.user.username
                                                ? truncateUsername(event.from_account.user.username, 20)
                                                : shortenAddress(event.from_account.address))
                                            : '-'
                                        }}

                                    </a>

                                </div>

                                <div class="to">
                                    <a :href="getEtherscanURLTo(event)">
                                        {{
                                            event.to_account
                                            ? (event.to_account.user && event.to_account.user.username
                                                ? truncateUsername(event.to_account.user.username, 20)
                                                : shortenAddress(event.to_account.address))
                                            : '-'
                                        }}
                                    </a>
                                </div>
                                <div class="date">{{ formatTimeAgo(event.event_timestamp) }}</div>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div style="border: 1px solid #EAEAEA; border-radius: 4px;">
                    <div class="container-header">
                        <img src="../assets/icon/1.png" alt="">
                        <span>Plan</span>
                    </div>
                    <div class="row descrip-container">
                        <div class="col-md-12 px-0" style="overflow-x: scroll;">
                            <table>
                                <tr v-for="(row, index) in formattedTiles" :key="index">
                                    <td v-for="(tile, index2) in row" :key="index2"
                                        :class="['tile-' + index + '-' + index2, { 'live': tile.level !== 0 }]"
                                        :id="'tile-' + index + '-' + index2" :rowspan="('tile-' + index + '-' + index2) === 'tile-4-0' ? 4
                                            : ('tile-' + index + '-' + index2) === 'tile-5-18' ? 3
                                                : ('tile-' + index + '-' + index2) === 'tile-0-4'
                                                    || ('tile-' + index + '-' + index2) === 'tile-0-11'
                                                    || ('tile-' + index + '-' + index2) === 'tile-3-17'
                                                    || ('tile-' + index + '-' + index2) === 'tile-11-13' ? 2 : 1"
                                        :colspan="('tile-' + index + '-' + index2) === 'tile-4-0' ? 3
                                            : ('tile-' + index + '-' + index2) === 'tile-5-18' ? 3
                                                : ('tile-' + index + '-' + index2) === 'tile-0-4'
                                                    || ('tile-' + index + '-' + index2) === 'tile-0-11'
                                                    || ('tile-' + index + '-' + index2) === 'tile-3-17'
                                                    || ('tile-' + index + '-' + index2) === 'tile-11-13' ? 2 : 1">
                                        <div class="dynamic-border"></div>
                                        <div class="Dynamic-box"></div>

                                        <div class="Dynamic" v-if="tile.level !== 0"
                                            :id="'tile-div' + index + '-' + index2">
                                            <div>{{ tile.level }}</div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

                <br>
                <!-- <hr> -->
                <!-- <br> -->
                <div style="border: 1px solid #EAEAEA; border-radius: 4px;">
                    <div class="container-header">
                        <img src="../assets/icon/2.png" alt="">
                        <span>Attributes</span>
                    </div>
                    <div class="row descrip-container pb-0 justify-content-start">
                        <div class="col-3 attributes" v-for="trait in traits" :key="trait.trait_type">
                            <a class="" href="#">
                                <h2>{{ trait.main_name }}</h2>
                                <div class="text">{{ (trait.sub_name) }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';
// import { OPENSEA_API_KEY, ALCHEMY_API_KEY, HV_MTL, API_URL } from '../main.js';
import { API_URL } from '../main.js';
export default {
    name: 'NftDetails',
    props: ['selectedID'],
    components: {
    },
    data() {
        return {
            urlId: '',
            states: [],
            traits: [],
            amps: [],
            imageUrl: '',
            score: 0,
            shard: 0,
            openSeaFloorPrice: null,
            owners: [],
            events: [],
            nextCursor: null,
            isFetching: false,
            noMoreData: false,
            tiles: [],
        };
    },
    computed: {
        shortenedOwners() {
            return this.owners.map(owner => `${owner.substring(0, 6)}...${owner.substring(owner.length - 4)}`);
        },
        getEtherscanLink() {
            return `https://etherscan.io/address/${this.owners.join(',')}`;
        },
        formattedTiles() {
            let rows = [];
            for (let i = 0; i < this.tiles.length; i += 21) {
                rows.push(this.tiles.slice(i, i + 21));
            }
            return rows;
        },
        leaderboardState() {
            return this.states.find(state => state.name === 'Leaderboard');
        },

        nonLeaderboardStates() {
            return this.states.filter(state => state.name !== 'Leaderboard');
        },
    },
    mounted() {
        //   this.getUrlId();
        //   this.fetchTraits();
        //   this.fetchEvents();
        //   this.fetchTiles();
        //   this.$nextTick(() => {
        // const activityDiv = document.querySelector('.item-activity');
        // if (activityDiv) {
        //   activityDiv.addEventListener('scroll', this.handleScroll);
        // }

        //   });
    },

    beforeDestroy() {
        const activityDiv = document.querySelector('.item-activity');
        if (activityDiv) {
            activityDiv.removeEventListener('scroll', this.handleScroll);
        }
    },
    methods: {

        fetchTiles() {
            this.$root.isFetching = true;
            axios.get(`${API_URL}gettiles?id=${this.urlId}`)
                .then(response => {
                    this.score = response.data.score;
                    this.shard = response.data.shard;
                    this.tiles = response.data.tiles;
                    this.traits = response.data.traits;
                    this.states = response.data.state;
                    this.amps = response.data.amp;
                    this.$root.isFetching = false;
                    this.imageUrl = response.data.image;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getEtherscanURLFrom(event) {
            if (
                event.from_account &&
                event.from_account.address &&
                event.from_account.user &&
                event.from_account.user.username !== 'NullAddress'
            ) {
                return `https://etherscan.io/address/${event.from_account.address}`;
            } else {
                return '#';
            }
        },

        getEtherscanURLTo(event) {
            if (
                event.to_account &&
                event.to_account.address &&
                event.to_account.user &&
                event.to_account.user.username !== 'NullAddress'
            ) {
                return `https://etherscan.io/address/${event.to_account.address}`;
            } else {
                return '#';
            }
        },

        truncateUsername(username, length) {
            if (username.length <= length) {
                return username;
            }
            return `${username.substring(0, length)}...`;
        },
        formatTimeAgo(dateStr) {
            const date = new Date(dateStr + 'Z');
            const now = new Date();
            const diffMs = now - date; // difference in milliseconds

            const diffSeconds = diffMs / 1000;
            const diffMinutes = diffSeconds / 60;
            const diffHours = diffMinutes / 60;

            if (diffHours < 1) {
                return `${Math.floor(diffMinutes)}m ago`;
            } else if (diffHours < 24) {
                return `${Math.floor(diffHours)}h ago`;
            } else {
                const diffDays = diffHours / 24;
                if (diffDays < 30) {
                    return `${Math.floor(diffDays)}d ago`;
                } else {
                    const diffMonths = diffDays / 30;
                    return `${Math.floor(diffMonths)}mo ago`;
                }
            }
        },
        shortenAddress(address) {
            if (!address) return '';
            const prefix = address.substring(0, 6);
            const suffix = address.substring(address.length - 4);
            return `${prefix}...${suffix}`;
        },
        getUrlId() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.urlId = id;
        },

        // fetchTraits() {
        //     const options = {
        //         method: 'GET',
        //         url: `https://api.opensea.io/api/v1/asset/${HV_MTL}/${this.urlId}`,
        //         params: { include_orders: 'false' },
        //         headers: { 'X-API-KEY': OPENSEA_API_KEY },
        //     };

        //     const openSeaFloorPriceOptions = {
        //         method: 'GET',
        //         url: `https://eth-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_API_KEY}/getFloorPrice`,
        //         params: { contractAddress: HV_MTL },
        //         headers: { accept: 'application/json' },
        //     };

        //     const ownersOptions = {
        //         method: 'GET',
        //         url: `https://eth-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_API_KEY}/getOwnersForToken`,
        //         params: { contractAddress: HV_MTL, tokenId: this.urlId },
        //         headers: { accept: 'application/json' },
        //     };

        //     const fetchTraitsPromise = axios.request(options);
        //     const openSeaFloorPricePromise = axios.request(openSeaFloorPriceOptions);
        //     const ownersPromise = axios.request(ownersOptions);

        //     axios
        //         .all([fetchTraitsPromise, openSeaFloorPricePromise, ownersPromise])
        //         .then(
        //             axios.spread((traitsResponse, floorPriceResponse, ownersResponse) => {
        //                 // this.traits = traitsResponse.data.traits;
        //                 this.imageUrl = traitsResponse.data.image_url;

        //                 const openSeaFloorPrice = floorPriceResponse.data.openSea.floorPrice;
        //                 this.openSeaFloorPrice = openSeaFloorPrice;

        //                 const owners = ownersResponse.data.owners;
        //                 this.owners = owners;
        //             })
        //         )
        //         .catch((error) => {
        //             console.error(error);
        //         });
        // },
        // fetchEvents() {
        //     if (this.isFetching || this.noMoreData) return;

        //     this.isFetching = true;

        //     const eventsOptions = {
        //         method: 'GET',
        //         url: 'https://api.opensea.io/api/v1/events',
        //         params: {
        //             only_opensea: 'true',
        //             token_id: this.urlId,
        //             asset_contract_address: HV_MTL,
        //             event_type: 'transfer',
        //             cursor: this.nextCursor,
        //         },
        //         headers: { 'X-API-KEY': OPENSEA_API_KEY },
        //     };

        //     axios
        //         .request(eventsOptions)
        //         .then(response => {
        //             this.events = [...this.events, ...response.data.asset_events];
        //             this.nextCursor = response.data.next;
        //             this.isFetching = false;

        //             if (!response.data.next) {
        //                 this.noMoreData = true;
        //             }

        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // },
        handleScroll(e) {
            const { target: { scrollTop, clientHeight, scrollHeight } } = e;

            if (scrollTop + clientHeight >= scrollHeight) {
                this.fetchEvents();
            }
        },
    },
    watch: {
        selectedID() {
            console.log(this.selectedID);
            this.urlId = this.selectedID;
            // this.getUrlId();
            // this.fetchTraits();
            // this.fetchEvents();
            this.fetchTiles();
            this.$nextTick(() => {
                // const activityDiv = document.querySelector('.item-activity');
                // if (activityDiv) {
                //   activityDiv.addEventListener('scroll', this.handleScroll);
                // }

            });
        },
        formattedTiles: function () {
            this.$nextTick(() => {
                let idMap = {
                    'tile-1-4': 'tile-div0-4',
                    'tile-1-11': 'tile-div0-11',
                    'tile-4-17': 'tile-div3-17',
                    'tile-12-13': 'tile-div11-13'
                };

                for (let sourceId in idMap) {
                    let targetId = idMap[sourceId];
                    let sourceElement = document.getElementById(sourceId);
                    if (sourceElement) {
                        let targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.innerHTML = sourceElement.innerText;
                            console.log(sourceElement.innerText);
                        } else {
                            console.log(`Element ${targetId} does not exist.`);
                        }
                    } else {
                        console.log(`Element ${sourceId} does not exist.`);
                    }
                }
            });
        }
    }
};
</script>
<style>
.tile-0-5,
.tile-1-4,
.tile-1-5,
.tile-0-12,
.tile-1-11,
.tile-1-12,
.tile-4-1,
.tile-4-2,
.tile-5-0,
.tile-5-1,
.tile-5-2,
.tile-6-0,
.tile-6-1,
.tile-6-2,
.tile-7-0,
.tile-7-1,
.tile-7-2,
.tile-3-18,
.tile-4-17,
.tile-4-18,
.tile-5-19,
.tile-5-20,
.tile-6-18,
.tile-6-19,
.tile-6-20,
.tile-7-18,
.tile-7-19,
.tile-7-20,
.tile-11-14,
.tile-12-13,
.tile-12-14 {
    display: none;
}

.tile-4-0 .Dynamic {
    display: none;
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
        padding-top: 20px !important;
        padding: 0px !important;
    }
}

@media(max-width:414px) {
    .container {
        padding-right: 0px;
        padding-left: 0px;
    }

    .noshowmobile {
        display: none;
    }

    footer {
        padding-bottom: 20px;
    }

}
</style>
<style>
.plots a {
    color: #e6ebf6
}

.plots h1 {
    font-size: 23px;
    text-align: left;
    letter-spacing: .1em;
    word-spacing: .2em;
    margin-bottom: 0px;
    font-weight: 900
}

.plots p {
    margin-left: auto;
    color: #e6ebf6;
    margin-right: auto;
    width: 100%;
    font-size: 12px;
    letter-spacing: .1em;
    word-spacing: .1em;
}

.plots .owner {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
}

.plots .owner a {
    color: #f1b326
}

.plots .flagged {
    color: #a34343;
    font-weight: 400;
    display: inline-block
}

.plots .details_links {
    display: block;
    width: 100%;
    text-align: center;
    border: 1px solid #42454a3b;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 5px;
    background-color: #162d6a
}

.plots .details_links:hover {
    text-decoration: none;
    border: 1px solid #f1b3263b
}

.plots .details_links p {
    margin-bottom: 0;
    padding: 2px
}

.plots .details_fairvalue {
    display: block;
    width: 100%;
    text-align: center;
    border: 1px solid #42454a3b;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 5px;
    background-color: #142211
}

/* .plots .details:hover {
    text-decoration: none;
    border: 1px solid #f1b3263b
} */

.plots .deed-image {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid #42454a3b;
    text-align: center
}

.plots .details p {
    display: block;
    text-align: center;
    letter-spacing: .1em;
    word-spacing: .2em;
    margin-bottom: 0
}

.plots .details .box {
    display: inline-block;
    margin-top: 1px;
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 4px;
    text-align: center;
    letter-spacing: .8px;
    word-spacing: .1em
}

.plots .details .text {
    display: block
}

.plots .details .tier {
    display: block;
    letter-spacing: .1em;
    margin-top: -2px;
    margin-bottom: -10px;
    font-size: 14px
}

.plots .resources {
    display: block;
    width: 100%;
    text-align: center;
    border: 1px solid #42454a3b;
    margin-bottom: 20px;
    border-radius: 4px;
    padding: 0;
    background-color: #31333840
}

.plots .resources .none {
    padding: 5px;
    font-size: 10px
}

.plots .resources:hover {
    text-decoration: none;
    border: 1px solid #f1b3263b
}

.plots .resources .image {
    text-align: center;
    overflow: hidden;
    width: 100%
}

.plots .resources .image img {
    display: block;
    padding: -12px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    object-position: center;
    transition: transform .5s ease
}

.plots .resources .image img:hover {
    transform: scale(1.1)
}

.plots .resources .box {
    display: inline-block;
    background-color: rgb(127 170 217 / 16%);
    padding: 4px 8px;
    font-size: 12px;
    height: 35px;
    width: 100%;
    border-bottom: 1px solid #2f2f35;
    text-align: center;
    letter-spacing: .8px;
    word-spacing: .1em
}

.plots .resources .text {
    display: block
}

.plots .resources .kodaid {
    display: block;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1em;
    margin-top: 3px
}

.plots .resources .artifactname {
    display: block;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .1em;
    margin-top: 3px
}

.plots .resources .kodatop {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .1em;
    padding-top: 4px;
    width: 100%;
    text-align: right;
    padding-right: 7px
}

.plots .resources .tier {
    display: block;
    letter-spacing: .1em;
    margin-top: -2px;
    margin-bottom: -10px;
    font-size: 14px
}

.plots .resources .ore {
    background-color: #c19b3994
}

.plots .resources .root {
    background-color: #4e854594
}

.plots .resources .shard {
    background-color: #6896cc9c
}

.plots .resources .anima {
    background-color: #c692cf91
}

.plots .resources h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 800;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: block;
    margin-top: -3px;
    padding-top: 5px;
    letter-spacing: .1em;
    word-spacing: .2em;
    border-top: 1px solid #2f2f35
}

.plots .resources .topkoda {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    display: block;
    padding-top: 5px;
    padding-left: 10px;
    letter-spacing: .1em;
    word-spacing: .2em
}

.plots .resources .resource_details {
    display: grid;
    grid-template-columns: 0.5fr 0.7fr;
    grid-template-rows: 0.8fr 1.2fr;
    gap: 0 0;
    letter-spacing: .1em;
    word-spacing: .2em;
    font-size: 11px;
    padding: 1px;
    margin-bottom: 5px;
    grid-auto-flow: row;
    grid-template-areas: "rank_text rank_number" "quantity_text quantity_number"
}

.rank_text {
    grid-area: rank_text;
    text-align: left;
    margin-left: 5px
}

.rank_number {
    grid-area: rank_number;
    text-align: left;
    margin-left: 15px
}

.quantity_text {
    grid-area: quantity_text;
    text-align: left;
    margin-left: 5px
}

.quantity_number {
    grid-area: quantity_number;
    text-align: left;
    margin-left: 15px
}

.deed_listings {
    display: grid;
    margin-top: 2px;
    letter-spacing: .1em;
    word-spacing: .1em;
    font-size: 12px;
    gap: 0 0;
    grid-template-areas: "icon listed_price"
}

.icon {
    grid-area: icon;
    width: 100%;
    text-align: left
}

.listed_price {
    grid-area: listed_price;
    text-align: right
}

.item-activity {
    display: block;
    width: 100%;
    border: 1px solid #42454a3b;
    margin-top: 15px;
    border-radius: 4px;
    padding: 0;
    background-color: #31333840;
    max-height: 500px;
    overflow-y: scroll;
}

.item-activity .headline {
    padding: 10px;
    letter-spacing: .1em;
    word-spacing: .1em;
    font-size: 13px;
    font-weight: 800
}

.item-activity .header {
    border-top: 1px solid #42454a3b;
    padding: 7px;
    letter-spacing: .1em;
    word-spacing: .1em;
    background-color: #19191a
}

.item-activity .header .market {
    display: inline-block;
    font-size: 12px;
    width: 20%
}

.item-activity .header .price {
    display: inline-block;
    font-size: 12px;
    width: 15%
}

.item-activity .header .from {
    display: inline-block;
    font-size: 12px;
    width: 30%
}

.item-activity .header .to {
    display: inline-block;
    font-size: 12px;
    width: 30%
}

.item-activity .header .date {
    display: inline-block;
    font-size: 12px;
    width: 20%
}

.item-activity .body {
    border-top: 1px solid #42454a3b;
    padding: 7px;
    letter-spacing: .1em;
    font-size: 12px
}

.item-activity .body .market {
    display: inline-block;
    font-size: 12px;
    width: 20%;
    vertical-align: middle
}

.item-activity .body .price {
    display: inline-block;
    font-size: 12px;
    width: 15%;
    vertical-align: middle
}

.item-activity .body .price .salestype {
    display: inline-block;
    position: relative;
    transform: translateY(-3px);
    border: 1px #42454a3b solid;
    padding: 1px 4px;
    font-size: 70%;
    background-color: #f1b32638
}

.item-activity .body .from {
    display: inline-block;
    font-size: 12px;
    width: 30%;
    vertical-align: middle
}

.item-activity .body .to {
    display: inline-block;
    font-size: 12px;
    width: 30%;
    vertical-align: middle
}

.item-activity .body .date {
    display: inline-block;
    font-size: 12px;
    width: 20%;
    vertical-align: middle
}

.item-activity .body .date a:hover {
    text-decoration: none;
    color: #747474
}

.item-activity .body .to a:hover {
    text-decoration: none;
    color: #747474
}

.item-activity .body .from a:hover {
    text-decoration: none;
    color: #747474
}

.fas,
.fa-solid {
    font-size: 40px
}

.btn-third {
    color: #afadad;
    background-color: #000;
    border-color: #2c2c2c
}

.close-modal {
    cursor: pointer
}

.floorlist {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    border: 1px solid #2f2f35
}

.floorlist th a {
    text-decoration: none;
    color: #fff;
    text-align: left
}

.floorlist td a {
    text-decoration: none;
    color: #fff
}

.floorlist td a:hover {
    text-decoration: underline
}

.floorlist td {
    border: 1px solid #2f2f35;
    padding: 5px
}

.floorlist th {
    padding: 5px;
    text-align: center;
    border: 1px solid #2f2f35;
    background-color: #31333840;
    color: #fff
}

@media (max-width: 768px) {
    .row {
        padding: 1px
    }

    .item-activity .body .date {
        width: 60%;
        height: 20px;
        text-align: right
    }

    .item-activity .body .to {
        display: none
    }

    .item-activity .body .from {
        display: none
    }

    .item-activity .body .price {
        width: 25%;
        display: inline-block;
        text-align: right
    }

    .item-activity .header .to {
        display: none
    }

    .item-activity .header .from {
        display: none
    }

    .item-activity .header .date {
        display: inline-block;
        font-size: 12px;
        text-align: right;
        width: 55%
    }

    .item-activity .header .price {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 25%
    }

    .col-md-12.plots {
        padding-left: 0px;
        padding-right: 0px;
    }
}

@media (max-width: 414px) {
    .container {
        padding-right: 0px !important;
        padding-left: 0px !important;
    }

    .col-md-12 {
        padding-right: 0px;
        padding-left: 0px;
    }

    .col-md-9 {
        padding-right: 0px;
        padding-left: 0px;
    }

    .col-md-6 {
        padding-right: 2px;
        padding-left: 2px;
    }

    .col-md-4 {
        padding-right: 2px;
        padding-left: 2px;
    }

    .col-md-3 {
        padding-right: 2px;
        padding-left: 2px;
    }

    /* .plots .details {
        margin-bottom: 10px;
    } */

    .plots .resources {
        margin-bottom: 10px;
    }

    .nopaddingmobile {
        padding: 0px;
    }
}

.nopaddinggeneral {
    padding: 0px;
}

table {
    border-collapse: collapse;
    width: 100%;
}
</style>
    