import {useState, useEffect} from 'react';
import Axios from "axios";
import URL from "../config";

const GetAnime = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecentlyAnimes = async () => {
            try {
                let response = await Axios.get(URL+url);
                let data = await response.data;
                setData(data.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(e);
                console.log(e)
            }
        };
        getRecentlyAnimes();
    }, [url]);

    return{data, loading, error}
};

export default GetAnime;