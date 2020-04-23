import React, { useState } from 'react';
import "./styles.css";

export default function Card(props) {

  let [attempt, setAttemp] = useState(1);
  let [value, setValue] = useState(props.value);

  const onClick = () => {

    if (attempt === 1) {
      alert(props.question);
      setAttemp(attempt + 1);
      
    } else {
      setValue(props.response);
    }

  };

  return (
    <div class="card">
      <div class="card-body" onClick={onClick}>
        <p class="text-center">{value}</p>
      </div>
    </div>
  );
}
