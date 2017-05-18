<?php

// Hello
if ($_REQUEST[firstname] AND $_REQUEST[lastname]) {
    echo "$_REQUEST[firstname], $_REQUEST[lastname] - Hei!";
}

// Time
if ($_REQUEST[time]) {
    echo date('H:i:s');
}

// News
if ($_REQUEST[news]) {
    $id = $_REQUEST[id];

    if ($id == 1) { echo 'Uudis 1'; }
    if ($id == 2) { echo 'Uudis 2'; }
    if ($id == 3) { echo 'Uudis 3'; }

}

?>