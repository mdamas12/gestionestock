<?php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Rutas que permiten CORS
    'allowed_methods' => ['*'], // Métodos permitidos (GET, POST, PUT, etc.)
    'allowed_origins' => ['*'], // Orígenes permitidos (usa '*' para todos)
    'allowed_origins_patterns' => [], // Patrones para orígenes dinámicos
    'allowed_headers' => ['*'], // Encabezados permitidos
    'exposed_headers' => [], // Encabezados expuestos
    'max_age' => 0, // Tiempo de caché para preflight
    'supports_credentials' => false, // Permitir credenciales
];
