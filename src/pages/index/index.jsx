import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import { AtSearchBar, AtButton } from "taro-ui";
import LoadMore from "@components/loadMore";

import { observer, inject } from "@tarojs/mobx";
import { toJS } from "mobx";
import "./index.scss";

@inject("homeStore")
@observer
class Home extends Component {
  config = {
    navigationBarTitleText: "电子名片"
  };
  state = {
    search_value: "",
    loading: false
  };

  componentWillMount() {
    const { homeStore } = this.props;
    // homeStore.getDepartmentList();
  }
  onChange(value) {
    this.setState({
      search_value: value
    });
  }
  onActionClick = async () => {
    console.log("开始搜索");
    const { homeStore } = this.props;
    const { search_value } = this.state;
    this.setState({
      loading: true
    });
    await homeStore.getResellPostList({
      page: 1,
      keyword: search_value
    });
    this.setState({
      loading: false
    });
  };
  loadMore = async () => {
    // const { homeStore } = this.props
    // const { hasMore, paging } = homeStore;
    // const { loading, search_value } = this.state;
    // if (!hasMore || loading) {
    //   return;
    // }
    // this.setState({
    //   loading: true
    // });
    // await homeStore.getResellPostList({
    //   page: paging.current_page + 1,
    //   keyword: search_value
    // })
    // this.setState({
    //   loading: false
    // });
  };
  onBuy = item => {
    Taro.navigateTo({
      url: `/pages/transaction/detail/index?post_id=${item.post_id}&series_name=${item.box.series_name}`
    });
  };
  render() {
    const { loading, search_value } = this.state;
    const { hasMore, transactionList } = this.props.homeStore;
    return (
      <ScrollView
        scrollY
        enableBackToTop
        className="scroll-view"
        onScrollToLower={this.loadMore}
      >
        <View className="search-content">
          <AtSearchBar
            fixed
            // showActionButton
            value={search_value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
            onConfirm={this.onActionClick.bind(this)}
          />
        </View>
        <View className="list-content"></View>
        <LoadMore loading={loading} hasMore={hasMore}></LoadMore>
      </ScrollView>
    );
  }
}

export default Home;
