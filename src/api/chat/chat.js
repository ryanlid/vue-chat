import request from "@/utils/request";
import { APIURL } from "@/utils/utils.js";
// https://www.easy-mock.com/mock/5d54ff448d55a364191fda39/chat/chatinfo/10

// 获取聊天信息
export function getChatInfo(params) {
  const data = {
    data: params
  };
  return request({
    url: APIURL + "/chat/chatinfo/10",
    method: "get",
    data
  });
}
