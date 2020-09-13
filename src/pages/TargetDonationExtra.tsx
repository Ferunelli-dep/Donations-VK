import React from 'react';
import {makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import InputField from "../components/InputField";
import BlueButton from "../components/BlueButton";

const TargetDonationExtra = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.elements}>
                <InputField title={'Автор'} placeholder={'Имя автора'}/>
            </div>
            <div className={classes.elements}>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Сбор завершится</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" /*value={value} onChange={handleChange}*/>
                            <FormControlLabel value="female" control={<Radio />} label="Когда соберем сумму" />
                            <FormControlLabel value="male" control={<Radio />} label="В опредленную дату" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className={classes.elements}>
                <InputField title={'Дата окончания'} placeholder={'Выберите дату'}/>
            </div>
            <div className={classes.button}>
                <BlueButton title={'Создать сбор'}/>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    elements: {
        width: '90%',
        marginTop: '5px'
    },
    button: {
       width: '90%',
       marginTop: '340px',
    },

});

export default TargetDonationExtra
