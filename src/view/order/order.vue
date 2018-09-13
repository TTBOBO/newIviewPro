<template>
  <div>
       <Tabs>
            <TabPane label="未支付订单">
                <InitTable :dataOpton="dataOpton" @deleteList="getDelete" @add="add" @edit="edit" @info="info"  @getSearch="getSearch"></InitTable>
            </TabPane>
            <TabPane label="已支付订单">
                 <InitTable :dataOpton="dataOpton1" @deleteList="getDelete" @add="add" @edit="edit" @info="info"  @getSearch="getSearch"></InitTable>
            </TabPane>
        </Tabs>
  </div>
</template>
<script>
import InitTable from "../../components/table1";
export default {
  data() {
    // ,enum:true,selectOPtion:{a:"是",b:"否"} 
    return {
      dataOpton: {
        url: "orderGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},
          {title: "订单号",key: "hm_shops_orders.oid",search: "hm_shops_orders.buyid",sortType:"desc", type: "",sortable: true, width: 200},
         {title: "产品名称", key: "hp_addonshop.name", search: "", type: "", width: 200},
         {title: "用户名称", key: "hm_member.uname",search: "hm_shops_orders.userid",width: 200,type: "select",url:"memberGrid",colKey:"mid",colName:"uname"},
         {title: "配送方式", key: "hm_shops_orders.pid",search: "hm_shops_orders.pid",width: 200,type: "select",selectOPtion:[{label:"顺丰",value:"0"},{label:"中通",value:"1"},{label:"圆通",value:"2"},{label:"韵达",value:"3"},{label:"EMS",value:"4"}]},
         {title: "支付方式", key: "hm_shops_orders.paytype",search: "hm_shops_orders.paytype",width: 200,type: "select",selectOPtion:[{label:"支付宝",value:"0"},{label:"微信",value:"1"},{label:"余额",value:"2"}]},
         {title: "购买数量", key: "hm_shops_orders.cartcount",search: "hm_shops_orders.cartcount",width: 200,type: "number"},
         {title: "订单价格", key: "hm_shops_orders.price",search: "hm_shops_orders.price",width: 200,type: "number"},
         {title: "配送费用", key: "hm_shops_orders.dprice",search: "hm_shops_orders.dprice",width: 200,type: "number"},
           {title: "总价格", key: "hm_shops_orders.priceCount", search: "hm_shops_orders.priceCount", type: "number", width: 200},
          {title: "下单时间",key: "hm_shops_orders.stime",search: "hm_shops_orders.stime",type: "time",s:true, ellipsis: true,width: 200 },
          {title: "订单状态",key: "hm_shops_orders.state",search: "hm_shops_orders.state",  type: "select",width: 200 ,selectOPtion:[{label:"待支付",value:"0"},{label:"已支付",value:"1"},{label:"已完成",value:"2"}]},
         
          {title: "操作",key: "action", fixed: "right",align: "center",render:"" }
        ],
        autoCol: true,
        primary:"hm_shops_orders.oid",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" }
        ],
        getList:{
          filter:"hm_shops_orders.state=0"
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
        ],
        tab:true
      },
      dataOpton1: {
        url: "orderGrid",
        columns: [
          {type: "selection", width: 60,align: "center"},
          {title: "订单号",key: "hm_shops_orders.oid",search: "hm_shops_orders.buyid",sortType:"desc", type: "",sortable: true, width: 200},
         {title: "产品名称", key: "hp_addonshop.name", search: "", type: "", width: 200},
         {title: "用户名称", key: "hm_member.uname",search: "hm_shops_orders.userid",width: 200,type: "select",url:"memberGrid",colKey:"mid",colName:"uname"},
         {title: "配送方式", key: "hm_shops_orders.pid",search: "hm_shops_orders.pid",width: 200,type: "select",selectOPtion:[{label:"顺丰",value:"0"},{label:"中通",value:"1"},{label:"圆通",value:"2"},{label:"韵达",value:"3"},{label:"EMS",value:"4"}]},
         {title: "支付方式", key: "hm_shops_orders.paytype",search: "hm_shops_orders.paytype",width: 200,type: "select",selectOPtion:[{label:"支付宝",value:"0"},{label:"微信",value:"1"},{label:"余额",value:"2"}]},
         {title: "购买数量", key: "hm_shops_orders.cartcount",search: "hm_shops_orders.cartcount",width: 200,type: "number"},
         {title: "订单价格", key: "hm_shops_orders.price",search: "hm_shops_orders.price",width: 200,type: "number"},
         {title: "配送费用", key: "hm_shops_orders.dprice",search: "hm_shops_orders.dprice",width: 200,type: "number"},
           {title: "总价格", key: "hm_shops_orders.priceCount", search: "hm_shops_orders.priceCount", type: "number", width: 200},
          {title: "下单时间",key: "hm_shops_orders.stime",search: "hm_shops_orders.stime",type: "time",s:true, ellipsis: true,width: 200 },
          {title: "订单状态",key: "hm_shops_orders.state",search: "hm_shops_orders.state",  type: "select",width: 200 ,selectOPtion:[{label:"待支付",value:"0"},{label:"已支付",value:"1"},{label:"已完成",value:"2"}]},
         
          {title: "操作",key: "action", fixed: "right",align: "center",render:"" }
        ],
        autoCol: true,
        primary:"member_address.aid",
        topBtnGroup: [
          { name: " 搜索", bgcolor: "info", url: "", type: "search",icon:"ios-search" },
          { name: "导出表格", bgcolor: "success", url: "", type: "export",icon:"forward" }
        ],
        getList:{
          filter:"hm_shops_orders.state=1"
        },
        toolEvent: [
          { type: "info",title:"详情", url: "/memberInfo" },
        ],
        tab:true
      },
    };
  },
  components: {
    InitTable
  },
  methods:{
      alert() {
          alert(1)
      },
    getDelete(id) {
      console.log(id);
    },
     /**
     * 获取该条记录的id
     */
    edit(id) {
      //  console.log(id);
    },
    add() {
      // this.$Message.info('123');
    },
    /**
     * 获取该条记录的id
     */
    info(id) {
      console.log(id);
    },
    getSearch(data) {
      console.log(data);
    },
    
  },
  mounted() {
    
  }
};
</script>
