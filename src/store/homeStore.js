import { observable } from "mobx";
import Taro from "@tarojs/taro";
// import "@tarojs/async-await";
import * as api from "@utils/api";

const homeStore = observable({
  departmentList: []
});
/**
 * 部门列表
 */
homeStore.getDepartmentList = async function() {
  const res = await api.getDepartmentList();
  this.departmentList = res.data;
};

export default homeStore;
