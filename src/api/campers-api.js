import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const listCampers = async (params = {}) => {
    console.log('Request parameters:', params);

    const {
        location,
        form,
        AC,
        TV,
        kitchen,
        bathroom,
        autoTransmission,
        page = 1,
        limit = 3,
    } = params;

    const queryParams = {
        ...(location && { location }),
        ...(form && { form }),
        ...(AC && { AC }),
        ...(TV && { TV }),
        ...(kitchen && { kitchen }),
        ...(bathroom && { bathroom }),
        ...(autoTransmission && { transmission: 'automatic' }),
        page,
        limit,
    };

    try {
        const response = await axios.get(`${BASE_URL}/campers`, { params: queryParams });
        return response.data;
    } catch (error) {
        console.error('Error fetching campers:', error);
        throw error;
    }
};

export const getCamperByID = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/campers/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching camper with ID ${id}:`, error);
        throw error;
    }
};
