import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

export default function CreatePost() {
    return (
      <div className='add-post-container'>
        <Link className="add-post" to="/AdminCreatePost">Add A Post</Link>
      </div>
    );
}