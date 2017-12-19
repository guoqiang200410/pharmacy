import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../components/home/HomeView'
import LectureView from '../components/lecture/LectureView'
import MineView from '../components/mine/MineView'
import MessageView from '../components/message/MessageView'
import ScanView from '../components/scan/ScanView'
import ShoppingView from '../components/shopping/ShoppingView'
import FocusView from '../components/focus/FocusView'
import SetView from '../components/set/SetView'
import ApplyView from '../components/apply/ApplyView'
import SucceedView from '../components/succeed/SucceedView'
import TextcontView from '../components/textcont/TextcontView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      name: '首页',
      component: HomeView
    },
    {
      path: '/lecture',
      name: '讲堂',
      component: LectureView
    },
    {
      path: '/mine',
      name: '我的',
      component: MineView
    },
    {
      path: '/message',
      name: '个人信息',
      component: MessageView
    },
    {
      path: '/scan',
      name: '扫一扫',
      component: ScanView
    },
    {
      path: '/shopping',
      name: '购物车',
      component: ShoppingView
    },
    {
      path: '/focus',
      name: '关注',
      component: FocusView
    },
    {
      path: '/set',
      name: '设置',
      component: SetView
    },
    {
      path: '/apply',
      name: '申请',
      component: ApplyView
    },
    {
      path: '/succeed',
      name: '成功',
      component: SucceedView
    },
    {
      path: '/textcont',
      name: '本文内容',
      component: TextcontView
    }
    
  ]
})
