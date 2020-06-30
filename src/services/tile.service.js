function createTiles(size) {
    let field = [];
    for (let y = 0; y < size; y++) {
        let row = [];
        for (let x = 0; x < size; x++) {
            let tile = { x, y, value: Math.round(Math.random()), toPaint: false }
            row.push(tile);
        }
        field.push(row);
    }
    return field
}

function paintTiles(field) {
    const coordsToCheck = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0]
    ];
    const len = field.length;
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            if (field[y][x].value === 0) {
                continue
            }
            coordsToCheck.forEach(([k, i]) => {
                let newY = y + k;
                let newX = x + i;
                if (newX >= 0 && newX < len && newY >= 0 && newY < len){
                    if (field[newY][newX].value === 1) {
                        field[y][x].toPaint = true;
                    }
                }
            })
        }
    }
    return field;
}

export const tileService = {
    createTiles,
    paintTiles
};
