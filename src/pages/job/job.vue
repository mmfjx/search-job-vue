<template>
    <div class="job-contaier">
        <div class="header-top">
                <mt-button class="city" @click="$router.push({name: 'city'})" plain>{{$route.query.name || '北京'}}</mt-button>
                <search
                    class=""
                    v-model="query"
                    :show="true"
                    @click="queryJob"
                    placeholder="搜索"></search>
                <condition :mask.sync="mask"></condition>
        </div>
        <div class="content" >
            <!-- <mt-popup
            v-model="mask">
            发布时间
            </mt-popup> -->
            <div :class="{mask: mask}"></div>
            <job-item v-for="(item, index) in jobList" :key="index" :job-info="item"></job-item>
        </div>

            <!-- <div class="list-container"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20">
                <job-item v-for="(item, index) in jobList" :key="index" :job-info="item"></job-item>
            </div> -->
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Button, Popup, InfiniteScroll } from 'mint-ui';
import JobItem from '../../components/jobItem';
import Condition from '../../components/condition';
import Search from '../../components/search';

Vue.use(InfiniteScroll);
Vue.component(Popup.name, Popup);
Vue.component(Button.name, Button);
// Vue.component(Search.name, Search);
export default {
    name: 'job',
    data () {
        return {
            query: '',
            size: 10,
            loading: false,
            jobList: [],
            mask: false
        };
    },
    components: {
        Search,
        JobItem,
        Condition
    },
    mounted () {
        this.queryJob();
    },
    methods: {
        async queryJob (addSize) {
            this.size = addSize ? this.size + addSize : this.size;
            let reqParams = {
                url: '/api/recruit/select/similar',
                method: 'get',
                params: {
                    size: this.size
                }
            };
            let res = await axios(reqParams);
            if (res.data.status === 0) {
                this.jobList = res.data.data || [];
                this.loading = false;
            }
        },
        loadMore () {
            this.loading = true;
            this.queryJob(10);
        }
    }
};
</script>
<style>
.job-contaier {
    height: 100%;
    height: 100vh;
}
.header-top {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
}
.city {
    float: left;
    margin-top:7px;
    z-index: 2;
}
.content {
    overflow: auto;
    padding-top: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}
.list-container {
    margin-top: 8px;
    margin-bottom: 40px;
}
.mask {
    position: fixed;
    width: 100%;
    z-index: 1;
    height: 100%;
    opacity: 0.5;
    background: #000;
}
</style>
