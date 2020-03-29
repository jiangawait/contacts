import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";

// import counterStore from "./store/counter";
import * as Store from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = {
  ...Store
};
class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/me/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },

    tabBar: {
      color: "#B2B2B2",
      selectedColor: "#FF803D",
      backgroundColor: "#FFFFFF",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./asset/images/icon_home.png",
          selectedIconPath: "./asset/images/icon_home_press.png"
        },
        {
          pagePath: "pages/me/index",
          text: "我的",
          iconPath: "./asset/images/icon_home.png",
          selectedIconPath: "./asset/images/icon_home_press.png"
        }
      ]
    },
    networkTimeout: {
      request: 1000000,
      connectSocket: 100000,
      uploadFile: 100000,
      downloadFile: 100000
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
