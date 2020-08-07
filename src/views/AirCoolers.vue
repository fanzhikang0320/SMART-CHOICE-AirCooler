<template>
  <div class="airCoolers-wrapper">
    <div class="maskLayer">
            <div class="mask-content ">
                <span class="close"></span>
                <a :href="blauxLink" target="_blank" class="mask-box clearfix">
                    <div class="mask-left">
                        <img src="@/assets/image/air/alert-ad.png" alt="" class="ad">
                    </div>
                    <div class="mask-right">
                        <p class="offer">Limited Time Offer</p>
                        <p class="save"><span>SAVE</span><strong>50% MONEY</strong></p>
                        <p class="OEI">Offer Expires In</p>
                        
                        <div class="date-area">
                            <div class="time-box colon">
                                <span class="text">Hours</span>
                                <div class="time">
                                    <span class="hours-decade">0</span>
                                    <span class="hours-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box colon">
                                <span class="text">Minutes</span>
                                <div class="time">
                                    <span class="minutes-decade">0</span>
                                    <span class="minutes-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box">
                                <span class="text">Seconds</span>
                                <div class="time">
                                    <span class="seconds-decade">0</span>
                                    <span class="seconds-unit">0</span>
                                </div>
                            </div>
                        </div>
                        <p class="desc">30 Days Money Back Guarantee</p>
                        <a :href="blauxLink" target="_blank" rel="noopener noreferrer" class="btn">Get the discount today!</a>
                    </div>
                </a>
            </div>
       </div>
    <div class="header-container clearfix">
        <div class="header-left">
            <img src="@/assets/image/logo.png" alt="SMART CHOICES" class="logo">
            <span class="line"></span>
            <p class="desc">Being  Cool and Comfortable in Home or Office with Portable AC</p>
        </div>
        <div class="btn-box">
            <a href="/" target="_blank" class="active" rel="noopener noreferrer"><span>Top5 Air Coolers</span></a>
        </div>
        
    </div>
    <div class="banner-box">
      <div class="banner-container">
        <div class="content">
          <h1>
            <span class="blue-text">2020’s TOP 5</span> Portable Air Coolers
          </h1>
        </div>
      </div>
    </div>
    <div class="main-contanier">
      <div class="top-content">
        <h2 class="sub-title">We Tested 2020’s Best Portable Air Conditioners</h2>
        <p>Heat waves all around the country are more common and hotter every year. With people having to stay at home more frequently, it has become more important than ever to stay cool during hot summer days. Personal Portable Air Conditioners, or portable ACs, have exploded in popularity. These small, portable devices help you stay cool in your home or office, while the temperature rises to new highs.</p>

        <p>There are many options available right now to keep your room nice and cool. But which one is the best for you? Our researchers bought, tested and reviewed the best Portable ACs, looking at cooling power, portability, fan noise, battery life, ease of use, operation modes, price & discounts and much more.</p>
      </div>
      <div class="card-area">
        <p
          class="title-desc"
        >After our research, this is our Top 5 List for Best Portable Air Conditioners of 2020:</p>
        <AirProduct />
      </div>
      <div class="bottom-content">
        <h2>WHY BLAUX IS OUR BEST CHOICE</h2>
        <div class="img-box">
          <div class="img-item">
            <div class="circle">
              <img src="@/assets/image/air/kongtiao.png" alt="" />
            </div>
            <span class="tag">Super Cool</span>
          </div>
          <div class="img-item">
            <div class="circle">
              <img src="@/assets/image/air/feng.png" alt="" />
            </div>

            <span class="tag">Three Speed</span>
          </div>
          <div class="img-item">
            <div class="circle">
              <img src="@/assets/image/air/power.png" alt="" />
            </div>

            <span class="tag">Long Battery Life</span>
          </div>
          <div class="img-item">
            <div class="circle">
              <img src="@/assets/image/air/voice.png" alt="" />
            </div>
            <span class="tag">Low Noise</span>
          </div>
          <div class="img-item">
            <div class="circle">
              <img src="@/assets/image/air/usb.png" alt="" />
            </div>
            <span class="tag">Type C Support</span>
          </div>
        </div>
        <p>After repeated tests, we found that the performance of blaux is better than any other air conditioner. In the test of cooling capacity, it can quickly reduce the temperature of the room. But some people may worry that such a strong power will greatly increase energy--consumption, but on the contrary, Blaux is the most energy efficient portable air conditioner we tested, making it incredibly cheap to run.</p>
        <p>Portability is another feature of Blaux. You can put it in rooms of all sizes and small corners. And because it's powered by USB, it can work almost anywhere.</p>
        <p>Normal air conditioning can dry the air, which can dry the mouth, throat and eyes. Because the Blaux portable air conditioner uses water to cool the air, it can automatically double as an air humidifier! So don't worry about the dry mouth or sore eyes, just breathe clean, cool and humid air. Blaux portable air conditioning also cleans and purifies your air, removing dust and infectious particles from the air. You can get 3 solutions in one device!</p>
        <p>They also have a No-Hassle Returns policy. If you are not satisfied with your Blaux Portable AC, you can return it within 30 days of purchase for a full refund.</p>
      </div>
      <div class="ac-area">
        <h2 class="ac-title">How to use Blaux Portable AC</h2>
        <div class="step-box">
          <div class="step-item">
            <img src="@/assets/image/air/step1.png"  alt="" class="step-picture" />
            <div class="step-content">
              <p>
                <span class="text">Step</span>
                <span class="num">1.</span>
              </p>
              <p class="content">Add water. Simply pour it directly into the top of the unit.</p>
            </div>
          </div>
          <div class="step-item">
            <img src="@/assets/image/air/step2.png" alt="" class="step-picture" />
            <div class="step-content">
              <p>
                <span class="text">Step</span>
                <span class="num">2.</span>
              </p>
              <p
                class="content"
              >Insert the replaceable water curtain. Each one lasts approximately 6-8 months.</p>
            </div>
          </div>
          <div class="step-item">
            <img src="@/assets/image/air/step3.png" alt="" class="step-picture" />
            <div class="step-content">
              <p>
                <span class="text">Step</span>
                <span class="num">3.</span>
              </p>
              <p class="content">Turn it on. You won’t have to wait long for refreshing relief.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="big-ad-area">
        <h3 class="ad-title">Special Offer on Now!</h3>
        <p class="sub">
          Blaux Portable AC is now
          <span class="red">on sale!</span> Order Today for a
          <span class="red">Limited Time Discount!</span>
        </p>
        <img src="@/assets/image/air/ad.jpg" alt="" class="ad-picture" />
        <a
          :href="blauxLink"
          target="_blank"
          class="btn"
          rel="noopener noreferrer"
        >Get Your Blaux Portable AC Today!</a>
        <div class="desc">
          Quantities are limited, these portable ACs like
          <a
            :href="blauxLink"
            target="_blank"
            rel="noopener noreferrer"
          >Blaux Portable AC</a> sold out very quickly,so be sure to order right away!
        </div>
      </div>
      <div class="category-area">
        <h2 class="category-title">The Best Air Coolers Per Category</h2>
        <div class="category-box">
          <div class="category-item">
            <div class="corner-box">
              <span>Most Effective</span>
            </div>
            <div class="btn">
              <div class="img-box">
                <img src="@/assets/image/air/blaux.png" alt="" class="product-picture" />
              </div>
              <div class="content">
                <img src="@/assets/image/air/blauxLogo.png"  alt="blaux" class="logo" />
                <p class="desc">Quick Cooling in 30 Seconds</p>
                <a
                  class="deal-btn"
                  :href="blauxLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >Claim Deal</a>
              </div>
            </div>
          </div>
          <div class="category-item">
            <div class="corner-box">
              <span>Save Cost</span>
            </div>
            <div class="btn">
              <div class="img-box">
                <img src="@/assets/image/air/coolair.png"  alt class="product-picture" />
              </div>

              <div class="content">
                <img src="@/assets/image/air/coolairLogo.png" alt="coolair" class="logo" />
                <p class="desc">Can cool, humidify and purify the air</p>
                <a
                  class="deal-btn"
                  href="https://hyperstech.com/coolair/order.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}"
                  target="_blank"
                >Claim Deal</a>
              </div>
            </div>
          </div>
          <div class="category-item">
            <div class="corner-box">
              <span>Save Energy</span>
            </div>
            <div class="btn">
              <div class="img-box">
                <img src="@/assets/image/air/arcticbreeze.png"  alt class="product-picture" />
              </div>

              <div class="content">
                <img
                  src="@/assets/image/air/arcticbreezeLogo.png"
                  alt="arcticbreeze"
                  class="logo"
                />
                <p class="desc">3-speed built-in thermostat control</p>
                <a
                  class="deal-btn"
                  href="https://www.esplma.com/7QLQCMW/5GTH4TX/?uid=7574"
                  target="_blank"
                  rel="noopener noreferrer"
                >Claim Deal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-area">
        <h2>FAQ</h2>
        <div class="question-item">
          <h4 class="title">Why are portable air conditioners so popular?</h4>
          <div class="content">
            <p>
              Because it is not like the traditional air conditioning needs to be installed, it is very portable, even can be put into the bag to carry. For example, it can be placed in a smaller room or taken out for camping.
              In addition, it is very cheap and environmentally friendly.
            </p>
          </div>
        </div>
        <div class="question-item">
          <h4 class="title">Does portable air conditioning consume a lot of electricity？</h4>
          <div class="content">
            <p>The answer is No. Although it has a powerful cooling function, the dynamic sensing system can automatically turn off when you are not using it. You may not worry about rooms becoming too cool, because most portable air conditioners have multiple settings to suit any room size or temperature preference. It was so easy to get the desired temperature we felt comfortable at.</p>
          </div>
        </div>
        <div class="question-item">
          <h4 class="title">Will air conditioning make the air dry?</h4>
          <div class="content">
            <p>No, Because the portable air conditioner uses water to cool the air, it can automatically double as an air humidifier. So don't worry about the dry mouth or sore eyes, just breathe clean, cool and humid air.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirProduct from '@/components/AirProduct'
import $ from 'jquery'
export default {
    components: {
        AirProduct
    },
    data() {
      return {
        timer: null,
        count: 0,
        blauxLink: '/airDetail'
      }
    },
    methods: {
      /**
         * 倒计时
         */
        countDown() {
            //结束时间
            let finishTime = new Date('2020/7/25').getTime();
            let startTime = new Date(new Date().toLocaleDateString()).getTime();
            let intervalTime = 0,
                day = 0,
                hours = 0,
                minutes = 0,
                seconds = 0;
            let that = this;
            this.timer = setInterval(function () {
                if (finishTime - new Date().getTime() <= 0) {
                    finishTime = new Date(new Date().toLocaleDateString()).getTime() + 1 * 24 * 60 * 60 * 1000;
                }
                intervalTime = finishTime - new Date().getTime();

                day =  Math.floor(intervalTime/(1000*60*60*24));
                hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
                minutes = Math.floor(intervalTime / (60 * 1000) % 60);
                seconds = Math.floor(intervalTime / 1000 % 60); 
                that.renderTime(hours,minutes,seconds);
                
            },1000)
            
        },
        renderTime(hours,minutes,seconds) {
            let hoursObj = this.splitCell(hours);
            let minutesObj = this.splitCell(minutes);
            let secondsObj = this.splitCell(seconds);
            $('.hours-decade').text(hoursObj.decade);
            $('.hours-unit').text(hoursObj.unit);
            $('.minutes-decade').text(minutesObj.decade);
            $('.minutes-unit').text(minutesObj.unit);
            $('.seconds-decade').text(secondsObj.decade);
            $('.seconds-unit').text(secondsObj.unit);

        },
        splitCell(num) {
            let unit = Math.floor(num % 10);
            let decade = Math.floor(num / 10);
            return {
                unit: unit,
                decade: decade
            }
        },
        alert() {
            $('.maskLayer').css({
                display: 'block'
            })
            $('.mask-content').animate({
              opacity: 1,
              top: '50%'
            },300)
        },
    },
    mounted() {
      this.countDown();
        $('body').on('mouseenter',() => {
            $('body').one('mouseleave',() => {
                if (this.count == 0) {
                    this.alert();
                }
                this.count ++;
            })
        })
        $('.close').on('click',(event) => {
            event.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(this.timer);
        })
        $('.maskLayer').on('click',(e) => {
            e.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(this.timer);
        })
    },
    beforeDestroy() {
        $('body').off('mouseenter');
        clearInterval(this.timer);
        this.timer = null;
    }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/AirCooler.less");
</style>