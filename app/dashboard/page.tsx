import React from 'react'

const page = () => {
  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-8">
            <div className="row">
              {/* Sales Card */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Sales <span>| Today</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart" />
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Sales Card */}
              {/* Revenue Card */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Revenue <span>| This Month</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar" />
                      </div>
                      <div className="ps-3">
                        <h6>$3,264</h6>
                        <span className="text-success small pt-1 fw-bold">
                          8%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Revenue Card */}
              {/* Customers Card */}
              <div className="col-xxl-4 col-xl-12">
                <div className="card info-card customers-card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Customers <span>| This Year</span>
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people" />
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span className="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Customers Card */}
              {/* Reports */}
              <div className="col-12">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Reports <span>/Today</span>
                    </h5>
                    {/* Line Chart */}
                    {/* <div id="reportsChart" style={{ minHeight: 365 }}>
                  <div
                    id="apexchartspy8diking"
                    className="apexcharts-canvas apexchartspy8diking apexcharts-theme-light"
                    style={{ width: 554, height: 350 }}
                  >
                    <svg
                      id="SvgjsSvg1159"
                      width={554}
                      height={350}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg apexcharts-zoomable"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={554} height={350}>
                        <div
                          className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            inset: "auto 0px 1px",
                            position: "absolute",
                            maxHeight: 175
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname="Sales"
                            data:collapsed="false"
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={1}
                              data:collapsed="false"
                              style={{
                                background: "rgb(65, 84, 241) !important",
                                color: "rgb(65, 84, 241)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data:default-text="Sales"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Sales
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname="Revenue"
                            data:collapsed="false"
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={2}
                              data:collapsed="false"
                              style={{
                                background: "rgb(46, 202, 106) !important",
                                color: "rgb(46, 202, 106)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data:default-text="Revenue"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Revenue
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={3}
                            seriesname="Customers"
                            data:collapsed="false"
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={3}
                              data:collapsed="false"
                              style={{
                                background: "rgb(255, 119, 29) !important",
                                color: "rgb(255, 119, 29)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 12
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={3}
                              i={2}
                              data:default-text="Customers"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 12,
                                fontWeight: 400,
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              Customers
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                          }}
                        />
                      </foreignObject>
                      <rect
                        id="SvgjsRect1165"
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                      />
                      <g
                        id="SvgjsG1284"
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(15.359375, 0)"
                      >
                        <g id="SvgjsG1285" className="apexcharts-yaxis-texts-g">
                          <text
                            id="SvgjsText1287"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="31.5"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1288">100</tspan>
                            <title>100</title>
                          </text>
                          <text
                            id="SvgjsText1290"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="85.53999999999999"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1291">80</tspan>
                            <title>80</title>
                          </text>
                          <text
                            id="SvgjsText1293"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="139.57999999999998"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1294">60</tspan>
                            <title>60</title>
                          </text>
                          <text
                            id="SvgjsText1296"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="193.61999999999998"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1297">40</tspan>
                            <title>40</title>
                          </text>
                          <text
                            id="SvgjsText1299"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="247.65999999999997"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1300">20</tspan>
                            <title>20</title>
                          </text>
                          <text
                            id="SvgjsText1302"
                            fontFamily="Helvetica, Arial, sans-serif"
                            x={20}
                            y="301.7"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif"
                            }}
                          >
                            <tspan id="SvgjsTspan1303">0</tspan>
                            <title>0</title>
                          </text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG1161"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(45.359375, 30)"
                      >
                        <defs id="SvgjsDefs1160">
                          <clipPath id="gridRectMaskpy8diking">
                            <rect
                              id="SvgjsRect1170"
                              width="504.640625"
                              height="282.2"
                              x={-4}
                              y={-6}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskpy8diking" />
                          <clipPath id="nonForecastMaskpy8diking" />
                          <clipPath id="gridRectMarkerMaskpy8diking">
                            <rect
                              id="SvgjsRect1171"
                              width="546.640625"
                              height="318.2"
                              x={-24}
                              y={-24}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient1189"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1190"
                              stopOpacity="0.3"
                              stopColor="rgba(65,84,241,0.3)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1191"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset="0.9"
                            />
                            <stop
                              id="SvgjsStop1192"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset={1}
                            />
                          </linearGradient>
                          <linearGradient
                            id="SvgjsLinearGradient1211"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1212"
                              stopOpacity="0.3"
                              stopColor="rgba(46,202,106,0.3)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1213"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset="0.9"
                            />
                            <stop
                              id="SvgjsStop1214"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset={1}
                            />
                          </linearGradient>
                          <linearGradient
                            id="SvgjsLinearGradient1233"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1234"
                              stopOpacity="0.3"
                              stopColor="rgba(255,119,29,0.3)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1235"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset="0.9"
                            />
                            <stop
                              id="SvgjsStop1236"
                              stopOpacity="0.4"
                              stopColor="rgba(255,255,255,0.4)"
                              offset={1}
                            />
                          </linearGradient>
                        </defs>
                        <line
                          id="SvgjsLine1166"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2="270.2"
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          strokeLinecap="butt"
                          className="apexcharts-xcrosshairs"
                          x={0}
                          y={0}
                          width={1}
                          height="270.2"
                          fill="#b1b9c4"
                          filter="none"
                          fillOpacity="0.9"
                          strokeWidth={1}
                        />
                        <line
                          id="SvgjsLine1243"
                          x1={0}
                          y1="271.2"
                          x2={0}
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1244"
                          x1="76.7139423076923"
                          y1="271.2"
                          x2="76.7139423076923"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1245"
                          x1="153.4278846153846"
                          y1="271.2"
                          x2="153.4278846153846"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1246"
                          x1="230.1418269230769"
                          y1="271.2"
                          x2="230.1418269230769"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1247"
                          x1="306.8557692307692"
                          y1="271.2"
                          x2="306.8557692307692"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1248"
                          x1="383.56971153846155"
                          y1="271.2"
                          x2="383.56971153846155"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1249"
                          x1="460.28365384615387"
                          y1="271.2"
                          x2="460.28365384615387"
                          y2="277.2"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <g id="SvgjsG1239" className="apexcharts-grid">
                          <g
                            id="SvgjsG1240"
                            className="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine1251"
                              x1={0}
                              y1="54.04"
                              x2="498.640625"
                              y2="54.04"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1252"
                              x1={0}
                              y1="108.08"
                              x2="498.640625"
                              y2="108.08"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1253"
                              x1={0}
                              y1="162.12"
                              x2="498.640625"
                              y2="162.12"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1254"
                              x1={0}
                              y1="216.16"
                              x2="498.640625"
                              y2="216.16"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG1241"
                            className="apexcharts-gridlines-vertical"
                          />
                          <line
                            id="SvgjsLine1257"
                            x1={0}
                            y1="270.2"
                            x2="498.640625"
                            y2="270.2"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            id="SvgjsLine1256"
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="270.2"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g id="SvgjsG1242" className="apexcharts-grid-borders">
                          <line
                            id="SvgjsLine1250"
                            x1={0}
                            y1={0}
                            x2="498.640625"
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1255"
                            x1={0}
                            y1="270.2"
                            x2="498.640625"
                            y2="270.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1283"
                            x1={0}
                            y1="271.2"
                            x2="498.640625"
                            y2="271.2"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g
                          id="SvgjsG1172"
                          className="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG1173"
                            className="apexcharts-series"
                            zindex={0}
                            seriesname="Sales"
                            data:longestseries="true"
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              id="SvgjsPath1193"
                              d="M 0 270.2 L 0 186.438C18.3585803020756, 182.55827103673687, 83.45971463718251, 158.77979390496614, 115.07091346153845, 162.12S167.13845485870362, 199.31849278336222, 191.78485576923077, 194.54399999999998S244.39283811905705, 138.3413802113095, 268.49879807692304, 132.398S325.5129111305866, 167.4708709422179, 345.21274038461536, 156.716S397.8207227344417, 54.579380211309505, 421.9266826923077, 48.635999999999996S491.68670893299594, 112.51984192021138, 498.640625, 118.88799999999998 L 498.640625 270.2 L 0 270.2M 0 186.438z"
                              fill="url(#SvgjsLinearGradient1189)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 270.2 L 0 186.438C18.3585803020756, 182.55827103673687, 83.45971463718251, 158.77979390496614, 115.07091346153845, 162.12S167.13845485870362, 199.31849278336222, 191.78485576923077, 194.54399999999998S244.39283811905705, 138.3413802113095, 268.49879807692304, 132.398S325.5129111305866, 167.4708709422179, 345.21274038461536, 156.716S397.8207227344417, 54.579380211309505, 421.9266826923077, 48.635999999999996S491.68670893299594, 112.51984192021138, 498.640625, 118.88799999999998 L 498.640625 270.2 L 0 270.2M 0 186.438z"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                            />
                            <path
                              id="SvgjsPath1194"
                              d="M 0 186.438C18.3585803020756, 182.55827103673687, 83.45971463718251, 158.77979390496614, 115.07091346153845, 162.12S167.13845485870362, 199.31849278336222, 191.78485576923077, 194.54399999999998S244.39283811905705, 138.3413802113095, 268.49879807692304, 132.398S325.5129111305866, 167.4708709422179, 345.21274038461536, 156.716S397.8207227344417, 54.579380211309505, 421.9266826923077, 48.635999999999996S491.68670893299594, 112.51984192021138, 498.640625, 118.88799999999998"
                              fill="none"
                              fillOpacity={1}
                              stroke="#4154f1"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 186.438C18.3585803020756, 182.55827103673687, 83.45971463718251, 158.77979390496614, 115.07091346153845, 162.12S167.13845485870362, 199.31849278336222, 191.78485576923077, 194.54399999999998S244.39283811905705, 138.3413802113095, 268.49879807692304, 132.398S325.5129111305866, 167.4708709422179, 345.21274038461536, 156.716S397.8207227344417, 54.579380211309505, 421.9266826923077, 48.635999999999996S491.68670893299594, 112.51984192021138, 498.640625, 118.88799999999998"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                              fillRule="evenodd"
                            />
                            <g
                              id="SvgjsG1174"
                              className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realindex={0}
                            >
                              <g
                                id="SvgjsG1176"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1177"
                                  r={4}
                                  cx={0}
                                  cy="186.438"
                                  className="apexcharts-marker no-pointer-events wmpz5iyio"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={0}
                                  default-marker-size={4}
                                />
                                <circle
                                  id="SvgjsCircle1178"
                                  r={4}
                                  cx="115.07091346153845"
                                  cy="162.12"
                                  className="apexcharts-marker no-pointer-events w2sgvuplak"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1179"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1180"
                                  r={4}
                                  cx="191.78485576923077"
                                  cy="194.54399999999998"
                                  className="apexcharts-marker no-pointer-events wr5fwnryf"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1181"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1182"
                                  r={4}
                                  cx="268.49879807692304"
                                  cy="132.398"
                                  className="apexcharts-marker no-pointer-events w5q1qdu5n"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1183"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1184"
                                  r={4}
                                  cx="345.21274038461536"
                                  cy="156.716"
                                  className="apexcharts-marker no-pointer-events wcg45e7ia"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1185"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1186"
                                  r={4}
                                  cx="421.9266826923077"
                                  cy="48.635999999999996"
                                  className="apexcharts-marker no-pointer-events wnuzjeex7"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1187"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1188"
                                  r={4}
                                  cx="498.640625"
                                  cy="118.88799999999998"
                                  className="apexcharts-marker no-pointer-events wmpv0ckmk"
                                  stroke="#ffffff"
                                  fill="#4154f1"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1195"
                            className="apexcharts-series"
                            zindex={1}
                            seriesname="Revenue"
                            data:longestseries="true"
                            rel={2}
                            data:realindex={1}
                          >
                            <path
                              id="SvgjsPath1215"
                              d="M 0 270.2 L 0 240.47799999999998C15.427303247726003, 232.8707253677789, 89.00102430355291, 196.1320693220753, 115.07091346153845, 183.736S166.21354166666669, 148.60999999999999, 191.78485576923077, 148.60999999999999S243.1899927816132, 181.15844606436607, 268.49879807692304, 183.736S320.48915766315133, 182.9100953382612, 345.21274038461536, 178.332S396.73815886090154, 132.80114441974808, 421.9266826923077, 129.696S487.5237184576451, 155.11087294705044, 498.640625, 159.418 L 498.640625 270.2 L 0 270.2M 0 240.47799999999998z"
                              fill="url(#SvgjsLinearGradient1211)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={1}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 270.2 L 0 240.47799999999998C15.427303247726003, 232.8707253677789, 89.00102430355291, 196.1320693220753, 115.07091346153845, 183.736S166.21354166666669, 148.60999999999999, 191.78485576923077, 148.60999999999999S243.1899927816132, 181.15844606436607, 268.49879807692304, 183.736S320.48915766315133, 182.9100953382612, 345.21274038461536, 178.332S396.73815886090154, 132.80114441974808, 421.9266826923077, 129.696S487.5237184576451, 155.11087294705044, 498.640625, 159.418 L 498.640625 270.2 L 0 270.2M 0 240.47799999999998z"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                            />
                            <path
                              id="SvgjsPath1216"
                              d="M 0 240.47799999999998C15.427303247726003, 232.8707253677789, 89.00102430355291, 196.1320693220753, 115.07091346153845, 183.736S166.21354166666669, 148.60999999999999, 191.78485576923077, 148.60999999999999S243.1899927816132, 181.15844606436607, 268.49879807692304, 183.736S320.48915766315133, 182.9100953382612, 345.21274038461536, 178.332S396.73815886090154, 132.80114441974808, 421.9266826923077, 129.696S487.5237184576451, 155.11087294705044, 498.640625, 159.418"
                              fill="none"
                              fillOpacity={1}
                              stroke="#2eca6a"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={1}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 240.47799999999998C15.427303247726003, 232.8707253677789, 89.00102430355291, 196.1320693220753, 115.07091346153845, 183.736S166.21354166666669, 148.60999999999999, 191.78485576923077, 148.60999999999999S243.1899927816132, 181.15844606436607, 268.49879807692304, 183.736S320.48915766315133, 182.9100953382612, 345.21274038461536, 178.332S396.73815886090154, 132.80114441974808, 421.9266826923077, 129.696S487.5237184576451, 155.11087294705044, 498.640625, 159.418"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                              fillRule="evenodd"
                            />
                            <g
                              id="SvgjsG1196"
                              className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realindex={1}
                            >
                              <g
                                id="SvgjsG1198"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1199"
                                  r={4}
                                  cx={0}
                                  cy="240.47799999999998"
                                  className="apexcharts-marker no-pointer-events wm874b1ezi"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={1}
                                  default-marker-size={4}
                                />
                                <circle
                                  id="SvgjsCircle1200"
                                  r={4}
                                  cx="115.07091346153845"
                                  cy="183.736"
                                  className="apexcharts-marker no-pointer-events wrq2zodjd"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1201"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1202"
                                  r={4}
                                  cx="191.78485576923077"
                                  cy="148.60999999999999"
                                  className="apexcharts-marker no-pointer-events wgyhz7a8oj"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1203"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1204"
                                  r={4}
                                  cx="268.49879807692304"
                                  cy="183.736"
                                  className="apexcharts-marker no-pointer-events wsg1uzwec"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1205"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1206"
                                  r={4}
                                  cx="345.21274038461536"
                                  cy="178.332"
                                  className="apexcharts-marker no-pointer-events wnld40xsh"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1207"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1208"
                                  r={4}
                                  cx="421.9266826923077"
                                  cy="129.696"
                                  className="apexcharts-marker no-pointer-events wbr47v8hri"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1209"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1210"
                                  r={4}
                                  cx="498.640625"
                                  cy="159.418"
                                  className="apexcharts-marker no-pointer-events w1p7d1mla"
                                  stroke="#ffffff"
                                  fill="#2eca6a"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1217"
                            className="apexcharts-series"
                            zindex={2}
                            seriesname="Customers"
                            data:longestseries="true"
                            rel={3}
                            data:realindex={2}
                          >
                            <path
                              id="SvgjsPath1237"
                              d="M 0 270.2 L 0 229.67C19.060407849908415, 231.1702031978667, 85.28700385857918, 248.53627917965792, 115.07091346153845, 240.47799999999998S166.59633193782463, 186.84114441974808, 191.78485576923077, 183.736S246.5315548684779, 212.66616307906298, 268.49879807692304, 221.564S319.9237813251306, 248.55416487602707, 345.21274038461536, 245.88199999999998S396.3870523481647, 206.25155070895832, 421.9266826923077, 205.35199999999998S488.07096765739686, 235.638334971091, 498.640625, 240.47799999999998 L 498.640625 270.2 L 0 270.2M 0 229.67z"
                              fill="url(#SvgjsLinearGradient1233)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={2}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 270.2 L 0 229.67C19.060407849908415, 231.1702031978667, 85.28700385857918, 248.53627917965792, 115.07091346153845, 240.47799999999998S166.59633193782463, 186.84114441974808, 191.78485576923077, 183.736S246.5315548684779, 212.66616307906298, 268.49879807692304, 221.564S319.9237813251306, 248.55416487602707, 345.21274038461536, 245.88199999999998S396.3870523481647, 206.25155070895832, 421.9266826923077, 205.35199999999998S488.07096765739686, 235.638334971091, 498.640625, 240.47799999999998 L 498.640625 270.2 L 0 270.2M 0 229.67z"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                            />
                            <path
                              id="SvgjsPath1238"
                              d="M 0 229.67C19.060407849908415, 231.1702031978667, 85.28700385857918, 248.53627917965792, 115.07091346153845, 240.47799999999998S166.59633193782463, 186.84114441974808, 191.78485576923077, 183.736S246.5315548684779, 212.66616307906298, 268.49879807692304, 221.564S319.9237813251306, 248.55416487602707, 345.21274038461536, 245.88199999999998S396.3870523481647, 206.25155070895832, 421.9266826923077, 205.35199999999998S488.07096765739686, 235.638334971091, 498.640625, 240.47799999999998"
                              fill="none"
                              fillOpacity={1}
                              stroke="#ff771d"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={2}
                              clipPath="url(#gridRectMaskpy8diking)"
                              pathto="M 0 229.67C19.060407849908415, 231.1702031978667, 85.28700385857918, 248.53627917965792, 115.07091346153845, 240.47799999999998S166.59633193782463, 186.84114441974808, 191.78485576923077, 183.736S246.5315548684779, 212.66616307906298, 268.49879807692304, 221.564S319.9237813251306, 248.55416487602707, 345.21274038461536, 245.88199999999998S396.3870523481647, 206.25155070895832, 421.9266826923077, 205.35199999999998S488.07096765739686, 235.638334971091, 498.640625, 240.47799999999998"
                              pathfrom="M -1 270.2 L -1 270.2 L 115.07091346153845 270.2 L 191.78485576923077 270.2 L 268.49879807692304 270.2 L 345.21274038461536 270.2 L 421.9266826923077 270.2 L 498.640625 270.2"
                              fillRule="evenodd"
                            />
                            <g
                              id="SvgjsG1218"
                              className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realindex={2}
                            >
                              <g
                                id="SvgjsG1220"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1221"
                                  r={4}
                                  cx={0}
                                  cy="229.67"
                                  className="apexcharts-marker no-pointer-events whw1hkrvm"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={2}
                                  default-marker-size={4}
                                />
                                <circle
                                  id="SvgjsCircle1222"
                                  r={4}
                                  cx="115.07091346153845"
                                  cy="240.47799999999998"
                                  className="apexcharts-marker no-pointer-events wew1pqjdzi"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1223"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1224"
                                  r={4}
                                  cx="191.78485576923077"
                                  cy="183.736"
                                  className="apexcharts-marker no-pointer-events wnv7p7014"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1225"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1226"
                                  r={4}
                                  cx="268.49879807692304"
                                  cy="221.564"
                                  className="apexcharts-marker no-pointer-events w3xf1mh99"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1227"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1228"
                                  r={4}
                                  cx="345.21274038461536"
                                  cy="245.88199999999998"
                                  className="apexcharts-marker no-pointer-events wjei9x9kr"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1229"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1230"
                                  r={4}
                                  cx="421.9266826923077"
                                  cy="205.35199999999998"
                                  className="apexcharts-marker no-pointer-events wutuftxwm"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1231"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskpy8diking)"
                              >
                                <circle
                                  id="SvgjsCircle1232"
                                  r={4}
                                  cx="498.640625"
                                  cy="240.47799999999998"
                                  className="apexcharts-marker no-pointer-events wee9wcpot"
                                  stroke="#ffffff"
                                  fill="#ff771d"
                                  fillOpacity={1}
                                  strokeWidth={2}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={2}
                                  default-marker-size={4}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1175"
                            className="apexcharts-datalabels"
                            data:realindex={0}
                          />
                          <g
                            id="SvgjsG1197"
                            className="apexcharts-datalabels"
                            data:realindex={1}
                          />
                          <g
                            id="SvgjsG1219"
                            className="apexcharts-datalabels"
                            data:realindex={2}
                          />
                        </g>
                        <line
                          id="SvgjsLine1258"
                          x1={0}
                          y1={0}
                          x2="498.640625"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1259"
                          x1={0}
                          y1={0}
                          x2="498.640625"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g
                          id="SvgjsG1260"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG1261"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText1263"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={0}
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1264">00:00</tspan>
                              <title>00:00</title>
                            </text>
                            <text
                              id="SvgjsText1266"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="76.7139423076923"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1267">02:00</tspan>
                              <title>02:00</title>
                            </text>
                            <text
                              id="SvgjsText1269"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="153.4278846153846"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1270">03:00</tspan>
                              <title>03:00</title>
                            </text>
                            <text
                              id="SvgjsText1272"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="230.1418269230769"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1273">04:00</tspan>
                              <title>04:00</title>
                            </text>
                            <text
                              id="SvgjsText1275"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="306.8557692307692"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1276">05:00</tspan>
                              <title>05:00</title>
                            </text>
                            <text
                              id="SvgjsText1278"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="383.56971153846155"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1279">06:00</tspan>
                              <title>06:00</title>
                            </text>
                            <text
                              id="SvgjsText1281"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x="460.28365384615387"
                              y="299.2"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif"
                              }}
                            >
                              <tspan id="SvgjsTspan1282">07:00</tspan>
                              <title>07:00</title>
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1304"
                          className="apexcharts-yaxis-annotations"
                        />
                        <g
                          id="SvgjsG1305"
                          className="apexcharts-xaxis-annotations"
                        />
                        <g
                          id="SvgjsG1306"
                          className="apexcharts-point-annotations"
                        />
                        <rect
                          id="SvgjsRect1307"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-zoom-rect"
                        />
                        <rect
                          id="SvgjsRect1308"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-selection-rect"
                        />
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      />
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(65, 84, 241)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(46, 202, 106)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 3 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(255, 119, 29)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: 12
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                      <div
                        className="apexcharts-xaxistooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      />
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div> */}
                    {/* End Line Chart */}
                  </div>
                </div>
              </div>
              {/* End Reports */}
              {/* Recent Sales */}
              <div className="col-12">
                <div className="card recent-sales overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Sales <span>| Today</span>
                    </h5>
                    <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                      <div className="datatable-top">
                        <div className="datatable-dropdown">
                          <label>
                            <select className="datatable-selector">
                              <option value={5}>5</option>
                              <option value={10}>
                                10
                              </option>
                              <option value={15}>15</option>
                              <option value={-1}>All</option>
                            </select>{" "}
                            entries per page
                          </label>
                        </div>
                        <div className="datatable-search">
                          <input
                            className="datatable-input"
                            placeholder="Search..."
                            type="search"
                            title="Search within table"
                          />
                        </div>
                      </div>
                      <div className="datatable-container">
                        <table className="table table-borderless datatable datatable-table">
                          <thead>
                            <tr>
                              <th
                                data-sortable="true"
                                style={{ width: "11.030741410488245%" }}
                              >
                                <button className="datatable-sorter">#</button>
                              </th>
                              <th
                                data-sortable="true"
                                style={{ width: "23.508137432188065%" }}
                              >
                                <button className="datatable-sorter">
                                  Customer
                                </button>
                              </th>
                              <th
                                data-sortable="true"
                                style={{ width: "38.155515370705245%" }}
                              >
                                <button className="datatable-sorter">
                                  Product
                                </button>
                              </th>
                              <th
                                data-sortable="true"
                                style={{ width: "12.115732368896925%" }}
                              >
                                <button className="datatable-sorter">Price</button>
                              </th>
                              <th
                                data-sortable="true"
                                className="red"
                                style={{ width: "15.18987341772152%" }}
                              >
                                <button className="datatable-sorter">Status</button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr data-index={0}>
                              <td>
                                <a href="#">#2457</a>
                              </td>
                              <td>Brandon Jacob</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At praesentium minu
                                </a>
                              </td>
                              <td>$64</td>
                              <td className="green">
                                <span className="badge bg-success">Approved</span>
                              </td>
                            </tr>
                            <tr data-index={1}>
                              <td>
                                <a href="#">#2147</a>
                              </td>
                              <td>Bridie Kessler</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Blanditiis dolor omnis similique
                                </a>
                              </td>
                              <td>$47</td>
                              <td className="green">
                                <span className="badge bg-warning">Pending</span>
                              </td>
                            </tr>
                            <tr data-index={2}>
                              <td>
                                <a href="#">#2049</a>
                              </td>
                              <td>Ashleigh Langosh</td>
                              <td>
                                <a href="#" className="text-primary">
                                  At recusandae consectetur
                                </a>
                              </td>
                              <td>$147</td>
                              <td className="green">
                                <span className="badge bg-success">Approved</span>
                              </td>
                            </tr>
                            <tr data-index={3}>
                              <td>
                                <a href="#">#2644</a>
                              </td>
                              <td>Angus Grady</td>
                              <td>
                                <a href="#" className="text-primar">
                                  Ut voluptatem id earum et
                                </a>
                              </td>
                              <td>$67</td>
                              <td className="green">
                                <span className="badge bg-danger">Rejected</span>
                              </td>
                            </tr>
                            <tr data-index={4}>
                              <td>
                                <a href="#">#2644</a>
                              </td>
                              <td>Raheem Lehner</td>
                              <td>
                                <a href="#" className="text-primary">
                                  Sunt similique distinctio
                                </a>
                              </td>
                              <td>$165</td>
                              <td className="green">
                                <span className="badge bg-success">Approved</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="datatable-bottom">
                        <div className="datatable-info">
                          Showing 1 to 5 of 5 entries
                        </div>
                        <nav className="datatable-pagination">
                          <ul className="datatable-pagination-list" />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Recent Sales */}
              {/* Top Selling */}
              <div className="col-12">
                <div className="card top-selling overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pb-0">
                    <h5 className="card-title">
                      Top Selling <span>| Today</span>
                    </h5>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Preview</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Sold</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-1.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Ut inventore ipsa voluptas nulla
                            </a>
                          </td>
                          <td>$64</td>
                          <td className="fw-bold">124</td>
                          <td>$5,828</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-2.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Exercitationem similique doloremque
                            </a>
                          </td>
                          <td>$46</td>
                          <td className="fw-bold">98</td>
                          <td>$4,508</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-3.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Doloribus nisi exercitationem
                            </a>
                          </td>
                          <td>$59</td>
                          <td className="fw-bold">74</td>
                          <td>$4,366</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-4.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Officiis quaerat sint rerum error
                            </a>
                          </td>
                          <td>$32</td>
                          <td className="fw-bold">63</td>
                          <td>$2,016</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">
                              <img src="assets/img/product-5.jpg" alt="" />
                            </a>
                          </th>
                          <td>
                            <a href="#" className="text-primary fw-bold">
                              Sit unde debitis delectus repellendus
                            </a>
                          </td>
                          <td>$79</td>
                          <td className="fw-bold">41</td>
                          <td>$3,239</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End Top Selling */}
            </div>
          </div>
          {/* End Left side columns */}
          {/* Right side columns */}
          <div className="col-lg-4">
            {/* Recent Activity */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Recent Activity <span>| Today</span>
                </h5>
                <div className="activity">
                  <div className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                    <div className="activity-content">
                      Quia quae rerum{" "}
                      <a href="#" className="fw-bold text-dark">
                        explicabo officiis
                      </a>{" "}
                      beatae
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">56 min</div>
                    <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                    <div className="activity-content">
                      Voluptatem blanditiis blanditiis eveniet
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">2 hrs</div>
                    <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                    <div className="activity-content">
                      Voluptates corrupti molestias voluptatem
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">1 day</div>
                    <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                    <div className="activity-content">
                      Tempore autem saepe{" "}
                      <a href="#" className="fw-bold text-dark">
                        occaecati voluptatem
                      </a>{" "}
                      tempore
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">2 days</div>
                    <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                    <div className="activity-content">
                      Est sit eum reiciendis exercitationem
                    </div>
                  </div>
                  {/* End activity item*/}
                  <div className="activity-item d-flex">
                    <div className="activite-label">4 weeks</div>
                    <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                    <div className="activity-content">
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </div>
                  </div>
                  {/* End activity item*/}
                </div>
              </div>
            </div>
            {/* End Recent Activity */}
            {/* Budget Report */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="card-body pb-0">
            <h5 className="card-title">
              Budget Report <span>| This Month</span>
            </h5>
            <div
              id="budgetChart"
              style={{
                minHeight: 400,
                userSelect: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
              }}
              className="echart"
              _echarts_instance_="ec_1703859358828"
            >
              <div
                style={{
                  position: "relative",
                  width: 245,
                  height: 400,
                  padding: 0,
                  margin: 0,
                  borderWidth: 0,
                  cursor: "default"
                }}
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width={245}
                  height={400}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 245,
                    height: 400,
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    padding: 0,
                    margin: 0,
                    borderWidth: 0
                  }}
                />
              </div>
            </div>
          </div> */}
            </div>
            {/* End Budget Report */}
            {/* Website Traffic */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body pb-0">
                <h5 className="card-title">
                  Website Traffic <span>| Today</span>
                </h5>
                {/* <div
              id="trafficChart"
              style={{
                minHeight: 400,
                userSelect: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                position: "relative"
              }}
              className="echart"
              _echarts_instance_="ec_1703859358829"
            >
              <div
                style={{
                  position: "relative",
                  width: 245,
                  height: 400,
                  padding: 0,
                  margin: 0,
                  borderWidth: 0
                }}
              >
                <canvas
                  data-zr-dom-id="zr_0"
                  width={245}
                  height={400}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 245,
                    height: 400,
                    userSelect: "none",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    padding: 0,
                    margin: 0,
                    borderWidth: 0
                  }}
                />
              </div>
              <div className="" />
            </div> */}
              </div>
            </div>
            {/* End Website Traffic */}
            {/* News & Updates Traffic */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body pb-0">
                <h5 className="card-title">
                  News &amp; Updates <span>| Today</span>
                </h5>
                <div className="news">
                  <div className="post-item clearfix">
                    <img src="assets/img/news-1.jpg" alt="" />
                    <h4>
                      <a href="#">Nihil blanditiis at in nihil autem</a>
                    </h4>
                    <p>
                      Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                      sed ut harum...
                    </p>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/news-2.jpg" alt="" />
                    <h4>
                      <a href="#">Quidem autem et impedit</a>
                    </h4>
                    <p>
                      Illo nemo neque maiores vitae officiis cum eum turos elan
                      dries werona nande...
                    </p>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/news-3.jpg" alt="" />
                    <h4>
                      <a href="#">Id quia et et ut maxime similique occaecati ut</a>
                    </h4>
                    <p>
                      Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                      ipsam et totam...
                    </p>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/news-4.jpg" alt="" />
                    <h4>
                      <a href="#">Laborum corporis quo dara net para</a>
                    </h4>
                    <p>
                      Qui enim quia optio. Eligendi aut asperiores enim
                      repellendusvel rerum cuder...
                    </p>
                  </div>
                  <div className="post-item clearfix">
                    <img src="assets/img/news-5.jpg" alt="" />
                    <h4>
                      <a href="#">Et dolores corrupti quae illo quod dolor</a>
                    </h4>
                    <p>
                      Odit ut eveniet modi reiciendis. Atque cupiditate libero
                      beatae dignissimos eius...
                    </p>
                  </div>
                </div>
                {/* End sidebar recent posts*/}
              </div>
            </div>
            {/* End News & Updates */}
          </div>
          {/* End Right side columns */}
        </div>
      </section>
    </>
  )
}

export default page