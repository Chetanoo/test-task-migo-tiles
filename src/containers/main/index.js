import React, { useState } from "react";
import {Container, Button, TextField, Grid, Box, Paper} from "@material-ui/core";
import { tileService } from "../../services/tile.service"
import Field from "../field";
import "./index.css"

function Main() {
    const [matrixSize, setMatrixSize] = useState(
        localStorage.getItem("size") ? localStorage.getItem("size") : 2
    );
    const [matrix, setMatrix] = useState([]);

    const handleSizeChange = (e) => {
        if (e.target.value < 2) {
            setMatrixSize(2);
        } else if (e.target.value > 100) {
            setMatrixSize(100);
        } else {
            setMatrixSize(e.target.value);
        }

        localStorage.setItem("size", e.target.value)
    }

    const onSizeApply = () => {
        setMatrix(tileService.createTiles(matrixSize));
    }

    const onTilesPainting = () => {
        setMatrix(tileService.paintTiles([...matrix]));
    }


    return(
        <Container maxWidth="lg">
            <Box m={3}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper fullWidth={true} elevation={0}>
                            <span className="size-label">Размерность матрицы</span>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            onChange={handleSizeChange}
                            defaultValue={matrixSize}
                            fullWidth={true}
                            InputProps={{
                                inputProps: {
                                    min: 2, max: 100
                                }
                            }}
                            variant="outlined"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={onSizeApply} fullWidth={true} size="large" variant="contained">Создать</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button  onClick={onTilesPainting} fullWidth={true} size="large" variant="contained">Закрасить</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Field matrix={matrix} />
            </Box>
        </Container>
    )
}

export default Main
