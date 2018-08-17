<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <Icon :type="parentItem.icon || ''"/>
      <span>{{ parentItem.meta.title }}</span>
    </template>
    <!-- 子节点 -->
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].meta.title}`"><Icon :type="item.children[0].icon || ''"/><span>{{ item.children[0].meta.title }}</span></menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.meta.title}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.meta.title}`"><Icon :type="item.icon || ''"/><span>{{item.meta.title}}</span></menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script>
import mixin from './mixin'
// import itemMixin from './item-mixin'
export default {
  name: 'SideMenuItem',
  mixins: [ mixin ]
}
</script>