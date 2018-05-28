<template>
  <div>
      <mt-button class="city" @click="$router.push({name: 'city'})" plain>{{$route.query.name || '北京'}}</mt-button>
      <mt-search
        class=""
        v-model="serch"
        cancel-text="取消"
        :show="true"
        @click="queryJob"
        placeholder="搜索">
        <job-item v-for="(item, index) in jobList" :key="index" :job-info="item"></job-item>

        <!-- <div class="list-container"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="20">
            <job-item v-for="(item, index) in jobList" :key="index" :job-info="item"></job-item>
        </div> -->
      </mt-search>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Search, Button, InfiniteScroll } from 'mint-ui';
import JobItem from '../../components/jobItem';

Vue.use(InfiniteScroll);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
export default {
    name: 'job',
    data () {
        return {
            serch: '',
            size: 10,
            loading: false,
            jobList: []
        };
    },
    components: {
        JobItem
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
.city {
    float: left;
    margin-top:7px;
    z-index: 2;
}
.list-container {
    margin-top: 8px;
    margin-bottom: 40px;
}
</style>
