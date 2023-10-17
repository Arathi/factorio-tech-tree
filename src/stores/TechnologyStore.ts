import { defineStore } from "pinia";
import Technology from "../domains/Technology";
import FactorioDataLoader from "../utils/FactorioDataLoader";

const loader = new FactorioDataLoader();

interface State {
  datas: Map<string, Technology>;
}

export const useTechnologyStore = defineStore("technology", {
  state: (): State => ({
    datas: new Map<string, Technology>()
  }),
  getters: {
  },
  actions: {
    init() {
      console.info("正在初始化科技数据");
      loader.loadTechnology().then(map => this.datas = map);
    }
  },
});