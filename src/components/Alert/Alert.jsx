import { Alert as MUIAlert, AlertTitle } from "@mui/material";

export const Alert = (props) => {
    const { type, message } = props;

    return (
        <MUIAlert severity={type}>
            <AlertTitle>{message}</AlertTitle>
        </MUIAlert>
    )
}