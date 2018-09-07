<template>
    <Layout style="height: 100%">
            <Sider ref="side1" hide-trigger collapsible :width="256" :collapsed-width="64" v-model="isCollapsed" >
                <div class="logo" @click="goHome">
                    <img v-if="!isCollapsed" :src="!isCollapsed ? require('../../assets/img/logo.png') : require('../../assets/img/logo1.png')" style="width: 100%;"/>
                    <span v-else>HM</span>
                </div>
                <sliderMenu :menuList="menuList" :collapsed="isCollapsed" :active-name="$route.name" @on-select="handSelect"></sliderMenu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0px 20px 0'}" type="md-menu" size="24"></Icon>
                    <div class="user-con">
                         <Dropdown @on-click="dropClick">
                            <img src="../../assets/logo.png" class="auth-pic"/>
                            <DropdownMenu slot="list">
                                <DropdownItem name="userinfo">个人中心</DropdownItem>
                                <DropdownItem name="loginOut">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Header>
                <Content :style="{margin: '20px',marginRight:'0', background: '#fff', minHeight: '260px'}">
                     <router-view/>
                </Content>
            </Layout>
        </Layout>    
</template>

<script>
import sliderMenu from './components/sliderMenu';
import {mapMutations} from 'vuex'
import('./components/sliderMenu').then(res => {
    // console.log(res)
})
export default {
    data() {
        return {
        isCollapsed: false
        };
    },
    components:{
        sliderMenu
    },
    computed: {
        rotateIcon() {
            return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
        },
        menuitemClasses() {
        return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
        },
        menuList () {
            return this.$store.getters.menuList
        },
    },
    methods: {
        ...mapMutations([
            "LOGINOUT"
        ]),
        goHome(){
            this.$router.push({
                    path:"/home"
            })
        },
        //下拉菜单
        dropClick(name){
            if(name == 'loginOut'){
                this.LOGINOUT();
                this.$router.replace({
                    path:"login"
                })
            }
           
        },
        handSelect(name){
            if(name.indexOf("href_") != -1){
                window.open(name.split("_")[1]);
                return false;
            }
            this.$router.push({
                name:name
            })
            
        },
        collapsedSider() {
            this.$refs.side1.toggleCollapse();
        }
    },
    created(){
        // console.log(this.menuList)
    }
};
</script>

<style scoped>
.logo{
    width: 100%;
    height: 64px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    /* background: red; */
}
.user-con{
    height: 64px;
    margin-right: 20px;
}
.user-con .ivu-dropdown{
    height: 64px;
}
.ivu-dropdown-rel{
    height: 100% !important;
    
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.auth-pic{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 10px;
    
}
.layout-header-bar {
    display: flex;
    justify-content:space-between;
    align-items: center;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
  cursor: pointer;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-layout-sider-collapsed .ivu-menu span{
    width: 0;
    transition: width .2s ease;
}
</style>
