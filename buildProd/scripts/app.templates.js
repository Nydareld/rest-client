angular.module('rest-client').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./modules/404/404.html',
    "<div class=\"wrapper wrapper-content\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"text-center m-t-lg\">\n" +
    "                <h1>\n" +
    "                    404 Page introuvable\n" +
    "                </h1>\n" +
    "                <small>\n" +
    "                    La page demandée est introuvable, si le problème persiste veuillez contacter le support\n" +
    "                </small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/common/content.html',
    "<!-- Wrapper-->\n" +
    "<div id=\"wrapper\">\n" +
    "\n" +
    "    <!-- Navigation -->\n" +
    "        <left-side-menu logo=\"rootCtrl.logo\" user=\"rootCtrl.user\"></left-side-menu>\n" +
    "\n" +
    "    <!-- Page wraper -->\n" +
    "    <!-- ng-class with current state name give you the ability to extended customization your view -->\n" +
    "    <div id=\"page-wrapper\" class=\"gray-bg {{$state.current.name}}\">\n" +
    "\n" +
    "        <!-- Page wrapper -->\n" +
    "        <!-- <div ng-include=\"'modules/common/topnavbar.html'\"></div> -->\n" +
    "        <top-nav-bar search-place-holder=\"Rechercher\"></top-nav-bar>\n" +
    "\n" +
    "        <breadcrumbs\n" +
    "                    home-state-name=\"rest-client.index\"\n" +
    "                    home-state-text=\"rest client\">\n" +
    "        </breadcrumbs>\n" +
    "\n" +
    "        <toaster-container></toaster-container>\n" +
    "\n" +
    "        <!-- Main view  -->\n" +
    "        <div ui-view></div>\n" +
    "\n" +
    "        <!-- Footer -->\n" +
    "        <footer\n" +
    "            footer-left=\"<strong>Copyright</strong> Example Company &copy; 2015-2017\"\n" +
    "            footer-right=\"10GB of <strong>250GB</strong> Free.\"\n" +
    "\n" +
    "            ></footer>\n" +
    "        <!-- <div ng-include=\"'modules/common/footer.html'\"></div> -->\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- End page wrapper-->\n" +
    "\n" +
    "    <!-- Right Sidebar -->\n" +
    "    <!-- <div ng-include=\"'modules/common/right_sidebar.html'\"></div> -->\n" +
    "\n" +
    "</div>\n" +
    "<!-- End wrapper-->\n"
  );


  $templateCache.put('./modules/errorTypes/errorTypes.html',
    "<div class=\"wrapper wrapper-content error-types-content\">\n" +
    "    <div class=\"ibox\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "            <h5>Erreurs fonctionelles</h5>\n" +
    "        </div>\n" +
    "        <div class=\"ibox-content\">\n" +
    "            <table class=\"table\">\n" +
    "                <tr>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Message</th>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Nom erreur\" ng-model=\"errorType.name\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Message\" ng-model=\"errorType.message\">\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ctrl.addType(errorType)\"><span class=\"fa fa-plus\"></span></button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"err in errorTypes\">\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Nom erreur\" ng-model=\"err.name\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Message\" ng-model=\"err.message\">\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"ctrl.deleteType(err)\"><span class=\"fa fa-trash\"></span></button>\n" +
    "                                <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ctrl.addType(err)\"><span class=\"fa fa-save\"></span></button>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/index/index.html',
    "<div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"text-center m-t-lg\">\n" +
    "                <h1>\n" +
    "                    {{rootCtrl.helloText}}\n" +
    "                </h1>\n" +
    "                <small>\n" +
    "                    {{rootCtrl.descriptionText}}\n" +
    "                </small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/logs/logs.html',
    "<div class=\"wrapper wrapper-content logs-content\">\n" +
    "    <div class=\"ibox\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "            <h5>Journaux de logs</h5>\n" +
    "        </div>\n" +
    "        <div class=\"ibox-content\">\n" +
    "            <table class=\"table\">\n" +
    "                <tr>\n" +
    "                    <th>Date</th>\n" +
    "                    <th>Service</th>\n" +
    "                    <th>Id</th>\n" +
    "                    <th>Level</th>\n" +
    "                    <th>Content</th>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"5\"><button class=\"btn btn-primary\" ng-click=\"ctrl.refreshLogs()\">Récupérer les derniers logs</button></td>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"log in logs\">\n" +
    "                    <td>{{log.data.date|date:\"dd/MM/yyyy HH:mm:ss+sss\"}}</td>\n" +
    "                    <td>{{log.data.app}}</td>\n" +
    "                    <td>{{log.transactionId}}</td>\n" +
    "                    <td>{{log.data.level}}</td>\n" +
    "                    <td>{{log.data.message}}</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"5\"><button class=\"btn btn-primary\" ng-click=\"ctrl.getMoreLogs()\">Plus de logs</button></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/reports/index.html',
    "<div ui-view>\n" +
    "    <div class=\"wrapper wrapper-content reports-content\">\n" +
    "        <div class=\"ibox\">\n" +
    "            <div class=\"ibox-title\">\n" +
    "                <h5>Journaux d'incidents</h5>\n" +
    "            </div>\n" +
    "            <div class=\"ibox-content\">\n" +
    "                <table class=\"table\">\n" +
    "                    <tr>\n" +
    "                        <th>Date</th>\n" +
    "                        <th>Type d'erreur</th>\n" +
    "                        <th>Commentaire</th>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td colspan=\"3\"><button class=\"btn btn-primary\" ng-click=\"ctrl.refreshReports()\">Récupérer les derniers incidents</button></td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"report in reports\" ui-sref=\"rest-client.reports.report({'id': '{{report._id}}'})\">\n" +
    "                        <td>{{report.date|date:\"dd/MM/yyyy HH:mm:ss+sss\"}}</td>\n" +
    "                        <td>\n" +
    "                            <span ng-if=\"report.request\">Rest</span>\n" +
    "                            <span ng-if=\"!report.request\">Client</span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{report.comment|stripHtml}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/reports/report/index.html',
    "<div class=\"wrapper wrapper-content report-content\">\n" +
    "    <div class=\"ibox\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "            <h5>Incident {{report._id}}</h5>\n" +
    "        </div>\n" +
    "        <div class=\"ibox-content\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">Identifiant</div>\n" +
    "                        <div class=\"col-md-6\">{{report._id}}</div>\n" +
    "                        <div class=\"col-md-6\">Date de l'anomalie</div>\n" +
    "                        <div class=\"col-md-6\">{{report.date|date:\"dd/MM/yyyy HH:mm:ss+sss\"}}</div>\n" +
    "                        <div class=\"col-md-6\">Date de soumission</div>\n" +
    "                        <div class=\"col-md-6\">{{report.created.date|date:\"dd/MM/yyyy HH:mm:ss+sss\"}}</div>\n" +
    "                        <div class=\"col-md-6\">Naviguateur</div>\n" +
    "                        <div class=\"col-md-6\">{{report.software.browser}}</div>\n" +
    "                        <div class=\"col-md-6\">Système d'exploitation</div>\n" +
    "                        <div class=\"col-md-6\">{{report.software.os}}</div>\n" +
    "                        <div class=\"col-md-6\">Version</div>\n" +
    "                        <div class=\"col-md-6\">{{report.software.version}}</div>\n" +
    "                        <div class=\"col-md-6\">Commentaire</div>\n" +
    "                        <div class=\"col-md-6\">{{report.comment|stripHtml}}</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6\">\n" +
    "                    <table class=\"table\">\n" +
    "                        <tr>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Service</th>\n" +
    "                            <th>Id</th>\n" +
    "                            <th>Level</th>\n" +
    "                            <th>Content</th>\n" +
    "                        </tr>\n" +
    "                        <tr ng-repeat=\"log in logs\">\n" +
    "                            <td>{{log.data.date|date:\"dd/MM/yyyy HH:mm:ss+sss\"}}</td>\n" +
    "                            <td>{{log.data.app}}</td>\n" +
    "                            <td>{{log.transactionId}}</td>\n" +
    "                            <td>{{log.data.level}}</td>\n" +
    "                            <td>{{log.data.message}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
