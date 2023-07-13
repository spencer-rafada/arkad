import React from 'react'

export default function ProfileDetails({ data }) {
  console.log(data)
  return <div>{data.firstName}</div>
}
