import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from './firebase'

const Homepage = () => {
  return (
    <div><p>Don't have an Account <Link to="/FileManagement">Uploading</Link></p></div>

  )
}

export default Homepage