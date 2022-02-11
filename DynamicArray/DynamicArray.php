<?php

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
define("DEBUG",true);
$fileindex = '';

function dynamicArray($n, $queries) {
    // Write your code here
    $arr = array_fill(0, $n, []);
    $result = [];
    $lastAnswer = 0;
    $i = 0;
    foreach($queries as $q){
        list($qtype,$x,$y ) = $q;
        $idx = ($x xor $lastAnswer) % $n;
        //print ($i++.') '.$qtype.','.$x.','.$y.','.$lastAnswer."\n");
        if($qtype == 1){
        	array_push($arr[$idx],$y);
        }else {
        	$lastAnswer = $arr[$idx][  $y % (count($arr[$idx])) ];
			array_push($result,$lastAnswer);
        	print("\n$lastAnswer");        		
        }
    }
    return  $result;
}

$fptr = fopen('output', "w");

$input = fopen(DEBUG?'input_test':'input'.$fileindex,'r');

$first_multiple_input = explode(' ', rtrim(fgets($input)));

$n = intval($first_multiple_input[0]);

$q = intval($first_multiple_input[1]);

$queries = array();

for ($i = 0; $i < $q; $i++) {
    $queries_temp = rtrim(fgets($input));

    $queries[] = array_map('intval', preg_split('/ /', $queries_temp, -1, PREG_SPLIT_NO_EMPTY));
}

$result = dynamicArray($n, $queries);

fwrite($fptr, implode("\n", $result) . "\n");

fclose($fptr);