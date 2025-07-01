/* eslint-disable */
// @ts-nocheck
export default {
  token: {
    textStyle: {
      fontFamily: 'Microsoft YaHei',
      fontSize: 12,
      lineHeight: 12
    },
    // backgroundColor: '#333',
    dvStandardChart: {
      // theme: 'mobile-app-light'
    },
    dvTimeline: {
      // theme: 'mobile-dark'
      domCSSText: 'padding: 0; box-shadow: none; border-color: transparent;'
    }
  },
  hook: {
    globalConfig() {
      return {
        // 正式环境
        hxKLineVerifyInfo: {
          id: 'hxkline-F10_StockInfoF10_page',
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpemVyX25hbWVzcGFjZSI6ImNvbW1vbi1ocS1hZ2dyLWNhY2hlIiwibGljZW5zZWVfdHlwZSI6IkZST05UX0FQUCIsImxpY2Vuc2VlX25hbWVzcGFjZSI6Imh4a2xpbmUtRjEwX1N0b2NrSW5mb0YxMF9wYWdlIn0.PIVy9TLisKlmMr8mat0P9qgYBs2M-HPsFr0hNDNSV-o'
        }
      };
    },
    /**
     * @example
     * ```typescript
      {
          "data_type": "Tabular",
          "attribute_description": [
              {
                  "attribute_name": "股票简称",
                  "attribute_type": "STR",
                  "attribute_unit": null
              },
              {
                  "attribute_name": "股票代码",
                  "attribute_type": "STR",
                  "attribute_unit": ""
              },
              {
                  "attribute_name": "股票简称",
                  "attribute_type": "STR",
                  "attribute_unit": ""
              },
              {
                  "attribute_name": "高管变动股数合计[20231030-20231129]",
                  "attribute_type": "DOUBLE",
                  "attribute_unit": "股"
              }
          ]
      }
    * ```
    */
    parseDataMetaInfo({ metadata }) {
      const dataMetaInfo = {};

      metadata?.attribute_description?.forEach(item => {
        dataMetaInfo[item.attribute_name] = {
          unit: item.attribute_unit,
          isNumber: item.attribute_type === 'DOUBLE',
          isDate: item.attribute_type === 'DATE',
          isPercentage: item.attribute_type === 'DOUBLE' && item.attribute_unit === '%'
        };
      });

      return dataMetaInfo;
    },
    formatDataNumberValue(value, params = {}) {
      if (params.type === 'table') {
        let tempValue = value;
        if (params.unit === '%') {
          tempValue = value / 100;
        }
        const formatValue = F10Utils.formateLocaleData(tempValue, 'zh', params.unit);
        if (params.unit === '%') {
          return {
            value: formatValue.value,
            unit: ''
          };
        }
        return formatValue;
      }
      if (typeof value === 'undefined' || Number.isNaN(+value) || Math.abs(value) === Infinity) {
        return {
          value: '',
          unit: '--'
        };
      }
      return F10Utils.getFormatYAxis(value);
    },
    beforeRenderStandardChart(api, renderParams) {
      const { layout, util } = api;
      api.presetHook.beforeRenderStandardChart(api, renderParams);

      const { option = {} } = renderParams;
      console.log('beforeRenderStandardChart', option);

      // * 单根折线时（非面积图时）添加渐变阴影
      const lineSeries = option?.series?.filter(item => item.type === 'line');
      if (lineSeries.length === 1 && !lineSeries[0]?.areaStyle && option?.series?.length <= 1) {
        const seriesColor = lineSeries[0].itemStyle?.color;

        lineSeries[0].areaStyle = {
          color: new ThsDataVStandardChart.echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: ThsDataVStandardChart.echarts.color.modifyAlpha(seriesColor, 0.5)
            },
            {
              offset: 1,
              color: ThsDataVStandardChart.echarts.color.modifyAlpha(seriesColor, 0)
            }
          ])
        };
      }

      // * 同一个 grid 内多 y 轴名称位置问题
      const girdMap = {
        0: {
          countLeftYAxis: 0,
          countRightYAxis: 0
        }
      };

      option?.yAxis?.forEach((axis, index) => {
        const gridIndex = axis.gridIndex || 0;
        let counter = girdMap[gridIndex];
        if (!counter) {
          counter = girdMap[gridIndex] = {
            countLeftYAxis: 0,
            countRightYAxis: 0
          };
        }

        const isRight = axis?.position === 'right';

        if (isRight || (counter.countLeftYAxis > 0 && axis?.position !== 'left')) {
          axis.nameTextStyle = {
            ...(axis?.nameTextStyle || {}),
            align: 'right'
            // TODO：临时注释，以解决ifind的多Y轴需要用户设置padding的需求
            // padding: [4, 4, 0, 0]
          };
          counter.countRightYAxis += 1;
        } else {
          counter.countLeftYAxis += 1;
        }
      });
    }
  }
}
