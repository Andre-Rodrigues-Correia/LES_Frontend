import React from 'react';
import './styles.css';

function List({title, data}) {
    return (
        <div className='list'>
            <h1>{title}</h1>

            <div className="container">
                {
                    data.map((e, i) => {
                        return <div className="data" key={i}>
                            <h3>{e}</h3>
                        </div> 
                    })
                }
            </div>
        </div>
    );
}

export default List;