<template>
  <div>
    <Header/>
    <div class="index_splash">
        <div class="container">
            <div class="row align-items-start">
                <div class="col-md-7">
                    <h1>HV-MTL-WIKI</h1>
                    <h2>Your Key to the HV-MTL Metaverse</h2>
                    <p>The HV-MTL (Heavy Metal) collection is made up of 30,000 Mechs derived from 8 different Power Source types. Beginning March 15, 2023, eligible Sewer Passes can be burned to summon a Power Source that will reveal an Evo 1 Mech. Evo 1 holders can participate in future minigame sets with their Evo 1s to unlock additional HV-MTL evolution stages. Holders of HV-MTLs are subject to the HV-MTL License Agreement available at <a href="https://hv-mtl.com/hvmtl-license-agreement" target="_blank" rel="noopener">https://hv-mtl.com/hvmtl-license-agreement.</a></p>
                    <!-- <div class="teaser">
                        <a href="./otherdeed">Discover Otherside</a>
                        <a href=",/tool/wallet-inventory">My Inventory</a>
                    </div> -->
                </div>
                <div class="col-md-3 ml-auto index-tools">
                    <!-- <h2>Video</h2> -->
                    <div class="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/RrFdF5a4wdk"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
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
                    <a class="saleitems" href="#">
                        <div class="market"><img src="#" alt="" title="BLUR"></div>
                        <div class="image"><img src="#" alt="" title="#81655"></div>
                        <div class="noresources">
                            <div>
                                <!-- <div class="box">Rainbow Atmos</div>
                                <div class="box">Splinter</div> -->
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="price"><img src="#" alt="" title="Ether"> 1.02</div>
                        <div class="date">2 minutes ago</div>
                    </a>
                    <a class="saleitems" href="#">
                        <div class="market"><img src="#" alt="" title="BLUR"></div>
                        <div class="image"><img src="#" alt="" title="#81655"></div>
                        <div class="noresources">
                            <div>
                                <!-- <div class="box">Rainbow Atmos</div>
                                <div class="box">Splinter</div> -->
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="price"><img src="#" alt="" title="Ether"> 1.02</div>
                        <div class="date">2 minutes ago</div>
                    </a>
                    <a class="saleitems" href="#">
                        <div class="market"><img src="#" alt="" title="BLUR"></div>
                        <div class="image"><img src="#" alt="" title="#81655"></div>
                        <div class="noresources">
                            <div>
                                <!-- <div class="box">Rainbow Atmos</div>
                                <div class="box">Splinter</div> -->
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="price"><img src="#" alt="" title="Ether"> 1.02</div>
                        <div class="date">2 minutes ago</div>
                    </a>
                    <a class="saleitems" href="#">
                        <div class="market"><img src="#" alt="" title="BLUR"></div>
                        <div class="image"><img src="#" alt="" title="#81655"></div>
                        <div class="noresources">
                            <div>
                                <!-- <div class="box">Rainbow Atmos</div>
                                <div class="box">Splinter</div> -->
                            </div>
                            <div style="float: left;"></div>
                        </div>
                        <div class="price"><img src="#" alt="" title="Ether"> 1.02</div>
                        <div class="date">2 minutes ago</div>
                    </a>
                    <!-- <a class="saleitemsbox" href="./tool/sale-browser">See all Sales</a> -->
                    <a class="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/HVMTLS?ref_src=twsrc%5Etfw">Tweets by HVMTLS</a>
                </div>
                <div class="col-md-8 col-xl-8 index">
                    <div class="newsfeed">
                        <h2>Latest News</h2>
                        <div class="news">
                            <h4>PREPARING LAUNCH</h4>
                            <!-- <div class="date">2023-05-30</div> -->
                            <p class="newscontent">
                                Undisturbed for centuries, HV-MTL have been summoned abruptly through a rift in space-time (and if they knew how much it had to do with Jimmys atomic shit, theyd be impressed).Gary is convinced theres a cosmic battle on the horizon and needs every HV (pronounced Heavy) to evolve into its final form before its too late. But are the HVs new friends — or is there reason to be wary?
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
// import axios from 'axios';
import Header from '../components/HeaderSection.vue';

export default {
  components: {
    Header,
  },
  mounted() {
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
