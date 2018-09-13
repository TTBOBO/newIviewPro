<template>
    <div>
        <slot></slot>
        <Menu ref="menu" v-show="!collapsed" accordion :theme="theme" :active-name="activeName" :open-names="openedNames" width="auto" @on-select="handleSelect">
            <template v-for="(item,index) in menuList" >
                <!-- {{item}} -->
                <template  v-if="item.children && item.children.length === 1" >
                    <side-menu-item v-if="showChildren(item)" :key="`menu-${item.meta.title}`" :parent-item="item"></side-menu-item>
                    <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].meta.title}`"><Icon :type="item.children[0].icon || ''"/><span>{{ item.children[0].meta.title }}</span></menu-item>
                </template>
                <template v-else >
                    <div :key="index">
                        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.meta.title}`" :parent-item="item"></side-menu-item>
                        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.meta.title}`"><Icon :type="item.icon || ''"/><span>{{ item.meta.title }}</span></menu-item>
                    </div>
                </template>
            </template>
        </Menu>
        <div  v-show="collapsed">
           <template v-for="item in menuList">
            <shrink-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title   :theme="theme" :parent-item="item" :key="`drop-menu-${item.name}`"></shrink-menu>
            <Tooltip transfer v-else :content="(item.meta && item.meta.title) || (item.children && item.children[0] && item.children[0].meta.title)" placement="right" :key="`drop-menu-${item.name}`" :theme="light" >
                <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}"><Icon  :color="textColor" :type="item.icon || (item.children && item.children[0].icon)"/></a>
            </Tooltip>
        </template>
        </div>
    </div>
</template>

<script>
import mixin from "./mixin.js";
import SideMenuItem from "./side-menu-item";
import shrinkMenu from "./shrinkMenu";
export default {
  mixins: [mixin],
  data() {
    return {
      openedNames: [],
      light: "light",
      
    };
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    theme: {
      type: String,
      default: "dark"
    },
    collapsed: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    accordion: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    activeName: {
      type: String,
      default: ""
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  methods: {
    handleSelect(name) {
      console.log(name);
      //传给父组件值
      this.$emit("on-select", name);
    },
    getOpenedNamesByActiveName(name) {
      return this.$route.matched
        .map(item => item.name)
        .filter(item => item !== name);
    },
    getUnion(arr1, arr2) {
      return Array.from(new Set([...arr1, ...arr2]));
    }
  },
  mounted() {
    // ["test","count_to_page"] ||
    this.openedNames = this.getUnion(
      this.openedNames,
      this.getOpenedNamesByActiveName(name)
    );
    console.log(this.openedNames);

    
  },
  components: {
    SideMenuItem,
    shrinkMenu
  },
  watch: {
    activeName(name) {
      let res = this.$route.matched
        .map(item => item.name)
        .filter(item => item != name);
      // console.log(res)
      this.openedNames = res;
    },
    openedNames() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    },
    collapsed(now) {
      console.log(now);
    }
  }
};
</script>

<style>
.drop-menu-a {
  display: inline-block;
  width: 64px;
  height: 50px;
  text-align: center;
  /* color: #495060; */
  line-height: 50px;
}
.ivu-tooltip-inner {
  cursor: pointer;
}
.ivu-layout-sider{
  transition: all 0s ease-in-out;
}
</style>
