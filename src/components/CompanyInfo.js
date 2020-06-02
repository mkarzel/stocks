import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyInfo = (props) => {

    const token = `br9d4a7rh5rbhn690a50`
    const url = `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${token}`;

    const [info, setInfo] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setInfo(response.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [url, props.symbol]);

    if (info)
        console.log(info)
    return (
        <div>
            {info &&
                <div>{props.symbol} {info.c} USD {(info.c - info.o).toFixed(2)} {(((info.c - info.o) / info.c) * 100).toFixed(2)}%</div>
            }
        </div>
    );
}

export default CompanyInfo