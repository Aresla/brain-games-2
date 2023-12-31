import React from "react";
import {generateTaskProgression} from "../../helpers/generateTaskProgression";
import {GameWithInput} from "../../components/GameWithInput/GameWithInput";
import {progressionGameDescription} from "../../constans/constans";

export class ProgressionGame extends React.Component {
    render(){
        return(
            <GameWithInput taskGenerator={generateTaskProgression} gameDescription={progressionGameDescription} />
        );
    };
}
