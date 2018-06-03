<template>
    <div>
        <mt-header title="职位详情">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="job-card">
            <div class="job-title border-bottom">
                <p class="job-name">{{jobDetail.jobName}}</p>
                <div>
                    <span class="salary">{{jobDetail.workWage}}K</span>
                    <span>|{{jobDetail.cityName}}</span>
                    <span>|{{jobDetail.workYear}}</span>
                    <span>|{{jobDetail.workEdu}}</span>
                </div>
                <div class="light-color small-font">{{jobDetail.duties}}</div>
            </div>
            <div class="job-firm">
                 <div class="firm-left">
                    <div>{{jobDetail.firm.name}}</div>
                    <div class="small-font">
                        <span>{{jobDetail.firm.industry}}</span>
                        <span>|{{jobDetail.firm.recruitTotal}}</span>
                        <span>|{{jobDetail.firm.invest}}</span>
                        <span>|{{jobDetail.firm.signature}}</span>
                    </div>
                 </div>
                 <div class="job-img">
                     <img :src="jobDetail.firm.logo" alt="job-logo">
                 </div>
            </div>
        </div>
        <div class="job-card">
            <div class="detail-title">
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>职位描述</span>
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div>
                <template v-for="(tag, index) in jobDetail.demandTags">
                    <round-badge :key="index">{{tag}}</round-badge>
                </template>
            </div>
            <div class="detail-content light-color small-font">
                <span>岗位要求：</span>
                <div>{{jobDetail.duties}}</div>
                <!-- <ul class="list-style">
                    <li>岗位要求：</li>
                </ul> -->
            </div>
            <div class="detail-title">
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>职位发布者</span>
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div class="hunter-content">
                <img :src="jobDetail.hunter.avatar" alt="avatar">
                <div>
                    <span>{{jobDetail.hunter.showName}}</span>
                    <span class="light-color small-font">{{jobDetail.hunter.identity}}</span>
                </div>
            </div>
            <div class="detail-title">
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>工作地址</span>
                <span class="hr-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div class="light-color small-font">
                {{jobDetail.cityName + jobDetail.cityAddress}}
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import RoundBadge from '../../components/roundBadge';
export default {
    // 不要忘记了 name 属性
    name: 'job-detail',
    // 组合其它组件
    extends: {},
    // 组件属性、变量
    props: {
        id: {
            type: [Number, String],
            default: ''
        }
    // 按字母顺序
    },
    // 变量
    data () {
        return {
            jobDetail: {}
        };
    },
    computed: {

    },
    // 使用其它组件
    components: {
        RoundBadge
    },
    // 方法
    watch: {},
    methods: {
        async queryJobDetail () {
            let reqParams = {
                url: '/api/recruit/select/overall',
                method: 'get',
                params: {
                    uuid: this.$route.params.id
                }
            };
            let res = await axios(reqParams);
            if (res.data.status === 0) {
                this.jobDetail = res.data.data || {};
            }
        }
    },
    mounted () {
        this.queryJobDetail();
    }
};
</script>

<style scoped lang="scss">
.job-card {
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    padding: 15px 10px;
    margin-bottom: 10px;
}
.job-title {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-content: flex-start;
    padding: 10px;
}
.job-name {
    color: #000000;
    font-size: 1.2rem;
    margin: 5px 0px;
}
.job-firm {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    .firm-left {
        flex: auto;
        text-align: left;
    }
    .job-img {
        display: flex;
        flex: 0 0 60px;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
        }
    }
}
.border-bottom {
    border-bottom: 1px solid #cccccc;
}
.salary {
    color: orange;
}
.light-color {
    color: #666666;
}
.small-font {
    font-size: 0.8rem;
}
.detail-title {
    display: flex;
    margin-top: 10px;
}
.hr-line {
    text-decoration: line-through;
    flex: auto;
    color: #cccc;
}
.list-style {
    list-style-type: decimal;
}
.detail-content {
    text-align: left;
    padding: 10px;
}
.hunter-content {
    padding: 10px;
    img {
        width: 50px;
        height: 50px;
    }
}

</style>
