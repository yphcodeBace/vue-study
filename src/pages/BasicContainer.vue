<template>
  <div class="wrap">
    <div id="pieChart" class="pieChart"></div>
    <div class="remdiv"> 
      測試rem是否生效
    </div>
  </div>
</template>
<script>
export default {
  name: "BasicContainer",
  data() {
    return {
      resizeFun:null,
      msg: "这是一个购物车页面",
      dataList: [
        { value: 335, name: "应交人民币" },
        { value: 310, name: "应交支付宝" },
        { value: 234, name: "应交微信" },
        { value: 135, name: "应交信用卡" },
        { value: 1548, name: "应交其他" }
      ]
    };
  },
  mounted() {
    this.ringDrag();
    // this.resizeFun();
  },
  methods: {
    ringDrag() {
      setTimeout(() => {
        const _dataList = this.dataList;
        //console.log(_dataList)
        let myChart = null;
        // 基于准备好的dom，初始化echarts实例
        myChart = this.$echarts.init(document.getElementById("pieChart"));
        const option = {
          title:{
              text:'個人消費',
              x:'15%',
              y:'46%',
              textStyle:{
                  fontSize:'16',
                  // color:'#DEF1FF'
              },
          },
          tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a} <br/>{b}: {c}"
          },
          legend: {
            orient: "vertical",
            // left: 8,
            y:'center',
            // right: '7%',
            // bottom: "23%",
            data: this.dataList.name,
            padding: [0, 10, 0, 0],
            // selectedMode: false,//圖例是否可選
            itemWidth: 10,
            itemHeight: 10,
            icon: "circle",
            textStyle: {
              fontSize: 13,
              width: 160,
              rich: {
                a: {
                  align: "left",
                  color: "#77899c",
                  padding: [0, 0, 0, 10]
                },
                b: {
                  align: "right",
                  color: "#eb3a53"
                },
                c: {
                  align: "right",
                  color: "#4ed139"
                }
              }
            },
            tooltip: {
              show: true
            },
            formatter: function(name) {
              let _index = 0;
              //console.log(_dataList)
              _dataList.forEach((item, i) => {
                //console.log(item.value,name)
                if (item.name == name) {
                  _index = i;
                }
              });
              let arr;
              if (name == "应交人民币") {
                arr = [
                  "{a|" + name + "}",
                  "{b|￥" + _dataList[_index].value + "}"
                ];
              } else {
                arr = [
                  "{a|" + name + "}",
                  "{c|￥" + _dataList[_index].value + "}"
                ];
              }
              //console.log(_index)
              //console.log(_data1[_index].value)
              // 注意，换行仍是使用 '\n'。
              return arr.join("");
            }
          },
          series: [
            {
              name:'個人消費',
              type: "pie",
              radius: ["50%", "60%"],
              // 绝对位置，相对于容器左侧 10px, 上侧 10 px
              // position: [0, -50],
              center: ['20%', '50%'],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              legendHoverLink: false,
              silent: false,
              label: {
                normal: {
                  show: false,
                  position: "center",
                  formatter: params => {
                    //var _total=0;
                    // _total+=params.data.value;
                    // dataTextArry.forEach((item,i)=>{
                    // _total+=item.value
                    // console.log(_total)
                    // });
                    //console.log(1);
                    // console.log(set)
                    return "1111";
                  }
                },
                textStyle: {
                  fontSize: 20,
                  color: "green"
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                color: function(params) {
                  //console.log('1',params)
                  var colorList = [
                    "#4ed139",
                    "#289cf4",
                    "#fdca57",
                    "#ff9e48",
                    "#2c3f58"
                  ];
                  return colorList[params.dataIndex];
                }
              },
              data: this.dataList
            }
          ]
        };
        myChart.clear();
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option,true);
        //实现自适应
        this.resizeFun = ()=>{
          this.$echarts.init(document.getElementById('pieChart')).resize(); //这里的myChart就是要自适应的图表容器Id
        }
        window.addEventListener('resize',this.resizeFun)
      }, 0);
    }
  },
  //移除事件监听，避免内存泄漏
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFun)
    this.resizeFun = null
  },
};
</script>
<style lang="less" scoped>
  .wrap{
    border: 1px solid red;
    display: flex;
    flex-direction: row;
  }
  .pieChart{
    border: 1px solid green;
    height: 300px;
    // width: 600px;
    width: 50%;
  }
  .remdiv{
    // border: 1px solid black;
    // font-size: 20px;
    font-size: 1rem;
  }
</style>