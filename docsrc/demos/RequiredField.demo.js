import React, { useState } from "react";
import MultiPicker from "../../src/index";
import { getSuggestedFruitSync } from "./common";

export default function RequiredFieldDemo() {
    const [items, setItems] = useState([]);
    return (
        <MultiPicker
            value={ items }
            onChange={ setItems }
            itemToString={ fruit => fruit.name }
            getSuggestedItems={ getSuggestedFruitSync }
            label="Your favourite fruit"
            fullWidth
            required
        />
    );
}
