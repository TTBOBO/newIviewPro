<template>
  <div class="menu">
      <Dropdown @on-click="handleClick" transfer :placement="placement" >
        <a class="drop-menu-a" type="text" @mouseover="handleMousemove($event, children)" :style="{textAlign: !hideTitle ? 'left' : ''}"><Icon :size="rootIconSize" :color="textColor" :type="parentItem.icon"/><span class="menu-title" v-if="!hideTitle">{{ parentItem.meta.title }}</span><Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/></a>
        <DropdownMenu slot="list">
        <template v-for="child in children">
            <shrink-menu v-if="showChildren(child)"  :icon-size="iconSize" :parent-item="child" :key="`drop-${child.name}`"></shrink-menu>
            <DropdownItem v-if="!showChildren(child)"  :key="`drop-${child.name}`" :name="child.name"><Icon :size="iconSize" :type="child.icon"/><span class="menu-title">{{ child.meta.title }}</span></DropdownItem>
        </template>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
import mixin from './mixin'
import itemMixin from './itemMixin'
export default {
    name: 'shrinkMenu',
  mixins: [ mixin, itemMixin ],
  props: {
    hideTitle: {
      type: Boolean,
      default: false
    },
    rootIconSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      placement: 'right-end'
    }
  },
  methods: {
      
    handleClick (name) {
      this.$emit('on-click', name)
    },
    handleMousemove (event, children) {
      const { pageY } = event
      const height = children.length * 38
      const isOverflow = pageY + height < window.innerHeight
      this.placement = isOverflow ? 'right-start' : 'right-end'
    }
  },
  mounted(){
      console.log(this.parentItem,11111)
      console.log(this.hideTitle)
    //   console.log(this.children)
  }
}
</script>
<style scoped>
a.drop-menu-a{
     display: inline-block;
    padding: 0px 15px;
    width: 100%;
    height: 30px;
    text-align: center;
    color: #495060;
    display: flex;
    align-items: center;
}
.menu-title{
  padding-left: 6px;
}
 .menu .ivu-dropdown{
      width: 100%;
      
}
.menu .ivu-dropdown-rel a{
        width: 100%;
        justify-content: center;
}
</style>
