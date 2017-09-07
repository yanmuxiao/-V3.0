import { 
	LOADING,
	COUNT_PUBLIC
} from './mutation-type'


const mutations = {
	[LOADING](state, data) {
		state.loading = data;
	},
	[COUNT_PUBLIC](state, data) {
		state.count_public++;
	}
}


export default mutations
