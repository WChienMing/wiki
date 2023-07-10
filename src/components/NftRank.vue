<template>
    <div>
        <h2>Rank</h2>
        <div v-if="dataList.length > 0">
            <ul class="items slide-fade">
                <div v-for="item in dataList" :key="item.mechId" class="saleitems">
                    <a :href="'NftDetails?id=' + item.mechId">
                        <div class="image">
                            <img style="width: 63px;" :src="item.img" />
                        </div>
                        <div class="noresources">
                            <div>
                                <div class="box">#{{ item.mechId }}</div>
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="">
                            <!-- {{ item. }} -->
                        </div>
                        <!-- <div class="date">{{ formatDate(sale.event_timestamp) }}</div> -->
                    </a>
                </div>
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
            dataList: [
            ],
        }
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
                        // if (tmp.mechId == "1") {
                        //     console.log(tmp);

                        // }

                        self.itemID += 1;
                        tmp["item"] = tmp;
                        tmp["itemID"] = self.itemID;
                        tmp["show"] = false;
                        // if(self.dataList.length > 19){
                        //   self.dataList.shift();

                        // }
                        // self.dataList[0].remove();
                        _list.unshift(tmp);
                        self.getNftInfo(tmp.id);
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
                self.dataList = _list;
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
        async getNftInfo(tokenID) {
            const options = {
                method: 'GET',
                url: `https://api.opensea.io/api/v1/assets?asset_contract_address=${HV_MTL}&token_ids=${tokenID}`,
                headers: { 'X-API-KEY': OPENSEA_API_KEY }
            };
            var self = this;
            axios.request(options)
                .then(response => {
                    var nftImg = response.data.assets.image_thumbnail_url;
                    self.dataList.forEach(nft => {
                        if (nft.id == tokenID) {
                            nft['img'] = nftImg;

                        }
                    });

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