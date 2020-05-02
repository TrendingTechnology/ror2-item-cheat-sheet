import Vue from 'vue';
import Vuex from 'vuex';
import { SortType } from './data/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sortBy: SortType.RARITY,
    filterBy: { category: [], rarity: [] },
  },
  mutations: {
    setSortBy: (state, { sortKey }) => {
      state.sortBy = SortType[sortKey.toUpperCase()];
    },
  },
});
