import React from 'react'
import { Link } from 'react-router-dom'

function NavBarMenu() {
  return (
    <div style={{textAlign: 'center'}}>
        <Link to="/">หน้าหลัก</Link> |
        <Link to="/about"> เกี่ยวกับเรา</Link> |
        <Link to="/contact"> ติดต่อเรา</Link> |
        <Link to="/wow/iotshop"> ผลิตภัณฑ์ IOT</Link> |
        <Link to="/sau/service"> บริการ</Link> |
        <hr />
    </div>
  )
}

export default NavBarMenu