// src/App.js
import React, { useState } from "react";

import CheckInOut from "./checkInOut";

function CheckInOutInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Venue Selection Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our premium venues and select the perfect location for your
            next event
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Event Venue Selection
            </h2>
            <p className="text-gray-600 mt-1">
              Choose from our curated list of premium venues
            </p>
          </div>

          <div className="p-6">
            <CheckInOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInOutInfo;
