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

    return (
        <div>
            {info &&
                <div>
                    <div style={{fontSize: '20pt', display: 'flex', justifyContent: 'center'}}>{(info.c).toFixed(2)} USD</div>
                    {(info.c - info.o > 0) &&
                        <div style={{ color: 'green', fontSize: '20pt', display: 'flex', justifyContent: 'center' }}>{(info.c - info.o).toFixed(2)} {(((info.c - info.o) / info.c) * 100).toFixed(2)}%</div>
                    }
                    {(info.c - info.o < 0) &&
                        <div style={{ color: 'red', fontSize: '20pt', display: 'flex', justifyContent: 'center' }}>{(info.c - info.o).toFixed(2)} {(((info.c - info.o) / info.c) * 100).toFixed(2)}%</div>
                    }
                </div>
            }
        </div>
    );
}

export default CompanyInfo