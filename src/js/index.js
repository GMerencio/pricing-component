import 'normalize.css';
import './../scss/main.scss';

var MONTH_PRICES = [49, 99, 219, 419];
var ANNUAL_PRICES = [490, 990, 2190, 4190];
var PRICING_OPTIONS = {MONTHLY: "month", ANNUALLY: "year"};

/**
 * Fills in the prices according to the argument, which is one of the
 * PRICING_OPTIONS objects. It also changes the suffix appropriately (e.g., /mo
 * for monthly or /yr for annually).
 */

function fillPrices(opt) {
  var prices = document.querySelectorAll(".txt-price");
  
  for(var i = 0; i < prices.length; i++) {
    if(opt === PRICING_OPTIONS.MONTHLY) {
      prices[i].innerHTML = MONTH_PRICES[i];
      prices[i].classList.remove("txt-price--annually");
      prices[i].classList.add("txt-price--monthly");
    }
    
    else if(opt === PRICING_OPTIONS.ANNUALLY) {
      prices[i].innerHTML = ANNUAL_PRICES[i];
      prices[i].classList.remove("txt-price--monthly");
      prices[i].classList.add("txt-price--annually");
    }
  }
}

/* Once the page is finished loading, fill in the monthly prices and add
event listeners. */

window.onload = function() {
  fillPrices(PRICING_OPTIONS.MONTHLY);
  
  var monthlyBtn = document.querySelector(".js-btn--monthly");
  var annuallyBtn = document.querySelector(".js-btn--annually");
  
  monthlyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(!monthlyBtn.classList.contains("btn--active")) {
      monthlyBtn.classList.add("btn--active");
      annuallyBtn.classList.remove("btn--active");
      fillPrices(PRICING_OPTIONS.MONTHLY);
    }
  });
  
  annuallyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(!annuallyBtn.classList.contains("btn--active")) {
      annuallyBtn.classList.add("btn--active");
      monthlyBtn.classList.remove("btn--active");
      fillPrices(PRICING_OPTIONS.ANNUALLY);
    }
  });
}