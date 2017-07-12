import { observable, computed, action} from 'mobx';
import request from 'libs/request';

class mv {
  @observable list = []
  @observable loading = false
  constructor() {
       this.list = [];
   }
  @action async fetchList() {
    this.loading = true;
    this.list = await request('mv/first');
    this.loading = false;
  }
}
export default new mv();
