import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Coupons from "../coupons/Coupons";
import Directions from "../directions/Directions";
import AboutUs from "../aboutUs/AboutUs";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/coupons" component={Coupons} />
                <Route exact path="/directions" component={Directions} />
                <Route exact path="/aboutUs" component={AboutUs} />
            </Switch>
        )
    }
}

export default Routes;
