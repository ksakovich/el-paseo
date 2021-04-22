import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemProps } from '../../components/Item/Item';

const ItemDeatils = (props: ItemProps) =>
{
    console.log(props);
    const params = useParams<{ itemId: string }>();
    return (
        <section>
            <h1>This will be a ItemDetails Page!!!</h1>
            <p>Item ID : {params.itemId}</p>

        </section>
    );
};
export default ItemDeatils;