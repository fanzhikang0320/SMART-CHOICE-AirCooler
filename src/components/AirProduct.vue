<template>
    <div class="air-product-container">
        <div :class="{'card-item':true, 'no-best': index > 0,  'clearfix': true, 'first-item': index == 0}" v-for="(item,index) in airData" :key="index">
        <div class="best-box" v-if="index == 0">Best seller in 2020</div>
        <span :class="{'number': true,'gray': index > 2}">{{index + 1}}</span>
        <div class="card-left">
            <img :src="item.picture" :alt="item.name" class="picture">
        </div>
        <div class="card-center">
            <img :src="item.logo" :alt="item.name" class="product-logo" v-if="item.logo">
            <h4 v-else class="product-name">{{item.name}}</h4>

            <dl class="list-box">
                <dt v-if="item.desc" v-html="item.desc"></dt>
                <dd v-for="(itm,id) in item.list" :key="id">
                    <span class="icon"></span>
                    <p class="text">{{itm.text}}</p>
                </dd>
            </dl>
            
        </div>
        <div class="card-right">
            <div class="circle-box">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <span class="score">{{item.rate}}</span>
            </div>
            <a :href="item.link" target="_blank" class="btn" rel="noopener noreferrer"><span>Visit Site</span><span class="icon"></span></a>
            <!-- <a :href="item.reviewLink" target="_blank" class="review" rel="noopener noreferrer">Read Review</a> -->
        </div>
    </div>
    </div>
    
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {
            airData: [
                {
                    id: 1,
                    name: 'Blaux',
                    picture: require('../assets/image/air/blaux.png'),
                    logo: require('../assets/image/air/blauxLogo.png'),
                    link: '/airDetail',
                    reviewLink: 'https://www.frstbte.com/7QLQCMW/5B6Z3NT/?uid=7012',
                    rate: '9.8',
                    desc: '<p style="font-size:20px;"><strong><span style="color:#F96E35;">Limited Time Offer: </span>Get 50% OFF plus Free Delivery</strong></p>',
                    list: [
                        {
                            text: 'Keeps large rooms super cool'
                        },
                        {
                            text: 'Long last battery life'
                        },
                        {
                            text: 'Unbeatable low price'
                        },
                        {
                            text: 'Advanced proximity motion sensor'
                        },
                        {
                            text: 'Cord-free operation'
                        },
                        {
                            text: 'Build-in water tank lasts up to 8 hours'
                        },
                        {
                            text: 'Three-speed personal space air humidifier'
                        },
                        {
                            text: 'Advanced proximity motion sensor'
                        },
                        {
                            text: 'Low noise'
                        },
                        {
                            text: '30-Day Money Back Guarantee'
                        }
                        
                    ]
                },                
                {
                    id: 2,
                    name: 'UVCooler',
                    picture:  require('../assets/image/air/UVC.png'),
                    logo: require('../assets/image/air/UVCLogo.png'),
                    link: 'https://uvcoolershop.com?widipub_id=5f07f06db7bb81096719fce3&amp;wtrd_offer_id=5ed67e3e824e0b59e570f103&amp;wtrd_offer_lids[]=5ed67e7098442f184e377e32&amp;_locale=en',
                    reviewLink: 'https://uvcoolershop.com?widipub_id=5f07f06db7bb81096719fce3&amp;wtrd_offer_id=5ed67e3e824e0b59e570f103&amp;wtrd_offer_lids[]=5ed67e7098442f184e377e32&amp;_locale=en',
                    rate: '9.6',
                    desc: '<p style="font-size:20px;"><strong><span style="color:#F96E35;">Limited Time Offer: </span>Get 50% OFF plus Free Delivery</strong></p>',
                    list: [
                        {
                            text: 'Small and light with UV sterilizer'
                        },
                        {
                            text: 'Long working mode for night time up to12h'
                        },
                        {
                            text: 'Easy to use'
                        },
                        {
                            text: 'Freon free, cools down spaces using just water and ice'
                        },
                        {
                            text: 'Silent working mode'
                        },
                        {
                            text: 'Perfect for room and desk air conditioning'
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'CoolAir',
                    picture: require('../assets/image/air/coolair.png'),
                    logo: require('../assets/image/air/coolairLogo.png'),
                    link: 'https://hyperstech.com/coolair/order.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    reviewLink: 'https://hyperstech.com/intl_5/order.php?prod=coolair&net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    rate: '9.6',
                    desc: '<p style="font-size:20px;"><strong><span style="color:#F96E35;">Limited Time Offer: </span>Get 50% OFF plus Free Delivery</strong></p>',
                    list: [
                        {
                            text: 'Fast cooling mode'
                        },
                        {
                            text: 'Sleep mode to use during the night'
                        },
                        {
                            text: 'Can cool, humidify and purify the air'
                        },
                        {
                            text: 'It can be powered via a USB port'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Arcticbreeze',
                    picture: require('../assets/image/air/arcticbreeze.png'),
                    logo: require('../assets/image/air/arcticbreezeLogo.png'),
                    link: 'https://www.esplma.com/7QLQCMW/5GTH4TX/?uid=7574',
                    reviewLink: 'https://hypertechx.com/ps/freshr/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    rate: '9.5',
                    desc: '',
                    list: [
                        {
                            text: 'Cools areas up to 30 square meters effectively'
                        },
                        {
                            text: 'Easy to use'
                        },
                        {
                            text: 'Silent working mode'
                        },
                        {
                            text: 'Perfect for room and desk air conditioning'
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Blaux Personal fan',
                    picture:  require('../assets/image/air/blauxpersonalfan.png'),
                    logo: require('../assets/image/air/blauxLogo.png'),
                    link: 'https://www.frstbte.com/7QLQCMW/5723JL1/?uid=6580',
                    reviewLink: 'https://www.frstbte.com/7QLQCMW/5C5BTND/?uid=7119',
                    rate: '8.5',
                    desc: '',
                    list: [
                        {
                            text: 'Wearable personal  AC'
                        },
                        {
                            text: 'Keep cool anywhere'
                        },
                        {
                            text: 'One size fits all'
                        },
                        {
                            text: '3 fan speed modes'
                        },
                        {
                            text: 'LED ring to indicate power and charging status'
                        },
                        {
                            text: '30 hours runtime'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        /**
         * 圆圈动画
         * 思路：
         * 判断当前的滚动条所在的位置（也就是滚动的距离）加上屏幕的高度，如果超过了目标元素距离文档顶部的距离，那么就可以添加动画了
         * @param {*} scrollTop 滚动条滚动的距离
         */
        animation(scrollTop) {

            let screenHeight = $(window).height(); //获取当前屏幕的高度

            $('.circle-box').each(function (index) {
                var eleTop = $(this).offset().top;
                
                if (scrollTop + screenHeight >= eleTop) {
                    // console.log('第'+index+'显示');
                    var nowChangeEle = $('.circle2').get(index);
                    var scoreEle = $('.score').get(index);
                    var score = +($(scoreEle).text());
                    var deg = - Math.floor((180 / 5) * (score - 5) - 45);
                    $(nowChangeEle).css({
                        transform: 'rotateZ('+ deg +'deg)'
                    })
                }
            })
        }

    },
    mounted() {
        let scrollTop = 0;
        this.animation(scrollTop);

        $(window).on('scroll',() => {
            scrollTop = $(window).scrollTop();
            this.animation(scrollTop)
        })
    },
    beforeDestroy() {
        $(window).off('scroll');
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/AirProduct.less');
</style>