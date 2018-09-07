<template>
  <div>
    <!-- {{city}} -->
       <Select v-model="city" @on-change="changeCity('city')" filterable   style="width:150px" v-if="this.type >= 1">
        <Option v-for="item in cityData"  :value="item.id" :key="item.id">{{item.name}}</Option>
        </Select>
        <Select v-model="province"  @on-change="changeCity('province')"  filterable style="width:150px"  v-if="this.type >= 2">
            <Option v-for="item in provinceList"  filterable :value="item.id" :key="item.id">{{item.name}}</Option>
        </Select>
        <!-- {{areaList}} -->
        <Select v-model="area" style="width:150px"  @on-change="changeCity('area')" filterable v-if="this.type == 3">
            <Option v-for="item in areaList"  filterable :value="item.id" :key="item.id">{{item.name}}</Option>
        </Select>
        {{resultData}}
  </div>
</template>
<script>
import cityDate from "../assets/js/city";
export default {
  data() {
    return {
      cityData:[],
      city: '',
      province: '',
      area: '',
      provinceList:[],
      areaList:[],
      resultData:[]
    };
  },
  props: {
    data: Array,
    type:Number
  },
  methods: {
    //   切换省
    changeCity(name) {
      if(name == 'city') {
          this.resultData = [];
          if(this.city){
            this.provinceList = this.cityData[this.city] ? this.cityData[this.city-1].city : [];
            this.resultData.push({
              id:this.cityData[this.city-1].id,
              name:this.cityData[this.city-1].name,
            });
          }
         this.province = "";//市清空
         this.area = "";//区清空
      }else if(name == 'province'){//切换市
         if(this.city && this.province) {
           this.cityData[this.city-1].city.forEach(item => {
            if(item.id == this.province) {
                this.areaList = item.district;
                if(this.resultData[1]) {
                  this.resultData[1] = {
                    id:item.id,
                    name:item.name,
                  }
                }else {
                  this.resultData.push({
                    id:item.id,
                    name:item.name,
                  })
                }
                this.area = "";  //区清空
                this.resultData = this.resultData.filter((item , index) => (index < 2));
            }
          });
         }else {
            this.resultData = this.resultData.filter((item , index) => (index == 0));
            this.areaList = [];
         }
      }else {
        if(this.areaList.length > 0) {
          this.areaList.forEach((item,index) => {
            if(item.id == this.area) {
              if(this.resultData[2]) {
                  this.resultData[2] = {
                    id:item.id,
                    name:item.name,
                  }
                }else {
                  this.resultData.push({
                    id:item.id,
                    name:item.name,
                  })
                }
            }
          })
        }
      }
      this.$emit('change',this.resultData);
    },
    // 初始化省市区
    initCity() {
      if(this.data && this.data.length > 0) {
        switch (this.data.length) {
          case 1:
            this.cityList();
            break;
          case 2:
            this.cityPro();
            break;
          case 3:
            this.cityProArea();
            break;
          default:
            break;
        }
      }
    },
    //省市区
    cityProArea() {
        this.city = parseInt(this.data[0].code);
        this.changeCity('city');
        this.province =  parseInt(this.data[1].code) || "";
        this.changeCity('province');
        this.area =  parseInt(this.data[2].code) || "";
        this.changeCity('area');
    },
    //省市
    cityPro() {
        this.city = parseInt(this.data[0].code);
        this.changeCity('city');
        this.province =  parseInt(this.data[1].code) || "";
        this.changeCity('province');
    },
    // 省
    cityList() {
        this.city = parseInt(this.data[0].code);
        this.changeCity('city');
    }
  },
  mounted() {},
  created() {
      this.cityData = cityDate;
      this.initCity();
  }
};
</script>

