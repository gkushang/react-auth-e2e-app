import React from 'react';

export default function() {
    return (
        <div>
            <nav className="navbar  navbar-default navbar-fixed-top">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                        </button>

                        <a className="navbar-brand" href="#">E2E authnodeweb</a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="text-info">
                                <a href="https://github.paypal.com/kugajjar/authuserserv/blob/master/readme.md" target="_blank">
                                    API Docs
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
