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
          <!-- <a class="quicklinks " href="./environment.html">
            <div class="svgimage"><img src="../assets/pic/enviroment.png" alt="Sediment" class="my-image"></div><div class="text">Environments</div>
          </a> -->
          <!-- <a class="quicklinks " href="otherdeed/resource"><div class="svgimage"></div><div class="text">Resources</div></a>
          <a class="quicklinks " href="otherdeed/artifact"><div class="svgimage"></div><div class="text">Artifacts</div></a> -->
          </div>
            <div class="w-100">
              <div class="row align-items-center">
                <div class="sedi" v-for="item in tiles" :key="item.id">
                  <div class="top">
                    <div class="title">
                      <h2>{{ item.name }}</h2>
                      <span class="count">Unlock Condition: <b>{{ item.unlock_condition }}</b></span>
                        <!-- <div class="body">
                          <span class="count2"><div>Duration</div> <div>4,939</div></span>
                        </div> -->
                    </div>
                    <div class="images">
                      <div class="topright"><img :src="getImage(item.name)"></div>
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
  import { API_URL } from '../main.js';
  
  export default {
    name: 'NftDetails',
    components: {
      Header,
    },
    data() {
      return {
          tiles: [],
      };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get(`${API_URL}tiles`)
            .then(response => {
                this.tiles = response.data;
            })
            .catch(error => {
                console.error(error);
            });
        },
        getImage(name) {
            return require(`@/assets/pic/tiles/${name}.png`);
        }
    }
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
    