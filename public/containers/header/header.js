import React from "react";

export default function() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-transparent navbar-fixed-top">
                <div className="container-fluid">

                    <div className="navbar-inner">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                        </button>

                        <a className="navbar-brand navbar-default"
                           href="https://provide_valid_url"
                           target="_blank">
                            <i className="fa fa-github bg-font"> </i>
                            E2E authnodeweb
                        </a>

                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">

                            <li>
                                <a href="http://provide_valid_url
                                   target="_blank">
                                    Cucumber Docs
                                </a>
                            </li>

                            <li>
                                <a href="http://provide_valid_url" target="_blank">
                                    Push Notification
                                </a>
                            </li>


                            <li>
                                <a href="http://provide_valid_url" target="_blank">
                                    API
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
