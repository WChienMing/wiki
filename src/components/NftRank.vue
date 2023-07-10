<template>
    <div>
        <h2>Rank</h2>
        <div v-if="dataList.length > 0">
            <ul class="items slide-fade">
                <li v-for="item in dataList" :key="item.mechId" class="saleitems" :class="{ show: item.show == true }">
                    <a :href="'NftDetails?id=' + item.mechId" class="d-flex align-items-center h-100">
                        <div class="image">
                            <img style="width: 63px;" :src="item.img" />
                        </div>
                        <div class="noresources">
                            <div>
                                <div class="box">#{{ item.mechId }}</div>
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="text-right flex-grow-1 mr-3">
                            Score: {{ item.score }}
                        </div>
                        <!-- <div class="date">{{ formatDate(sale.event_timestamp) }}</div> -->
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { io } from "socket.io-client";
import { OPENSEA_API_KEY, HV_MTL } from '../main.js';
import axios from 'axios';
export default {
    data() {
        return {
            connection: null,
            socket: null,
            itemID: 0,
            dataList: [],
            tmpList: [],
        }
    },
    watch: {
        dataList: "checkItem",
    },
    methods: {
        intitialItem() {
            this.dataList.forEach((item) => {
                if (item["show"] == null) {
                    item["show"] = true;
                }
            });
        },
        checkItem() {
            this.dataList.forEach((item) => {
                if (!item["show"]) {
                    console.log("trigger");
                    setTimeout(function () {
                        item["show"] = true;
                    }, 10);
                }
            });
        },
        switchList(data) {
            var self = this;
            var _list = [];
            if (!(data.toString() === this.dataList.toString())) {
                data.forEach((el) => {
                    // console.log(el);
                    var tmp = el;
                    var isDuplicate = false;
                    for (let i = 0; i < self.dataList.length; i++) {
                        if (tmp.id == self.dataList[i]["id"]) {
                            isDuplicate = true;
                        }
                    }

                    if (!isDuplicate) {

                        self.itemID += 1;
                        tmp["itemID"] = self.itemID;
                        tmp["show"] = false;
                        _list.unshift(tmp);
                        // self.getNftInfo();
                    }
                    // console.log(JSON.parse(el.contract_detail));
                });
                _list.sort(function (a, b) {
                    if (parseInt(a.score) < parseInt(b.score)) {
                        return 1;
                    }
                    if (parseInt(a.score) > parseInt(b.score)) {
                        return -1;
                    }
                });
                self.tmpList = _list;
                // console.log(self.dataList);
                let tokenIDs = [];
                self.tmpList.forEach(el => {
                    tokenIDs.push(el.mechId);
                });
                self.getNftInfo(tokenIDs);
            }
        },
        initialSocket() {
            this.socket = io("http://172.104.48.242:4567");
            var self = this;

            this.socket.on("serverTime", function (data) {
                // console.log(data);
                var dd = data[0]['content'];
                var games = JSON.parse(JSON.parse(dd).data).games;
                // console.log(games);
                if (games) {
                    self.switchList(games);

                }

            });
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
        },
        async getNftInfo(tokenIDs) {
            let chunks = [];
            var self = this;
            chunks = tokenIDs.splice(0, 25);
            // console.log(tokenIDs);

            let tokenIdsStr = chunks.join('&token_ids=');
            const options = {
                method: 'GET',
                url: `https://api.opensea.io/api/v1/assets?asset_contract_address=${HV_MTL}&token_ids=${tokenIdsStr}`,
                headers: { 'X-API-KEY': OPENSEA_API_KEY }
            };

            axios.request(options)
                .then(response => {
                    const assets = response.data.assets;
                    assets.forEach(asset => {
                        const tokenId = asset.token_id;
                        self.tmpList.forEach(nft => {
                            if (nft.mechId == tokenId) {
                                nft['img'] = asset.image_thumbnail_url;
                                // console.log(nft);

                            }


                        })
                    });
                    if (tokenIDs.length > 0) {
                        self.getNftInfo(tokenIDs);
                    }
                    else {
                        self.dataList = self.tmpList;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

    },
    created() {
        this.initialSocket();
        // this.intitialItem();

    }

}
</script>



<style lang="scss">
.items {
    width: 100%;
    list-style: none;
    padding: 0 !important;
}

.items li {
    padding: 16px 24px;
    margin: 0;
    width: 100%;
    // background-color: ;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -.24px;
    // color: $gray-700;

    .rank {
        margin-right: 24px;
        width: 14px;
        font-size: 12px;
        line-height: 18px;
        text-align: right;
        color: #c0c4c8;
    }

    .img-circle {
        height: 42px;
        width: 42px;
        border-radius: 50%;
    }

    .divider {
        margin: 0 6px;
        width: 1px;
        height: 8px;
        // background-color: $gray-700;
    }

    .mint-text {
        color: #44927A;
    }
}

li.show {
    margin-top: 0.5rem;
    min-height: 42px;
}

.slide-fade li {
    opacity: 0;
    height: 0;
    transition: all 0.4s ease-in;
}

.slide-fade li.show {
    height: auto;
    transform: none;
    transition: all 0.4s ease-in;
    opacity: 1;
    animation: changeColor 1.2s 1;
}

@keyframes changeColor {
    0% {
        background-color: #1b2c27;
    }

    100% {
        // background-color: $primary;
    }
}
</style>