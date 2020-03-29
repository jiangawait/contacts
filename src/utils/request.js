import Taro from "@tarojs/taro";
import { API_USER_LOGIN } from "@utils/api";
/* eslint-disable */
console.log("test", test);

const host =
  "https://result.eolinker.com/RBGmSc73fdc6924e03a6e482d7833d84e51ae758ed9e8bd?uri=";
/* eslint-enable */
const CODE_SUCCESS = 200;
const CODE_AUTH_EXPIRED = 600;

function getStorage(key) {
  return Taro.getStorage({ key })
    .then(res => res.data)
    .catch(() => "");
}

function updateStorage(data = {}) {
  return Promise.all([
    Taro.setStorage({ key: "session", data: data["session"] || "" })
    // Taro.setStorage({ key: 'uid', data: data['uid'] || ''})
  ]);
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default async function fetch(options) {
  const {
    url,
    payload = {},
    method = "GET",
    showToast = true,
    autoLogin = true
  } = options;
  const session = await getStorage("session");
  const header = session
    ? { "WX-PIN-SESSION": session, "X-WX-3RD-Session": session }
    : {};
  if (method === "POST") {
    header["content-type"] = "application/json";
  } else {
    header["content-type"] = "application/x-www-form-urlencoded";
  }
  const params =
    url !== API_USER_LOGIN
      ? {
          ...payload,
          session: session
        }
      : payload;

  return Taro.request({
    url: host + url,
    method,
    data: params,
    header
  })
    .then(async res => {
      const { status, data } = res.data;
      if (status !== CODE_SUCCESS) {
        if (status === CODE_AUTH_EXPIRED) {
          await updateStorage({});
        }
        return Promise.reject(res.data);
      }

      if (url === API_USER_LOGIN) {
        await updateStorage(data);
      }

      // XXX 用户信息需展示 uid，但是 uid 是登录接口就返回的，比较蛋疼，暂时糅合在 fetch 中解决
      // if (url === API_USER) {
      //   const uid = await getStorage('uid')
      //   return { ...data, uid }
      // }

      return res.data;
    })
    .catch(err => {
      const defaultMsg =
        err.status === CODE_AUTH_EXPIRED ? "登录失效" : "请求异常";
      if (showToast) {
        Taro.showToast({
          title: (err && err.msg) || defaultMsg,
          icon: "none"
        });
      }

      if (err.status === CODE_AUTH_EXPIRED && autoLogin) {
        Taro.navigateTo({
          url: "/pages/user-login/user-login"
        });
      }

      return Promise.reject({ message: defaultMsg, ...err });
    });
}
