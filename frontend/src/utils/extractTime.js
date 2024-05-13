import React from "react";

function extractTime(DateTime) {
  const date = new Date(DateTime);
  const hour = conversion(date.getHours());
  const minutes = conversion(date.getMinutes());

  return `${hour}:${minutes}`;
}

export default extractTime;

function conversion(number) {
  return number.toString().padStart(2, 0);
}
