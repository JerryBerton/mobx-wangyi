import { observable, computed, action} from 'mobx';
import request from 'libs/request';

class Recommend {
  @observable list = []
  constructor() {
       this.list = [];
   }
  @action async fetchList() {
    this.list = await request('personalized');
  }
}
export default new Recommend();
