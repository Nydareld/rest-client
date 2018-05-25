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


  $templateCache.put('./modules/login/login.html',
    "<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n" +
    "    <div>\n" +
    "        <div>\n" +
    "\n" +
    "            <h1 class=\"logo-name\">N-I</h1>\n" +
    "\n" +
    "        </div>\n" +
    "        <h3>Bienvenue dans Nrcom-inspinia</h3>\n" +
    "        <p>Connectez vous</p>\n" +
    "        <form class=\"m-t\" role=\"form\" action=\"index.html\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"email\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n" +
    "\n" +
    "            <a href=\"#\"><small>Mot de passe oublié ?</small></a>\n" +
    "        </form>\n" +
    "        <p class=\"m-t\"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/logs/logs.html',
    "<div class=\"wrapper wrapper-content\">\n" +
    "    <div class=\"ibox\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "            <h5>Logs</h5>\n" +
    "        </div>\n" +
    "        <div class=\"ibox-content\">\n" +
    "            <div class=\"\">\n" +
    "                <form-builder structure=\"formStructure\" submit-callback=\"getLogs\" model=\"params\"></form-builder>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Resulat</label>\n" +
    "                <br>\n" +
    "                <div class=\"input-group\" style=\"min-height : 300px; width:100%; max-width:100%;\">\n" +
    "                    <pre>{{ data | json }}</pre>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('./modules/reports/index.html',
    "aa\n"
  );


  $templateCache.put('./modules/rest/rest.html',
    "<div class=\"wrapper wrapper-content\">\n" +
    "    <div class=\"ibox\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "            <h5>Client rest</h5>\n" +
    "        </div>\n" +
    "        <div class=\"ibox-content\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Parametres de route</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <div class=\"input-group-btn\" ng-init=\"config.method  ='GET'\">\n" +
    "                        <button type=\"button\" class=\"btn\">{{ config.method }}</button>\n" +
    "                        <button type=\"button\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                            <span class=\"caret\"></span>\n" +
    "                            <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li ng-click=\"config.method='GET'\"><a>GET</a></li>\n" +
    "                            <li ng-click=\"config.method='POST'\"><a>POST</a></li>\n" +
    "                            <li ng-click=\"config.method='PUT'\"><a>PUT</a></li>\n" +
    "                            <li ng-click=\"config.method='DELETE'\"><a>DELETE</a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"config.url\" placeholder=\"URL\" aria-describedby=\"basic-addon1\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"sendRequst()\" type=\"button\">Envoyer</button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Contenu</label>\n" +
    "                <div class=\"input-group\" style=\"height : 300; width:100%;\">\n" +
    "                    <div ng-model=\"config.data\" style=\"height : 300px; width:100%;\" ui-ace=\"{}\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Resulat</label>\n" +
    "                <br>\n" +
    "                <h2 class=\"inspinia-text-primary\">{{ raw.status }} <small> {{ raw.statusText }}</small> </h2>\n" +
    "                <uib-tabset active=\"0\">\n" +
    "                    <uib-tab index=\"0\" heading=\"Body\">\n" +
    "                        <div class=\"input-group\" style=\"min-height : 300px; width:100%; max-width:100%;\">\n" +
    "                            <pre>{{ data | json }}</pre>\n" +
    "                        </div>\n" +
    "                    </uib-tab>\n" +
    "                    <uib-tab index=\"1\" heading=\"Config\">\n" +
    "                        <div class=\"input-group\" style=\"min-height : 300px; width:100%; max-width:100%;\">\n" +
    "                            <pre>{{ config | json }}</pre>\n" +
    "                        </div>\n" +
    "                    </uib-tab>\n" +
    "                    <uib-tab index=\"2\" heading=\"Raw\">\n" +
    "                        <div class=\"input-group\" style=\"min-height : 300px; width:100%; max-width:100%;\">\n" +
    "                            <pre>{{ raw | json }}</pre>\n" +
    "                        </div>\n" +
    "                    </uib-tab>\n" +
    "                </uib-tabset>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
