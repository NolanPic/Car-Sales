import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/carActions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
};

const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                features: [...state.car.features, action.payload]
            };
        case REMOVE_FEATURE:
            const featureToRemove = state.car.features.find(feat => feat.id === action.payload);
            return {
                ...state,
                additionalPrice: state.additionalPrice - featureToRemove.price,
                features: state.car.features.filter(feat => feat.id !== action.payload)
            };
        default:
            return state;
    }
};

export default carReducer;
