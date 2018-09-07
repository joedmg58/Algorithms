function swap( array, i, j ){
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function bubbleSort( array ) {
    for (var i = 0; i < array.length; i++){
        for (var j = 1; j < array.length; j++ ){
            if (array[j-1] > array[j]){
                swap(array, j-1, j);
            }
        }
    }
}