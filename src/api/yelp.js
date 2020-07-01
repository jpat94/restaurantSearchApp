import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer uP7CHgQQUllsjvjjybppDxxKyNNeVX6s-u0DurTwkG79r9PpgozK1nOrAOCHIkGrpEZpHOivcwYsCJfH2ptw1WdYSwQ5uR1pas9un0lj_OREsrqHAbruFdYxTDfgXnYx'
    }
});