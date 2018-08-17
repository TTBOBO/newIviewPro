<template>
    <Layout style="height: 100%">
            <Sider ref="side1" hide-trigger collapsible :width="256" :collapsed-width="64" v-model="isCollapsed" >
                <sliderMenu :menuList="menuList" @on-select="handSelect"></sliderMenu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                     <router-view/>
                </Content>
            </Layout>
        </Layout>    
</template>

<script>
import sliderMenu from './components/sliderMenu'
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
            console.log(this.$store.getters.menuList)
            return this.$store.getters.menuList
        },
    },
    methods: {
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
        
    }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
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
</style>
