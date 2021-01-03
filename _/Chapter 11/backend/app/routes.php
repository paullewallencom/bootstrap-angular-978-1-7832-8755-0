<?php

Route::resource('contacts', 'ContactsController');

// Route::options('{resource?}/{id?}/{var1?}/{var2?}', function() {
//     $response = Response::make('ok', 200);
//     $response->headers->set('Access-Control-Allow-Origin', '*');
//     $response->headers->set('Access-Control-Allow-Headers', 'X-Requested-With, Authorization');
//     $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     return $response;
// });
