<template>
    <div>
        <div class="btn-container">
            <span class="btn" :class="{ active: jobConditionActive}" @click="jobCondition">职位</span>
            <span class="btn" :class="{ active: companyConditionActive}" @click="companyCondition">公司</span>
            <span class="btn" :class="{ active: sortActive}" @click="sort">排序</span>
        </div>
        <mt-popup
            position="bottom"
            v-model="jobConditionActive" class="popup">
            <div class="section-inner">
                <div class="title">发布时间</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.pulishTime.indexOf('today') !== -1}"  v-on:click="choose('pulishTime', 'today')">今天发布</button>
                    <button class="radio-button" :class="{ active: queryObj.pulishTime.indexOf('threeDay') !== -1}"  v-on:click="choose('pulishTime', 'threeDay')">三天内</button>
                    <button class="radio-button" :class="{ active: queryObj.pulishTime.indexOf('week') !== -1}"  v-on:click="choose('pulishTime', 'week')">一周内</button>
                    <button class="radio-button" :class="{ active: queryObj.pulishTime.indexOf('twoWeek') !== -1}"  v-on:click="choose('pulishTime', 'twoWeek')">两周内</button>
                </div>
            </div>
            <div class="section-inner">
                <div class="title">工作经验</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.workYear.indexOf('one') !== -1}"  v-on:click="choose('workYear', 'one')">应届毕业生</button>
                    <button class="radio-button" :class="{ active: queryObj.workYear.indexOf('three') !== -1}"  v-on:click="choose('workYear', 'three')">3年及一下</button>
                    <button class="radio-button" :class="{ active: queryObj.workYear.indexOf('threeFive') !== -1}"  v-on:click="choose('workYear', 'threeFive')">3-5年</button>
                    <button class="radio-button" :class="{ active: queryObj.workYear.indexOf('fiveTen') !== -1}"  v-on:click="choose('workYear', 'fiveTen')">5-10年</button>
                    <button class="radio-button" :class="{ active: queryObj.workYear.indexOf('ten') !== -1}"  v-on:click="choose('workYear', 'ten')">10年以上</button>
                </div>
            </div>
            <div class="section-inner">
                <div class="title">学历要求</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.wordEdu.indexOf('Junior') !== -1}"  v-on:click="choose('wordEdu', 'Junior')">大专</button>
                    <button class="radio-button" :class="{ active: queryObj.wordEdu.indexOf('bachelor') !== -1}"  v-on:click="choose('wordEdu', 'bachelor')">本科</button>
                    <button class="radio-button" :class="{ active: queryObj.wordEdu.indexOf('master') !== -1}"  v-on:click="choose('wordEdu', 'master')">硕士</button>
                    <button class="radio-button" :class="{ active: queryObj.wordEdu.indexOf('doctor') !== -1}"  v-on:click="choose('wordEdu', 'doctor')">博士</button>
                    <button class="radio-button" :class="{ active: queryObj.wordEdu.indexOf('none') !== -1}"  v-on:click="choose('wordEdu', 'none')">不要求</button>
                </div>
            </div>
            <div class="section-inner">
                <div class="title">工作性质</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.workType.indexOf('full') !== -1}"  v-on:click="choose('workType', 'full')">全职</button>
                    <button class="radio-button" :class="{ active: queryObj.workType.indexOf('part') !== -1}"  v-on:click="choose('workType', 'part')">兼职</button>
                    <button class="radio-button" :class="{ active: queryObj.workType.indexOf('practice') !== -1}"  v-on:click="choose('workType', 'practice')">实习</button>
                </div>
            </div>
            <div class="section-inner">
                <mt-button class="submit-btn" type="primary" @click.native="query('jobConditionActive')">确定</mt-button>
            </div>
        </mt-popup>
        <mt-popup
            position="bottom"
            v-model="companyConditionActive" class="popup">
            <div class="section-inner">
                <div class="title">融资阶段</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('未融资') !== -1}"  v-on:click="choose('firmInvest', '未融资')">未融资</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('天使轮') !== -1}"  v-on:click="choose('firmInvest', '天使轮')">天使轮</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('A轮') !== -1}"  v-on:click="choose('firmInvest', 'A轮')">A轮</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('B轮') !== -1}"  v-on:click="choose('firmInvest', 'B轮')">B轮</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('C轮') !== -1}"  v-on:click="choose('firmInvest', 'C轮')">C轮</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('D轮及以上') !== -1}"  v-on:click="choose('firmInvest', 'D轮及以上')">D轮及以上</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('上市公司') !== -1}"  v-on:click="choose('firmInvest', '上市公司')">上市公司</button>
                    <button class="radio-button" :class="{ active: queryObj.firmInvest.indexOf('不需要融资') !== -1}"  v-on:click="choose('firmInvest', '不需要融资')">不需要融资</button>
                </div>
            </div>
            <div class="section-inner">
                <div class="title">行业领域</div>
                <div class="raio-button-section">
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('不限') !== -1}"  v-on:click="choose('firmIndustry', '不限')">不限</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('移动互联网') !== -1}"  v-on:click="choose('firmIndustry', '移动互联网')">移动互联网</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('电子商务') !== -1}"  v-on:click="choose('firmIndustry', '电子商务')">电子商务</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('社交网络') !== -1}"  v-on:click="choose('firmIndustry', '社交网络')">社交网络</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('企业服务') !== -1}"  v-on:click="choose('firmIndustry', '企业服务')">企业服务</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('O2O') !== -1}"  v-on:click="choose('firmIndustry', 'O2O')">O2O</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('教育') !== -1}"  v-on:click="choose('firmIndustry', '教育')">教育</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('游戏') !== -1}"  v-on:click="choose('firmIndustry', '游戏')">游戏</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('旅游') !== -1}"  v-on:click="choose('firmIndustry', '旅游')">旅游</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('金融') !== -1}"  v-on:click="choose('firmIndustry', '金融')">金融</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('医疗健康') !== -1}"  v-on:click="choose('firmIndustry', '医疗健康')">医疗健康</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('生活服务') !== -1}"  v-on:click="choose('firmIndustry', '生活服务')">生活服务</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('信息安全') !== -1}"  v-on:click="choose('firmIndustry', '信息安全')">信息安全</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('数据服务') !== -1}"  v-on:click="choose('firmIndustry', '数据服务')">数据服务</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('广告营销') !== -1}"  v-on:click="choose('firmIndustry', '广告营销')">广告营销</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('文化娱乐') !== -1}"  v-on:click="choose('firmIndustry', '文化娱乐')">文化娱乐</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('硬件') !== -1}"  v-on:click="choose('firmIndustry', '硬件')">硬件</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('分类信息') !== -1}"  v-on:click="choose('firmIndustry', '分类信息')">分类信息</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('招聘') !== -1}"  v-on:click="choose('firmIndustry', '招聘')">招聘</button>
                    <button class="radio-button" :class="{ active: queryObj.firmIndustry.indexOf('其他') !== -1}"  v-on:click="choose('firmIndustry', '其他')">其他</button>
                </div>
            </div>
            <div class="section-inner">
                <mt-button class="submit-btn" type="primary" @click.native="query('companyConditionActive')">确定</mt-button>
            </div>
        </mt-popup>
        <mt-popup
        position="bottom"
        v-model="sortActive" class="popup">
        <div class="section-inner">
            <mt-button class="sortBtn" :type="queryObj.sort === 'smart' ? 'primary' : 'default'" @click.native="queryObj.sort='smart';sortActive=false">智能排序</mt-button>
            <mt-button class="sortBtn" :type="queryObj.sort === 'time' ? 'primary' : 'default'" @click.native="queryObj.sort='time';sortActive=false">时间排序</mt-button>
        </div>
        </mt-popup>
    </div>
</template>

<script>
import Vue from 'vue';
import { Popup, Button } from 'mint-ui';

Vue.component(Button.name, Button);

Vue.component(Popup.name, Popup);
export default {
    name: 'condition',
    props: {
        mask: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            jobConditionActive: false,
            queryObj: {
                workType: [],
                pulishTime: [],
                workYear: [],
                wordEdu: [],
                firmInvest: [],
                firmIndustry: [],
                sort: null
            },
            companyConditionActive: false,
            sortActive: false
        };
    },
    components: {

    },
    methods: {
        jobCondition () {
            this.jobConditionActive = true;
        },
        companyCondition () {
            this.companyConditionActive = true;
        },
        sort () {
            this.sortActive = true;
        },
        choose (faName, name) {
            if (!this.queryObj[faName]) {
                return;
            }
            let index = this.queryObj[faName].indexOf(name);
            if (index === -1) {
                this.queryObj[faName].push(name);
            } else {
                this.queryObj[faName].splice(index, 1);
            }
        },
        query (active) {
            this.$emit('queryCondition', this.queryObj);
            this[active] = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.btn-container {
    margin-top: 8px;
    margin-bottom: 5px;
    display: flex;
    height: 40px;
    font-size: 0.9rem;
    justify-content: space-between;
    .btn {
        flex: auto;
        text-align: center;
        padding: 5px;
        vertical-align: middle;
    }
    .active {
        color:lightskyblue;
    }
}
.popup {
    width: 100%;
    width: 100vw;
    padding: 10px;
    text-align: left;
}
.section-inner {
    text-align: left;
    padding: 10px;
    .title {
        margin-bottom: 5px;
    }
}
.raio-button-section {
    display: flex;
    flex-wrap: wrap;
}
.radio-button {
    border: 1px solid #cccc;
    background: none;
    border-radius: 2px;
    width: 80px;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 4px;
    &:focus {
        outline: none;
    }
}
.active {
    border: 1px solid lightskyblue;
    color: lightskyblue;
}
.submit-btn {
    width: 95vw;
}
.sortBtn {
    width: 45vw;
    margin-right: 5px;
}
</style>
