var app = angular.module('NuevaCancionApp', []);

app.controller('ctrlNuevaCancion', function ($scope, $http) {
    $scope.guardar = function () {
        var cancion = {
            "idCancion": 121,
            "autor": $scope.autor,
            "duracion": $scope.duracion,
            "genero": $scope.genero,
            "nombre": $scope.nombre
        };

        $http.put("http://localhost:8080/canciones", cancion)
        .then(function (resp) {
            console.log(resp.data);
            window.location.href = "index.html";
        });
    };
});
