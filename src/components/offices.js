import React from 'react'

function Offices(props) {
    return (
        <div>
            {props.offices.map((office) => {
                return (
                    <div key={office.id}>
                        <h2>{office.name}</h2>
                        <p>{office.cnpj}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Offices;
