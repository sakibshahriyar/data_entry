<?php 
$row=file_get_contents("data.txt");
$list=explode("###", $row);

$i= 1;
foreach($list AS $res){
    //$res_line = explode(PHP_EOL, $res);
    $res_line = explode("\n", $res);
    $filter = array_filter($res_line, 'strlen');
    foreach($res_line AS $rest){
        $i++;
    } 
    $filter2 = array_values($filter);
    $count = count($filter2);

    if( $count != 7 ){
        //var_dump($res_line);
        echo $i." === ".$filter2[0]." --- ".count($filter2) ."<br/>";
    }
    
    
}
