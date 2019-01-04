import React, { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="page-wrapper">
                <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <a className="logo">test</a>
                                <button
                                    className="hamburger hamburger--slider"
                                    type="button"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar-mobile">
                        <div className="container-fluid">
                            <ul className="navbar-mobile__list list-unstyled">
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-tachometer-alt" />
                                        Dashboard
                                    </a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="index.html">Dashboard 1</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">
                                                Dashboard 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index3.html">
                                                Dashboard 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index4.html">
                                                Dashboard 4
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="chart.html">
                                        <i className="fas fa-chart-bar" />
                                        Charts
                                    </a>
                                </li>
                                <li>
                                    <a href="table.html">
                                        <i className="fas fa-table" />
                                        Tables
                                    </a>
                                </li>
                                <li>
                                    <a href="form.html">
                                        <i className="far fa-check-square" />
                                        Forms
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-calendar-alt" />
                                        Calendar
                                    </a>
                                </li>
                                <li>
                                    <a href="map.html">
                                        <i className="fas fa-map-marker-alt" />
                                        Maps
                                    </a>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-copy" />
                                        Pages
                                    </a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a href="forget-pass.html">
                                                Forget Password
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-desktop" />
                                        UI Elements
                                    </a>
                                    <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                        <li>
                                            <a href="button.html">Button</a>
                                        </li>
                                        <li>
                                            <a href="badge.html">Badges</a>
                                        </li>
                                        <li>
                                            <a href="tab.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="card.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="alert.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="progress-bar.html">
                                                Progress Bars
                                            </a>
                                        </li>
                                        <li>
                                            <a href="modal.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="switch.html">Switchs</a>
                                        </li>
                                        <li>
                                            <a href="grid.html">Grids</a>
                                        </li>
                                        <li>
                                            <a href="fontawesome.html">
                                                Fontawesome Icon
                                            </a>
                                        </li>
                                        <li>
                                            <a href="typo.html">Typography</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="#">test</a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-tachometer-alt" />
                                        Dashboard
                                    </a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="index.html">Dashboard 1</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">
                                                Dashboard 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index3.html">
                                                Dashboard 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index4.html">
                                                Dashboard 4
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="chart.html">
                                        <i className="fas fa-chart-bar" />
                                        Charts
                                    </a>
                                </li>
                                <li>
                                    <a href="table.html">
                                        <i className="fas fa-table" />
                                        Tables
                                    </a>
                                </li>
                                <li>
                                    <a href="form.html">
                                        <i className="far fa-check-square" />
                                        Forms
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-calendar-alt" />
                                        Calendar
                                    </a>
                                </li>
                                <li>
                                    <a href="map.html">
                                        <i className="fas fa-map-marker-alt" />
                                        Maps
                                    </a>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-copy" />
                                        Pages
                                    </a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a href="forget-pass.html">
                                                Forget Password
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-desktop" />
                                        UI Elements
                                    </a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="button.html">Button</a>
                                        </li>
                                        <li>
                                            <a href="badge.html">Badges</a>
                                        </li>
                                        <li>
                                            <a href="tab.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="card.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="alert.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="progress-bar.html">
                                                Progress Bars
                                            </a>
                                        </li>
                                        <li>
                                            <a href="modal.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="switch.html">Switchs</a>
                                        </li>
                                        <li>
                                            <a href="grid.html">Grids</a>
                                        </li>
                                        <li>
                                            <a href="fontawesome.html">
                                                Fontawesome Icon
                                            </a>
                                        </li>
                                        <li>
                                            <a href="typo.html">Typography</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <div className="page-container">
                    <header className="header-desktop">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="header-wrap">
                                    <form className="form-header">
                                        <input
                                            className="au-input au-input--xl"
                                            type="text"
                                            name="search"
                                            placeholder="Search for datas &amp; reports..."
                                        />
                                        <button
                                            className="au-btn--submit"
                                            type="submit"
                                        >
                                            <i className="zmdi zmdi-search" />
                                        </button>
                                    </form>
                                    <div className="header-button">
                                        <div className="noti-wrap">
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-comment-more" />
                                                <span className="quantity">
                                                    1
                                                </span>
                                                <div className="mess-dropdown js-dropdown">
                                                    <div className="mess__title">
                                                        <p>
                                                            You have 2 news
                                                            message
                                                        </p>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img
                                                                src="images/icon/avatar-06.jpg"
                                                                alt="Michelle Moreno"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <h6>
                                                                Michelle Moreno
                                                            </h6>
                                                            <p>
                                                                Have sent a
                                                                photo
                                                            </p>
                                                            <span className="time">
                                                                3 min ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img
                                                                src="images/icon/avatar-04.jpg"
                                                                alt="Diane Myers"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Diane Myers</h6>
                                                            <p>
                                                                You are now
                                                                connected on
                                                                message
                                                            </p>
                                                            <span className="time">
                                                                Yesterday
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__footer">
                                                        <a href="#">
                                                            View all messages
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-email" />
                                                <span className="quantity">
                                                    1
                                                </span>
                                                <div className="email-dropdown js-dropdown">
                                                    <div className="email__title">
                                                        <p>
                                                            You have 3 New
                                                            Emails
                                                        </p>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img
                                                                src="images/icon/avatar-06.jpg"
                                                                alt="Cynthia Harvey"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Meeting about
                                                                new dashboard...
                                                            </p>
                                                            <span>
                                                                Cynthia Harvey,
                                                                3 min ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img
                                                                src="images/icon/avatar-05.jpg"
                                                                alt="Cynthia Harvey"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Meeting about
                                                                new dashboard...
                                                            </p>
                                                            <span>
                                                                Cynthia Harvey,
                                                                Yesterday
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img
                                                                src="images/icon/avatar-04.jpg"
                                                                alt="Cynthia Harvey"
                                                            />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Meeting about
                                                                new dashboard...
                                                            </p>
                                                            <span>
                                                                Cynthia Harvey,
                                                                April 12,,2018
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="email__footer">
                                                        <a href="#">
                                                            See all emails
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-notifications" />
                                                <span className="quantity">
                                                    3
                                                </span>
                                                <div className="notifi-dropdown js-dropdown">
                                                    <div className="notifi__title">
                                                        <p>
                                                            You have 3
                                                            Notifications
                                                        </p>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c1 img-cir img-40">
                                                            <i className="zmdi zmdi-email-open" />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                You got a email
                                                                notification
                                                            </p>
                                                            <span className="date">
                                                                April 12, 2018
                                                                06:50
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c2 img-cir img-40">
                                                            <i className="zmdi zmdi-account-box" />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Your account has
                                                                been blocked
                                                            </p>
                                                            <span className="date">
                                                                April 12, 2018
                                                                06:50
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c3 img-cir img-40">
                                                            <i className="zmdi zmdi-file-text" />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                You got a new
                                                                file
                                                            </p>
                                                            <span className="date">
                                                                April 12, 2018
                                                                06:50
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__footer">
                                                        <a href="#">
                                                            All notifications
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-wrap">
                                            <div className="account-item clearfix js-item-menu">
                                                <div className="image">
                                                    <img
                                                        src="images/icon/avatar-01.jpg"
                                                        alt="John Doe"
                                                    />
                                                </div>
                                                <div className="content">
                                                    <a
                                                        className="js-acc-btn"
                                                        href="#"
                                                    >
                                                        john doe
                                                    </a>
                                                </div>
                                                <div className="account-dropdown js-dropdown">
                                                    <div className="info clearfix">
                                                        <div className="image">
                                                            <a href="#">
                                                                <img
                                                                    src="images/icon/avatar-01.jpg"
                                                                    alt="John Doe"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="name">
                                                                <a href="#">
                                                                    john doe
                                                                </a>
                                                            </h5>
                                                            <span className="email">
                                                                johndoe@example.com
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__body">
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-account" />
                                                                Account
                                                            </a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-settings" />
                                                                Setting
                                                            </a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-money-box" />
                                                                Billing
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__footer">
                                                        <a href="#">
                                                            <i className="zmdi zmdi-power" />
                                                            Logout
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="overview-wrap">
                                            <h2 className="title-1">
                                                overview
                                            </h2>
                                            <button className="au-btn au-btn-icon au-btn--blue">
                                                <i className="zmdi zmdi-plus" />
                                                add item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-t-25">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c1">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-account-o" />
                                                    </div>
                                                    <div className="text">
                                                        <h2>10368</h2>
                                                        <span>
                                                            members online
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="overview-chart">
                                                    <canvas id="widgetChart1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c2">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-shopping-cart" />
                                                    </div>
                                                    <div className="text">
                                                        <h2>388,688</h2>
                                                        <span>items solid</span>
                                                    </div>
                                                </div>
                                                <div className="overview-chart">
                                                    <canvas id="widgetChart2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c3">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-calendar-note" />
                                                    </div>
                                                    <div className="text">
                                                        <h2>1,086</h2>
                                                        <span>this week</span>
                                                    </div>
                                                </div>
                                                <div className="overview-chart">
                                                    <canvas id="widgetChart3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="overview-item overview-item--c4">
                                            <div className="overview__inner">
                                                <div className="overview-box clearfix">
                                                    <div className="icon">
                                                        <i className="zmdi zmdi-money" />
                                                    </div>
                                                    <div className="text">
                                                        <h2>$1,060,386</h2>
                                                        <span>
                                                            total earnings
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="overview-chart">
                                                    <canvas id="widgetChart4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="au-card recent-report">
                                            <div className="au-card-inner">
                                                <h3 className="title-2">
                                                    recent reports
                                                </h3>
                                                <div className="chart-info">
                                                    <div className="chart-info__left">
                                                        <div className="chart-note">
                                                            <span className="dot dot--blue" />
                                                            <span>
                                                                products
                                                            </span>
                                                        </div>
                                                        <div className="chart-note mr-0">
                                                            <span className="dot dot--green" />
                                                            <span>
                                                                services
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="chart-info__right">
                                                        <div className="chart-statis">
                                                            <span className="index incre">
                                                                <i className="zmdi zmdi-long-arrow-up" />
                                                                25%
                                                            </span>
                                                            <span className="label">
                                                                products
                                                            </span>
                                                        </div>
                                                        <div className="chart-statis mr-0">
                                                            <span className="index decre">
                                                                <i className="zmdi zmdi-long-arrow-down" />
                                                                10%
                                                            </span>
                                                            <span className="label">
                                                                services
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="recent-report__chart">
                                                    <canvas id="recent-rep-chart" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="au-card chart-percent-card">
                                            <div className="au-card-inner">
                                                <h3 className="title-2 tm-b-5">
                                                    char by %
                                                </h3>
                                                <div className="row no-gutters">
                                                    <div className="col-xl-6">
                                                        <div className="chart-note-wrap">
                                                            <div className="chart-note mr-0 d-block">
                                                                <span className="dot dot--blue" />
                                                                <span>
                                                                    products
                                                                </span>
                                                            </div>
                                                            <div className="chart-note mr-0 d-block">
                                                                <span className="dot dot--red" />
                                                                <span>
                                                                    services
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="percent-chart">
                                                            <canvas id="percent-chart" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="title-1 m-b-25">
                                            Earnings By Items
                                        </h2>
                                        <div className="table-responsive table--no-card m-b-40">
                                            <table className="table table-borderless table-striped table-earning">
                                                <thead>
                                                    <tr>
                                                        <th>date</th>
                                                        <th>order ID</th>
                                                        <th>name</th>
                                                        <th className="text-right">
                                                            price
                                                        </th>
                                                        <th className="text-right">
                                                            quantity
                                                        </th>
                                                        <th className="text-right">
                                                            total
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            2018-09-29 05:57
                                                        </td>
                                                        <td>100398</td>
                                                        <td>
                                                            iPhone X 64Gb Grey
                                                        </td>
                                                        <td className="text-right">
                                                            $999.00
                                                        </td>
                                                        <td className="text-right">
                                                            1
                                                        </td>
                                                        <td className="text-right">
                                                            $999.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-28 01:22
                                                        </td>
                                                        <td>100397</td>
                                                        <td>
                                                            Samsung S8 Black
                                                        </td>
                                                        <td className="text-right">
                                                            $756.00
                                                        </td>
                                                        <td className="text-right">
                                                            1
                                                        </td>
                                                        <td className="text-right">
                                                            $756.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-27 02:12
                                                        </td>
                                                        <td>100396</td>
                                                        <td>
                                                            Game Console
                                                            Controller
                                                        </td>
                                                        <td className="text-right">
                                                            $22.00
                                                        </td>
                                                        <td className="text-right">
                                                            2
                                                        </td>
                                                        <td className="text-right">
                                                            $44.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-26 23:06
                                                        </td>
                                                        <td>100395</td>
                                                        <td>
                                                            iPhone X 256Gb Black
                                                        </td>
                                                        <td className="text-right">
                                                            $1199.00
                                                        </td>
                                                        <td className="text-right">
                                                            1
                                                        </td>
                                                        <td className="text-right">
                                                            $1199.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-25 19:03
                                                        </td>
                                                        <td>100393</td>
                                                        <td>USB 3.0 Cable</td>
                                                        <td className="text-right">
                                                            $10.00
                                                        </td>
                                                        <td className="text-right">
                                                            3
                                                        </td>
                                                        <td className="text-right">
                                                            $30.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-29 05:57
                                                        </td>
                                                        <td>100392</td>
                                                        <td>
                                                            Smartwatch 4.0 LTE
                                                            Wifi
                                                        </td>
                                                        <td className="text-right">
                                                            $199.00
                                                        </td>
                                                        <td className="text-right">
                                                            6
                                                        </td>
                                                        <td className="text-right">
                                                            $1494.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-24 19:10
                                                        </td>
                                                        <td>100391</td>
                                                        <td>Camera C430W 4k</td>
                                                        <td className="text-right">
                                                            $699.00
                                                        </td>
                                                        <td className="text-right">
                                                            1
                                                        </td>
                                                        <td className="text-right">
                                                            $699.00
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2018-09-22 00:43
                                                        </td>
                                                        <td>100393</td>
                                                        <td>USB 3.0 Cable</td>
                                                        <td className="text-right">
                                                            $10.00
                                                        </td>
                                                        <td className="text-right">
                                                            3
                                                        </td>
                                                        <td className="text-right">
                                                            $30.00
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h2 className="title-1 m-b-25">
                                            Top countries
                                        </h2>
                                        <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
                                            <div className="au-card-inner">
                                                <div className="table-responsive">
                                                    <table className="table table-top-countries">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    United
                                                                    States
                                                                </td>
                                                                <td className="text-right">
                                                                    $119,366.96
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Australia
                                                                </td>
                                                                <td className="text-right">
                                                                    $70,261.65
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    United
                                                                    Kingdom
                                                                </td>
                                                                <td className="text-right">
                                                                    $46,399.22
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Turkey</td>
                                                                <td className="text-right">
                                                                    $35,364.90
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Germany</td>
                                                                <td className="text-right">
                                                                    $20,366.96
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>France</td>
                                                                <td className="text-right">
                                                                    $10,366.96
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Australia
                                                                </td>
                                                                <td className="text-right">
                                                                    $5,366.96
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Italy</td>
                                                                <td className="text-right">
                                                                    $1639.32
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                            <div
                                                className="au-card-title"
                                                style={{
                                                    backgroundImage: `url('images/bg-title-01.jpg')`
                                                }}
                                            >
                                                <div className="bg-overlay bg-overlay--blue" />
                                                <h3>
                                                    <i className="zmdi zmdi-account-calendar" />
                                                    26 April, 2018
                                                </h3>
                                                <button className="au-btn-plus">
                                                    <i className="zmdi zmdi-plus" />
                                                </button>
                                            </div>
                                            <div className="au-task js-list-load">
                                                <div className="au-task__title">
                                                    <p>Tasks for John Doe</p>
                                                </div>
                                                <div className="au-task-list js-scrollbar3">
                                                    <div className="au-task__item au-task__item--danger">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Meeting
                                                                    about plan
                                                                    for Admin
                                                                    Template
                                                                    2018
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                10:00 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-task__item au-task__item--warning">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Create new
                                                                    task for
                                                                    Dashboard
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                11:00 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-task__item au-task__item--primary">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Meeting
                                                                    about plan
                                                                    for Admin
                                                                    Template
                                                                    2018
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                02:00 PM
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-task__item au-task__item--success">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Create new
                                                                    task for
                                                                    Dashboard
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                03:30 PM
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-task__item au-task__item--danger js-load-item">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Meeting
                                                                    about plan
                                                                    for Admin
                                                                    Template
                                                                    2018
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                10:00 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-task__item au-task__item--warning js-load-item">
                                                        <div className="au-task__item-inner">
                                                            <h5 className="task">
                                                                <a href="#">
                                                                    Create new
                                                                    task for
                                                                    Dashboard
                                                                </a>
                                                            </h5>
                                                            <span className="time">
                                                                11:00 AM
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-task__footer">
                                                    <button className="au-btn au-btn-load js-load-btn">
                                                        load more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                            <div
                                                className="au-card-title"
                                                style={{
                                                    backgroundImage: `url('images/bg-title-02.jpg')`
                                                }}
                                            >
                                                <div className="bg-overlay bg-overlay--blue" />
                                                <h3>
                                                    <i className="zmdi zmdi-comment-text" />
                                                    New Messages
                                                </h3>
                                                <button className="au-btn-plus">
                                                    <i className="zmdi zmdi-plus" />
                                                </button>
                                            </div>
                                            <div className="au-inbox-wrap js-inbox-wrap">
                                                <div className="au-message js-list-load">
                                                    <div className="au-message__noti">
                                                        <p>
                                                            You Have
                                                            <span>2</span>
                                                            new messages
                                                        </p>
                                                    </div>
                                                    <div className="au-message-list">
                                                        <div className="au-message__item unread">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-02.jpg"
                                                                                alt="John Smith"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            John
                                                                            Smith
                                                                        </h5>
                                                                        <p>
                                                                            Have
                                                                            sent
                                                                            a
                                                                            photo
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        12 Min
                                                                        ago
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item unread">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap online">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-03.jpg"
                                                                                alt="Nicholas Martinez"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            Nicholas
                                                                            Martinez
                                                                        </h5>
                                                                        <p>
                                                                            You
                                                                            are
                                                                            now
                                                                            connected
                                                                            on
                                                                            message
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        11:00 PM
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap online">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-04.jpg"
                                                                                alt="Michelle Sims"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            Michelle
                                                                            Sims
                                                                        </h5>
                                                                        <p>
                                                                            Lorem
                                                                            ipsum
                                                                            dolor
                                                                            sit
                                                                            amet
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        Yesterday
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-05.jpg"
                                                                                alt="Michelle Sims"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            Michelle
                                                                            Sims
                                                                        </h5>
                                                                        <p>
                                                                            Purus
                                                                            feugiat
                                                                            finibus
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        Sunday
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item js-load-item">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap online">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-04.jpg"
                                                                                alt="Michelle Sims"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            Michelle
                                                                            Sims
                                                                        </h5>
                                                                        <p>
                                                                            Lorem
                                                                            ipsum
                                                                            dolor
                                                                            sit
                                                                            amet
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        Yesterday
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item js-load-item">
                                                            <div className="au-message__item-inner">
                                                                <div className="au-message__item-text">
                                                                    <div className="avatar-wrap">
                                                                        <div className="avatar">
                                                                            <img
                                                                                src="images/icon/avatar-05.jpg"
                                                                                alt="Michelle Sims"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text">
                                                                        <h5 className="name">
                                                                            Michelle
                                                                            Sims
                                                                        </h5>
                                                                        <p>
                                                                            Purus
                                                                            feugiat
                                                                            finibus
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="au-message__item-time">
                                                                    <span>
                                                                        Sunday
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__footer">
                                                        <button className="au-btn au-btn-load js-load-btn">
                                                            load more
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="au-chat">
                                                    <div className="au-chat__title">
                                                        <div className="au-chat-info">
                                                            <div className="avatar-wrap online">
                                                                <div className="avatar avatar--small">
                                                                    <img
                                                                        src="images/icon/avatar-02.jpg"
                                                                        alt="John Smith"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <span className="nick">
                                                                <a href="#">
                                                                    John Smith
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="au-chat__content">
                                                        <div className="recei-mess-wrap">
                                                            <span className="mess-time">
                                                                12 Min ago
                                                            </span>
                                                            <div className="recei-mess__inner">
                                                                <div className="avatar avatar--tiny">
                                                                    <img
                                                                        src="images/icon/avatar-02.jpg"
                                                                        alt="John Smith"
                                                                    />
                                                                </div>
                                                                <div className="recei-mess-list">
                                                                    <div className="recei-mess">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipiscing
                                                                        elit non
                                                                        iaculis
                                                                    </div>
                                                                    <div className="recei-mess">
                                                                        Donec
                                                                        tempor,
                                                                        sapien
                                                                        ac
                                                                        viverra
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="send-mess-wrap">
                                                            <span className="mess-time">
                                                                30 Sec ago
                                                            </span>
                                                            <div className="send-mess__inner">
                                                                <div className="send-mess-list">
                                                                    <div className="send-mess">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipiscing
                                                                        elit non
                                                                        iaculis
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="au-chat-textfield">
                                                        <form className="au-form-icon">
                                                            <input
                                                                className="au-input au-input--full au-input--h65"
                                                                type="text"
                                                                placeholder="Type a message"
                                                            />
                                                            <button className="au-input-icon">
                                                                <i className="zmdi zmdi-camera" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
