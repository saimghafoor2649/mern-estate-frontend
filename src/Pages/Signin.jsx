import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signin</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg bg-white"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg bg-white"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg bg-white"
          type="password"
          placeholder="password"
          id="password"
        />
        <Link to="">
          <button className="bg-slate-700 text-white p-3 rounded-lg text-uppercase hover:opacity-90 disabled:opacity-80">
            Signin
          </button>
        </Link>
      </form>
    </div>
  );
}
