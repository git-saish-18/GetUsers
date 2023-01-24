import React from "react";
import "../css/Cards.css";
export default function User() {
  let str = "";
  const searchuser = (event) => {
    event.preventDefault();
    let id = document.getElementById("searchId").value;
    if (id != "") {
      let sinleusers = document.getElementById("getalluser");
      let url = `https://reqres.in/api/users/${id}`;
      let action;
      fetch(url)
        .then((resp) => {
          action = resp.status;
          return resp.json();
        })
        .then((info) => {
          if (action == 200) {
            str = `
            <div id="cards" class="card" style="width: 18rem;">
            <div id="singlecard">
            <img src=${info.data.avatar} class="card-img-top" alt="...">
            <div class="card-title">
            <h5 class="names">${info.data.first_name}</h5>
            <h5 class="names">${info.data.last_name}</h5>
            </div>
            <div id="emailid">
            Email Id :- <a href="${info.data.email}"> ${info.data.email}</a>
            </div>
            </div>
            </div>
            `;
            sinleusers.innerHTML = str;

          } else {
            alert("User is not found ");
          }
        });
    } else {
      alert("Pleaser Enter the Id...");
    }
  };
  const fetchuser = () => {
    let users = document.getElementById("getalluser");
    console.log("fetch user succesfully");
    let url = "https://reqres.in/api/users";
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((info) => {
        info.data.forEach((user) => {
          str += `
          <div id="cards" class="card" style="width: 18rem;">
          <div id="singlecard">
          <img src=${user.avatar} class="card-img-top" alt="...">
          <div class="card-title">
          <h5 class="names">${user.first_name}</h5>
          <h5 class="names">${user.last_name}</h5>
          </div>
          <div id="emailid">
          Email Id :- <a href="${user.email}"> ${user.email}</a>
          </div>
          </div>
          </div>
            `;
          users.innerHTML = str;
        });
      });
  };
  return (
    <>
      <span id="searchsecton">
        <span>
          <input
            type="text"
            name=""
            id="searchId"
            placeholder="Enter the Id upto 1-12... "
          />
        </span>
        <span>
          <button onClick={searchuser} id="search">
            search
          </button>
        </span>
      </span>
      <span>
        <button onClick={fetchuser} id="invokeuser">
          {" "}
          Get User{" "}
        </button>
      </span>

      <div id="getalluser"></div>
    </>
  );
}
