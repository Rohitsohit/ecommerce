import React from 'react'
import { useParams } from 'react-router-dom'

export default function () {
    const productId = useParams();
  return (
    <div>{productId.id}</div>
  )
}
