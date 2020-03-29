import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.scss";

@inject("homeStore")
@observer
class Me extends Component {
  config = {
    navigationBarTitleText: "电子名片"
  };

  render() {
    return <View className="me">asdasd</View>;
  }
}

export default Me;
