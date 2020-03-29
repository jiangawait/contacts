// import "@tarojs/async-await";
import fetch from "@utils/request";

export const API_USER_LOGIN = "/api/login";

//获取行业列表
export const getOccupationList = async payload =>
  await fetch({
    url: "/api/occupation/list",
    method: "GET",
    payload
  });
//搜索会员
export const searchMember = async payload =>
  await fetch({
    url: "/api/member/search",
    method: "POST",
    payload
  });

//已获取的名片列表
export const getCardList = async payload =>
  await fetch({
    url: "/api/me/card/list",
    method: "GET",
    payload
  });

//获取个人信息
export const getProfile = async payload =>
  await fetch({
    url: `/api/me/profile`,
    method: "GET",
    payload
  });
//同意名片交换请求
export const confirmExchange = async apply_id =>
  await fetch({
    url: `/api/me/exchange/apply/${apply_id}/confirm`,
    method: "GET"
  });
//获取名片交换申请列表
export const getExchangeList = async payload =>
  await fetch({
    url: `/api/me/exchange/list`,
    method: "GET",
    payload
  });
//查询是否有新的交换通知
export const getNewExchangeNotification = async () =>
  await fetch({
    url: `/api/me/new/exchange/notification`,
    method: "GET"
  });
//申请交换名片
export const exchangeCard = async member_id =>
  await fetch({
    url: `/api/member/${member_id}/exchange/card`,
    method: "GET"
  });
//获取会员详细信息
export const getMemberDetail = async member_id =>
  await fetch({
    url: `/api/member/${member_id}/detail`,
    method: "GET"
  });
//获取分会的会员列表
export const getDepartmentMemberList = async (department_id, payload) =>
  await fetch({
    url: `/api/department/${department_id}/member/list`,
    method: "POST",
    payload
  });
//部门列表
export const getDepartmentList = async () =>
  await fetch({
    url: `/api/department/list`,
    method: "GET"
  });
//登录
export const login = async payload =>
  await fetch({
    url: API_USER_LOGIN,
    method: "GET",
    payload
  });
