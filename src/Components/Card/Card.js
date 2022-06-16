import React from "react";
import { CardImagem, CardLink } from "./style";

export const card = (props) => {

    return(
        <Cards>
            <CardImagem>
                {props.imagem}
            </CardImagem>
            <CardLink>
                {props.CardLink}
            </CardLink>
        </Cards>
    )
}