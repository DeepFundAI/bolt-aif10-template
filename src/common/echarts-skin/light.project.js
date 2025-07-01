const fontFamily = 'Microsoft YaHei'
const fontSize = 12
const axisLabelMargin = 8

export default {
  version: 1,
  themeName: '白天',
  theme: {
    theme: 'light',
    textStyle: {
      fontFamily,
      fontSize,
      lineHeight: fontSize
    },
    dvStandardChart: {
      // theme: 'mobile-app-light',
      baseOption: {
        dvInsight: [
          {
            textSummary: {
              circleStyle: {
                type: 'circle',
                shape: {
                  cx: 0,
                  cy: 0,
                  r: 4
                },
                style: {
                  fill: 'black',
                  stroke: 'transparent'
                },
                z2: 9999
              },
              lineStyle: {
                type: 'line',
                style: {
                  stroke: 'black',
                  lineWidth: 1,
                  lineHeight: 24
                },
                z2: 9999
              },
              rectStyle: {
                type: 'rect',
                shape: {
                  r: 4
                },
                style: {
                  fill: 'black',
                  opacity: 0.8
                },
                z: 9999,
                z2: 9999
              },
              textStyle: {
                type: 'text',
                style: {
                  x: 0,
                  y: 0,
                  fill: 'white',
                  padding: [4, 6]
                },
                z: 9999,
                z2: 9999
              }
            },
            line: {
              lineStyle: {
                width: 1,
                color: '#F2920D'
              },
              label: {
                color: '#F2920D',
                textShadowColor: '#FFF',
                textShadowBlur: 2
              }
            },
            referenceLine: {
              symbol:
                'image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTJweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAxMiA2IiB2ZXJzaW9uPSIxLjEiPgogICAgPHRpdGxlPuS4ieinkuW9ojwvdGl0bGU+CiAgICA8ZyBpZD0i5Zu+6KGo5rSe5a+fIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMDEu5Zu+6KGo5rSe5a+fbGlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQyLjAwMDAwMCwgLTI0NzUuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLkuInop5LlvaIiIHBvaW50cz0iMTE0OCAyNDc1IDExNTQgMjQ4MSAxMTQyIDI0ODEiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
              symbolSize: [10, 8],
              symbolOffset: [0, '50%'],
              lineStyle: {
                width: 2,
                color: 'black',
                type: 'solid'
              }
            },
            axisReferenceLine: {
              lineStyle: {
                width: 1,
                color: 'black',
                type: [1, 3]
              },
              label: {
                color: 'white',
                distance: 2,
                backgroundColor: '#636FFF',
                padding: [4, 6, 2, 6],
                borderRadius: 2,
                dvZ: 1000,
                dvZ2: 10
              }
            },
            area: {
              itemStyle: {
                color: '#F2920D',
                opacity: 0.2
              }
            },
            blurSeries: {
              itemStyle: {
                opacity: 0.2,
                colorAlpha: 0.2
              },
              lineStyle: {
                opacity: 0.2
              },
              areaStyle: {
                opacity: 0.2
              }
            }
          },
          {
            type: 'Trend',
            line: {
              lineStyle: {
                color: '#000'
              },
              label: {
                color: '#000'
              }
            },
            textSummary: {
              circleStyle: {
                type: 'circle',
                invisible: true
              }
            }
          },
          {
            type: 'Interval',
            line: {
              lineStyle: {
                color: '#000'
              },
              label: {
                color: '#000'
              }
            }
          },
          {
            type: 'Text',
            textStyle: {
              color: '#000'
            }
          }
        ],
        legend: {
          backgroundColor: 'transparent',
          textStyle: {
            lineHeight: 16,
            color: '#2A354E'
          },
          dvPagination: {
            color: '#2A354E'
            // image: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDY8L3RpdGxlPgogICAgPGcgaWQ9Iue7hOS7tuinhOWImeesrOS6jOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyLuaXtumXtOi9tOe7hOS7tuminOiJsuaYoOWwhOihqOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1NC4wMDAwMDAsIC0xNTc2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTY45aSH5Lu9LTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4wMDAwMDAsIDE1MjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEyLjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJ0cmFuc3BhcmVudC1yZWN0YW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkgcm90YXRlKC00NTAuMDAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtOC4wMDAwMDApICIgcG9pbnRzPSIwIDkuNzk3MTc0MzllLTE2IDE2IDkuNzk3MTc0MzllLTE2IDE2IDE2IDAgMTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjI0NDA3NzY4LDUuMjUxMDUxMzMgQzMuNTQ0NDgwOTgsNC45NDIwNjUwOCA0LjAxNzE3MzUzLDQuOTE4Mjk2OSA0LjM0NDA4Mjg3LDUuMTc5NzQ2ODEgTDQuNDIyNTg4OTgsNS4yNTEwNTEzMyBMOCw4LjkzIEwxMS41Nzc0MTEsNS4yNTEwNTEzMyBDMTEuODc3ODE0Myw0Ljk0MjA2NTA4IDEyLjM1MDUwNjksNC45MTgyOTY5IDEyLjY3NzQxNjIsNS4xNzk3NDY4MSBMMTIuNzU1OTIyMyw1LjI1MTA1MTMzIEMxMy4wNTYzMjU2LDUuNTYwMDM3NTggMTMuMDc5NDMzNiw2LjA0NjIzNTYzIDEyLjgyNTI0NjIsNi4zODI0ODUyNCBMMTIuNzU1OTIyMyw2LjQ2MzIzNDM4IEw4LjU4OTI1NTY1LDEwLjc0ODk0ODcgQzguMjg4ODUyMzUsMTEuMDU3OTM0OSA3LjgxNjE1OTgsMTEuMDgxNzAzMSA3LjQ4OTI1MDQ2LDEwLjgyMDI1MzIgTDcuNDEwNzQ0MzUsMTAuNzQ4OTQ4NyBMMy4yNDQwNzc2OCw2LjQ2MzIzNDM4IEMyLjkxODY0MDc3LDYuMTI4NDk5MjggMi45MTg2NDA3Nyw1LjU4NTc4NjQ0IDMuMjQ0MDc3NjgsNS4yNTEwNTEzMyBaIiBpZD0i6Lev5b6ELTMiIGZpbGw9IiNDOENCRDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')`,
            // imageHover: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDY8L3RpdGxlPgogICAgPGcgaWQ9Iue7hOS7tuinhOWImeesrOS6jOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyLuaXtumXtOi9tOe7hOS7tuminOiJsuaYoOWwhOihqOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1NC4wMDAwMDAsIC0xNTc2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTY45aSH5Lu9LTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4wMDAwMDAsIDE1MjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEyLjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJ0cmFuc3BhcmVudC1yZWN0YW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkgcm90YXRlKC00NTAuMDAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtOC4wMDAwMDApICIgcG9pbnRzPSIwIDkuNzk3MTc0MzllLTE2IDE2IDkuNzk3MTc0MzllLTE2IDE2IDE2IDAgMTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjI0NDA3NzY4LDUuMjUxMDUxMzMgQzMuNTQ0NDgwOTgsNC45NDIwNjUwOCA0LjAxNzE3MzUzLDQuOTE4Mjk2OSA0LjM0NDA4Mjg3LDUuMTc5NzQ2ODEgTDQuNDIyNTg4OTgsNS4yNTEwNTEzMyBMOCw4LjkzIEwxMS41Nzc0MTEsNS4yNTEwNTEzMyBDMTEuODc3ODE0Myw0Ljk0MjA2NTA4IDEyLjM1MDUwNjksNC45MTgyOTY5IDEyLjY3NzQxNjIsNS4xNzk3NDY4MSBMMTIuNzU1OTIyMyw1LjI1MTA1MTMzIEMxMy4wNTYzMjU2LDUuNTYwMDM3NTggMTMuMDc5NDMzNiw2LjA0NjIzNTYzIDEyLjgyNTI0NjIsNi4zODI0ODUyNCBMMTIuNzU1OTIyMyw2LjQ2MzIzNDM4IEw4LjU4OTI1NTY1LDEwLjc0ODk0ODcgQzguMjg4ODUyMzUsMTEuMDU3OTM0OSA3LjgxNjE1OTgsMTEuMDgxNzAzMSA3LjQ4OTI1MDQ2LDEwLjgyMDI1MzIgTDcuNDEwNzQ0MzUsMTAuNzQ4OTQ4NyBMMy4yNDQwNzc2OCw2LjQ2MzIzNDM4IEMyLjkxODY0MDc3LDYuMTI4NDk5MjggMi45MTg2NDA3Nyw1LjU4NTc4NjQ0IDMuMjQ0MDc3NjgsNS4yNTEwNTEzMyBaIiBpZD0i6Lev5b6ELTMiIGZpbGw9IiM3RThERkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')`,
            // imageDisabled: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDY8L3RpdGxlPgogICAgPGcgaWQ9Iue7hOS7tuinhOWImeesrOS6jOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyLuaXtumXtOi9tOe7hOS7tuminOiJsuaYoOWwhOihqOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1NC4wMDAwMDAsIC0xNTc2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTY45aSH5Lu9LTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4wMDAwMDAsIDE1MjIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEyLjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJ0cmFuc3BhcmVudC1yZWN0YW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA4LjAwMDAwMCkgcm90YXRlKC00NTAuMDAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtOC4wMDAwMDApICIgcG9pbnRzPSIwIDkuNzk3MTc0MzllLTE2IDE2IDkuNzk3MTc0MzllLTE2IDE2IDE2IDAgMTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjI0NDA3NzY4LDUuMjUxMDUxMzMgQzMuNTQ0NDgwOTgsNC45NDIwNjUwOCA0LjAxNzE3MzUzLDQuOTE4Mjk2OSA0LjM0NDA4Mjg3LDUuMTc5NzQ2ODEgTDQuNDIyNTg4OTgsNS4yNTEwNTEzMyBMOCw4LjkzIEwxMS41Nzc0MTEsNS4yNTEwNTEzMyBDMTEuODc3ODE0Myw0Ljk0MjA2NTA4IDEyLjM1MDUwNjksNC45MTgyOTY5IDEyLjY3NzQxNjIsNS4xNzk3NDY4MSBMMTIuNzU1OTIyMyw1LjI1MTA1MTMzIEMxMy4wNTYzMjU2LDUuNTYwMDM3NTggMTMuMDc5NDMzNiw2LjA0NjIzNTYzIDEyLjgyNTI0NjIsNi4zODI0ODUyNCBMMTIuNzU1OTIyMyw2LjQ2MzIzNDM4IEw4LjU4OTI1NTY1LDEwLjc0ODk0ODcgQzguMjg4ODUyMzUsMTEuMDU3OTM0OSA3LjgxNjE1OTgsMTEuMDgxNzAzMSA3LjQ4OTI1MDQ2LDEwLjgyMDI1MzIgTDcuNDEwNzQ0MzUsMTAuNzQ4OTQ4NyBMMy4yNDQwNzc2OCw2LjQ2MzIzNDM4IEMyLjkxODY0MDc3LDYuMTI4NDk5MjggMi45MTg2NDA3Nyw1LjU4NTc4NjQ0IDMuMjQ0MDc3NjgsNS4yNTEwNTEzMyBaIiBpZD0i6Lev5b6ELTMiIGZpbGw9InJnYmEoMjUwLDI1MSwyNTIsMC40KSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')`,
          }
        },
        grid: {
          containLabel: true,
          top: 10,
          bottom: 5,
          left: 0,
          right: 5
        },
        dataZoom: [
          {
            type: 'slider',
            moveOnMouseMove: false,
            zoomOnMouseWheel: false,
            backgroundColor: '#F2F5FA',
            fillerColor: '#E0E4FA',
            dvScrollColor: '#E0E4FA',
            borderColor: '#DADDE0',
            show: false,
            // 要保证切图是正方形的，不然会变形
            handleIcon:
              'image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+57yW57uEIDIyPC90aXRsZT4KICAgIDxnIGlkPSLlm77ooajop4TojIPlrozmlbTniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QtMjIiPgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTMyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiLz4KICAgICAgICAgICAgPGcgaWQ9Iuaal+iJsua7keWdl+Wkh+S7vS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNiwwLjQgQzYuMTUyMjg0NzUsMC40IDYuNjUyMjg0NzUsMC42MjM4NTc2MjUgNy4wMTQyMTM1NiwwLjk4NTc4NjQzOCBDNy4zNzYxNDIzNywxLjM0NzcxNTI1IDcuNiwxLjg0NzcxNTI1IDcuNiwyLjQgTDcuNiwyLjQgTDcuNiwxMy42IEM3LjYsMTQuMTUyMjg0NyA3LjM3NjE0MjM3LDE0LjY1MjI4NDcgNy4wMTQyMTM1NiwxNS4wMTQyMTM2IEM2LjY1MjI4NDc1LDE1LjM3NjE0MjQgNi4xNTIyODQ3NSwxNS42IDUuNiwxNS42IEw1LjYsMTUuNiBMMi40LDE1LjYgQzEuODQ3NzE1MjUsMTUuNiAxLjM0NzcxNTI1LDE1LjM3NjE0MjQgMC45ODU3ODY0MzgsMTUuMDE0MjEzNiBDMC42MjM4NTc2MjUsMTQuNjUyMjg0NyAwLjQsMTQuMTUyMjg0NyAwLjQsMTMuNiBMMC40LDEzLjYgTDAuNCwyLjQgQzAuNCwxLjg0NzcxNTI1IDAuNjIzODU3NjI1LDEuMzQ3NzE1MjUgMC45ODU3ODY0MzgsMC45ODU3ODY0MzggQzEuMzQ3NzE1MjUsMC42MjM4NTc2MjUgMS44NDc3MTUyNSwwLjQgMi40LDAuNCBMMi40LDAuNCBMMi40LDAuNCBaIiBpZD0i6Lev5b6EIiBzdHJva2U9IiNFMEU0RUEiIHN0cm9rZS13aWR0aD0iMC44IiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41LDEwIEM1Ljc3NjE0MjM3LDEwIDYsMTAuMjIzODU3NiA2LDEwLjUgQzYsMTAuNzc2MTQyNCA1Ljc3NjE0MjM3LDExIDUuNSwxMSBMMi41LDExIEMyLjIyMzg1NzYzLDExIDIsMTAuNzc2MTQyNCAyLDEwLjUgQzIsMTAuMjIzODU3NiAyLjIyMzg1NzYzLDEwIDIuNSwxMCBMNS41LDEwIFogTTUuNSw3LjUgQzUuNzc2MTQyMzcsNy41IDYsNy43MjM4NTc2MyA2LDggQzYsOC4yNzYxNDIzNyA1Ljc3NjE0MjM3LDguNSA1LjUsOC41IEwyLjUsOC41IEMyLjIyMzg1NzYzLDguNSAyLDguMjc2MTQyMzcgMiw4IEMyLDcuNzIzODU3NjMgMi4yMjM4NTc2Myw3LjUgMi41LDcuNSBMNS41LDcuNSBaIE01LjUsNSBDNS43NzYxNDIzNyw1IDYsNS4yMjM4NTc2MyA2LDUuNSBDNiw1Ljc3NjE0MjM3IDUuNzc2MTQyMzcsNiA1LjUsNiBMMi41LDYgQzIuMjIzODU3NjMsNiAyLDUuNzc2MTQyMzcgMiw1LjUgQzIsNS4yMjM4NTc2MyAyLjIyMzg1NzYzLDUgMi41LDUgTDUuNSw1IFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiM4MjhGQTEiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
          }
        ],
        tooltip: {
          backgroundColor: '#fff',
          confine: true,
          extraCssText:
            'border-radius: 4px; padding: 8px; border-color: transparent; box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);',
          textStyle: {
            color: 'rgba(0, 0, 0, 0.84)',
            lineHeight: 16
          },
          dvTitleStyle: {
            color: 'rgba(15, 15, 15, 0.45)'
          },
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#3366FF',
              // height: 10,
              margin: 5,
              padding: [2, 4, 2, 4]
            }
          }
        },
        xAxis: {
          nameLocation: 'end',
          dvNameLocation: 'end',
          /**
           * nameGap的设置是结合杰哥dvNameLocation的源码实现决定的
           * nameGap = -(xAxis.axisLabel.fontSize + xAxis.nameTextStyle.fontSize + xAxis.axisLabel.margin + 设计师规定偏移)
           */
          nameGap: 0,
          nameTextStyle: {
            dvZ: 5,
            align: 'right',
            verticalAlign: 'top',
            fontFamily,
            fontSize,
            lineHeight: 12,
            padding: [-30, 0, 0, 0]
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#C4CAD5'
            }
          },
          axisTick: {
            show: false,
            lineStyle: {}
          },
          splitLine: {
            // show: true,
            dvZ: 0,
            lineStyle: {
              // opacity: 0.08
            }
          },
          axisLabel: {
            fontFamily,
            fontSize,
            lineHeight: 12,
            margin: axisLabelMargin,
            showMinLabel: true,
            showMaxLabel: true,
            hideOverlap: true,
            /** @see https://datav.iwencai.com/components/paradigm-chart/docs/apis/component/xAxis#axislabeldvalignedge */
            dvAlignEdge: true,
            dvIntervalStrategy: 'gt16'
          },
          axisPointer: {
            shadowStyle: {
              color: '#000000',
              opacity: 0.08
            },
            label: {
              margin: 5,
              padding: [2, 4, 2, 4]
            }
          }
        },
        yAxis: {
          nameLocation: 'end',
          nameGap: 0,
          scale: true,
          nameTextStyle: {
            dvZ: 5,
            align: 'left',
            verticalAlign: 'top',
            fontFamily,
            fontSize,
            lineHeight: 12,
            padding: [4, 0, 0, 4]
          },
          splitLine: {
            show: true,
            dvZ: 0,
            lineStyle: {
              // opacity: 0.08
            }
          },
          axisLabel: {
            fontFamily,
            fontSize,
            lineHeight: 12
          },
          axisPointer: {
            label: {
              margin: 5,
              padding: [2, 4, 2, 4]
            }
          }
        },
        polar: {
          radius: [30, '78%'],
          show: false
        },
        angleAxis: {
          show: false,
          startAngle: 90,
          axisLabel: {
            fontSize: 12,
            lineHeight: 12
          }
        },
        radiusAxis: {
          show: false,
          nameGap: 32,
          axisLabel: {
            fontSize: 12,
            lineHeight: 12
          }
        },
        grid3D: {
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        graphic: {
          elements: [
            {
              type: 'text',
              style: {
                fill: 'rgba(50, 50, 50, 0.2)'
              }
            }
          ]
        },
        series: [
          {
            type: 'wordCloud',
            dvTextColors: [
              '#090E18',
              '#313A4F',
              '#4D576F',
              '#848D9F',
              '#9EA8B5',
              '#A9B2BE',
              '#A9B2BE'
            ]
          },
          {
            type: 'bar3D',
            shading: 'lambert',
            label: {
              fontSize: 16,
              borderWidth: 1
            }
          },
          {
            type: 'line',
            symbolSize: 8,
            emphasis: {
              borderWidth: 1.5,
              itemStyle: {
                opacity: 1
              }
            },
            endLabel: {
              dvZ: 10,
              show: false,
              offset: [6, -6],
              padding: [6, 8, 6, 8],
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderColor: 'rgba(232,232,232,1)',
              borderWidth: 0.5,
              borderRadius: 2
            },
            lineStyle: {
              width: 1.5
            },
            itemStyle: {
              opacity: 0
            },
            stateAnimation: {
              duration: 0
            }
          },
          {
            type: 'pie',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0)'
              }
            },
            labelLine: {
              length: 5
            },
            label: {
              color: '#000'
            }
          },
          {
            type: 'gauge',
            axisTick: {
              show: false,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              show: false,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            pointer: {
              show: false,
              itemStyle: {
                color: 'auto'
              }
            },
            title: {
              show: false,
              fontSize: 12,
              lineHeight: 12
            },
            detail: {
              show: false,
              height: 12,
              fontWeight: 'normal',
              fontSize: 12,
              lineHeight: 12,
              padding: [2, 8, 2, 8],
              color: 'inherit',
              borderColor: 'inherit',
              borderWidth: 1
            }
          },
          {
            type: 'scatter3D',
            shading: 'lambert',
            label: {
              fontSize: 16,
              borderWidth: 1
            }
          },
          {
            type: 'treemap',
            itemStyle: {
              gapWidth: 1
            }
            // dvData: (data) => {
            //   data.forEach(item => {
            //     if (item.value > 0) {
            //       item.itemStyle.color = 'red';
            //     };
            //     if (item.value < 0) {
            //       item.itemStyle.color = 'green';
            //     }
            //   });
            // }
          },
          {
            type: 'bar',
            /** barGap、barCategoryGap 是为了配合 insight 计算柱子的正中间位置 */
            barGap: '30%',
            barCategoryGap: '20%',
            barMaxWidth: 14,
            label: {
              color: 'rgba(0, 0, 0, 0.84)'
            },
            axisLabel: {
              showMaxLabel: true,
              hideOverlap: true,
              showMinLabel: true
            },
            /** dvReferenceLine 只在 dvType: 'waterfall' 的瀑布图中作为连接线的配置使用 */
            dvReferenceLine: {
              show: true,
              color: '#C4CAD5'
            }
          },
          {
            type: 'dvScatter',
            dvItemStyle: [
              {
                id: 'circle',
                textContent: {
                  style: {
                    fill: '#92989f'
                  }
                }
              }
            ]
          }
        ]
      }
    },
    dvTimeline: {
      domCSSText: 'padding: 0; box-shadow: none; border-color: transparent;',
      config: {
        axis: {
          background: {
            style: {
              backgroundColor: '#F2F5FA',
              height: '10px'
            }
          },
          marker: {
            style: {
              backgroundImage: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+5ruR5Z2XIDE2PC90aXRsZT4KICAgIDxnIGlkPSLlm77ooajop4TojIPlrozmlbTniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLml7bpl7TovbQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NDEuMDAwMDAwLCAtNTI1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMC4wMDAwMDAsIDQ4My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmu5HlnZctMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMS4wMDAwMDAsIDQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjEyNzc3MDQsLTIuMDcxNjgwNjJlLTE2IEwxMC44NzIyMjk2LDIuMDcxNjgwNjJlLTE2IEMxMi42NTUyNjcxLC0xLjIwMzcwNjFlLTE2IDEzLjMwMTgzOTYsMC4xODU2NTEyMjIgMTMuOTUzNjkxNCwwLjUzNDI2NTQwOCBDMTQuNjA1NTQzMywwLjg4Mjg3OTU5MyAxNS4xMTcxMjA0LDEuMzk0NDU2NzQgMTUuNDY1NzM0NiwyLjA0NjMwODU5IEMxNS44MTQzNDg4LDIuNjk4MTYwNDQgMTYsMy4zNDQ3MzI5MiAxNiw1LjEyNzc3MDQgTDE2LDEwLjg3MjIyOTYgQzE2LDEyLjY1NTI2NzEgMTUuODE0MzQ4OCwxMy4zMDE4Mzk2IDE1LjQ2NTczNDYsMTMuOTUzNjkxNCBDMTUuMTE3MTIwNCwxNC42MDU1NDMzIDE0LjYwNTU0MzMsMTUuMTE3MTIwNCAxMy45NTM2OTE0LDE1LjQ2NTczNDYgQzEzLjMwMTgzOTYsMTUuODE0MzQ4OCAxMi42NTUyNjcxLDE2IDEwLjg3MjIyOTYsMTYgTDUuMTI3NzcwNCwxNiBDMy4zNDQ3MzI5MiwxNiAyLjY5ODE2MDQ0LDE1LjgxNDM0ODggMi4wNDYzMDg1OSwxNS40NjU3MzQ2IEMxLjM5NDQ1Njc0LDE1LjExNzEyMDQgMC44ODI4Nzk1OTMsMTQuNjA1NTQzMyAwLjUzNDI2NTQwOCwxMy45NTM2OTE0IEMwLjE4NTY1MTIyMiwxMy4zMDE4Mzk2IDguMDI0NzA3MzJlLTE3LDEyLjY1NTI2NzEgLTEuMzgxMTIwNDFlLTE2LDEwLjg3MjIyOTYgTDEuMzgxMTIwNDFlLTE2LDUuMTI3NzcwNCBDLTguMDI0NzA3MzJlLTE3LDMuMzQ0NzMyOTIgMC4xODU2NTEyMjIsMi42OTgxNjA0NCAwLjUzNDI2NTQwOCwyLjA0NjMwODU5IEMwLjg4Mjg3OTU5MywxLjM5NDQ1Njc0IDEuMzk0NDU2NzQsMC44ODI4Nzk1OTMgMi4wNDYzMDg1OSwwLjUzNDI2NTQwOCBDMi42OTgxNjA0NCwwLjE4NTY1MTIyMiAzLjM0NDczMjkyLDEuMjAzNzA2MWUtMTYgNS4xMjc3NzA0LC0yLjA3MTY4MDYyZS0xNiBaIiBpZD0i55+p5b2iIiBmaWxsPSIjQTlCMkJFIi8+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjUiIHkxPSI2IiB4Mj0iNSIgeTI9IjEwIiBpZD0i6Lev5b6EIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSI4IiB5MT0iNiIgeDI9IjgiIHkyPSIxMCIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTEiIHkxPSI2IiB4Mj0iMTEiIHkyPSIxMCIgaWQ9Iui3r+W+hOWkh+S7vSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+`,
              ':hover': {
                backgroundImage: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+5ruR5Z2XIDE25aSH5Lu9IDI8L3RpdGxlPgogICAgPGcgaWQ9IuWbvuihqOinhOiMg+WujOaVtOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaXtumXtOi9tCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0MS4wMDAwMDAsIC01NTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgNDgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iua7keWdly0xNuWkh+S7vS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjEuMDAwMDAwLCA3MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xMjc3NzA0LC0yLjA3MTY4MDYyZS0xNiBMMTAuODcyMjI5NiwyLjA3MTY4MDYyZS0xNiBDMTIuNjU1MjY3MSwtMS4yMDM3MDYxZS0xNiAxMy4zMDE4Mzk2LDAuMTg1NjUxMjIyIDEzLjk1MzY5MTQsMC41MzQyNjU0MDggQzE0LjYwNTU0MzMsMC44ODI4Nzk1OTMgMTUuMTE3MTIwNCwxLjM5NDQ1Njc0IDE1LjQ2NTczNDYsMi4wNDYzMDg1OSBDMTUuODE0MzQ4OCwyLjY5ODE2MDQ0IDE2LDMuMzQ0NzMyOTIgMTYsNS4xMjc3NzA0IEwxNiwxMC44NzIyMjk2IEMxNiwxMi42NTUyNjcxIDE1LjgxNDM0ODgsMTMuMzAxODM5NiAxNS40NjU3MzQ2LDEzLjk1MzY5MTQgQzE1LjExNzEyMDQsMTQuNjA1NTQzMyAxNC42MDU1NDMzLDE1LjExNzEyMDQgMTMuOTUzNjkxNCwxNS40NjU3MzQ2IEMxMy4zMDE4Mzk2LDE1LjgxNDM0ODggMTIuNjU1MjY3MSwxNiAxMC44NzIyMjk2LDE2IEw1LjEyNzc3MDQsMTYgQzMuMzQ0NzMyOTIsMTYgMi42OTgxNjA0NCwxNS44MTQzNDg4IDIuMDQ2MzA4NTksMTUuNDY1NzM0NiBDMS4zOTQ0NTY3NCwxNS4xMTcxMjA0IDAuODgyODc5NTkzLDE0LjYwNTU0MzMgMC41MzQyNjU0MDgsMTMuOTUzNjkxNCBDMC4xODU2NTEyMjIsMTMuMzAxODM5NiA4LjAyNDcwNzMyZS0xNywxMi42NTUyNjcxIC0xLjM4MTEyMDQxZS0xNiwxMC44NzIyMjk2IEwxLjM4MTEyMDQxZS0xNiw1LjEyNzc3MDQgQy04LjAyNDcwNzMyZS0xNywzLjM0NDczMjkyIDAuMTg1NjUxMjIyLDIuNjk4MTYwNDQgMC41MzQyNjU0MDgsMi4wNDYzMDg1OSBDMC44ODI4Nzk1OTMsMS4zOTQ0NTY3NCAxLjM5NDQ1Njc0LDAuODgyODc5NTkzIDIuMDQ2MzA4NTksMC41MzQyNjU0MDggQzIuNjk4MTYwNDQsMC4xODU2NTEyMjIgMy4zNDQ3MzI5MiwxLjIwMzcwNjFlLTE2IDUuMTI3NzcwNCwtMi4wNzE2ODA2MmUtMTYgWiIgaWQ9IuefqeW9oiIgZmlsbD0iI0M0Q0FENSIvPgogICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSI1IiB5MT0iNiIgeDI9IjUiIHkyPSIxMCIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iOCIgeTE9IjYiIHgyPSI4IiB5Mj0iMTAiIGlkPSLot6/lvoQiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjExIiB5MT0iNiIgeDI9IjExIiB5Mj0iMTAiIGlkPSLot6/lvoTlpIfku70iIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==`
              },
              ':active': {
                backgroundImage: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+5ruR5Z2XIDE25aSH5Lu9IDM8L3RpdGxlPgogICAgPGcgaWQ9IuWbvuihqOinhOiMg+WujOaVtOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaXtumXtOi9tCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0MS4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgNDgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iua7keWdly0xNuWkh+S7vS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjEuMDAwMDAwLCA5OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xMjc3NzA0LC0yLjA3MTY4MDYyZS0xNiBMMTAuODcyMjI5NiwyLjA3MTY4MDYyZS0xNiBDMTIuNjU1MjY3MSwtMS4yMDM3MDYxZS0xNiAxMy4zMDE4Mzk2LDAuMTg1NjUxMjIyIDEzLjk1MzY5MTQsMC41MzQyNjU0MDggQzE0LjYwNTU0MzMsMC44ODI4Nzk1OTMgMTUuMTE3MTIwNCwxLjM5NDQ1Njc0IDE1LjQ2NTczNDYsMi4wNDYzMDg1OSBDMTUuODE0MzQ4OCwyLjY5ODE2MDQ0IDE2LDMuMzQ0NzMyOTIgMTYsNS4xMjc3NzA0IEwxNiwxMC44NzIyMjk2IEMxNiwxMi42NTUyNjcxIDE1LjgxNDM0ODgsMTMuMzAxODM5NiAxNS40NjU3MzQ2LDEzLjk1MzY5MTQgQzE1LjExNzEyMDQsMTQuNjA1NTQzMyAxNC42MDU1NDMzLDE1LjExNzEyMDQgMTMuOTUzNjkxNCwxNS40NjU3MzQ2IEMxMy4zMDE4Mzk2LDE1LjgxNDM0ODggMTIuNjU1MjY3MSwxNiAxMC44NzIyMjk2LDE2IEw1LjEyNzc3MDQsMTYgQzMuMzQ0NzMyOTIsMTYgMi42OTgxNjA0NCwxNS44MTQzNDg4IDIuMDQ2MzA4NTksMTUuNDY1NzM0NiBDMS4zOTQ0NTY3NCwxNS4xMTcxMjA0IDAuODgyODc5NTkzLDE0LjYwNTU0MzMgMC41MzQyNjU0MDgsMTMuOTUzNjkxNCBDMC4xODU2NTEyMjIsMTMuMzAxODM5NiA4LjAyNDcwNzMyZS0xNywxMi42NTUyNjcxIC0xLjM4MTEyMDQxZS0xNiwxMC44NzIyMjk2IEwxLjM4MTEyMDQxZS0xNiw1LjEyNzc3MDQgQy04LjAyNDcwNzMyZS0xNywzLjM0NDczMjkyIDAuMTg1NjUxMjIyLDIuNjk4MTYwNDQgMC41MzQyNjU0MDgsMi4wNDYzMDg1OSBDMC44ODI4Nzk1OTMsMS4zOTQ0NTY3NCAxLjM5NDQ1Njc0LDAuODgyODc5NTkzIDIuMDQ2MzA4NTksMC41MzQyNjU0MDggQzIuNjk4MTYwNDQsMC4xODU2NTEyMjIgMy4zNDQ3MzI5MiwxLjIwMzcwNjFlLTE2IDUuMTI3NzcwNCwtMi4wNzE2ODA2MmUtMTYgWiIgaWQ9IuefqeW9oiIgZmlsbD0iIzgyOEZBMSIvPgogICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSI1IiB5MT0iNiIgeDI9IjUiIHkyPSIxMCIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iOCIgeTE9IjYiIHgyPSI4IiB5Mj0iMTAiIGlkPSLot6/lvoQiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjExIiB5MT0iNiIgeDI9IjExIiB5Mj0iMTAiIGlkPSLot6/lvoTlpIfku70iIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==`
              }
            }
          },
          tickLine: {
            main: {
              style: {
                backgroundColor: '#C4CAD5'
              }
            },
            sub: {
              style: {
                backgroundColor: '#E0E4EA'
              }
            }
          },
          tickValue: {
            style: {
              color: '#545E71',
              fontSize: '12px'
            }
          },
          tooltip: {
            style: {
              backgroundColor: '#FFFFFF',
              color: '#FAFBFC',
              borderColor: 'transparent'
            },
            textStyle: {
              color: '#2A354E'
            },
            arrowStyle: {
              borderColor: '#FFFFFF transparent transparent transparent'
            }
          }
        },
        operation: {
          playButton: {
            style: {
              backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+R3JvdXAgNjE3PC90aXRsZT4KICAgIDxnIGlkPSLlm77ooajop4TojIPlrozmlbTniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLml7bpl7TovbQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDEuMDAwMDAwLCAtMzgyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbl9wbGF5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDEuMDAwMDAwLCAzODIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsMCBDMTguNjI3NDE3LC0xLjIxNzQzNjc1ZS0xNSAyNCw1LjM3MjU4MyAyNCwxMiBDMjQsMTguNjI3NDE3IDE4LjYyNzQxNywyNCAxMiwyNCBDNS4zNzI1ODMsMjQgOC4xMTYyNDUwMWUtMTYsMTguNjI3NDE3IDAsMTIgQy04LjExNjI0NTAxZS0xNiw1LjM3MjU4MyA1LjM3MjU4MywxLjIxNzQzNjc1ZS0xNSAxMiwwIFoiIGlkPSLnn6nlvaIiIGZpbGw9IiM2MzZGRkYiLz4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNTAwMDAwLCA2Ljc1MDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDEwLjUsMCBMMTAuNSwxMC41IEwwLDEwLjUgTDAsMCBaIiBpZD0i55+p5b2iIiBvcGFjaXR5PSIwLjQwMDAwMDAwNiIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjQwMTgxODA2LDQuNDQ5MzMyMDMgQzkuNzE4MjkwNDUsNC42MjU5ODMzNiA5LjgzMTYzNzcxLDUuMDI1NzM5MDggOS42NTQ5ODYzOSw1LjM0MjIxMTQ4IEM5LjU5OTA0NCw1LjQ0MjQzMjc3IDkuNTE3Nzk0MjEsNS41MjYyMjg4OSA5LjQxOTM0Njg0LDUuNTg1MjM3MTMgTDIuMTAxNDgzODMsOS45NzE0ODA4NSBDMS43OTA2MTI5OSwxMC4xNTc4MTMzIDEuMzg3NTUwMDMsMTAuMDU2ODU1MiAxLjIwMTIxNzYsOS43NDU5ODQzMyBDMS4xNDAxMjAxNyw5LjY0NDA1MTQxIDEuMTA3ODQ5MTIsOS41Mjc0NDA3OSAxLjEwNzg0OTEyLDkuNDA4NTk5NjUgTDEuMTA3ODQ5MTIsMC45Mzc2MDY3OCBDMS4xMDc4NDkxMiwwLjU3NTE2OTkyOSAxLjQwMTY2MjIzLDAuMjgxMzU2ODEyIDEuNzY0MDk5MDcsMC4yODEzNTY4MTIgQzEuODc2MDcxODEsMC4yODEzNTY4MTIgMS45ODYxODIzMiwwLjMxMDAwNzQxOCAyLjA4Mzk1NDYxLDAuMzY0NTgyODE0IEw5LjQwMTgxODA2LDQuNDQ5MzMyMDMgWiIgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')`
            }
          },
          previousButton: {
            style: {
              backgroundColor: '#FFFFFF',
              color: '#545E71',
              borderColor: '#E0E4EA',
              ':hover': {
                borderColor: '#636FFF',
                color: '#636FFF',
                '::before': {
                  backgroundImage: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9saXN0X29wZW5OZXc8L3RpdGxlPgogICAgPGcgaWQ9Iue7hOS7tuinhOWImeesrOS6jOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaXtumXtOi9tGxpZ2h05aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQwLjAwMDAwMCwgLTE0My4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OC4wMDAwMDAsIDg5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC005aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9saXN0X29wZW5OZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwMDAwMCwgMTIuMDAwMDAwKSBzY2FsZSgxLCAtMSkgcm90YXRlKC01NDAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyLjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC4yODMxNzcxNywzLjA5NDEyMDYyIEw4LjQ4MTc0MTc2LDUuNTUzNTgyODEgQzguODA4Nzg4Nyw1Ljc0NTE2MjQ4IDguOTE4NjA2NjMsNi4xNjU1OTI0MiA4LjcyNzAyNjk3LDYuNDkyNjM5MzYgQzguNjY3NjE4MzIsNi41OTQwNTYyNyA4LjU4MzE1ODY2LDYuNjc4NTE1OTMgOC40ODE3NDE3Niw2LjczNzkyNDU3IEw0LjI4MzE3NzE3LDkuMTk3Mzg2NzcgQzMuOTU2MTMwMjMsOS4zODg5NjY0MyAzLjUzNTcwMDI4LDkuMjc5MTQ4NSAzLjM0NDEyMDYyLDguOTUyMTAxNTUgQzMuMjgyNDg3NzUsOC44NDY4ODc2NyAzLjI1LDguNzI3MTUyNjMgMy4yNSw4LjYwNTIxNTg4IEwzLjI1LDMuNjg2MjkxNSBDMy4yNSwzLjMwNzI2MzE3IDMuNTU3MjYzMTcsMyAzLjkzNjI5MTUsMyBDNC4wNTgyMjgyNSwzIDQuMTc3OTYzMjksMy4wMzI0ODc3NSA0LjI4MzE3NzE3LDMuMDk0MTIwNjIgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iIzdFOERGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')`
                }
              },
              ':disabled': {
                borderColor: 'rgba(42,53,78,0.4)',
                color: 'rgba(42,53,78,0.4)'
              },
              '::before': {
                backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='12px' height='12px' viewBox='0 0 12 12' version='1.1'%3E%3Ctitle%3Eicon_list_openNew%3C/title%3E%3Cg id='组件规则第二版' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='时间轴light备份' transform='translate(-140.000000, -143.000000)'%3E%3Cg id='编组-4' transform='translate(68.000000, 89.000000)'%3E%3Cg id='编组-4备份-3' transform='translate(16.000000, 48.000000)'%3E%3Cg id='编组-19' transform='translate(48.000000, 0.000000)'%3E%3Cg id='icon_list_openNew' transform='translate(14.000000, 12.000000) scale(1, -1) rotate(-540.000000) translate(-14.000000, -12.000000) translate(8.000000, 6.000000)'%3E%3Crect id='矩形' x='0' y='0' width='12' height='12'/%3E%3Cpath d='M4.28317717,3.09412062 L8.48174176,5.55358281 C8.8087887,5.74516248 8.91860663,6.16559242 8.72702697,6.49263936 C8.66761832,6.59405627 8.58315866,6.67851593 8.48174176,6.73792457 L4.28317717,9.19738677 C3.95613023,9.38896643 3.53570028,9.2791485 3.34412062,8.95210155 C3.28248775,8.84688767 3.25,8.72715263 3.25,8.60521588 L3.25,3.6862915 C3.25,3.30726317 3.55726317,3 3.9362915,3 C4.05822825,3 4.17796329,3.03248775 4.28317717,3.09412062 Z' id='形状结合' fill='%23545E71'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
              }
            }
          },
          nextButton: {
            style: {
              backgroundColor: '#FFFFFF',
              color: '#545E71',
              borderColor: '#E0E4EA',
              ':hover': {
                borderColor: '#636FFF',
                color: '#636FFF',
                '::before': {
                  backgroundImage: `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9saXN0X29wZW5OZXc8L3RpdGxlPgogICAgPGcgaWQ9Iue7hOS7tuinhOWImeesrOS6jOeJiCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaXtumXtOi9tGxpZ2h05aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQwLjAwMDAwMCwgLTE0My4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OC4wMDAwMDAsIDg5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC005aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9saXN0X29wZW5OZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwMDAwMCwgMTIuMDAwMDAwKSBzY2FsZSgxLCAtMSkgcm90YXRlKC01NDAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTEyLjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC4yODMxNzcxNywzLjA5NDEyMDYyIEw4LjQ4MTc0MTc2LDUuNTUzNTgyODEgQzguODA4Nzg4Nyw1Ljc0NTE2MjQ4IDguOTE4NjA2NjMsNi4xNjU1OTI0MiA4LjcyNzAyNjk3LDYuNDkyNjM5MzYgQzguNjY3NjE4MzIsNi41OTQwNTYyNyA4LjU4MzE1ODY2LDYuNjc4NTE1OTMgOC40ODE3NDE3Niw2LjczNzkyNDU3IEw0LjI4MzE3NzE3LDkuMTk3Mzg2NzcgQzMuOTU2MTMwMjMsOS4zODg5NjY0MyAzLjUzNTcwMDI4LDkuMjc5MTQ4NSAzLjM0NDEyMDYyLDguOTUyMTAxNTUgQzMuMjgyNDg3NzUsOC44NDY4ODc2NyAzLjI1LDguNzI3MTUyNjMgMy4yNSw4LjYwNTIxNTg4IEwzLjI1LDMuNjg2MjkxNSBDMy4yNSwzLjMwNzI2MzE3IDMuNTU3MjYzMTcsMyAzLjkzNjI5MTUsMyBDNC4wNTgyMjgyNSwzIDQuMTc3OTYzMjksMy4wMzI0ODc3NSA0LjI4MzE3NzE3LDMuMDk0MTIwNjIgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iIzdFOERGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')`
                }
              },
              ':disabled': {
                borderColor: 'rgba(42,53,78,0.4)',
                color: 'rgba(42,53,78,0.4)'
              },
              '::before': {
                backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='12px' height='12px' viewBox='0 0 12 12' version='1.1'%3E%3Ctitle%3Eicon_list_openNew%3C/title%3E%3Cg id='组件规则第二版' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='时间轴light备份' transform='translate(-140.000000, -143.000000)'%3E%3Cg id='编组-4' transform='translate(68.000000, 89.000000)'%3E%3Cg id='编组-4备份-3' transform='translate(16.000000, 48.000000)'%3E%3Cg id='编组-19' transform='translate(48.000000, 0.000000)'%3E%3Cg id='icon_list_openNew' transform='translate(14.000000, 12.000000) scale(1, -1) rotate(-540.000000) translate(-14.000000, -12.000000) translate(8.000000, 6.000000)'%3E%3Crect id='矩形' x='0' y='0' width='12' height='12'/%3E%3Cpath d='M4.28317717,3.09412062 L8.48174176,5.55358281 C8.8087887,5.74516248 8.91860663,6.16559242 8.72702697,6.49263936 C8.66761832,6.59405627 8.58315866,6.67851593 8.48174176,6.73792457 L4.28317717,9.19738677 C3.95613023,9.38896643 3.53570028,9.2791485 3.34412062,8.95210155 C3.28248775,8.84688767 3.25,8.72715263 3.25,8.60521588 L3.25,3.6862915 C3.25,3.30726317 3.55726317,3 3.9362915,3 C4.05822825,3 4.17796329,3.03248775 4.28317717,3.09412062 Z' id='形状结合' fill='%23545E71'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
              }
            }
          }
        }
      }
    },
    dvHXKLine: {
      tooltip: {
        text: {
          color: 'rgba(0, 0, 0, 0.6)'
        }
      },
      dataZoom: {
        backgroundColor: '#FAFBFC',
        fillerColor: 'rgba(15,98,254,0.1)',
        handleIcon:
          'image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+57yW57uEIDIyPC90aXRsZT4KICAgIDxnIGlkPSLlm77ooajop4TojIPlrozmlbTniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QtMjIiPgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTMyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiLz4KICAgICAgICAgICAgPGcgaWQ9Iuaal+iJsua7keWdl+Wkh+S7vS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNiwwLjQgQzYuMTUyMjg0NzUsMC40IDYuNjUyMjg0NzUsMC42MjM4NTc2MjUgNy4wMTQyMTM1NiwwLjk4NTc4NjQzOCBDNy4zNzYxNDIzNywxLjM0NzcxNTI1IDcuNiwxLjg0NzcxNTI1IDcuNiwyLjQgTDcuNiwyLjQgTDcuNiwxMy42IEM3LjYsMTQuMTUyMjg0NyA3LjM3NjE0MjM3LDE0LjY1MjI4NDcgNy4wMTQyMTM1NiwxNS4wMTQyMTM2IEM2LjY1MjI4NDc1LDE1LjM3NjE0MjQgNi4xNTIyODQ3NSwxNS42IDUuNiwxNS42IEw1LjYsMTUuNiBMMi40LDE1LjYgQzEuODQ3NzE1MjUsMTUuNiAxLjM0NzcxNTI1LDE1LjM3NjE0MjQgMC45ODU3ODY0MzgsMTUuMDE0MjEzNiBDMC42MjM4NTc2MjUsMTQuNjUyMjg0NyAwLjQsMTQuMTUyMjg0NyAwLjQsMTMuNiBMMC40LDEzLjYgTDAuNCwyLjQgQzAuNCwxLjg0NzcxNTI1IDAuNjIzODU3NjI1LDEuMzQ3NzE1MjUgMC45ODU3ODY0MzgsMC45ODU3ODY0MzggQzEuMzQ3NzE1MjUsMC42MjM4NTc2MjUgMS44NDc3MTUyNSwwLjQgMi40LDAuNCBMMi40LDAuNCBMMi40LDAuNCBaIiBpZD0i6Lev5b6EIiBzdHJva2U9IiNFMEU0RUEiIHN0cm9rZS13aWR0aD0iMC44IiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS41LDEwIEM1Ljc3NjE0MjM3LDEwIDYsMTAuMjIzODU3NiA2LDEwLjUgQzYsMTAuNzc2MTQyNCA1Ljc3NjE0MjM3LDExIDUuNSwxMSBMMi41LDExIEMyLjIyMzg1NzYzLDExIDIsMTAuNzc2MTQyNCAyLDEwLjUgQzIsMTAuMjIzODU3NiAyLjIyMzg1NzYzLDEwIDIuNSwxMCBMNS41LDEwIFogTTUuNSw3LjUgQzUuNzc2MTQyMzcsNy41IDYsNy43MjM4NTc2MyA2LDggQzYsOC4yNzYxNDIzNyA1Ljc3NjE0MjM3LDguNSA1LjUsOC41IEwyLjUsOC41IEMyLjIyMzg1NzYzLDguNSAyLDguMjc2MTQyMzcgMiw4IEMyLDcuNzIzODU3NjMgMi4yMjM4NTc2Myw3LjUgMi41LDcuNSBMNS41LDcuNSBaIE01LjUsNSBDNS43NzYxNDIzNyw1IDYsNS4yMjM4NTc2MyA2LDUuNSBDNiw1Ljc3NjE0MjM3IDUuNzc2MTQyMzcsNiA1LjUsNiBMMi41LDYgQzIuMjIzODU3NjMsNiAyLDUuNzc2MTQyMzcgMiw1LjUgQzIsNS4yMjM4NTc2MyAyLjIyMzg1NzYzLDUgMi41LDUgTDUuNSw1IFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiM4MjhGQTEiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
        borderColor: '#DADDE0',
        textStyle: {
          color: '#787E87'
        },
        borderRadius: 1,
        handleSize: '100%',
        dataBackground: {
          areaStyle: {
            color: '#FFFFFF',
            opacity: 0
          },
          lineStyle: {
            color: '#FFFFFF',
            opacity: 0
          }
        },
        selectedDataBackground: {
          areaStyle: {
            opacity: 0
          },
          lineStyle: {
            opacity: 0
          }
        },
        moveHandleIcon: 'path://',
        moveHandleSize: -32,
        moveHandleStyle: {
          opacity: 0
        },
        dvMoveHandleOffset: -16
      },
      hxKLine: {
        option: {
          yAxis: {
            inside: false,
            size: 'auto',
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          xAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            },
            isCenter: false
          },
          candle: {
            tooltip: {
              showRule: 'none',
              custom: []
            },
            priceMark: {
              show: false
            },
            area: {
              lineColor: '#555CF7',
              backgroundColor: []
            }
          },
          indicator: {
            yAxis: {
              show: true,
              position: 'right'
            },
            tooltip: {
              showRule: 'none'
            },
            bars: [
              {
                upColor: 'red',
                downColor: 'green'
              }
            ]
          }
        }
      },
      hxKLineAndBar: {
        option: {
          xAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          yAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          candle: {
            priceMark: {
              show: false
            },
            bar: {
              upColor: 'rgba(250, 82, 80, 0.4)',
              downColor: 'rgba(50, 189, 168, .4)',
              noChangeColor: 'rgba(100, 100, 100, .4)',
              upBorderColor: 'rgba(250, 82, 80, 0.4)',
              downBorderColor: 'rgba(50, 189, 168, .4)',
              noChangeBorderColor: 'rgba(100, 100, 100, .4)',
              upWickColor: 'rgba(250, 82, 80, 0.4)',
              downWickColor: 'rgba(50, 189, 168, .4)',
              noChangeWickColor: 'rgba(100, 100, 100, .4)'
            },
            tooltip: {
              showRule: 'none',
              custom: []
            }
          },
          crosshair: {
            horizontal: {
              show: false
            }
          }
        }
      },
      hxKLineAndDynamicLine: {
        option: {
          xAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          yAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          candle: {
            priceMark: {
              show: false
            },
            bar: {
              upColor: 'rgba(250, 82, 80, 0.4)',
              downColor: 'rgba(50, 189, 168, .4)',
              noChangeColor: 'rgba(100, 100, 100, .4)',
              upBorderColor: 'rgba(250, 82, 80, 0.4)',
              downBorderColor: 'rgba(50, 189, 168, .4)',
              noChangeBorderColor: 'rgba(100, 100, 100, .4)',
              upWickColor: 'rgba(250, 82, 80, 0.4)',
              downWickColor: 'rgba(50, 189, 168, .4)',
              noChangeWickColor: 'rgba(100, 100, 100, .4)'
            },
            tooltip: {
              showRule: 'none',
              custom: []
            }
          },
          crosshair: {
            horizontal: {
              show: false
            }
          },
          overlay: {
            // 点
            point: {
              color: 'rgba(255, 255, 255, 0)',
              borderColor: 'rgba(255, 255, 255, 0)',
              activeColor: 'rgba(255, 255, 255, 0)',
              activeBorderColor: 'rgba(255, 255, 255, 0)'
            }
          }
        }
      },
      hxKLineAndMultiIndicatorLine: {
        option: {
          xAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          yAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          candle: {
            priceMark: {
              show: false
            },
            bar: {
              upColor: 'rgba(250, 82, 80, 0.4)',
              downColor: 'rgba(50, 189, 168, .4)',
              noChangeColor: 'rgba(100, 100, 100, .4)',
              upBorderColor: 'rgba(250, 82, 80, 0.4)',
              downBorderColor: 'rgba(50, 189, 168, .4)',
              noChangeBorderColor: 'rgba(100, 100, 100, .4)',
              upWickColor: 'rgba(250, 82, 80, 0.4)',
              downWickColor: 'rgba(50, 189, 168, .4)',
              noChangeWickColor: 'rgba(100, 100, 100, .4)'
            },
            tooltip: {
              // showRule: 'follow_cross',
              // showType: 'rect'
              showRule: 'none',
              custom: []
            }
          },
          crosshair: {
            horizontal: {
              show: false
            }
          },
          overlay: {
            // 点
            point: {
              color: 'rgba(255, 255, 255, 0)',
              borderColor: 'rgba(255, 255, 255, 0)',
              activeColor: 'rgba(255, 255, 255, 0)',
              activeBorderColor: 'rgba(255, 255, 255, 0)'
            }
          }
        }
      },
      hxKLineAndTag: {
        text: {
          fontSize: 12
        },
        rect: {
          borderColor: '#C4CAD5',
          backgroundColor: 'rgba(196, 202, 213, 0.16)',
          hoverBackgroundColor: 'rgba(99, 111, 255, 0.08)',
          activeBackgroundColor: 'rgba(99, 111, 255, 0.16)',
          activeBorderColor: '#636FFF',
          hoverBorderColor: '#636FFF'
        },
        option: {
          xAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            }
          },
          yAxis: {
            tickText: {
              family: 'Microsoft YaHei'
            },
            position: 'left'
          },
          candle: {
            priceMark: {
              show: false
            },
            tooltip: {
              showRule: 'none',
              custom: []
            }
          },
          crosshair: {
            horizontal: {
              show: false
            },
            vertical: {
              show: false
            }
          }
        }
      },
      constants: {
        DEFAULT_COLOR_UP: '#FF2436',
        DEFAULT_COLOR_UP_1: '#802028',
        DEFAULT_COLOR_UP_2: '#CC2F3C',
        DEFAULT_COLOR_UP_3: '#F7525F',
        DEFAULT_COLOR_UP_4: '#FAA1A4',
        DEFAULT_COLOR_DOWN: '#07AB4B',
        DEFAULT_COLOR_DOWN_1: '#004D40',
        DEFAULT_COLOR_DOWN_2: '#06806B',
        DEFAULT_COLOR_DOWN_3: '#22ABA8',
        DEFAULT_COLOR_DOWN_4: '#70CCBD',
        DEFAULT_COLOR_NOCHANGE: '#FF2436',
        DEFAULT_COLOR_NOCHANGE_1: '#787B86',
        DEFAULT_COLOR_NOCHANGE_2: '#9598A1',
        DEFAULT_COLOR_NOCHANGE_3: '#B2B5BE',
        DEFAULT_COLOR_NOCHANGE_4: '#D1D4DC',
        DEFAULT_PRIMARY_COLOR: '#636FFF',
        DEFAULT_PRIMARY_COLOR_1: '#143EB2',
        DEFAULT_PRIMARY_COLOR_2: '#1E53E5',
        DEFAULT_PRIMARY_COLOR_3: '#3179FE',
        DEFAULT_PRIMARY_COLOR_4: '#90BFF9',
        DEFAULT_FONT_SIZE: 10,
        DEFAULT_FONT_COLOR: 'rgba(0, 0, 0, 0.6)',
        DEFAULT_FONT_COLOR_DEEP: '#131C30',
        DEFAULT_FONT_COLOR_REVERSE: '#FFFFFF',
        DEFAULT_FONT_WEIGHT: 'normal',
        DEFAULT_FONT_FAMILY: '-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif',
        DEFAULT_CONTAINER_BG_COLOR: 'transparent',
        DEFAULT_CONTAINER_BG_2_COLOR: '#DDDDDD',
        DEFAULT_BG_MASK_COLOR: 'rgba(0, 0, 0, 0.08)',
        DEFAULT_LINE_COLOR: '#000000',
        DEFAULT_LINE_COLOR_1: '#FF9600',
        DEFAULT_LINE_COLOR_2: '#935EBD',
        DEFAULT_LINE_COLOR_3: '#2196F3',
        DEFAULT_LINE_COLOR_4: '#E11D74',
        DEFAULT_LINE_COLOR_5: '#01C5C4',
        DEFAULT_GRID_LINE_COLOR: 'rgba(0, 0, 0, 0.06)',
        DEFAULT_TICK_LINE_COLOR: 'rgba(0, 0, 0, 0.06)',
        DEFAULT_CROSSHAIR_LINE_COLOR: '#545E71',
        DEFAULT_CROSSHAIR_BG_COLOR: '#3366FF',
        DEFAULT_LINE_DASH_VALUE: [4, 2],
        DEFAULT_TOOLBAR_BG_COLOR: '#FFFFFF',
        DEFAULT_TOOLBAR_SHADOW_COLOR: 'rgba(0, 0, 0, 0.2)',
        DEFAULT_TOOLBAR_HOVER_COLOR: 'rgb(242, 243, 245)',
        DEFAULT_TOOLBAR_ACTIVE_COLOR: 'rgb(229, 230, 235)',
        DEFAULT_TOOLBAR_BORDER_COLOR: '#dbdbdb',
        DEFAULT_TOOLBAR_BORDER_HOVER_COLOR: '#bababa',
        DEFAULT_TOOLBAR_SLIDER_TRACK_BG_COLOR: '#e6e6e6',
        DEFAULT_TOOLBAR_SLIDER_THUMB_BG_COLOR: '#76808F'
      }
    },
    dvText: {
      '--theme-background': 'transparent'
    },
    dvTimeLine: {
      '--theme-background': 'transparent'
    },
    dvTreemapLevelStyle: {
      labelOpenIcon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDVWN0gxMlY0SDlWNUgxMVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuODQiLz4KPHBhdGggZD0iTTUgMTFWOUg0VjEySDdWMTFINVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuODQiLz4KPHBhdGggZD0iTTEzIDJDMTMuNTUyMyAyIDE0IDIuNDQ3NzIgMTQgM1YxM0MxNCAxMy41NTIzIDEzLjU1MjMgMTQgMTMgMTRIM0MyLjQ0NzcyIDE0IDIgMTMuNTUyMyAyIDEzVjNDMiAyLjQ0NzcyIDIuNDQ3NzIgMiAzIDJIMTNaTTEzIDNIM1YxM0gxM1YzWiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC44NCIvPgo8L3N2Zz4K',
      labelCloseIcon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzNDBfMTkwNjkpIj4KPHBhdGggZD0iTTEzIDJDMTMuNTUyMyAyIDE0IDIuNDQ3NzIgMTQgM1YxM0MxNCAxMy41NTIzIDEzLjU1MjMgMTQgMTMgMTRIM0MyLjQ0NzcyIDE0IDIgMTMuNTUyMyAyIDEzVjNDMiAyLjQ0NzcyIDIuNDQ3NzIgMiAzIDJIMTNaTTEzIDNIM1YxM0gxM1YzWk0xMiA5VjEwSDEwVjEySDlWOUgxMlpNNyA0VjdINFY2SDZWNEg3WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC44NCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzNDBfMTkwNjkiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
      labelColor: '#000',
      level_2: {
        itemStyleBorderColor: '#EBf0FA',
        upperLabelBackgroundColorE: '#E1E6F0',
        upperLabelBackgroundColor: '#EBf0FA'
      },
      level_3: {
        upperLabelBackgroundColorE: '#CED6E3',
        upperLabelBackgroundColor: '#D5DEEB'
      }
    },
    dvMarkerLine: {
      titleColor: '#000',
      descColor: 'rgba(84, 94, 113, 1)',
      scatterBorderColor: '#000',
      markerBackground: 'rgba(255, 255, 255, 0.5)',
      markerCircleColor: '#fff'
    },
    // radar 配置无法在默认 baseOption 内配置（会应用到所有图表内）
    dvRadar: {
      axisLine: {
        lineStyle: {
          color: '#E0E4EA'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#E0E4EA'
        }
      },
      axisName: {
        color: '#2A354E'
      },
      splitArea: {
        areaStyle: {
          color: []
        }
      }
    },
  
    // * UED Token ---------------------------------------------------------------------------
    '--font-size-extra-small': 12,
    '--line-height-small': 16,
    '--color-text-secondary': 'black',
  
    // * ECharts theme -------------------------------------------------------
    seriesCnt: '12',
    backgroundColor: 'transparent',
    titleColor: '#313438',
    // 轴名称颜色
    subtitleColor: '#545E71',
    textColorShow: false,
    textColor: '#333',
    markTextColor: '#fafbfc',
    color: [
      '#636FFF',
      '#FF7A01',
      '#33B2CC',
      '#B388FF',
      '#A6C8FF',
      '#F06292',
      '#33B1FF',
      '#FFAD3B',
      '#3147A4',
      '#DA1E28'
    ],
    borderColor: '#ffffff',
    borderWidth: '1',
    visualMapColor: [
      '#7c0105',
      '#ad0126',
      '#e63c47',
      '#ff6c6f',
      '#6bc78b',
      '#2fa861',
      '#007a39',
      '#004e1a',
      '#400105'
    ],
    legendTextColor: '#787e87',
    kColor: '#ff4a4a',
    kColor0: '#00b36b',
    kBorderColor: '#ff4a4a',
    kBorderColor0: '#00b36b',
    kBorderWidth: 1,
    lineWidth: 2,
    symbolSize: '8',
    symbol: 'circle',
    symbolBorderWidth: '2',
    lineSmooth: false,
    graphLineWidth: 1,
    graphLineColor: '#92989f',
    mapLabelColor: '#000',
    mapLabelColorE: 'rgb(100,0,0)',
    mapBorderColor: '#444',
    mapBorderColorE: '#444',
    mapBorderWidth: 0.5,
    mapBorderWidthE: 1,
    mapAreaColor: '#eee',
    mapAreaColorE: 'rgba(255,215,0,0.8)',
    axes: [
      {
        type: 'all',
        name: '通用坐标轴',
        axisLineShow: true,
        axisLineColor: '#6e7079',
        axisTickShow: false,
        axisTickColor: '#6e7079',
        axisLabelShow: true,
        // 轴标签颜色
        axisLabelColor: '#545E71',
        splitLineShow: true,
        splitLineColor: ['#F2F5FA'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
      },
      {
        type: 'category',
        name: '类目坐标轴',
        axisLineShow: true,
        axisLineColor: '#92989f',
        axisTickShow: false,
        axisTickColor: '#92989f',
        axisLabelShow: true,
        axisLabelColor: '#787e87',
        splitLineShow: true,
        splitLineColor: ['#f3f4f6'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(255,0,0,0.2)']
      },
      {
        type: 'value',
        name: '数值坐标轴',
        axisLineShow: true,
        axisLineColor: '#92989f',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#787e87',
        splitLineShow: true,
        splitLineColor: ['#f3f4f6'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
      },
      {
        type: 'log',
        name: '对数坐标轴',
        axisLineShow: true,
        axisLineColor: '#92989f',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#787e87',
        splitLineShow: true,
        splitLineColor: ['#f3f4f6'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
      },
      {
        type: 'time',
        name: '时间坐标轴',
        axisLineShow: true,
        axisLineColor: '#92989f',
        axisTickShow: false,
        axisTickColor: '#6E7079',
        axisLabelShow: true,
        axisLabelColor: '#787e87',
        splitLineShow: true,
        splitLineColor: ['#f3f4f6'],
        splitAreaShow: false,
        splitAreaColor: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
      }
    ],
    axisSeperateSetting: true,
    toolboxColor: '#60656c',
    toolboxEmphasisColor: '#636fff',
    tooltipAxisColor: '#313438',
    tooltipAxisWidth: 1,
    timelineLineColor: '#c8cbd0',
    timelineLineWidth: '1',
    timelineItemColor: '#dadde0',
    timelineItemColorE: '#c8cbd0',
    timelineCheckColor: '#636fff',
    timelineCheckBorderColor: '#636fff',
    timelineItemBorderWidth: 1,
    timelineControlColor: '#dadde0',
    timelineControlBorderColor: '#dadde0',
    timelineControlBorderWidth: '0',
    timelineLabelColor: '#787e87',
    datazoomBackgroundColor: '#FAFBFC',
    datazoomDataColor: 'rgba(255,255,255,0.3)',
    datazoomFillColor: 'rgba(15,98,254,0.1)',
    datazoomHandleColor: '#a7b7cc',
    datazoomHandleWidth: '100',
    datazoomLabelColor: '#787E87'
  }
}
