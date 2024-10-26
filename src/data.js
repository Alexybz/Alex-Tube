export const API_KEY = 'AIzaSyCs9kYLLa1t2LKJyLaGV3YMAOj39Vt-a0M';

export const valueConverter = (value) =>{
    if(value >= 1000000) {
        return (value / 1000000).toFixed(2) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
    } else {
        return value;
    }
}