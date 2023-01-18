import {TitleBar} from "../ui/title-bar.js";

export class ApplicationBase {

    // button title
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title); // instantiate new title bar
        this.routeMap = {}; // routemap object
        this.defaultRoute = null;
    }

    activateRoute(route) {
        // locate element with class of page-content
        let content = this.titleBar.element.find('.page-content');
        content.empty(); // empty is a jquery function that will empty out any children and clear the route

        this.routeMap[route].appendToElement(content); // look up route in routeMap, then append page to content
    }

    addRoute(id, pageObject, defaultRoute = false) {
        this.titleBar.addLink(id, ''); // add link to titleBar with id as name of link

        this.routeMap[id] = pageObject; // keep route of maps using key/value pairs key = id, value = pageObject

        if(defaultRoute) {
            this.defaultRoute = id;
        }
    }

    show(element) {
        this.titleBar.appendToElement(element);

        // click handler applied to class: mdl-navigation__link
        this.titleBar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML; // locate the route
            this.activateRoute(route.trim());
        });

        // check for default route, if it exists, route to default
        if(this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
}
