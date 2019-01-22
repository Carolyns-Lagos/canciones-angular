var app = angular.module('CancionesApp', []);

app.controller('ctrlCancionesList', function($scope, $http)
{
    $scope.inicio = function(){
        $http.get("http://localhost:8080/canciones")
        .then(function(respuesta){
            console.log( respuesta );
            $scope.canciones = respuesta.data;
            $scope.duracionTotal = 0;
            for( indice in $scope.canciones ){
                //$scope.duracionTotal = $scope.duracionTotal + $scope.canciones[indice].duracion ;

            }
        });
    };

    $scope.eliminar = function(idCancion){
        $http.delete("http://localhost:8080/canciones/"+ idCancion)
        .then(function(respuesta){
            $scope.inicio();
        });
    };
    $scope.inicio();

    
});
