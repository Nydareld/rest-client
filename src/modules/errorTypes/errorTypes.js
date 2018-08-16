angular.module("rest-client").controller("errorTypesController", [
    "$scope",
    "errorTypes",
    "errorTypeService",
    "swal",
    "toaster",
    function($scope, errorTypes, errorTypeService, swal, toaster) {
        $scope.errorType = {}; // élément contenant un nouveau type d'erreur
        $scope.errorTypes = errorTypes; // liste des types d'erreurs

        // ajoute ou modifie une errorType
        this.addType = function(data) {
            var promise,
                phantom = angular.isUndefined(data._id);

            // on drive la méthode en fonction du type d'objet transmis
            if (phantom) {
                promise = errorTypeService.post(data);
            } else {
                promise = errorTypeService.put(data);
            }

            promise
                .then(function(res) {
                    if (phantom) {
                        // dans le cas d'une créa on l'ajoute au tableau
                        $scope.errorTypes.unshift(data);
                        $scope.errorType = {};
                    } else {
                        // dans le cas d'une modification on le met à jour
                        data = res;
                    }
                    // dans tous les cas on envoi une notification de réussite
                    toaster.success(
                        "Sauvegarde réussie",
                        "Type enregistré avec succès"
                    );
                })
                .catch(function(err) {
                    toaster.error("Erreur", err);
                    throw err;
                });
        };

        // supprime un errorType
        this.deleteType = function(type) {
            swal
                .confirmDelete({
                    title: "Supression",
                    text:
                        "Êtes vous sûre de vouloir supprimer ce type d'erreur ?",
                    closeOnConfirm: false,
                    closeOnCancel: false
                })
                .then(function() {
                    return errorTypeService.delete(type);
                })
                .then(function() {
                    $scope.errorTypes.splice(
                        $scope.errorTypes.indexOf(type),
                        1
                    );
                })
                .catch(function(err) {
                    if (err !== true) {
                        toaster.error("Erreur", err);
                        throw err;
                    }
                });
        };
    }
]);
