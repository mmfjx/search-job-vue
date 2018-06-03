<template>
    <div class="">
        <card>
            <div class="person-card">
                 <div class="name">
                    <div>{{userInfo.name}}</div>
                    <div class="light-color small-font">前端开发工程师</div>
                 </div>
                 <div class="image">
                     <img v-if ="userInfo.logo" :src="userInfo.logo" alt="logo">
                     <img v-if ="!userInfo.logo" src="../../assets/user.svg">
                 </div>
            </div>
        </card>
    </div>
</template>

<script type="text/javascript">
import Card from '../../components/card';
import axios from 'axios';

export default {
    // 不要忘记了 name 属性
    name: 'wo',
    // 变量
    data () {
        return {
            userInfo: {
                name: '咩没费'
            }
        };
    },
    computed: {},
    // 使用其它组件
    components: {
        Card
    },
    // 方法
    watch: {},
    methods: {
        async queryUserInfo () {
            let reqParams = {
                url: '/api/account/userinfo',
                method: 'get'
            };
            let res = await axios(reqParams);
            if (res.data.status === 0) {
                this.userInfo = res.data.data || {};
            }
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {
        this.queryUserInfo();
    }
};
</script>

<style scoped lang="scss">
.person-card {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    .name {
        flex: auto;
        text-align: left;
    }
    .image {
        display: flex;
        border: solid 1px #ccc;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        color:moccasin;
        justify-content: center;
        align-items: center;
        img {
            width: 40px;
            height: 40px;
        }
    }
}
.light-color {
    color: #666666;
}
.small-font {
    font-size: 0.9rem;
}

</style>
