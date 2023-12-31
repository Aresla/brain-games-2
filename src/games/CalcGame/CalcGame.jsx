import React from "react";
import {generateTaskCalc} from "../../helpers/generateTaskCalc";
import {GameWithInput} from "../../components/GameWithInput/GameWithInput";
import {calcGameDescription} from "../../constans/constans";

export class CalcGame extends React.Component {
    render() {
        return (
            <GameWithInput taskGenerator={generateTaskCalc} gameDescription={calcGameDescription}/>
        );
    }
}
