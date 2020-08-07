<template>
  <div class="airDetail-wrapper">
       
       <div class="header-container clearfix">
            <div class="header-left">
                <img src="@/assets/image/logo.png" alt="SMART CHOICES" class="logo">
                <span class="line"></span>
                <p class="desc">Being  Cool and Comfortable in Home or Office with Portable AC</p>
            </div>
        </div>
      <div class="airDetail-main clearfix">
          <div class="main-container">
              <div class="detail-title-area">
                  <h1 class="detail-title">Real Relief from the Scorching Summer Heat & Humidity <span class="blue">- Blaux Portable AC Review</span></h1>
              </div>
              <div class="article-area">
                  <div class="author-box">
                      <div class="author-desc-box">
                          <img src="@/assets/image/blaux/author.jpg" alt="Peter Smith" class="headImg">
                          <div class="name-box">
                              <p>by <strong class="name">Peter Smith</strong></p>
                              <p class="date">July 07 2020</p>
                          </div>
                      </div>
                      <div class="share-box">
                          <img src="@/assets/image/blaux/facebook.svg" alt="facebook" @click="shareFacebook">
                          <img src="@/assets/image/blaux/linkin.svg" alt="linkin" @click="shareLinkedin">
                          <img src="@/assets/image/blaux/twitter.svg" alt="twitter" @click="shareTwitter">
                      </div>
                  </div>
                  <div class="content-box">
                      <img src="@/assets/image/blaux/b1.jpg" alt="" class="picture">
                      <p>Purchasing protable AC has become a craze, especially in hot summer. Compared to traditional  AC, there are too many reasons for us to choose portable air conditioners.</p>
                        <p>Portable AC can be moved from room to room on casters and installed without drilling holes or otherwise risking damage to windows, and It consumes little energy, thus you don't have to worry about high electricity anymore.</p>
                        <p>In this summer, there are many portable ACs on market and you don't know which one is the best. We bought and tested about 20 products and chose the most popular one to write a review——Blaux Portable AC.</p>
                  </div>
              </div>
              <div class="protable-area">
                  <h2 class="area-title">Best Portable AC in Summer 2020——Blaux Portable AC</h2>
                    <div class="content">
                        <p>The Blaux company was formed in 2019 by a group of experienced air cooler engineers from the EV (Electric vehicle) industry.</p>
                        <p><strong>Their goal was to make a low cost and low maintanance AC unit that is suitable for any home, office or car.</strong></p>
                        <p>With no installation costs, no maintenance costs and it being more energy efficient, the Blaux Portable AC is an engineering masterpiece.</p>
                        <p>Compared to a traditional AC it's 300% <strong>more efficient, smaller, portable - and it cools air much faster!</strong></p>
                        <p>So, what can it actually do? Everything the traditional AC can - cool any room, regulate humidity, filter dust particles in the air, etc, etc, etc...</p>
                        <p>But what makes the Blaux Portable AC special is it's price, ultra-compact design and portability (100% cord free).</p>
                        <p>In my opinion, this is the next generation of AC units.</p>
                    </div>
              </div>
              <div class="howWork-area">
                  <h2 class="area-title">How does it work?</h2>
                  <div class="content">
                      <img src="@/assets/image/blaux/b2.jpg" alt="" class="picture">
                      <p>Blaux AC works at a 2.5 m/s speed that chills your surroundings instantly. To get it to work, you only have to charge the cooler and turn in on. You don’t need to keep the device plugged into a cable round the clock. You only need to charge it timely and that is all. The LED ring on the portable machine will alert you when the charging dies.</p>
                        <p>Start with pouring in water into the tank. Next, adjust the replaceable water curtain and turn on the air cooler.</p>
                        <p>The air blows via two outlets or holes. One of these blows out unclean air. This is hot air. On the other hand, the other outlet sucks in air from the surroundings and passes it through its filter system to deliver cool and clean air to you.</p>
                        <p>Put simply, one opening spits out the unclean and used hot air and the other takes in room temperature air and cleanses it to deliver cold and purified air to you.<p></p>
                  </div>
              </div>
              <div class="easyUse-area">
                  <div class="area-title">Is Blaux Portable AC Easy to use？</div>
                  <div class="easyUse-container">
                      <img src="@/assets/image/blaux/b3.jpg" alt="" class="picture">
                      <div class="content">
                          <p>It's really easy to set up. Fill the 300ml tank with tap water and press the start button.</p>
                            <p>Its size is small compared to a traditional AC, but because of its efficiency 1 full  resevoir will last you the entire day. The powerful rechargeable 200mAh battery makes the <a :href="blauxLink" target="_blank">Blaux Portable AC</a> 100% cordless. You can take it to any room you want, the office, bedroom, garage, kitchen... Get instant relief from the heat wherever you go.</p>
                            <p>You can charge the battery using any USB port - even your laptop could power it. Set the device to 1 of 3 difference modes with the buttons on the top. <strong>1. Cool, 2. Chill, 3. Freezing.</strong> You're able to decrease any medium sized room by up to 18°F /10°C.</p>
                            <p>BUT, it does more than just cool down the room. The <a :href="blauxLink" target="_blank">Blaux  Portable AC</a> also filters your surrounding air, making it healthier and easier to breathe. Especially great for those with seasonal allergies!</p>
                            <p>No need to worry about noise either, the <a :href="blauxLink" target="_blank">Blaux Portable AC</a> is extremely quiet and barely noticable. Perfect for in the bedroom during those warm summer nights.</p>
                      </div>
                  </div>
              </div>
              <div class="question-area">
                  <h2 class="area-title">Questions You May Ask</h2>
                    <div class="question-container">
                        <div class="question-item" v-for="(item,index) in questionData" :key="index">
                            <h2 class="title">{{item.title}}</h2>
                            <div class="content" v-html="item.content"></div>
                        </div>
                    </div>
              </div>
              <div class="howGet-area">
                  <h2 class="area-title">How Do I Get A Real Blaux Portable AC?</h2>
                  <p class="title">Get Your <a :href="blauxLink">Blaux Portable AC</a> from their Official Site</p>
                    <div class="howGet-container">
                        <p class="sub">The situation in factories is fluid and out of our control!!</p>
                        <img src="@/assets/image/blaux/b4.jpg" alt="" class="picture">
                        <p class="desc">If you want QUALITY, DURABILITY, POWER, and COMFORT, SAVE MONEY ON ELECTRIC BILLS AND GET ONE NOW!</p>
                        <a :href="blauxLink" target="_blank" class="btn">SAVE 50%-BUY NOW!</a>
                    </div>
                    <div class="experience-container">
                        <h3 class="experience-title">Here’s my experience with the Blaux Portable AC:</h3>
                        <div class="img-box">
                            <div class="img-item">
                                <div class="circle-img">
                                    <img src="@/assets/image/blaux/shopCar.svg" alt="" class="icon">
                                </div>
                                <p class="text">I ordered from the official website here and got a great price.</p>
                            </div>
                             <div class="img-item">
                                <div class="circle-img">
                                    <img src="@/assets/image/blaux/fast.svg" alt="" class="icon">
                                </div>
                                <p class="text">It came fast, in about a week or so.</p>
                            </div>
                             <div class="img-item">
                                <div class="circle-img">
                                    <img src="@/assets/image/blaux/water.svg" alt="" class="icon">
                                </div>
                                <p class="text">I filled it with water, charged the battery, and put it on my work desk, in front of my computer.</p>
                            </div>
                        </div>
                        <div class="content">
                            <p>WOW! This thing was great! There was a really powerful blast of cool air. I was sweating before I turned it on, but it stopped right away.</p>
                            <p>I didn’t have to turn on the room air conditioner, this was everything I needed.</p>
                            <p>I gave my wife one to use in the kitchen, and she loved it.</p>
                        </div>
                    </div>
              </div>

          </div>
          <div class="main-fixed">
            <div class="main-fixed-container">
                <a :href="blauxLink" target="_blank" rel="noopener noreferrer" class="ad-link">
                    <div class="special-area fixed-area">
                        <h2 class="fixed-title">Special Discount：50%OFF</h2>
                        <img src="@/assets/image/blaux/a.jpg" alt="" class="picture">
                        <a :href="blauxLink" target="_blank" rel="noopener noreferrer" class="btn">Get BLAUX  Now </a>
                    </div>
                </a>
                <div class="about-author-area fixed-area">
                    <h2 class="fixed-title">About the Author</h2>
                    <img src="@/assets/image/blaux/author.jpg" alt="Peter Smith" class="picture">
                    <p class="name">Peter Smith</p>
                    <p class="desc">Our product researcher</p>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
            blauxLink: 'https://www.frstbte.com/7QLQCMW/5B6Z3NT/?uid=7110',
            questionData: [
                {
                    title: 'Why are portable air conditioners so popular?',
                    content: `<p>Because it is not like the traditional air conditioning needs to be installed, it is very portable, even can be put into the bag to carry. For example, it can be placed in a smaller room or taken out for camping. In addition, it is very cheap and environmentally friendly</p>`
                },
                {
                    title: 'Does portable air conditioning consume a lot of electricity？',
                    content: `<p>The answer is No. Although it has a powerful cooling function, the dynamic sensing system can automatically turn off when you are not using it. You may not worry about rooms becoming too cool, because most portable air conditioners have multiple settings to suit any room size or temperature preference. It was so easy to get the desired temperature we felt comfortable at.</p>`
                },
                {
                    title: 'Will air conditioning make the air dry?',
                    content: `<p>No, Because the portable air conditioner uses water to cool the air, it can automatically double as an air humidifier. So don't worry about the dry mouth or sore eyes, just breathe clean, cool and humid air.</p>`
                },
                {
                    title: 'Does Blaux Portable AC require any installation?',
                    content: `<p>No, it works directly out of the box and is really simple to use. You will have it cooling any room in less than 60 seconds.</p>`
                },
                {
                    title: 'Do I need to buy my own batteries?',
                    content: `<p>No, Blaux Portable AC comes with a powerful rechargeable 200mAh battery that will last you the entire day. The USB (type C) charging cable is also included.</p>`
                }
            ],
            shareBasicUrl: 'https://air-coolers.smartchoice.reviews',
            shareBasicTitle: '2020’s TOP 5 Portable Air Coolers'
        }
    },
    methods: {
        shareFacebook() {
            let url = 'http://www.facebook.com/sharer/sharer.php?u='+ this.shareBasicUrl,
                title =this.shareBasicTitle,
                w = 600,
                h = 400,
                wLeft = window.screenLeft ? window.screenLeft : window.screenX,
                wTop = window.screenTop ? window.screenTop : window.screenY;
    
            let left = wLeft + (window.innerWidth / 2) - (w / 2);
            let top = wTop + (window.innerHeight / 2) - (h / 2);

            window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        },
        shareTwitter() {
            let url = this.shareBasicUrl;
            let title = this.shareBasicTitle;
            window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
        },
        shareLinkedin() {
            let url = this.shareBasicUrl,
                title = this.shareBasicTitle;
            window.open(`https://www.linkedin.com/shareArticle?mini=true&source=str&title=${title}&url=${url}`,'','left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
        },
        
        fixed(scrollTop,top) {
            //获取导航栏的高度
            // let navHeight = $('.header-container').outerHeight(true);
            let right = $('.airDetail-main').offset().left;
            let footerTop = $('.footer-container').offset().top;
            //获取可视区高度
            let screenHeight = $(window).height();
            let d = $('.main-fixed-container').height();
            if (scrollTop  >= top) {

                if (scrollTop + screenHeight >= footerTop){
                    window.console.log( Math.abs(screenHeight - d));
                    $('.main-fixed-container').css({
                        position: 'absolute',
                        // screenHeight + Math.abs(screenHeight - d)
                        top: footerTop -  screenHeight - 300 + 'px',
                        right: 0
                    })
                } else {
                    $('.main-fixed-container').css({
                        position: 'fixed',
                        top: top + 'px',
                        right: right + 'px'
                    })
                }
                
            } else if (scrollTop < top){
                $('.main-fixed-container').css({
                    position: 'absolute',
                    top: top + 'px',
                    right: 0
                })
            }
        }
    },
    mounted() {
        //获取元素距离顶部的距离
        let top = $('.main-fixed-container').position().top;
        let scrollTop = 0;
        this.fixed(scrollTop,top);
        $(window).on('scroll',() => {
            scrollTop = $(window).scrollTop();
            this.fixed(scrollTop,top)
        })

        
    },
    beforeDestroy() {
        $(window).off('scroll');

    }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/AirDetail.less');
</style>