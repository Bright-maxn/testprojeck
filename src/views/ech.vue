<template>
  <div id="map_chart" style="width: 100%;height: 600px;background: #000;"></div>
</template>

<script>
 export default {
        data(){
            return{}
        },
         mounted() {
            this.drawMapLine()
        },
        methods:{
            drawMapLine(){
                let geoCoordMap = require('./../assets/data-level.json')

                const convertData = function (data) {
                    const res = []
                    if (data[0]) {
                        for (let i = 0; i < data.length; i++) {
                            let geoCoord = data[i].name
                            if (geoCoord) {
                                res.push({
                                    name: data[i].name,
                                    value: data[i].local.concat(data[i].code)
                                })
                            }
                        }
                    }
                    return res
                }
                let echarts = require('echarts/lib/echarts')
                //  地图开始
                let Chart3 = echarts.init(document.getElementById('map_chart'))
                const mapData = require('./../assets/zaozhuang.json')
                const name = '枣庄'
                this.$echarts.registerMap(name, mapData)
                Chart3.setOption({
                    geo: {
                        zoom: 1.1,
                        map: name,
                        aspectScale: 0.75,
                        roam: true,
                        label: {
                            show: true,
                            color: 'rgba(138,146,246,0.58)',
                            fontSize: 14
                        },
                        scaleLimit: {
                            min: 1,
                            max: 8
                        },
                        emphasis: {
                            label: {
                                color: '#fff',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0,0,0,0.18)',
                                borderWidth: 1,
                                areaColor: '#333354',
                                shadowColor: 'rgba(0,0,0,0.13)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 25,
                                label: {
                                    show: true,
                                    fontWeight: 'bold',
                                    opacity: 0.54,
                                    color: 'rgba(138,146,246,0.58)',
                                    letterSpacing: '12.3px',
                                    textAlign: 'right'
                                }
                            },
                            emphasis: {
                                areaColor: '#353555',
                                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#f78879' },
                                        { offset: 0.5, color: '#6af651' },
                                        { offset: 1, color: '#51b3f6' }
                                    ]),
                                borderWidth: 2,
                                label: {
                                    color: '#fff',
                                    show: false
                                }
                            }
                        }
                    },
                    tooltip: {
                        formatter: function (e) {
                            // return e.data.displayname;
                            return e.name
                        }
                    },
                    series: [
                        {
                            type: 'scatter',
                            showEffectOn: 'render',
                            zoom: 1.1,
                            symbol: 'pin',
                            coordinateSystem: 'geo',
                            data: convertData(geoCoordMap),
                            symbolSize: 50,
                            hoverAnimation: true,
                            rippleEffect: {
                                period: 15,
                                scale: 4,
                                brushType: 'fill'
                            }
                        }
                    ]
                })
            }
        }
    }
</script>
<style scoped>
#graph-chart {
  height: 100%;
  width: 100%;
}
</style>