
document.querySelectorAll('#vessels input, #vessels select').forEach(function(element) {
  element.addEventListener('change', updateUrl);
});


function updateUrl() {
  const form = document.getElementById('vessels');
  const formData = new FormData(form);
  const searchParams = new URLSearchParams();

  for (const [key, value] of formData.entries()) {
    if (value !== "") {
      searchParams.append(key, value);
    }
  }

  const newUrl = new URL(window.location.origin + window.location.pathname);
  newUrl.search = searchParams.toString();

  // Update the URL without refreshing the page
  window.history.pushState({}, '', newUrl);
}

$(document).ready(function() {
	function toggleSidebarOnLoad() {
		if (window.innerWidth < 768) {
			$('.sidebar').addClass("inactive");
		}
	}
	window.onload = toggleSidebarOnLoad;

     var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
      }); 
	  
     var singleNoSearch = new Choices('#choices-single-no-search', {
	    searchEnabled: false,
        removeItemButton: true,
      }); 
	  
	if($("#vessels").length) {
		let loading = false;
		let currentPage = $("#currentPage").val();
		let endpoint = "./api/vessels.php";
		let currentRequest = null;
		let currentAjaxRequest = 0;

		let lastAjaxCallTimestamp = null;
		let timerInterval = null;

		function updateTimerDisplay() {
		  if (!lastAjaxCallTimestamp) return;

		  const currentTime = new Date();
		  const timeElapsed = Math.floor((currentTime - lastAjaxCallTimestamp) / 1000); // Time elapsed in seconds
		  const minutes = Math.floor(timeElapsed / 60);
		  const seconds = timeElapsed % 60;

		  let timerText = ' | ';
		  if (minutes > 0) {
			timerText += `${minutes}m `;
		  }
		  timerText += `${seconds}s ago`;

		  document.getElementById('timeago').innerText = timerText;
		}
		function loadData() {
		  let requestData = $("#vessels").serialize();
		  if (currentRequest) {
			clearTimeout(currentRequest);
			currentRequest = null;
		  }
		  currentRequest = setTimeout(function () {
			var seqNumber = ++currentAjaxRequest;
			console.log("Sending request #" + seqNumber);
			$.ajax({
			  url: endpoint,
			  data: requestData,
			  method: "GET",
			  success: function (response) {
				if (seqNumber == currentAjaxRequest) {
				  console.log("Accepting request #" + seqNumber);
				  console.log(response);
				  updateData(response.data);
				  updateFilter(response.filter);
				  updatePagination(response);
				  updateIds(response.data2);
				  updateTimerDisplay();
				} else {
				  console.log("Ignoring request #" + seqNumber);
				}
				if (seqNumber == currentAjaxRequest) {
				  lastAjaxCallTimestamp = new Date();
				  if (timerInterval) clearInterval(timerInterval);
				  timerInterval = setInterval(updateTimerDisplay, 1000);
				}
			  },
			  error: function (response) {
				console.log("Error", response);
				endLoading();
			  },
			  complete: function () {
				// Refresh every 60 seconds (60000 milliseconds)
				setTimeout(loadData, 60000);
			  },
			});
		  }, 0);
		}

		function updateIds(items) {
			$("#allids").html("");
			for(let data2 of items) {
				$("#allids").append(data2.vessel +`, `);
			}
			if(items.length == 0) {
				$("#allids").html(``);
			}
		}
		
		
let categoryMap = {
    "resource": "resources",
    "koda": "koda",
    "category": "category",
    "maximum price": "price_range_uplimit",
    "minimum price": "price_range_downlimit",
    "currency": "currency",
    "show": "show_all",
    "relic": "relic",
    "quickselect": "quickselects",
    // add other mappings here as needed
};

function updateFilter(items) {
    $("#activefilters").html("");
    for (let filter of items) {
        const category = categoryMap[filter.category.toLowerCase()] || filter.category;
        $("#activefilters").append(`
            <span class="activefilter" data-category="${category}" data-value="${filter.value}">
              ${filter.category}: ${filter.value}
            </span>
        `);
    }
    
    if(items.length == 0) {
        $("#activefilters").html(``);
    } else {
        $("#activefilters").append(`
            <a href="./vessel/browse" class="reset" id="reset">Clear all</a>`);
    }
}

$("#activefilters").on("click", ".activefilter", function() {
    console.log("clicked on activefilter");
    const category = $(this).data("category");
    const value = $(this).data("value");
    console.log("removing category:", category, "value:", value);
    removeFilterFromURL(category, value);
    location.reload();

});
function removeFilterFromURL(category, value) {
    const url = new URL(window.location.href);
    const filteredParams = new URLSearchParams();

    url.searchParams.forEach((paramValue, paramName) => {
        const decodedParamName = decodeURIComponent(paramName);
        const decodedParamValue = decodeURIComponent(paramValue);
        const paramNameWithoutArrayBrackets = decodedParamName.replace(/\[\]$/, '');
        if (paramNameWithoutArrayBrackets !== category || String(decodedParamValue) !== String(value)) {
            filteredParams.append(decodedParamName, decodedParamValue);
        }
    });

    url.search = filteredParams.toString();
    window.history.replaceState(null, null, url);
    console.log("updated URL:", url.toString());
}

	
		function updateData(items) {
			$("#results").html("");
			for(let deed of items) {
				const flagged = deed.flagged === 1 ? "<font color='#dd6570'><i class='fa-solid fa-triangle-exclamation' title='Flagged on Opensea'></i></font>" : "";
				const price = `<img src='images/icons/${deed.marketplace_image}' alt='${deed.marketplace_title}' title='${deed.marketplace_title}'>${deed.floor} ${deed.floor_currency}`;
				
				$("#results").append(`<div class="col-auto">
					<a href='vessel/id/${deed.vessel}' class='list list-item-vessel'>
						<div class='topside'>
							<div class='pricetop'>#${deed.vessel}</div>
							<div class='marketprice'>${price} ${flagged}</div>
						</div>
						<div class='image'><img src='${deed.image}'></div>
						<div class='bottomside'>
							<div class='basics'>
								<div class='box'><div class="text">${deed.category}</div></div>
							</div>
						</div></a></div>`);
			}
			if(items.length == 0) {
				$("#results").html(`
					<div class="no-results">
						<i class="fa-solid fa-xmark"></i>
						<h4>No vessels found</h4>
						<p>We cannot find any vessels matching your criteria. Please reset the filters.</p>
					</div>
				`);
				$("#total_deeds").html(0);
			}
		}

		// Update the pagination
		function updatePagination(response) {
			$("#page_links").html("");
			if(response.data.length == 0) return false;
			let meta = response.meta;
			let totalResults = meta.total;
			let totalPages = meta.totalPages;
			let currentPage = meta.currentPage;
			let previousPage = currentPage - 1;
			let nextPage = currentPage + 1;
			let lower_limit;
			let upper_limit;
			let siteboolean = false;
			let paginationString = `<nav aria-label="Page navigation example"><ul class="pagination">`;

			if(currentPage == 1) {
				paginationString += `<li class="page-item"><a href='#' data-page='1' class='page-link disabled'>Previous</a></li>`;
			} else {
				paginationString += `<li class="page-item"><a href='#' data-page='`+ previousPage +`' class='page-link'>Previous</a></li>`;
			}

			if(currentPage >= 5) {
				paginationString += `
					<li class="page-item"><a href='#' data-page='1' class='page-link'>1</a></li>
					<li class="page-item"><a href='#' data-page='1' class='page-link disabled'>...</a></li>`;
			}
			if(currentPage - 3 <= 0) {
				lower_limit = 1;
				siteboolean = true;
			} else {
				lower_limit = +currentPage - 3;
			}
			if(currentPage + 3 >= totalPages) {
				upper_limit = totalPages;
				lower_limit = totalPages - 4;
			} else {
				if(siteboolean == true) {
					upper_limit = 7;
				} else {
					upper_limit = +currentPage + 3;
				}
			}
			if(totalPages <= 10) {
				upper_limit = totalPages;
				lower_limit = 1;
			}
			console.log(lower_limit, upper_limit);
			for (let i = lower_limit; i <= upper_limit; i++) {
				paginationString += `<li class="page-item"><a href='#' data-page='`+ i +`' class="page-link `+ (i == currentPage ? 'active' : '') +`">`+ i +`</a></li> `;
          	}
          	if(totalPages - 6 > currentPage) {
          		paginationString += `
          			<li class="page-item"><a href='#' data-page='`+ totalPages +`' class='page-link disabled'>...</a></li>
          			<li class="page-item"><a href='#' data-page='`+ totalPages +`' class='page-link'>`+ totalPages +`</a></li>`;
          	} else {
	          	paginationString += `<li class="page-item"><a href='#' data-page='`+ nextPage +`' class='page-link `+ (currentPage < totalPages ? '' : 'disabled') +`'>Next</a></li>`;
	        }

	        if(totalPages <= 1) {
				paginationString += '';
	        } else {
				paginationString += '</ul></nav>';
	        }
			$("#total_deeds").html(totalResults);
			$("#page_links").html(paginationString);
		}

		loadData();

		$("#vessels input, #vessels select, #sorting").change(function() {
			loadData();
		});

		$("#vessels").submit(function(e) {
			e.preventDefault();
			loadData();
			 $("html, body").animate({
			 	scrollTop: 0,
			 }, 300);
		})
		
		$(document).on("click", "#page_links ul li a", function(e) {
			e.preventDefault();
			if($(this).hasClass("disabled")) return false;
			let targetPage = $(this).data("page");
			$("#currentPage").val(targetPage).change();
			$("#page_links ul li a").removeClass("active");
			$("html, body").animate({
				scrollTop: 0,
			}, 300);
		})

		// Reset fields
		$("#reset").click(function(e) {
		  e.preventDefault();
		  window.location.href = "./vessel/browse";
		});

	$('.panel-collapse').on('show.bs.collapse', function () {  $(this).siblings('.panel-heading').addClass('active');});
	$('.panel-collapse').on('hide.bs.collapse', function () {  $(this).siblings('.panel-heading').removeClass('active');}); 
	$('#filter-menu').click(function() {  $('.sidebar').toggleClass("inactive"); });

	var x, i, j, l, ll, selElmnt, a, b, c;
	x = document.getElementsByClassName("select-sort");
	l = x.length;
	for (i = 0; i < l; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  ll = selElmnt.length;
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < ll; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
			  if (s.options[i].innerHTML == this.innerHTML) {
				s.selectedIndex = i;
				h.innerHTML = this.innerHTML;
				y = this.parentNode.getElementsByClassName("same-as-selected");
				yl = y.length;
				for (k = 0; k < yl; k++) {
				  y[k].removeAttribute("class");
				}
				this.setAttribute("class", "same-as-selected");
				break;
			  }
			}
			h.click();
		});
		b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	  });
	}
	function closeAllSelect(elmnt) {
	  var x, y, i, xl, yl, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  xl = x.length;
	  yl = y.length;
	  for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
		  arrNo.push(i)
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	  loadData();
	}
	document.addEventListener("click", closeAllSelect);



	}
})