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
         <div class="home-b">
            <div style="margin-bottom:20px;">
                <DatePicker v-model="dateTime" type="month" placeholder="请选择年月搜索..." style="width: 200px"></DatePicker>
                <Button type="primary" @click="search()">查询</Button>
            </div>
             <div id="canvasbar" style="height:500px;" ></div>
         </div>
         <canvasCir v-model="value" :data="data"></canvasCir>
         <ButtonGroup size="large">
            <Button icon="ios-add" @click="add"></Button>
            <Button icon="ios-remove" @click="minus"></Button>
        </ButtonGroup>
    </div>
</template>

<script>
import echarts from "echarts";
import util from '../../assets//js/util';
import canvasCir from '../../components/userMonitor'
export default {
    data(){
        return {
            card:[
                {icon:'ios-person',title:'用户总数',num:'333',bgcolor:'#2d8cf0',color:'#fff',type:'人'},
                {icon:'ios-pulse',title:'访问数',num:'111',bgcolor:'#ff9900',color:'#fff',type:'条'},
                {icon:'md-pricetag',title:'待处理',num:'222',bgcolor:'#19be6b',color:'#fff',type:'条'},
                {icon:'ios-apps',title:'文章数',num:'444',bgcolor:'#ed3f14',color:'#fff',type:'条'}
            ],
            dateTime:'',
            value:10,
            data:{
                size:"60",
                speed:1,
                color:"#05a6da",
                text:"bobo"
            }
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
            this.serOption("canvas",option);
        },
        initbar(){
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    show: true,
                    // trigger: 'axis',  
                    // axisPointer: {
                    //     // type: 'line'
                    // }
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 2,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff'
                            }, {
                                offset: 1,
                                color: '#3f6bdc'
                            }]),
                            // shadowColor: 'rgba(0, 0, 0, 0.4)',
                            // shadowBlur: 20
                        }
                    }
                }
                ]
            };
            this.serOption("canvasbar",option);

            
        },
        serOption(name,option){
            var canvas = echarts.init(document.getElementById(name));
            canvas.setOption(option);
            util.chartResize(canvas);
            canvas.on('click', function (param) {
                console.log(param);
            });
        },
        add(){
            this.value += 5;
        },
        minus(){
            
            this.value -= 5;
        }
    },
    components:{
        canvasCir
    },
    mounted(){
        this.$nextTick(() =>{
            this.initLine();  //初始化折线图
            this.initbar();   //初始化柱状图
        })
        setTimeout(() => {
            // this.value = 20
        },2000)
    }
}
</script>

<style scoped>
.home{
    padding: 20px;
    background: #fff;
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
