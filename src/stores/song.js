import { observable, computed, action} from 'mobx';
import request from 'libs/request';

class Songs {
  @observable list = []
  constructor() {
       this.list = [];
   }
  @action async fetchSong(id) {
    this.list = await request(`music/url?id=488256974`);
  }
}
export default new Songs();
