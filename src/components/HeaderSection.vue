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
                            <span style="color: #d9413e;">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--ci-primary-color, currentColor)" version="1.1" id="Capa_1" viewbox="0 0 24 24" xml:space="preserve">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                </svg>
                            </span></b><span>$ 0.00</span>
                        </div>
                        <div class="cryptocurrency"><b>APE 
                            <span style="color: #d9413e;">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--ci-primary-color, currentColor)" version="1.1" id="Capa_1" viewbox="0 0 24 24" xml:space="preserve">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                </svg>
                            </span></b><span>$ 0.00</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
  name: 'HeaderSection',
}
</script>
<style>

</style>
  