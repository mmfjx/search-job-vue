<template>
  <div>
      <mt-search
        v-model="serch"
        cancel-text="取消"
        :show="true"
        @click="queryJob"
        placeholder="搜索">
        <template v-for="(item, index) in jobList">
            <job-item :key="index" :job-info="item"></job-item>
        </template>
      </mt-search>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { Search, Button } from 'mint-ui';
import JobItem from '../../components/jobItem';

Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
export default {
    name: 'job',
    data () {
        return {
            serch: '',
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
        async queryJob () {
            let reqParams = {
                url: '/api/recruit/select/similar',
                method: 'get',
                params: {
                    size: 10
                }
            };
            let res = await axios(reqParams);
            if (res.status === 0) {
                this.jobList = res.data || [];
                console.log(this.jobList);
            }
        }
    }
};
</script>
<style>

</style>
