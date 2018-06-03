<template>
    <div class="">
        <mt-header title="选择城市" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-index-list class="text-align-left">
            <mt-index-section index="热门城市">
                <template v-for="(city, index) in cityList.hottest">
                    <mt-cell :title="city.name" is-link :to="'/?city=' + city.code + '&name=' + city.name" :key="index"></mt-cell>
                </template>
            </mt-index-section>
            <template v-for="(city, index) in sortCity">
                <mt-index-section :index="city.firstChar.toUpperCase()" :key="index">
                    <mt-cell :title="city.name" is-link :to="'/?city=' + city.code" :key="index"></mt-cell>
                </mt-index-section>
            </template>
        </mt-index-list>
    </div>
</template>

<script type="text/javascript">
import Vue from 'vue';
import axios from 'axios';
import { Header, IndexList, IndexSection, Button, Cell } from 'mint-ui';

Vue.component(Header.name, Header);

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
export default {
    // 不要忘记了 name 属性
    name: 'city',
    // 变量
    data () {
        return {
            cityList: {},
            sortCity: []
        };
    },
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {
        async getCityList () {
            let req = {
                url: '/api/diction/select/dimension',
                method: 'get'
            };
            let res = await axios(req);
            if (res.data.status === 0) {
                this.cityList = res.data.data.location || {};
                let sortCity = [];
                this.cityList.national.forEach(it => {
                    sortCity = sortCity.concat(it.childList && it.childList);
                });
                sortCity.sort((a, b) => {
                    return a.firstChar < b.firstChar;
                });
                this.sortCity = sortCity;
                console.log(this.sortCity);
            }
        }
    },
    mounted () {
        this.getCityList();
    }
};
</script>

<style scoped lang="scss">
.header-btn {
    border: none;
    text-align: left;
    width: 100%;
}
.text-align-left {
    text-align: left;
}
</style>
