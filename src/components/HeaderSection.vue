<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">HV-MTL-WIKI</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Browser
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <div class="row">
                            <div class="col-md-12 maincolumns">
                                <div class="row">
                                    <div class="col-md-12">
                                        <a href="/nft" class="dropdown-item">
                                            <div class="media">
                                                <div class="media-body">
                                                    <h6 class="mt-0 mb-1">HV-MTL</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="/Sediment" class="dropdown-item">
                                            <div class="media">
                                                <div class="media-body">
                                                    <h6 class="mt-0 mb-1">Sediment</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="crypto-status">
                <div>
                    <div class="cryptocurrencies">
                        <div class="cryptocurrency"><b>ETH 
                            </b>
                            <span :class="isEthPriceUp ? 'price-up' : 'price-down'">$ {{ ethPrice  }}</span>
                        </div>
                        <div class="cryptocurrency"><b>APE 
                            </b>
                            <span :class="isApePriceUp ? 'price-up' : 'price-down'">$ {{ apePrice  }}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
import axios from "axios";

export default {
  name: "HeaderSection",
  data() {
    return {
      ethPrice: null,
      apePrice: null,
      previousEthPrice: null,
      previousApePrice: null,
      isEthPriceUp: false,
      isApePriceUp: false,
      error: null,
    };
  },
  async mounted() {
    try {
      // Fetch initial prices
      await this.fetchPrices();
      this.previousEthPrice = this.ethPrice;
      this.previousApePrice = this.apePrice;

      // Periodically fetch prices to check for changes
      // setInterval(this.fetchPrices, 60000); // Every minute
    } catch (error) {
      this.error = "Error fetching prices";
      console.error(error);
    }
  },
  methods: {
    async fetchPrices() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: "ethereum,apecoin",
          },
        }
      );
      const coins = response.data;

      for (let coin of coins) {
        if (coin.id === "ethereum") {
          this.ethPrice = coin.current_price;
          if (this.previousEthPrice !== null) {
            this.isEthPriceUp = this.ethPrice > this.previousEthPrice;
          }
          this.previousEthPrice = this.ethPrice;
        } else if (coin.id === "apecoin") {
          this.apePrice = coin.current_price;
          if (this.previousApePrice !== null) {
            this.isApePriceUp = this.apePrice > this.previousApePrice;
          }
          this.previousApePrice = this.apePrice;
        }
      }
    },
  },
};
</script>
<style>
.price-up {
  color: green !important;
}

.price-down {
  color: red !important;
}
</style>
  