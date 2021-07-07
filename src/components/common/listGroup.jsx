import React from 'react';

const ListGroup = props => {
    const {items, 
            onClassSelect, 
            selectedClass,
            textProperty,
            valueProperty    
        } = props;
    return ( 
        <ul className="list-group">
            {items.map( item => (
                <li 
                    onClick= {() => onClassSelect(item)}
                    key={item[valueProperty]} 
                    className={item === selectedClass? "list-group-item active": "list-group-item"}
                >
                    {item[textProperty]}
                </li>
            ))}
            
        </ul>
     );
}

ListGroup.defaultProps ={
    textProperty: "name",
    valueProperty: "_id"
}
 
export default ListGroup;