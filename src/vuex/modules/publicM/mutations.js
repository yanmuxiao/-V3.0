import { 
	COUNT_PUBLIC
} from './mutation-type'


const mutations = {
	[COUNT_PUBLIC](state, data) {
		state.count_public++;
	}
}


export default mutations
