import React from 'react';
import {makeStyles} from "@material-ui/core";
import InfoButton from "../components/InfoButton";

const DonationType = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.button}>
                <InfoButton Icon={"&"} title={"Целевой сбор"} description={"Когда есть опредленная цель"}/>
            </div>
            <div className={classes.button}>
                <InfoButton Icon={"*"} title={"Регулярный сбор"} description={"Если помощь нужна ежемесячно"}/>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '300px',
    },
    button: {
        width: '90%',
    },

});

export default DonationType
