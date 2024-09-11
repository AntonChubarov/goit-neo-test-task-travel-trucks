import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const listCampers = async (params = {}) => {
    const {
        location,
        form,
        AC = false,
        TV = false,
        kitchen = false,
        bathroom = false,
        transmission,
    } = params;

    try {
        const response = await axios.get(`${BASE_URL}/campers`, {
            params: {
                location,
                form,
                AC,
                TV,
                kitchen,
                bathroom,
                transmission,
            },
        });
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
