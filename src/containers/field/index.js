import React from 'react';
import { Table, TableRow, TableHead, TableCell, TableContainer, Paper } from "@material-ui/core";

function Field(props) {
    const { matrix } = props;
    const classes = { backgroundColor: "blue" };

    return(
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    { matrix ?
                        matrix.map((row, index) => (
                            <TableRow key={index}>
                                {
                                    row.map(
                                        (tile, index) => (
                                            <TableCell
                                                style={tile.toPaint ? classes : null}
                                                size="small"
                                                key={index} variant="body"
                                                align="center"
                                            >
                                                {tile.value}
                                            </TableCell>
                                        )
                                    )
                                }
                            </TableRow>
                        )) : null
                    }
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default Field
