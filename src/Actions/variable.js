import axios from 'axios';
import { updateErrors } from './errors';
import { REPLACE_VARIABLES } from './action';

export const getVariables = (typeName: String) => async (dispatch) => {
	try {
		const url = getUrl(typeName);
		const response = await axios.get(url);
		console.log(response.data);
		dispatch({
			type: REPLACE_VARIABLES,
			payload: response.data,
			typeName: typeName
		});
	} catch (error) {
		if (error.response) {
			updateErrors(dispatch, error.response.data);
			return false;
		}
	}
};

const getUrl = (typeName: String) => {

	if (typeName === 'Machine') {
		return 'https://raw.githubusercontent.com/jyyautomation/jyy-homepage/master/machine.json';
	}
	if (typeName === 'GalleryImages') {
		return 'https://raw.githubusercontent.com/jyyautomation/jyy-homepage/master/galleryImages.json';
	}
	if (typeName=== 'Pdf'){
		return 'https://raw.githubusercontent.com/jyyautomation/jyy-homepage/master/pdf.json'
	}
};
