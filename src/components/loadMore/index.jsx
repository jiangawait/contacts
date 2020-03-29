import Taro, { PureComponent } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class LoadMore extends PureComponent {
  static defaultProps = {
    loading: false,
    hasMore: true
  };
  render() {
    const { loading, hasMore } = this.props;

    return (
      <View className='load-more'>
        {loading && (
          <View className='loading'>
            <Text className='loading-txt'>正在加载中...</Text>
          </View>
        )}
        {!hasMore && (
          <View className='loading loading--not-more'>
            <Text className='loading-txt'>更多内容，敬请期待</Text>
          </View>
        )}
      </View>
    );
  }
}
