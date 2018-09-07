<template>
    <div class="home">
         <div class="card">
             <Col span="5" v-for="(item,index) in card" :key ="index" >
                    <Card :style="{background: item.bgcolor,color:item.color}" style="cursor: pointer; border-radius: 5px;">
                        <Row>
                            <Col span="8" class="center"><Icon :type="item.icon" size="30"></Icon></Col>
                            <Col span="16" style="text-align: right;height:100%;" class="card-con">
                                <h3>{{item.title}}</h3>
                                <br/>
                                <h4>{{item.num}}&nbsp{{item.type}}</h4>
                            </Col>
                        </Row>
                    </Card>
            </Col>
         </div>
         <div class="home-b">
            <div style="margin-bottom:20px;">
                <DatePicker v-model="dateTime" type="month" placeholder="请选择年月搜索..." style="width: 200px"></DatePicker>
                <Button type="primary" @click="search()">查询</Button>
            </div>
             <div id="canvas" style="height:500px;" ></div>
         </div>
         
    </div>
</template>

<script>
import echarts from "echarts";
import util from '../../assets//js/util'
export default {
    data(){
        return {
            card:[
                {icon:'ios-person',title:'用户总数',num:'333',bgcolor:'#2d8cf0',color:'#fff',type:'人'},
                {icon:'ios-pulse',title:'访问数',num:'111',bgcolor:'#ff9900',color:'#fff',type:'条'},
                {icon:'md-pricetag',title:'待处理',num:'222',bgcolor:'#19be6b',color:'#fff',type:'条'},
                {icon:'ios-apps',title:'文章数',num:'444',bgcolor:'#ed3f14',color:'#fff',type:'条'}
            ],
            dateTime:''
        }
    },
    methods:{
        search(){
            console.log(this.dateTime)
        },
        initLine(){
            var option = {
                title: {
                    text: '一个月数据图',
                    left: 'center'
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',  
                    axisPointer: {
                        type: 'line'
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    lineStyle:{
                        color:{
                            colorStops: [{
                                offset: 0, color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'blue' // 100% 处的颜色
                            }]
                        }
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'blue' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    },
                    // color:['#fff','blue'],
                    smooth :true,  //圆弧
                }],
                
            };
            var canvas = echarts.init(document.getElementById('canvas'));
            canvas.setOption(option);
            util.chartResize(canvas);
        }
    },
    mounted(){
        this.$nextTick(() =>{
            this.initLine();
        })
    }
}
</script>

<style scoped>
.home{
    padding: 20px;
}
.home-b{
    margin-top: 50px;
}
.center{
    height: 100%;
    display: flex;
    align-items: center;
}
.card{
    display: flex;
    float: 1; 
    justify-content:space-between;
}
.card-content{
    position: relative;
}
.card-content::before{
    position: absolute;
    content: "";
    
    top: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 1px;
}
</style>
