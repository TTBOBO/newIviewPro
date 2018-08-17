<template>
    <div>
        <slot></slot>
        <Menu ref="menu" v-show="!collapsed" :accordion="accordion" :theme="theme" :active-name="activeName" :open-names="openedNames" width="auto" @on-select="handleSelect">
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
    </div>
</template>

<script>
import mixin from './mixin.js';
import SideMenuItem  from './side-menu-item'
export default {
    mixins: [ mixin ],
    data(){
        return{
            openedNames: []
        }
    },
    props:{
        menuList: {
            type: Array,
            default () {
                return []
            }
        },
        theme: {
            type: String,
            default: 'dark'
        },
        collapsed: {
            type: Boolean,
            default:function(){
                return false
            }
        },
        accordion:{
            type: Boolean,
            default:function(){
                return true
            }
        },
        activeName: {
            type: String,
            default: ''
        },
        openNames: {
            type: Array,
            default: () => []
        }
    },
    computed:{

    },
    methods:{
        handleSelect(name){
            //传给父组件值
            this.$emit('on-select', name)
        }
    },
    mounted(){

    },
    components:{
        SideMenuItem
    }
}
</script>

<style>

</style>
