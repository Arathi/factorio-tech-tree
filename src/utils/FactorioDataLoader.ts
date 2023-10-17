import Axios, { AxiosInstance } from "axios";
import Technology from "../domains/Technology";

export default class FactorioDataLoader {
  axios: AxiosInstance;
  
  constructor() {
    this.axios = Axios.create({});
  }

  async load(path: string) {
    const response = await this.axios.get(`/${path}`);
    if (response.status != 200) {
      console.warn(`Factorio数据${path}加载失败，状态码：${response.status}`);
      return {};
    }
    return response.data;
  }

  async loadTechnology(): Promise<Map<string, Technology>> {
    const map = new Map<string, Technology>();
    const data = await this.load("technology.json");
    const keys = Object.keys(data);
    for (const key of keys) {
      console.info(`载入科技${key}`);
      map.set(key, data[key]);
    }
    return map;
  }
}