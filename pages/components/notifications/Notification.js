import React, { Component } from 'react';

export default () => (

    <div className="notification">
        <div className="top-row">
            <div className="dot dist"></div>
            <span className="text-emphasis">Joe M</span>
            <span className="text-light">Sales Manager</span>
        </div>
        <div className="mid-row">
            <p className="text-15">Changed the Project Status to <a className="text-14 text-emphasis">Inputs
                In-Progress in Kleenex Everyday Tissue...</a></p>
            <p className="text-light text-14">9:30 AM</p>
        </div>

        <style jsx>{`
            .notification {
                padding: 12px 0;
                border-bottom: 1px solid #e6eaee;
            }
            .notification .top-row {
                display: flex;
                flex-direction: row;
                align-items: baseline;
                padding: 6px 0 2px 2px;
            }
            .notification .top-row * {
                margin: 0 4px;
            }
            .notification .top-row .dot {
                height: 9px;
                width: 9px;
                border-radius: 5px;
            }
            .notification .mid-row{
                padding: 0 16px 0 22px;
            }
       `}</style>

    </div>
)