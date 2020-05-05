import { action, observable } from 'mobx';

const INITIAL = {
  count: 0
};

class CounterStore {
  @observable count = INITIAL.count;
  
  @action increment() {
    this.count = this.count + 1;
  }

  @action decrement() {
    this.count = this.count - 1;
  }
}

export default new CounterStore();
