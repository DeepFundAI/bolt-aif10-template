import darkTheme from '@/common/echarts-skin/dark.project.js';
import lightTheme from '@/common/echarts-skin/light.project.js';

export const ChartSkinMap: { [key: string]: any } = {
  'dark': {
    name: '暗黑',
    icon: 'dark',
    config: darkTheme.theme
  },
  'light': {
    name: '明亮',
    icon: 'light',
    config: lightTheme.theme
  }
}