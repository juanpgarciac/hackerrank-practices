<?php

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds($arr) {
    // Write your code here
    $arr = array_count_values($arr);
    asort($arr);
    return array_keys($arr)[count($arr)-1];
}

$fptr = fopen('output', "w");

$input  = fopen('input','r');
$arr_count = intval(trim(fgets($input)));

$arr_temp = rtrim(fgets($input));

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = migratoryBirds($arr);

fwrite($fptr, $result . "\n");

fclose($fptr);
