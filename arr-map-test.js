const map = [
    [ 1, 1, 1, 1, 1, 1, 1, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 0, 0, 0, 0, 0, 0, 1,],
    [ 1, 1, 1, 1, 1, 1, 1, 1,],
];

function mapbuild(trueOrFalse) {
    for (let i = 0 ; i <= 7 ; i++){
        let write = "";
        for (let j = 0 ; j <= 7 ; j++){
            write = write + " " + trueOrFalse[i][j];
        }
        console.log(write);
    }
}
mapbuild(map);