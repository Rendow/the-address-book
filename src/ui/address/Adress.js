import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Autocomplete, Button, CircularProgress, Stack, TextField} from "@mui/material";
import {
    getHousesFlatTC,
    getHousesTC,
    getStreetsTC,
    setCurrentAddressAC,
    setCurrentAddressIDAC
} from "../../bll/address-reducer";
import {getFlatClientsTC} from "../../bll/houses-reducer";

export function Address (){

    const  streets = useSelector((state) => state.address.streets)
    const  houses = useSelector((state) => state.address.houses)
    const  houseFlat = useSelector((state) => state.address.houseFlat)
    const dispatch = useDispatch()

    const [streetTerm, setStreetTerm] = useState(null)
    const [houseTerm, setHouseTerm] = useState(null)
    const [flatTerm, setFlatTerm] = useState(null)
    const [disableBtn, setDisableBtn] = useState(true)


    const onClickHandler = () => {
      dispatch(setCurrentAddressAC([streetTerm.nameWithPrefix,houseTerm.name, flatTerm.name]))
      dispatch(setCurrentAddressIDAC( flatTerm.id))
      dispatch(getFlatClientsTC())
    }

    return (
        <Stack direction="row" spacing={2}>
            <Streets  setSearchTerm={setStreetTerm}
                      setDisableBtn={setDisableBtn}
                      dispatch={dispatch} streets={streets}/>
            <Houses  streetID={streetTerm}
                     setSearchTerm={setHouseTerm}
                     dispatch={dispatch}
                     setDisableBtn={setDisableBtn}
                     houses={houses}/>
            <HousesFlat houseID={houseTerm}
                        setSearchTerm={setFlatTerm}
                        setDisableBtn={setDisableBtn}
                        houseFlat={houseFlat}
                        dispatch={dispatch} />
            <Button disabled={disableBtn} onClick={onClickHandler}> Выбрать Адрес</Button>

        </Stack>
    )}

function Streets({setSearchTerm,streets, dispatch,setDisableBtn}) {

    const [open, setOpen] = useState(false);
    const loading =  open && streets.length === 0;

    useEffect(() => {
        loading && dispatch(getStreetsTC())
        loading && setDisableBtn(true)
    }, [loading]);

    let filteredOptions = streets.filter(s => s.cityId  === 1)

    return (

        <Autocomplete
            id="streets"
            sx={{width: 300}}
            open={open}
            onOpen={() => {setOpen(true)}}
            onClose={() => {setOpen(false)}}

            onChange={(event, value) => value && setSearchTerm(value)}

            options={filteredOptions}
            loading={loading}

            getOptionLabel={(option) => option && option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}


            renderOption={(props, option) => {
                return (
                    <li  {...props} key={option.id}>
                        {option.name}
                    </li>
                );
            }}
            renderInput={(params) => (

                <TextField
                    {...params}
                    label="Улица"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />

    );
}

function Houses({setSearchTerm,streetID,houses, dispatch,setDisableBtn}) {

    const [open, setOpen] = useState(false);

    const loading =  open && houses.length === 0;

    useEffect(() => {
        streetID &&  dispatch(getHousesTC(streetID.id))
        streetID && setDisableBtn(true)
    }, [streetID]);


    return (

        <Autocomplete
            id="houses"
            sx={{width: 200}}
            open={open}
            onOpen={() => {setOpen(true)}}
            onClose={() => {setOpen(false)}}

            onChange={(event, value) => value && setSearchTerm(value) }

            options={houses}
            loading={loading}
            getOptionLabel={(option) =>  option && option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option.name}
                    </li>
                );
            }}
            renderInput={(params) => (

                <TextField
                    {...params}
                    label="Дом"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />

    );
}

function HousesFlat({ setSearchTerm,houseID,houseFlat, dispatch,setDisableBtn}) {

    const [open, setOpen] = useState(false);

    const loading = open && houseFlat.length === 0;

    useEffect(() => {
        houseID &&  dispatch(getHousesFlatTC(houseID.id))
        houseID && setDisableBtn(false)
    }, [houseID]);


    function onChangeHandler(event, value) {
        value && setSearchTerm(value)
    }


    return (
        <Autocomplete
            id="houses_flat"
            sx={{width: 200}}
            open={open}
            onOpen={() => {setOpen(true)}}
            onClose={() => {setOpen(false)}}

            onChange={onChangeHandler }

            options={houseFlat}
            loading={loading}

            getOptionLabel={(option) => option && option.name}
            isOptionEqualToValue={(option, value) =>  option && option.name === value.name}

            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option.name}
                    </li>
                );
            }}
            renderInput={(params) => (

                <TextField
                    {...params}
                    label="Кв./офис"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}/>
    );


}

