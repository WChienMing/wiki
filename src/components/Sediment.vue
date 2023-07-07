<template>
    <div>
        <Header />
        <nav class="breadcrumb-wrapper">
            <div class="container-fluid">
            <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/"><span itemprop="name">Main</span></a>
                        <meta itemprop="position" content="1" />
                </li>
                <li class="breadcrumb-item" itemprop="itemListElement"><a itemprop="item" href="/sediment"><span itemprop="name">Browser</span></a></li>
                <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name">Sediment</span><meta itemprop="position" content="3" /></li>
            </ol>
            </div>
        </nav>
        <div class="d-flex align-items-start">
          <div class="menue">
          <a class="quicklinks active" href="/Sediment">
            <div class="svgimage"><img src="../assets/pic/sediment.png" alt="Sediment" class="my-image"></div><div class="text">Sediments</div>
          </a>

          <a class="quicklinks " href="./environment.html">
            <div class="svgimage"><img src="../assets/pic/enviroment.png" alt="Sediment" class="my-image"></div><div class="text">Environments</div>
          </a>

          <a class="quicklinks " href="otherdeed/resource"><div class="svgimage"><svg fill="var(--ci-primary-color, currentColor)" viewbox="0 0 80.939872 93.275413" xml:space="preserve" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs51"></defs><g id="g16" transform="translate(-6.1688765,4.1503915e-4)"><g id="g14"><path d="M 87.047,55.743 C 86.332,48.229 79.538,42.487 71.996,42.966 63.242,43.527 57.052,49.83 57.712,58.179 c 1.924,-3.001 2.971,-6.406 5.476,-8.983 3.795,-3.896 8.531,-4.527 13.429,-3.468 4.018,0.869 6.14,4.064 7.053,7.958 1.051,4.5 -1.211,9.743 -5.037,11.971 -3.806,2.211 -7.881,1.913 -11.057,-0.812 -2.649,-2.269 -3.642,-6.166 -2.266,-8.948 1.238,-2.526 5.547,-4.535 8.473,-3.956 2.711,0.537 4.6,3.151 4.186,5.813 -0.414,2.643 -2.553,4.295 -5.171,3.803 -0.787,-0.151 -1.8,-0.664 -2.139,-1.312 -0.757,-1.45 0.499,-1.841 1.591,-2.159 0.941,-0.271 1.612,-0.776 1.219,-1.851 -0.339,-0.907 -1.164,-1.308 -2.074,-1.369 -1.697,-0.113 -3.021,0.619 -3.761,2.146 -0.855,1.772 -0.414,3.429 0.76,4.918 2.19,2.785 6.379,3.142 9.5,0.814 2.93,-2.184 3.692,-6.383 1.729,-9.438 -1.89,-2.926 -5.873,-4.206 -10,-3.214 -4.682,1.133 -6.878,3.347 -7.162,7.406 -0.318,4.562 1.354,8.295 5.352,10.577 4.161,2.382 8.546,2.152 12.557,-0.349 4.34,-2.709 7.201,-6.471 6.677,-11.983 z" id="path2"></path><path d="m 54.859,32.212 c -1.126,-5.327 0.981,-9.61 4.589,-13.091 2.956,-2.853 6.793,-2.842 10.533,-1.434 4.322,1.632 7.426,6.423 7.149,10.843 -0.277,4.394 -2.797,7.614 -6.824,8.738 -3.364,0.939 -7.148,-0.405 -8.695,-3.094 -1.407,-2.437 -0.685,-7.128 1.423,-9.241 1.958,-1.959 5.185,-2.067 7.159,-0.245 1.968,1.815 2.149,4.507 0.284,6.41 -0.564,0.569 -1.55,1.127 -2.275,1.05 -1.626,-0.183 -1.253,-1.437 -0.91,-2.527 0.294,-0.931 0.249,-1.772 -0.859,-2.04 -0.948,-0.224 -1.735,0.24 -2.293,0.962 -1.04,1.348 -1.163,2.852 -0.308,4.317 0.996,1.696 2.618,2.253 4.51,2.11 3.532,-0.271 6.16,-3.558 5.959,-7.443 -0.186,-3.648 -3.252,-6.62 -6.883,-6.687 -3.477,-0.056 -6.762,2.544 -8.23,6.523 -1.662,4.516 -1.047,7.575 2.17,10.069 3.614,2.805 7.646,3.487 11.762,1.434 4.295,-2.13 6.544,-5.905 6.694,-10.627 0.164,-5.113 -1.369,-9.585 -6.242,-12.217 -6.639,-3.582 -15.19,-1.134 -18.986,5.404 -4.402,7.587 -2.604,16.234 4.699,20.333 -1.429,-3.271 -3.677,-6.033 -4.426,-9.547 z" id="path4"></path><path d="M 44.541,24.846 C 42.127,23.054 39.315,21.98 37.295,19.726 34.22,16.302 33.962,12.279 35.135,8.214 36.095,4.882 38.91,3.277 42.234,2.73 c 3.855,-0.623 8.139,1.578 9.795,4.924 1.646,3.332 1.163,6.749 -1.314,9.267 -2.061,2.103 -5.4,2.714 -7.667,1.4 -2.053,-1.193 -3.501,-4.928 -2.849,-7.363 0.611,-2.257 2.923,-3.694 5.135,-3.196 2.204,0.505 3.471,2.394 2.907,4.574 -0.171,0.655 -0.662,1.482 -1.225,1.727 -1.267,0.551 -1.521,-0.522 -1.725,-1.465 -0.178,-0.806 -0.568,-1.401 -1.492,-1.131 -0.786,0.231 -1.167,0.91 -1.273,1.671 -0.191,1.422 0.351,2.579 1.595,3.287 1.444,0.823 2.859,0.542 4.188,-0.357 2.471,-1.686 3.004,-5.19 1.227,-7.958 -1.672,-2.59 -5.162,-3.47 -7.849,-1.992 -2.57,1.424 -3.872,4.707 -3.28,8.235 0.689,4.009 2.428,5.985 5.831,6.459 3.826,0.525 7.063,-0.666 9.213,-3.908 2.238,-3.364 2.296,-7.072 0.424,-10.59 -2.032,-3.812 -5.039,-6.437 -9.71,-6.31 -6.369,0.174 -11.596,5.564 -11.618,11.945 -0.03,7.406 4.929,12.973 11.994,12.897 z" id="path6"></path><path d="m 29.297,21.723 c -7.065,-2.692 -15.251,0.792 -18.153,7.754 -2.13,5.109 -0.512,9.553 2.835,13.421 3.095,3.578 7.223,5.089 11.897,4.045 4.497,-1 7.195,-4.066 8.242,-8.52 0.929,-3.963 -0.519,-6.728 -4.654,-9.195 -3.648,-2.167 -7.828,-2.12 -10.499,0.113 -2.779,2.341 -3.291,6.577 -1.138,9.527 2.288,3.146 6.403,4.047 9.319,2.033 1.559,-1.08 2.469,-2.534 2.175,-4.475 -0.255,-1.678 -1.299,-2.769 -2.957,-3.162 -0.89,-0.208 -1.802,-0.073 -2.39,0.695 -0.697,0.907 -0.2,1.591 0.618,2.127 0.95,0.628 2.031,1.371 0.883,2.534 -0.512,0.519 -1.638,0.707 -2.43,0.619 -2.649,-0.305 -4.201,-2.515 -3.812,-5.16 0.389,-2.661 2.965,-4.606 5.715,-4.315 2.972,0.313 6.483,3.504 6.928,6.283 0.487,3.063 -1.612,6.494 -4.815,7.878 -3.839,1.665 -7.818,0.743 -10.804,-2.495 -2.996,-3.258 -3.598,-8.932 -1.268,-12.924 2.022,-3.444 4.993,-5.869 9.086,-5.512 4.998,0.438 9.332,2.438 11.806,7.286 1.629,3.201 1.622,6.766 2.572,10.196 3.088,-7.773 -0.957,-15.63 -9.156,-18.753 z" id="path8"></path><path d="m 22.863,52.526 c -7.439,-1.335 -14.836,3.6 -16.407,10.981 -1.15,5.414 1.265,9.479 5.27,12.666 3.705,2.939 8.035,3.665 12.438,1.772 4.233,-1.813 6.32,-5.329 6.521,-9.894 0.178,-4.065 -1.752,-6.513 -6.269,-8.176 -3.992,-1.454 -8.092,-0.637 -10.299,2.054 -2.298,2.816 -2.019,7.077 0.646,9.571 2.835,2.673 7.036,2.796 9.53,0.273 1.336,-1.352 1.963,-2.946 1.311,-4.801 -0.56,-1.598 -1.79,-2.481 -3.489,-2.56 -0.912,-0.041 -1.781,0.264 -2.22,1.126 -0.515,1.02 0.094,1.598 1,1.978 1.051,0.438 2.253,0.965 1.334,2.32 -0.409,0.609 -1.475,0.999 -2.271,1.061 -2.662,0.192 -4.594,-1.693 -4.702,-4.366 -0.109,-2.687 2.061,-5.075 4.818,-5.298 2.978,-0.243 7.022,2.245 7.965,4.891 1.047,2.919 -0.378,6.677 -3.273,8.634 -3.463,2.345 -7.547,2.177 -11.078,-0.455 -3.549,-2.646 -5.189,-8.11 -3.638,-12.467 1.35,-3.761 3.821,-6.69 7.911,-7.098 4.986,-0.496 9.618,0.671 12.948,4.976 2.193,2.848 2.845,6.352 4.416,9.545 C 36.93,61.05 31.497,54.076 22.863,52.526 Z" id="path10"></path><path d="m 51.128,91.5 c 6.536,-24.04 4.896,-40.539 -8.897,-62.727 2.635,8.42 9.128,27.153 9.128,35.794 -0.203,2.529 -5.845,-0.756 -14.297,-13.055 2.417,8.062 4.122,9.246 9.777,15.04 2.734,2.796 4.554,3.552 3.782,7.012 -0.923,4.11 -1.525,8.319 -2.762,12.323 -1.219,3.912 -1.167,4.388 -7.334,7.275 l 14.789,0.113 C 54.653,93.167 52.648,91.125 51.128,91.5 Z" id="path12"></path></g></g><g id="g18" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g20" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g22" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g24" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g26" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g28" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g30" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g32" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g34" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g36" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g38" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g40" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g42" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g44" transform="translate(-6.1688765,4.1503915e-4)"></g><g id="g46" transform="translate(-6.1688765,4.1503915e-4)"></g></svg></div><div class="text">Resources</div></a>
          <a class="quicklinks " href="otherdeed/artifact"><div class="svgimage"><svg fill="none" viewbox="0 0 25 27" xmlns="http://www.w3.org/2000/svg"><path d="M2.87594 12.597C6.20912 7.61619 10.4703 7.28456 13.3538 8.5059C16.2372 9.72725 18.8163 12.6803 17.4056 17.6145C15.9942 21.1373 9.54076 21.1711 8.55163 20.8041C7.5708 20.4402 4.67132 17.0196 4.99643 13.5239C5.00175 13.4668 5.02975 13.4129 5.07251 13.3746C7.71367 11.0119 9.62851 10.9916 12.2996 11.9025C14.686 13.0267 15.003 16.0586 15.0447 16.7635C15.05 16.8544 14.9978 16.9371 14.9149 16.9747C10.9514 18.7704 6.20911 16.4362 6.20911 12.7224M2.87594 12.597C2.00175 17.7495 5.80823 23.2055 7.61462 23.7322C9.42102 24.2589 17.6059 24.2144 20.1471 19.3986C22.6883 14.5828 17.8854 3.8146 15.0511 2.88394C12.2167 1.95328 6.04624 6.61946 2.87594 12.597Z" stroke="var(--ci-primary-color, currentColor)"></path></svg></div><div class="text">Artifacts</div></a>
          </div>
          <div class="w-100">
          <div class="row align-items-center">
          <div class="sedi">
          <div class="top">
          <div class="title">
          <h2>Biogenic Swamp</h2>
          <span class="count">Total: 10,000<br>ID-Range: 0-9999</span>
          <div class="body">
          <span class="count2"><div>Tier1</div> <div>4,939</div></span>
          <span class="count2"><div>Tier2</div> <div>3,026</div></span>
          <span class="count2"><div>Tier3</div> <div>2,035</div></span>
          </div>
          </div>
          <div class="images">
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-frag.webp"></div>
          </div>
          </div>
          </div>
          <div class="sedi">
          <div class="top">
          <div class="title">
          <h2>Chemical Goo</h2>
          <span class="count">Total: 20,000<br>ID-Range: 10000-29999</span>
          <div class="body">
          <span class="count2"><div>Tier1</div> <div>10,030</div></span>
          <span class="count2"><div>Tier2</div> <div>6,015</div></span>
          <span class="count2"><div>Tier3</div> <div>3,955</div></span>
          </div>
          </div>
          <div class="images">
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/chemical-goo-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/chemical-goo-frag.webp"></div>
          </div>
          </div>
          </div>
          <div class="sedi">
          <div class="top">
          <div class="title">
          <h2>Cosmic Dream</h2>
          <span class="count">Total: 23,000<br>ID-Range: 30000-39882 and
          86883-99999</span>
          <div class="body">
          <span class="count2"><div>Tier1</div> <div>11,492</div></span>
          <span class="count2"><div>Tier2</div> <div>6,901</div></span>
          <span class="count2"><div>Tier3</div> <div>4,607</div></span>
          </div>
          </div>
          <div class="images">
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/cosmic-dream-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/cosmic-dream-frag.webp"></div>
          </div>
          </div>
          </div>
          <div class="sedi">
          <div class="top">
          <div class="title">
          <h2>Infinite Expanse</h2>
          <span class="count">Total: 25,000<br>ID-Range: 39883-64882</span>
          <div class="body">
          <span class="count2"><div>Tier1</div> <div>12,413</div></span>
          <span class="count2"><div>Tier2</div> <div>7,590</div></span>
          <span class="count2"><div>Tier3</div> <div>4,997</div></span>
          </div>
          </div>
          <div class="images">
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/infinite-expanse-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/infinite-expanse-frag.webp"></div>
          </div>
          </div>
          </div>
          <div class="sedi">
          <div class="top">
          <div class="title">
          <h2>Rainbow Atmos</h2>
          <span class="count">Total: 22,000<br>ID-Range: 64883-86882</span>
          <div class="body">
          <span class="count2"><div>Tier1</div> <div>10,815</div></span>
          <span class="count2"><div>Tier2</div> <div>6,738</div></span>
          <span class="count2"><div>Tier3</div> <div>4,447</div></span>
          </div>
          </div>
          <div class="images">
          <div class="topright"><img src="images/sediments/yuga/biogenic-swamp-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/rainbow-atmos-sed.webp"></div>
          <div class="topright"><img src="images/sediments/yuga/rainbow-atmos-frag.webp"></div>
          </div>
          </div>
          </div></div>
          </div>
          </div>
    </div>
  </template>
    
  <script>
  import axios from 'axios';
  import Header from '../components/HeaderSection.vue';
  import { OPENSEA_API_KEY, ALCHEMY_API_KEY, HV_MTL } from '../main.js';
  
  export default {
    name: 'NftDetails',
    components: {
      Header,
    },
    data() {
      return {
        urlId: '',
        traits: [],
        imageUrl: '',
        openSeaFloorPrice: null,
        owners: [],
        events: [],   
        nextCursor: null,
        isFetching: false,
        noMoreData: false,
      };
    },
    computed: {
      shortenedOwners() {
        return this.owners.map(owner => `${owner.substring(0, 6)}...${owner.substring(owner.length - 4)}`);
      },
      getEtherscanLink() {
        return `https://etherscan.io/address/${this.owners.join(',')}`;
      },
    },
    mounted() {
      this.getUrlId();
      this.fetchTraits();
      this.fetchEvents();
      this.$nextTick(() => {
        const activityDiv = document.querySelector('.item-activity');
        if (activityDiv) {
          activityDiv.addEventListener('scroll', this.handleScroll);
        }
      });
    },
  
    beforeDestroy() {
      const activityDiv = document.querySelector('.item-activity');
      if (activityDiv) {
        activityDiv.removeEventListener('scroll', this.handleScroll);
      }
    },
    methods: {
      getEtherscanURLFrom(event) {
        if (event.from_account && event.from_account.address && event.from_account.user.username !== 'NullAddress') {
          return `https://etherscan.io/address/${event.from_account.address}`;
        } else {
          return '#';
        }
      },
      getEtherscanURLTo(event) {
        if (event.to_account && event.to_account.address && event.to_account.user.username !== 'NullAddress') {
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
      fetchTraits() {
        const options = {
          method: 'GET',
          url: `https://api.opensea.io/api/v1/asset/${HV_MTL}/${this.urlId}`,
          params: { include_orders: 'false' },
          headers: { 'X-API-KEY': OPENSEA_API_KEY },
        };
  
        const openSeaFloorPriceOptions = {
          method: 'GET',
          url: `https://eth-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_API_KEY}/getFloorPrice`,
          params: { contractAddress: HV_MTL },
          headers: { accept: 'application/json' },
        };
  
        const ownersOptions = {
          method: 'GET',
          url: `https://eth-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_API_KEY}/getOwnersForToken`,
          params: { contractAddress: HV_MTL, tokenId: this.urlId },
          headers: { accept: 'application/json' },
        };
  
        const fetchTraitsPromise = axios.request(options);
        const openSeaFloorPricePromise = axios.request(openSeaFloorPriceOptions);
        const ownersPromise = axios.request(ownersOptions);
  
        axios
          .all([fetchTraitsPromise, openSeaFloorPricePromise, ownersPromise])
          .then(
            axios.spread((traitsResponse, floorPriceResponse, ownersResponse) => {
              this.traits = traitsResponse.data.traits;
              this.imageUrl = traitsResponse.data.image_url;
  
              const openSeaFloorPrice = floorPriceResponse.data.openSea.floorPrice;
              this.openSeaFloorPrice = openSeaFloorPrice;
  
              const owners = ownersResponse.data.owners;
              this.owners = owners;
            })
          )
          .catch((error) => {
            console.error(error);
          });
      },
      fetchEvents() {
        if (this.isFetching || this.noMoreData) return;
        
        this.isFetching = true;
  
        const eventsOptions = {
          method: 'GET',
          url: 'https://api.opensea.io/api/v1/events',
          params: {
            only_opensea: 'true',
            token_id: this.urlId,
            asset_contract_address: HV_MTL,
            event_type: 'transfer',
            cursor: this.nextCursor,
          },
          headers: { 'X-API-KEY': OPENSEA_API_KEY },
        };
  
        axios
          .request(eventsOptions)
          .then(response => {
            this.events = [...this.events, ...response.data.asset_events];
            this.nextCursor = response.data.next;
            this.isFetching = false;
  
            if (!response.data.next) {
              this.noMoreData = true;
            }
  
          })
          .catch(error => {
            console.error(error);
          });
      },
      handleScroll(e) {
        const { target: { scrollTop, clientHeight, scrollHeight } } = e;
  
        if (scrollTop + clientHeight >= scrollHeight) {
          this.fetchEvents();
        }
      },
    },
  };
  </script>
    <style>
    .dropdown-menu {min-width: 45rem;}
    .categories-column { background-color: #c5c5c5; padding: 1rem; }
    .category-link {display: block;  padding-bottom: 4px;  margin-right: 1rem;  text-decoration: none;  color: #212529; }
    .category-link:hover {  text-decoration: underline; }
    .row {margin-right: 0px;	margin-left: 0px;	justify-content: center;}
    .navbar-dark .navbar-nav .nav-link {  color: #fff;}
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
    .navbar-dark{   box-shadow: rgba(0,0,0,0.05) 0px 10px 35px;  transition: 0.2s ease all;}
    .dropdown-item.active, .dropdown-item:active {  color: #000000;   text-decoration: none;   background: none;}
    .bg-dark {  background-color: #1e1f22!important; border-bottom: 1px solid #383b3f;}
    .crypto-status {   position: absolute; right: 15px;width: 430px; height: auto; z-index: 1;  border-radius: 5px;   padding: 5px 5px;}
    .crypto-status svg {width: 0.7em;  height: 0.7em; margin-top: -4px;}
    .crypto-status .cryptocurrencies {  display: flex;  flex-direction: row;   justify-content: space-between;   width: 100%;}
    .crypto-status .cryptocurrencies .cryptocurrency { display: flex;  flex-direction: column;  width: 20%;  text-align: center;}
    .crypto-status .cryptocurrencies .cryptocurrency + .cryptocurrency {  border-left: 1px solid #383b3f;}
    .crypto-status .cryptocurrencies .cryptocurrency b {  color: #dddddd;}
    .crypto-status .cryptocurrencies .cryptocurrency b i {  font-size: 11px; vertical-align: middle;   margin-right: -4px;}
    .crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-up {   color: limegreen;}
    .crypto-status .cryptocurrencies .cryptocurrency b i.fa-chevron-down {   color: red;}
    .crypto-status .cryptocurrencies .cryptocurrency span {  font-size: 12px;   color: #999;}
    
    .svg_color_map svg {color: #1500c1}
    .svg_color_wallet svg {color: #cd2323}
    .svg_color_kodas svg {color: #b7aaff}
    .svg_color_vessels svg {color: #2cbd52}
    .svg_color_otherdeeds svg {color: #EE4444}
    .svg_color_sales svg {color: #6a4a00}
    .svg_color_pricealerts svg {color: #127800}
    .svg_color_kodalanguage svg {color: #ff6ec5}
    
    
    @media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {  justify-content: space-between!important;}
    
    }
    @media (max-width: 992px) {
        .crypto-status {  display: none; }
    }
      @media (max-width: 767px) {
        .crypto-status {  display: none; }
        .navbar-nav {text-align: center;}
        .dropdown, .dropleft, .dropright, .dropup { margin-right: 0px;	border-bottom: 1px solid #8d8a8a45!important;}
        .mobile_last {border-bottom:none!important;}
        .navbar {padding:5px;}
        .navbar-dark .navbar-brand { padding-left: 20px;}
        .navbar-dark .navbar-toggler {  margin-right: 10px;  padding: 5px 20px;}
        .dropdown-menu {  min-width: 100%;}
      }
      
      @media (max-width: 767px) {
        .breadcrumb-wrapper .container-fluid {padding-right:0px; padding-left:0px;}
        .main {padding-top:20px!important;padding: 0px!important;}
      }
      
      @media(max-width:414px){
        .container {
          padding-right: 0px;
          padding-left: 0px;
        }
        .noshowmobile {
          display:none;
        }
        footer {
        padding-bottom:20px;
        }
    
      }
      
    
    </style>
    <style>
    .plots a{color:#e6ebf6}
    .plots h1{font-size:23px;text-align:left;letter-spacing:.1em;word-spacing:.2em;margin-bottom:0px;font-weight:900}
    .plots p{margin-left:auto;color:#e6ebf6;margin-right:auto;width:100%;font-size:12px;letter-spacing:.1em;word-spacing:.1em;}
    .plots .owner {display:block; font-size: 12px; margin-bottom:5px;}
    .plots .owner a {color:#f1b326}
    .plots .flagged {color:#a34343;font-weight:400;display:inline-block}
    .plots .details_links{display:block;width:100%;text-align:center;border:1px solid #42454a3b;margin-bottom:5px;border-radius:4px;padding:5px;background-color:#162d6a}
    .plots .details_links:hover{text-decoration:none;border:1px solid #f1b3263b}
    .plots .details_links p{margin-bottom:0;padding:2px}
    .plots .details_fairvalue{display:block;width:100%;text-align:center;border:1px solid #42454a3b;margin-bottom:5px;border-radius:4px;padding:5px;background-color:#142211}
    .plots .details{display:block;width:100%;text-align:center;border:1px solid #42454a3b;margin-bottom:20px;border-radius:4px;padding:0;background-color:#31333840}
    .plots .details:hover{text-decoration:none;border:1px solid #f1b3263b}
    .plots .details h2{width:100%;font-weight:800;text-align:center;display:block;font-size:17px;padding-bottom:6px;border-bottom:1px solid #2f2f35;margin:7px auto 6px}
    .plots .deed-image{width:100%;margin-bottom:10px;border:1px solid #42454a3b;text-align:center}
    .plots .details p{display:block;text-align:center;letter-spacing:.1em;word-spacing:.2em;margin-bottom:0}
    .plots .details .box{display:inline-block;margin-top:1px;padding:2px 8px;font-size:12px;border-radius:4px;text-align:center;letter-spacing:.8px;word-spacing:.1em}
    .plots .details .text{display:block}
    .plots .details .tier{display:block;letter-spacing:.1em;margin-top:-2px;margin-bottom:-10px;font-size:14px}
    .plots .resources{display:block;width:100%;text-align:center;border:1px solid #42454a3b;margin-bottom:20px;border-radius:4px;padding:0;background-color:#31333840}
    .plots .resources .none{padding:5px;font-size:10px}
    .plots .resources:hover{text-decoration:none;border:1px solid #f1b3263b}
    .plots .resources .image{text-align:center;overflow:hidden;width:100%}
    .plots .resources .image img{display:block;padding:-12px;width:70%;margin-left:auto;margin-right:auto;object-fit:contain;object-position:center;transition:transform .5s ease}
    .plots .resources .image img:hover{transform:scale(1.1)}
    .plots .resources .box{display:inline-block;background-color:rgb(127 170 217 / 16%);padding:4px 8px;font-size:12px;height:35px;width:100%;border-bottom:1px solid #2f2f35;text-align:center;letter-spacing:.8px;word-spacing:.1em}
    .plots .resources .text{display:block}
    .plots .resources .kodaid{display:block;font-size:14px;font-weight:600;letter-spacing:.1em;margin-top:3px}
    .plots .resources .artifactname{display:block;font-size:13px;font-weight:600;letter-spacing:.1em;margin-top:3px}
    .plots .resources .kodatop{display:block;font-size:11px;font-weight:600;letter-spacing:.1em;padding-top:4px;width:100%;text-align:right;padding-right:7px}
    .plots .resources .tier{display:block;letter-spacing:.1em;margin-top:-2px;margin-bottom:-10px;font-size:14px}
    .plots .resources .ore{background-color:#c19b3994}
    .plots .resources .root{background-color:#4e854594}
    .plots .resources .shard{background-color:#6896cc9c}
    .plots .resources .anima{background-color:#c692cf91}
    .plots .resources h3{width:100%;font-size:14px;font-weight:800;margin-left:auto;margin-right:auto;text-align:center;display:block;margin-top:-3px;padding-top:5px;letter-spacing:.1em;word-spacing:.2em;border-top:1px solid #2f2f35}
    .plots .resources .topkoda{width:100%;font-size:13px;font-weight:500;text-align:left;display:block;padding-top:5px;padding-left:10px;letter-spacing:.1em;word-spacing:.2em}
    .plots .resources .resource_details{display:grid;grid-template-columns:0.5fr 0.7fr;grid-template-rows:0.8fr 1.2fr;gap:0 0;letter-spacing:.1em;word-spacing:.2em;font-size:11px;padding:1px;margin-bottom:5px;grid-auto-flow:row;grid-template-areas:"rank_text rank_number" "quantity_text quantity_number"}
    
    .rank_text{grid-area:rank_text;text-align:left;margin-left:5px}
    .rank_number{grid-area:rank_number;text-align:left;margin-left:15px}
    .quantity_text{grid-area:quantity_text;text-align:left;margin-left:5px}
    .quantity_number{grid-area:quantity_number;text-align:left;margin-left:15px}
    .deed_listings{display:grid;margin-top:2px;letter-spacing:.1em;word-spacing:.1em;font-size:12px;gap:0 0;grid-template-areas:"icon listed_price"}
    .icon{grid-area:icon;width:100%;text-align:left}
    .listed_price{grid-area:listed_price;text-align:right}
    .item-activity{display:block;width:100%;border:1px solid #42454a3b;margin-top:15px;border-radius:4px;padding:0;background-color:#31333840; max-height:500px; overflow-y: scroll;}
    .item-activity .headline{padding:10px;letter-spacing:.1em;word-spacing:.1em;font-size:13px;font-weight:800}
    .item-activity .header{border-top:1px solid #42454a3b;padding:7px;letter-spacing:.1em;word-spacing:.1em;background-color:#19191a}
    .item-activity .header .market{display:inline-block;font-size:12px;width:20%}
    .item-activity .header .price{display:inline-block;font-size:12px;width:15%}
    .item-activity .header .from{display:inline-block;font-size:12px;width:30%}
    .item-activity .header .to{display:inline-block;font-size:12px;width:30%}
    .item-activity .header .date{display:inline-block;font-size:12px;width:20%}
    .item-activity .body{border-top:1px solid #42454a3b;padding:7px;letter-spacing:.1em;font-size:12px}
    .item-activity .body .market{display:inline-block;font-size:12px;width:20%;vertical-align:middle}
    .item-activity .body .price{display:inline-block;font-size:12px;width:15%;vertical-align:middle}
    .item-activity .body .price .salestype{display: inline-block;
        position: relative;
        transform: translateY(-3px);
        border: 1px #42454a3b solid;
        padding: 1px 4px;
        font-size: 70%;
        background-color: #f1b32638}
    .item-activity .body .from{display:inline-block;font-size:12px;width:30%;vertical-align:middle}
    .item-activity .body .to{display:inline-block;font-size:12px;width:30%;vertical-align:middle}
    .item-activity .body .date{display:inline-block;font-size:12px;width:20%;vertical-align:middle}
    .item-activity .body .date a:hover{text-decoration:none;color:#747474}
    .item-activity .body .to a:hover{text-decoration:none;color:#747474}
    .item-activity .body .from a:hover{text-decoration:none;color:#747474}
    .fas,.fa-solid{font-size:40px}
    .btn-third{color:#afadad;background-color:#000;border-color:#2c2c2c}
    .close-modal{cursor:pointer}
    .floorlist{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;text-align:center;border:1px solid #2f2f35}
    .floorlist th a{text-decoration:none;color:#fff;text-align:left}
    .floorlist td a{text-decoration:none;color:#fff}
    .floorlist td a:hover{text-decoration:underline}
    .floorlist td{border:1px solid #2f2f35;padding:5px}
    .floorlist th{padding:5px;text-align:center;border:1px solid #2f2f35;background-color:#31333840;color:#fff}
    @media (max-width: 768px) {
    .row{padding:1px}
    .item-activity .body .date{width:60%;height:20px;text-align:right}
    .item-activity .body .to{display:none}
    .item-activity .body .from{display:none}
    .item-activity .body .price{width:25%;display:inline-block;text-align:right}
    .item-activity .header .to{display:none}
    .item-activity .header .from{display:none}
    .item-activity .header .date{display:inline-block;font-size:12px;text-align:right;width:55%}
    .item-activity .header .price{display:inline-block;text-align:right;font-size:12px;width:25%}
    .col-md-12.plots{
      padding-left:0px;
      padding-right:0px;
    }
    }
    
    @media (max-width: 414px) {
      .container {padding-right:0px!important; padding-left:0px!important;}
      .col-md-12  {padding-right:0px; padding-left:0px;}
      .col-md-9  {padding-right:0px; padding-left:0px;}
      .col-md-6  {padding-right:2px; padding-left:2px;}
      .col-md-4  {padding-right:2px; padding-left:2px;}
      .col-md-3  {padding-right:2px; padding-left:2px;}
      .plots .details {  margin-bottom: 10px;}
      .plots .resources {   margin-bottom: 10px;}
      .nopaddingmobile {padding:0px;}
    }
    
      .nopaddinggeneral {padding:0px;}
    </style>
    