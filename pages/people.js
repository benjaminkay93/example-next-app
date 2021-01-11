import fetch from 'isomorphic-unfetch'
import { useState, useEffect } from 'react'

const People = ({ id }) => {
  const [data, setData] = useState({})
  useEffect(async () => {
    const res = await fetch(`${window.location.protocol}//${window.location.host}/api/people/${id}`)
    const newData = await res.json()

    if(JSON.stringify(newData) === JSON.stringify(data)) return;

    setData(newData);
  }, [data])
  return <p>{JSON.stringify(data)}</p>
}

People.getInitialProps = async (context) => {
  const { id } = context.query

  return { id }
}

export default People;
